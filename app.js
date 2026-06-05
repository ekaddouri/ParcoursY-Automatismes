// app.js — Moteur du livret d'automatismes (v5 SPA - Profils + Firebase)

const appState = {
  view: 'home', // 'home', 'theme', 'exercise'
  themeId: null,
  exoNum: null,
  loggedIn: false
};

const StorageManager = {
  getProgress: () => JSON.parse(localStorage.getItem('livret-progress') || '{}'),
  setProgress: (data) => localStorage.setItem('livret-progress', JSON.stringify(data)),
  clearProgress: () => localStorage.removeItem('livret-progress')
};

let _pendingPinProfileId = null;

document.addEventListener('DOMContentLoaded', async () => {
  const prefs = JSON.parse(localStorage.getItem('livret-access') || '{}');
  applyAccessPrefs(prefs);
  setupTopBtn();

  // Peupler les selects de classes
  const filterSelect = document.getElementById('filterClasse');
  const newClasseSelect = document.getElementById('newClasse');
  CLASSES_LYCEE.forEach(c => {
    if (filterSelect) filterSelect.innerHTML += `<option value="${c}">${c}</option>`;
    if (newClasseSelect) newClasseSelect.innerHTML += `<option value="${c}">${c}</option>`;
  });

  // Filtres dynamiques
  document.getElementById('searchProfile')?.addEventListener('input', renderProfilesList);
  document.getElementById('filterClasse')?.addEventListener('change', renderProfilesList);

  // Navigation clavier
  document.addEventListener('keydown', (e) => {
    if (appState.view === 'exercise') {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') document.getElementById('btnNextExo')?.click();
      else if (e.key === 'ArrowLeft') document.getElementById('btnPrevExo')?.click();
    }
  });

  // Charger profils et compteur
  await ProfileManager.loadProfiles();
  ProfileManager.incrementVisits();
  ProfileManager.listenVisits();
  renderProfilesList();
});

// === NAVIGATION EN COUCHES (HASH ROUTER) ===
window.addEventListener('hashchange', handleHashChange);

function handleHashChange() {
  const hash = window.location.hash.replace('#/', '');
  if (!hash) {
    appState.view = 'home';
    appState.themeId = null;
    appState.exoNum = null;
  } else {
    const parts = hash.split('/');
    if (parts[0] === 'theme' && parts[1]) {
      const themeId = parts[1]; // Les thèmes ont des IDs de type "t1", "t2", etc.
      if (parts[2] === 'exercice' && parts[3]) {
        appState.view = 'exercise';
        appState.themeId = themeId;
        appState.exoNum = parseInt(parts[3], 10);
      } else {
        appState.view = 'theme';
        appState.themeId = themeId;
        appState.exoNum = null;
      }
    } else {
      appState.view = 'home';
    }
  }
  
  if (appState.loggedIn) {
    window.scrollTo({top: 0, behavior: 'smooth'});
    renderView();
  }
}

function navigate(view, themeId = null, exoNum = null) {
  let newHash = '#/';
  if (view === 'theme') {
    newHash = `#/theme/${themeId}`;
  } else if (view === 'exercise') {
    newHash = `#/theme/${themeId}/exercice/${exoNum}`;
  }
  
  if (window.location.hash === newHash) {
    handleHashChange();
  } else {
    window.location.hash = newHash;
  }
}

function renderView() {
  const hero = document.getElementById('hero');
  const main = document.getElementById('mainContent');
  const navInner = document.getElementById('navInner');
  const progWrap = document.getElementById('progressGlobalWrap');
  
  main.classList.remove('fade-in');
  void main.offsetWidth;
  main.classList.add('fade-in');
  
  if (appState.view === 'home') {
    hero.style.display = 'block';
    progWrap.style.display = 'block';
    main.innerHTML = renderHomeHTML();
    navInner.innerHTML = `<span class="nav-link active">🏠 Accueil</span>`;
    updateGlobalProgress();
  } 
  else if (appState.view === 'theme') {
    hero.style.display = 'none';
    progWrap.style.display = 'none';
    const theme = THEMES.find(t => t.id === appState.themeId);
    main.innerHTML = renderThemeHTML(theme);
    navInner.innerHTML = `
      <button class="nav-link" onclick="navigate('home')">🏠 Accueil</button>
      <span style="color:var(--text-muted); margin:0 5px;">/</span>
      <span class="nav-link active" style="background:${theme.bg}; color:${theme.color}; border:1px solid ${theme.border};">${theme.icon} ${theme.title}</span>
    `;
  } 
  else if (appState.view === 'exercise') {
    hero.style.display = 'none';
    progWrap.style.display = 'none';
    const theme = THEMES.find(t => t.id === appState.themeId);
    const exo = theme.exercises.find(e => e.n === appState.exoNum);
    main.innerHTML = renderExerciseHTML(theme, exo);
    navInner.innerHTML = `
      <button class="nav-link" onclick="navigate('home')">🏠 Accueil</button>
      <span style="color:var(--text-muted); margin:0 5px;">/</span>
      <button class="nav-link" onclick="navigate('theme', '${theme.id}')" style="color:${theme.color}">${theme.icon} ${theme.title.split(' ')[0]}</button>
      <span style="color:var(--text-muted); margin:0 5px;">/</span>
      <span class="nav-link active" style="background:${theme.bg}; color:${theme.color}; border:1px solid ${theme.border};">Ex ${exo.n}</span>
    `;
  }
  
  renderMath();
}

// === RENDERING HTML ===
function renderHomeHTML() {
  const saved = StorageManager.getProgress();
  let html = `<div class="themes-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-top:20px;">`;
  
  THEMES.forEach(t => {
    const done = t.exercises.filter(e => isProgressEntryDone(saved[`${t.id}-${e.n}`])).length;
    const pct = Math.round((done / t.exercises.length) * 100);
    html += `
      <div class="theme-card" onclick="navigate('theme', '${t.id}')" style="background:var(--bg-card); border:1px solid ${t.border}; border-radius:var(--radius); padding:20px; cursor:pointer; transition:transform 0.2s; position:relative; overflow:hidden;">
        <div style="position:absolute; top:-20px; right:-20px; font-size:6rem; opacity:0.04;">${t.icon}</div>
        <div style="font-size:2rem; margin-bottom:10px; width:50px; height:50px; background:${t.bg}; border:1px solid ${t.border}; border-radius:var(--radius-sm); display:flex; align-items:center; justify-content:center;">${t.icon}</div>
        <h3 style="color:${t.color}; margin-bottom:5px; font-size:1.2rem;">${t.title}</h3>
        <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:20px; min-height:45px; line-height:1.5;">${t.subtitle}</p>
        <div class="progress-bar-wrap" style="height:6px; background:var(--border); border-radius:3px; margin-bottom:5px;">
          <div class="progress-bar-fill" style="width:${pct}%; background:${t.color}; height:100%; border-radius:3px; transition:width 0.5s;"></div>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); text-align:right; font-weight:600;">${done}/${t.exercises.length} maîtrisés</div>
      </div>
    `;
  });
  html += `</div>`;
  return html;
}

function renderThemeHTML(theme) {
  const saved = StorageManager.getProgress();
  const doneCount = theme.exercises.filter(e => isProgressEntryDone(saved[`${theme.id}-${e.n}`])).length;
  const pct = Math.round(doneCount / theme.exercises.length * 100);

  const btsHTML = theme.bts ? `
    <div class="bts-box" style="border-left:4px solid ${theme.color};">
      <h3 style="color:${theme.color}; display:flex; align-items:center; gap:8px;">🎯 Parcours BTS — ${theme.title}</h3>
      <div class="bts-grid">
        <div class="bts-item"><div class="bts-label" style="color:${theme.color}">Savoir-faire</div><div class="bts-content">${theme.bts.savoir}</div></div>
        <div class="bts-item"><div class="bts-label" style="color:${theme.color}">Pourquoi en BTS</div><div class="bts-content">${theme.bts.pourquoi}</div></div>
        <div class="bts-item"><div class="bts-label" style="color:${theme.color}">Erreurs fréquentes</div><div class="bts-content">${theme.bts.erreurs}</div></div>
      </div>
    </div>` : '';

  let exListHTML = `<div class="exercise-list" style="display:flex; flex-direction:column; gap:12px;">`;
  theme.exercises.forEach(exo => {
    const isDone = saved[`${theme.id}-${exo.n}`];
    const diff = exo.difficulty || 1;
    const stars = '★'.repeat(diff) + '☆'.repeat(3 - diff);
    const exoTypeClass = exo.type || 'automatisme';
    const exoTypeLabel = { echauffement:'Échauffement', automatisme:'Automatisme', applique:'Appliqué Bâtiment', 'prepa-bts':'Prépa BTS', synthese:'Synthèse' }[exoTypeClass];
    
    exListHTML += `
      <div class="exercise-card" onclick="navigate('exercise', '${theme.id}', ${exo.n})" style="border-left:4px solid ${isDone ? 'var(--success)' : 'transparent'}; cursor:pointer; transition:all 0.2s;">
        <div class="exercise-header">
          <div class="exercise-check ${isDone?'done':''}" style="pointer-events:none;">✓</div>
          <span class="exercise-num" style="background:${theme.bg};color:${theme.color};border:1px solid ${theme.border}">Ex ${exo.n}</span>
          <span class="exercise-title">${exo.title}</span>
          <span class="exercise-type ${exoTypeClass}">${exoTypeLabel}</span>
          <span class="exercise-diff" aria-label="Difficulté : ${diff} étoiles sur 3">${stars}</span>
          <span class="exercise-toggle" style="transform:rotate(-90deg); margin-left:auto;">▼</span>
        </div>
      </div>
    `;
  });
  exListHTML += `</div>`;

  const bilanHTML = `
    <div class="auto-bilan" style="border-top:3px solid ${theme.color}">
      <h3>📊 Auto-bilan — ${theme.title}</h3>
      <div class="bilan-stats">
        <span>Exercices maîtrisés : <strong>${doneCount}/${theme.exercises.length}</strong></span>
        <span>Progression : <strong>${pct}%</strong></span>
      </div>
      <div class="bilan-passerelle" style="border-left-color:${theme.color}; background:${theme.bg};">
        🚀 ${pct >= 80 ? 'Prêt pour le BTS sur ce thème !' : pct >= 50 ? 'Bonnes bases, mais revois les exercices non cochés.' : 'Continue à t\'entraîner, les bases sont essentielles pour le BTS.'}
      </div>
    </div>`;

  return `
    <div class="theme-header" style="margin-bottom:20px;">
      <div class="theme-icon" style="background:${theme.bg};border:1px solid ${theme.border}; width:60px; height:60px; font-size:2rem;">${theme.icon}</div>
      <div>
        <h2 class="theme-title" style="color:${theme.color}; font-size:2rem;">${theme.title}</h2>
        <p class="theme-subtitle" style="font-size:1rem;">${theme.subtitle}</p>
      </div>
    </div>
    
    <div class="theme-objectif" style="border-left-color:${theme.color}; font-size:0.95rem; line-height:1.6;">
      <strong>Objectif du thème :</strong> ${theme.objectif || ''}
    </div>
    
    ${btsHTML}
    
    <div class="course-card" style="border-top:3px solid ${theme.color}; border-left:none;">${theme.course}</div>
    
    <h3 style="margin-top:30px; margin-bottom:15px; font-size:1.3rem; color:${theme.color}; display:flex; align-items:center; gap:8px;">📝 Entraînement progressif</h3>
    ${exListHTML}
    
    ${bilanHTML}
  `;
}

function renderExerciseHTML(theme, exo) {
  const key = `${theme.id}-${exo.n}`;
  const saved = StorageManager.getProgress();
  const isDone = isProgressEntryDone(saved[key]);
  const diff = exo.difficulty || 1;
  const stars = '★'.repeat(diff) + '☆'.repeat(3 - diff);
  const exoTypeClass = exo.type || 'automatisme';
  const exoTypeLabel = { echauffement:'Échauffement', automatisme:'Automatisme', applique:'Appliqué Bâtiment', 'prepa-bts':'Prépa BTS', synthese:'Synthèse' }[exoTypeClass];

  let hintsHTML = '';
  if (exo.hints && exo.hints.length) {
    hintsHTML = '<div class="hints-section" style="margin-top:25px; padding-top:20px; border-top:1px solid var(--border-light);">';
    hintsHTML += '<h4 style="margin-bottom:12px; color:var(--warning); font-size:1rem;">Besoin d\'un coup de pouce ?</h4>';
    exo.hints.forEach((h, i) => {
      const hid = `hint-${key}-${i}`;
      const hintLabel = `💡 Indice ${i+1}`;
      hintsHTML += `<button class="hint-btn" id="btn-${hid}" onclick="toggleHint(this,'${key}-${i}')" aria-expanded="false" aria-controls="${hid}">${hintLabel}</button>`;
      hintsHTML += `<div class="hint-content" id="${hid}" role="region" aria-labelledby="btn-${hid}">${h}</div>`;
    });
    hintsHTML += '</div>';
  }

  let corrHTML = '';
  if (exo.correction && exo.correction.length) {
    const cid = `corr-${key}`;
    corrHTML = '<div class="correction-section" style="margin-top:25px; padding-top:20px; border-top:1px solid var(--border-light);">';
    corrHTML += `<button class="correction-btn" id="btn-${cid}" onclick="toggleCorrection('${key}')" aria-expanded="false" aria-controls="${cid}">✅ Vérifier la correction</button>`;
    corrHTML += `<div class="correction-content" id="${cid}" role="region" aria-labelledby="btn-${cid}">`;
    exo.correction.forEach((step, i) => {
      corrHTML += `<div class="correction-step"><div class="step-num">${i+1}</div><div class="step-text"><div class="formula-box">${step}</div></div></div>`;
    });
    corrHTML += '</div></div>';
  }

  const tIdx = THEMES.findIndex(t => t.id === theme.id);
  const eIdx = theme.exercises.findIndex(e => e.n === exo.n);
  
  let prevAction, prevLabel;
  if (eIdx > 0) {
    prevAction = `navigate('exercise','${theme.id}',${theme.exercises[eIdx-1].n})`;
    prevLabel = `⬅ Ex ${theme.exercises[eIdx-1].n}`;
  } else if (tIdx > 0) {
    const pTheme = THEMES[tIdx-1];
    prevAction = `navigate('exercise','${pTheme.id}',${pTheme.exercises[pTheme.exercises.length-1].n})`;
    prevLabel = `⬅ ${pTheme.title.split(' ')[0]}`;
  } else {
    prevAction = `navigate('theme','${theme.id}')`;
    prevLabel = `⬅ Thème`;
  }

  let nextAction, nextLabel;
  if (eIdx < theme.exercises.length - 1) {
    nextAction = `navigate('exercise','${theme.id}',${theme.exercises[eIdx+1].n})`;
    nextLabel = `Ex ${theme.exercises[eIdx+1].n} ➡`;
  } else if (tIdx < THEMES.length - 1) {
    const nTheme = THEMES[tIdx+1];
    nextAction = `navigate('exercise','${nTheme.id}',${nTheme.exercises[0].n})`;
    nextLabel = `${nTheme.title.split(' ')[0]} ➡`;
  } else {
    nextAction = `navigate('home')`;
    nextLabel = `Accueil ➡`;
  }

  const prevBtn = `<button id="btnPrevExo" onclick="${prevAction}" class="nav-btn" style="background:var(--bg-card); color:var(--text); border:1px solid var(--border); padding:10px 16px; border-radius:50px; cursor:pointer;" title="Raccourci clavier : Flèche Gauche">${prevLabel}</button>`;
  const nextBtn = `<button id="btnNextExo" onclick="${nextAction}" class="nav-btn" style="background:var(--bg-card); color:var(--text); border:1px solid var(--border); padding:10px 16px; border-radius:50px; cursor:pointer;" title="Raccourci clavier : Flèche Droite">${nextLabel}</button>`;

  return `
    <div class="exercise-view" style="background:var(--bg-card); padding:35px 40px; border-radius:var(--radius); border:1px solid var(--border); box-shadow:var(--shadow);">
      
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:25px; padding-bottom:20px; border-bottom:1px solid var(--border-light); flex-wrap:wrap; gap:15px;">
        <div>
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px; flex-wrap:wrap;">
            <span class="exercise-num" style="background:${theme.bg};color:${theme.color};border:1px solid ${theme.border}; padding:6px 14px; font-size:1rem; border-radius:8px;">Exercice ${exo.n}</span>
            <span class="exercise-type ${exoTypeClass}" style="font-size:0.85rem; padding:4px 10px;">${exoTypeLabel}</span>
            <span class="exercise-diff" style="font-size:0.9rem; margin-left:0;">${stars}</span>
          </div>
          <h2 style="font-size:1.6rem; color:var(--text); margin:0;">${exo.title}</h2>
        </div>
      </div>
      
      <div class="exo-statement" style="font-size:1.15rem; line-height:1.8; background:transparent; border-left:4px solid ${theme.color}; padding-left:20px; margin-bottom:30px;">
        ${exo.statement}
      </div>
      
      ${exo.graphTable || ''}
      ${exo.svg || ''}
      
      ${hintsHTML}
      ${corrHTML}
      
      <div class="exercise-footer" style="display:flex; justify-content:space-between; align-items:center; margin-top:50px; padding-top:25px; border-top:1px solid var(--border-light); flex-wrap:wrap; gap:20px;">
        ${prevBtn}
        <button id="successBtn-${key}" onclick="toggleExerciseSuccess('${key}', '${theme.id}')" style="padding:12px 28px; border-radius:50px; font-size:1.05rem; font-weight:600; cursor:pointer; background:${isDone?'var(--success)':'rgba(255,255,255,0.03)'}; color:${isDone?'#fff':'var(--text)'}; border:2px solid ${isDone?'var(--success)':'var(--border)'}; transition:all 0.2s; min-width:220px; box-shadow:${isDone?'0 4px 15px rgba(16,185,129,0.3)':'none'};">
          ${isDone ? '✅ Validé !' : 'Marquer comme réussi'}
        </button>
        ${nextBtn}
      </div>
    </div>
  `;
}

// === INTERACTIVITY ===
function toggleExerciseSuccess(key, themeId) {
  try {
    const saved = StorageManager.getProgress();
    const now = new Date().toISOString();
    const existing = isProgressEntryDone(saved[key]) ? saved[key] : null;

    if (existing && existing.done) {
      delete saved[key];
    } else {
      saved[key] = {
        done: true,
        validatedAt: now,
        hintsUsed: (existing && existing.hintsUsed) || 0,
        correctionViewed: (existing && existing.correctionViewed) || false
      };
    }
    
    if (ProfileManager.currentProfile) {
      saved.__meta = { version: 2, updatedAt: now };
      StorageManager.setProgress(saved);
      ProfileManager.updateLastActivity(now);
      ProfileManager.saveProgress(saved);
    } else {
      StorageManager.setProgress(saved);
    }
    
    const btn = document.getElementById(`successBtn-${key}`);
    const isDone = isProgressEntryDone(saved[key]);
    if (isDone) {
      btn.style.background = 'var(--success)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--success)';
      btn.style.boxShadow = '0 4px 15px rgba(16,185,129,0.3)';
      btn.innerHTML = '✅ Validé !';
    } else {
      btn.style.background = 'rgba(255,255,255,0.03)';
      btn.style.color = 'var(--text)';
      btn.style.borderColor = 'var(--border)';
      btn.style.boxShadow = 'none';
      btn.innerHTML = 'Marquer comme réussi';
    }
    
    updateGlobalProgress();
    updateEncouragement();
  } catch (e) {
    console.error(e);
    alert("Erreur lors de la validation : " + e.message);
  }
}

// Helper : retourne true si la valeur de progression indique "validé"
function isProgressEntryDone(val) {
  if (val === true || val === false) return val;
  if (val && typeof val === 'object') return !!val.done;
  return false;
}

// Helper : compte le nombre d'exercices validés dans un objet progress
function countDone(progress) {
  if (!progress) return 0;
  let c = 0;
  for (const key of Object.keys(progress)) {
    if (key === '__meta') continue;
    if (isProgressEntryDone(progress[key])) c++;
  }
  return c;
}

// Helper : somme des indices utilisés
function countHintsUsed(progress) {
  if (!progress) return 0;
  let c = 0;
  for (const key of Object.keys(progress)) {
    if (key === '__meta') continue;
    const v = progress[key];
    if (v && typeof v === 'object' && v.hintsUsed) c += v.hintsUsed;
  }
  return c;
}

function toggleHint(btn, id) {
  const el = document.getElementById('hint-'+id);
  const showing = el.classList.toggle('show');
  btn.classList.toggle('revealed', showing);
  btn.setAttribute('aria-expanded', String(showing));
  if (showing) {
    renderMath();
    // Enregistrer l'utilisation d'indice dans la progression
    const saved = StorageManager.getProgress();
    const now = new Date().toISOString();
    // id format: "t1-1-0" (themeId-exoNum-hintIndex) => extraire "t1-1"
    const exoKey = id.replace(/-[^-]+$/, '');
    if (!saved[exoKey] || typeof saved[exoKey] !== 'object') {
      const wasDone = isProgressEntryDone(saved[exoKey]);
      saved[exoKey] = { done: wasDone, validatedAt: wasDone ? (saved[exoKey]?.validatedAt || now) : null, hintsUsed: 0, correctionViewed: false };
    }
    saved[exoKey].hintsUsed = (saved[exoKey].hintsUsed || 0) + 1;
    saved.__meta = { version: 2, updatedAt: now };
    StorageManager.setProgress(saved);
    if (ProfileManager.currentProfile) {
      ProfileManager.updateLastActivity(now);
      ProfileManager.saveProgress(saved);
    }
  }
}

function toggleCorrection(exoKey) {
  // exoKey format: "t1-1" (themeId-exoNum)
  const el = document.getElementById('corr-'+exoKey);
  const showing = el.classList.toggle('show');
  const btn = document.getElementById('btn-corr-'+exoKey);
  if (btn) btn.setAttribute('aria-expanded', String(showing));
  if (showing) {
    renderMath();
    el.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    // Enregistrer la consultation de correction
    const saved = StorageManager.getProgress();
    const now = new Date().toISOString();
    if (!saved[exoKey] || typeof saved[exoKey] !== 'object') {
      const wasDone = isProgressEntryDone(saved[exoKey]);
      saved[exoKey] = { done: wasDone, validatedAt: wasDone ? (saved[exoKey]?.validatedAt || now) : null, hintsUsed: 0, correctionViewed: false };
    }
    saved[exoKey].correctionViewed = true;
    saved.__meta = { version: 2, updatedAt: now };
    StorageManager.setProgress(saved);
    if (ProfileManager.currentProfile) {
      ProfileManager.updateLastActivity(now);
      ProfileManager.saveProgress(saved);
    }
  }
}

// === PROGRESSION & STATS ===
function updateGlobalProgress() {
  const saved = StorageManager.getProgress();
  const total = THEMES.reduce((s,t) => s + t.exercises.length, 0);
  const done = countDone(saved);
  const pct = Math.round(done / total * 100);
  
  const bar = document.getElementById('globalProgress');
  const label = document.getElementById('globalPct');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

function updateEncouragement() {
  const saved = StorageManager.getProgress();
  const done = countDone(saved);
  const total = THEMES.reduce((s,t) => s + t.exercises.length, 0);
  const pct = Math.round(done / total * 100);
  const msgs = [
    [0, 'Chaque petit pas compte. Lance-toi sur le premier exercice !'],
    [10, 'Bien débuté ! Continue comme ça.'],
    [25, 'Un quart du livret maîtrisé ! Tu assures.'],
    [50, 'Bravo, la moitié est faite !'],
    [75, 'Presque au bout ! Tu vas cartonner en BTS.'],
    [100, 'Félicitations ! Livret validé à 100%. Prêt pour le BTS !']
  ];
  let msg = msgs[0][1];
  for (const [s, m] of msgs) if (pct >= s) msg = m;
  const el = document.getElementById('heroMsg');
  if (el) el.textContent = `${done}/${total} maîtrisés — ${msg}`;
}

// === ACCESSIBILITY & PREFS ===
function applyAccessPrefs(prefs) {
  document.body.classList.toggle('dys-mode', prefs.dys || false);
  document.body.classList.toggle('projection-mode', prefs.projection || false);
  document.body.classList.remove('light-mode', 'cream-mode');
  if (prefs.theme === 'light') document.body.classList.add('light-mode');
  else if (prefs.theme === 'cream') document.body.classList.add('cream-mode');
  
  if (prefs.fontSize) {
    document.documentElement.style.setProperty('--font-size-base', Math.min(24, Math.max(12, parseInt(prefs.fontSize))) + 'px');
    const label = document.getElementById('fontSizeLabel');
    if (label) label.textContent = prefs.fontSize + 'px';
  }
  
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.textContent = { dark: 'Thème sombre', light: 'Thème clair', cream: 'Thème crème' }[prefs.theme || 'dark'];
  }
}

function toggleDys(btn) {
  const p = JSON.parse(localStorage.getItem('livret-access') || '{}');
  p.dys = !p.dys;
  localStorage.setItem('livret-access', JSON.stringify(p));
  applyAccessPrefs(p);
  document.querySelectorAll('.ab-dys').forEach(b => b.classList.toggle('active', p.dys));
}

function toggleProjection(btn) {
  const p = JSON.parse(localStorage.getItem('livret-access') || '{}');
  p.projection = !p.projection;
  localStorage.setItem('livret-access', JSON.stringify(p));
  applyAccessPrefs(p);
  document.querySelectorAll('.ab-proj').forEach(b => b.classList.toggle('active', p.projection));
}

function cycleTheme(btn) {
  const p = JSON.parse(localStorage.getItem('livret-access') || '{}');
  const themes = ['dark', 'light', 'cream'];
  const idx = themes.indexOf(p.theme || 'dark');
  p.theme = themes[(idx + 1) % themes.length];
  localStorage.setItem('livret-access', JSON.stringify(p));
  applyAccessPrefs(p);
}

function setFontSize(delta) {
  const p = JSON.parse(localStorage.getItem('livret-access') || '{}');
  const cur = parseInt(p.fontSize || '15');
  p.fontSize = String(Math.min(24, Math.max(12, cur + delta)));
  localStorage.setItem('livret-access', JSON.stringify(p));
  applyAccessPrefs(p);
}

function resetProgress() {
  if (confirm('Réinitialiser toute la progression ? Cette action est définitive.')) {
    StorageManager.clearProgress();
    renderView();
    updateGlobalProgress();
    updateEncouragement();
  }
}

function exportPDF() { window.print(); }

function setDiagnostic(mode) {
  document.querySelectorAll('.diag-btn').forEach(b => b.classList.remove('active'));
  const diagMsg = { 
    revision: '📘 Objectif : réviser les bases sereinement. Prends ton temps, les coups de pouce sont là pour t\'aider.', 
    entrainement: '📝 Objectif : te préparer au rythme du BTS. Chronomètre-toi sur chaque exercice !' 
  };
  const lbl = document.getElementById('diagLabel');
  if (mode && diagMsg[mode]) {
    lbl.textContent = diagMsg[mode];
    localStorage.setItem('livret-diagnostic', mode);
  } else {
    lbl.textContent = '';
    localStorage.removeItem('livret-diagnostic');
  }
}

function setupTopBtn() {
  const btn = document.createElement('button');
  btn.className = 'top-btn no-print'; 
  btn.innerHTML = '⬆';
  btn.title = 'Revenir en haut'; 
  btn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
  btn.style.display = 'none';
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });
  document.body.appendChild(btn);
}

function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true},
        {left: '$$', right: '$$', display: true}
      ],
      throwOnError: false
    });
  }
}

// === PROFILS & LOGIN ===
function renderProfilesList() {
  const list = document.getElementById('profilesList');
  if (!list) return;
  const search = (document.getElementById('searchProfile')?.value || '').toLowerCase();
  const classe = document.getElementById('filterClasse')?.value || '';
  const lastUsed = localStorage.getItem('parcoursy-active-profile');
  const totalExo = THEMES.reduce((s, t) => s + t.exercises.length, 0);

  let filtered = ProfileManager.profiles
    .filter(p => !search || (p.prenom && p.prenom.toLowerCase().includes(search)))
    .filter(p => !classe || p.classe === classe)
    .sort((a, b) => {
      if (a.id === lastUsed) return -1;
      if (b.id === lastUsed) return 1;
      return (a.prenom || '').localeCompare(b.prenom || '');
    });

  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-profiles">Aucun profil trouvé. Crée le tien !</div>';
    return;
  }

  const colors = ['#4f9cf7','#a855f7','#f97316','#10b981','#f43f5e','#eab308'];
  list.innerHTML = filtered.map(p => {
    const done = countDone(p.progress);
    const pct = totalExo > 0 ? Math.round(done / totalExo * 100) : 0;
    const color = colors[Math.abs(hashCode(p.prenom || '')) % colors.length];
    const initial = (p.prenom || '?')[0].toUpperCase();
    const isLast = p.id === lastUsed;
    return `<div class="profile-card ${isLast ? 'last-used' : ''}" onclick="selectProfile('${p.id}')">
      <div class="profile-avatar" style="background:${color}20;color:${color};border:2px solid ${color}">${initial}</div>
      <div class="profile-info">
        <div class="profile-name">${p.prenom}${isLast ? ' ⭐' : ''}</div>
        <div class="profile-class">${p.classe || ''}</div>
      </div>
      <div class="profile-progress">${pct}%</div>
      ${p.pinHash ? '<span class="profile-lock">🔒</span>' : ''}
    </div>`;
  }).join('');
}

function hashCode(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i); return h; }

function toggleCreateForm() {
  const form = document.getElementById('createForm');
  form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}

async function handleCreateProfile() {
  const prenom = document.getElementById('newPrenom')?.value.trim();
  const classe = document.getElementById('newClasse')?.value;
  const pin = document.getElementById('newPin')?.value;
  if (!prenom) { alert('Entre ton prénom !'); return; }

  const profile = await ProfileManager.createProfile(prenom, classe, pin);
  await ProfileManager.login(profile.id, pin);
  enterLivret();
}

async function selectProfile(id) {
  const profile = ProfileManager.profiles.find(p => p.id === id);
  if (!profile) return;
  if (profile.pinHash) {
    _pendingPinProfileId = id;
    document.getElementById('pinModalName').textContent = profile.prenom;
    document.getElementById('pinInput').value = '';
    document.getElementById('pinError').textContent = '';
    document.getElementById('pinModal').style.display = 'flex';
    setTimeout(() => document.getElementById('pinInput')?.focus(), 100);
  } else {
    await ProfileManager.login(id, '');
    enterLivret();
  }
}

async function submitPin() {
  const pin = document.getElementById('pinInput')?.value;
  const ok = await ProfileManager.login(_pendingPinProfileId, pin);
  if (ok) { closePinModal(); enterLivret(); }
  else { document.getElementById('pinError').textContent = 'Code incorrect.'; }
}

function closePinModal() { document.getElementById('pinModal').style.display = 'none'; _pendingPinProfileId = null; }

function skipLogin() { enterLivret(); }

function enterLivret() {
  appState.loggedIn = true;
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('accessBar').style.display = '';
  document.getElementById('nav').style.display = '';
  document.getElementById('mainContent').style.display = '';
  document.getElementById('appFooter').style.display = '';
  document.querySelector('.print-btn').style.display = '';

  // Badge profil actif
  const badge = document.getElementById('activeProfileBadge');
  if (ProfileManager.currentProfile && badge) {
    badge.style.display = '';
    badge.innerHTML = `👤 ${ProfileManager.currentProfile.prenom} (${ProfileManager.currentProfile.classe || '—'})`;
  }

  updateGlobalProgress();
  handleHashChange(); // Utilise le Hash Router au lieu d'un rendu forcé de l'accueil
  updateEncouragement();
}

function handleLogout() {
  ProfileManager.logout();
  appState.loggedIn = false;
  document.getElementById('loginScreen').style.display = '';
  document.getElementById('accessBar').style.display = 'none';
  document.getElementById('nav').style.display = 'none';
  document.getElementById('hero').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('progressGlobalWrap').style.display = 'none';
  document.getElementById('appFooter').style.display = 'none';
  document.getElementById('dashboardScreen').style.display = 'none';
  document.querySelector('.print-btn').style.display = 'none';
  renderProfilesList();
}

// === ENSEIGNANT ===
function openTeacherModal() {
  document.getElementById('teacherCode').value = '';
  document.getElementById('teacherError').textContent = '';
  document.getElementById('teacherModal').style.display = 'flex';
  setTimeout(() => document.getElementById('teacherCode')?.focus(), 100);
}
function closeTeacherModal() { document.getElementById('teacherModal').style.display = 'none'; }

async function submitTeacherCode() {
  const code = document.getElementById('teacherCode')?.value;
  const level = await ProfileManager.teacherLogin(code);
  if (level) { closeTeacherModal(); showDashboard(); }
  else { document.getElementById('teacherError').textContent = 'Code incorrect.'; }
}

function timeAgo(dateStr) {
  if (!dateStr) return '<span style="color:var(--text-dim)">Jamais</span>';
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return '<span style="color:var(--success)">À l\'instant</span>';
  if (mins < 60) return `<span style="color:var(--success)">Il y a ${mins} min</span>`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `<span style="color:var(--t1)">Il y a ${hours}h</span>`;
  const days = Math.floor(hours / 24);
  if (days === 1) return '<span style="color:var(--t3)">Hier</span>';
  if (days < 7) return `<span style="color:var(--t3)">Il y a ${days} jours</span>`;
  if (days < 30) return `<span style="color:var(--warning)">Il y a ${Math.floor(days/7)} sem</span>`;
  return `<span style="color:var(--t5);font-weight:700">Il y a ${Math.floor(days/30)} mois ⚠️</span>`;
}

function showDashboard() {
  const screen = document.getElementById('dashboardScreen');
  const data = ProfileManager.getDashboardData();
  const totalStudents = data.length;
  const avgPct = totalStudents > 0 ? Math.round(data.reduce((s, d) => s + d.pct, 0) / totalStudents) : 0;

  screen.innerHTML = `
    <div class="dashboard-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
      <h2 class="dashboard-title" style="margin:0;">📊 Tableau de bord enseignant</h2>
      <div style="display:flex; gap:10px;">
        <button class="dashboard-back-btn" onclick="printDashboard()" style="background:rgba(255,255,255,0.05); color:var(--text); border-color:var(--border);">🖨️ Imprimer PDF</button>
        <button class="dashboard-back-btn" onclick="exportDashboardCSV()" style="background:var(--t4-bg); color:var(--t4); border-color:var(--t4-border);">📥 Exporter CSV</button>
        <button class="dashboard-back-btn" onclick="closeDashboard()">← Retour au livret</button>
      </div>
    </div>
    <div class="dashboard-stats-grid">
      <div class="dashboard-stat"><div class="stat-value" style="color:var(--t1)">${totalStudents}</div><div class="stat-label">Élèves</div></div>
      <div class="dashboard-stat"><div class="stat-value" style="color:var(--t4)">${avgPct}%</div><div class="stat-label">Progression moy.</div></div>
      <div class="dashboard-stat"><div class="stat-value" style="color:var(--t2)">${ProfileManager.visitCount}</div><div class="stat-label">Visites</div></div>
      <div class="dashboard-stat"><div class="stat-value" style="color:var(--t3)">${THEMES.reduce((s,t)=>s+t.exercises.length,0)}</div><div class="stat-label">Exercices</div></div>
    </div>
    ${totalStudents === 0 ? '<p style="text-align:center;color:var(--text-muted)">Aucun élève inscrit pour le moment.</p>' : `
    <div style="overflow-x:auto">
    <table class="dashboard-table" style="min-width:800px">
      <thead><tr>
        <th>Élève</th>
        <th>Classe</th>
        <th>Dernière activité</th>
        <th>Progression</th>
        <th>Indices</th>
        <th>Thèmes</th>
      </tr></thead>
      <tbody>${data.map(d => `<tr>
        <td><strong>${d.prenom}</strong></td>
        <td>${d.classe || '—'}</td>
        <td style="white-space:nowrap;font-size:0.85rem">${timeAgo(d.lastActivity)}</td>
        <td><strong>${d.pct}%</strong> (${d.done}/${d.total})</td>
        <td style="text-align:center;font-size:0.85rem">${d.hintsUsed}</td>
        <td>
          <div class="dashboard-theme-dots">${d.byTheme.map(t => {
            const tPct = t.total > 0 ? Math.round(t.done/t.total*100) : 0;
            const bg = tPct >= 80 ? 'var(--success)' : tPct >= 40 ? 'var(--warning)' : 'var(--border)';
            return `<div class="dashboard-theme-dot" style="background:${bg};color:#fff" title="${t.title}: ${t.done}/${t.total}">${t.icon}</div>`;
          }).join('')}</div>
          <div class="dashboard-theme-list">
            ${d.byTheme.filter(t => t.done > 0).map(t => {
              const tPct = Math.round(t.done/t.total*100);
              return `<div style="margin-bottom:2px;">${t.icon} <strong>${t.title}</strong> : ${tPct}%</div>`;
            }).join('') || '<div style="color:#777">Aucun module commencé</div>'}
          </div>
        </td>
      </tr>`).join('')}</tbody>
    </table></div>`}`;

  // Afficher le dashboard, masquer le reste
  screen.style.display = '';
  document.getElementById('hero').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('progressGlobalWrap').style.display = 'none';
}

function closeDashboard() {
  document.getElementById('dashboardScreen').style.display = 'none';
  document.getElementById('mainContent').style.display = '';
  navigate('home');
}

function printDashboard() {
  document.body.classList.add('print-dashboard');
  window.print();
  setTimeout(() => document.body.classList.remove('print-dashboard'), 1000);
}

function exportDashboardCSV() {
  const data = ProfileManager.getDashboardData();
  if (!data || data.length === 0) return alert("Aucune donnée à exporter.");
  
  // En-têtes du CSV (utilisation du point-virgule pour Excel FR)
  let csv = "Eleve;Classe;Derniere_Activite;Progression_Pct;Exercices_Reussis;Indices_Utilises\n";
  
  data.forEach(d => {
    const lastAct = d.lastActivity ? new Date(d.lastActivity).toLocaleString('fr-FR') : 'Jamais';
    // Échappement basique des guillemets
    const prenom = (d.prenom || '').replace(/"/g, '""');
    const classe = (d.classe || '').replace(/"/g, '""');
    csv += `"${prenom}";"${classe}";"${lastAct}";${d.pct};"${d.done}/${d.total}";${d.hintsUsed}\n`;
  });
  
  // Forcer l'encodage UTF-8 avec BOM pour Excel
  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ParcoursY_Export_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// === OVERRIDE toggleExerciseSuccess pour sync Firebase ===
const _origToggle = typeof toggleExerciseSuccess === 'function' ? toggleExerciseSuccess : null;
