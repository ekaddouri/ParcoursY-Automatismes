// app.js — Moteur du livret d'automatismes (v4 SPA - Navigation en couches)

const appState = {
  view: 'home', // 'home', 'theme', 'exercise'
  themeId: null,
  exoNum: null
};

document.addEventListener('DOMContentLoaded', () => {
  const prefs = JSON.parse(localStorage.getItem('livret-access') || '{}');
  applyAccessPrefs(prefs);
  setupTopBtn();
  updateGlobalProgress();
  
  // Initialiser les stats hero
  const statsEl = document.getElementById('heroStats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="hero-stat"><span class="val">${THEMES.length}</span><span class="lbl">Thèmes</span></div>
      <div class="hero-stat"><span class="val">${THEMES.reduce((s, t) => s + t.exercises.length, 0)}</span><span class="lbl">Exercices</span></div>
      <div class="hero-stat"><span class="val">150+</span><span class="lbl">Coups de pouce</span></div>
      <div class="hero-stat"><span class="val">100%</span><span class="lbl">Hors-ligne</span></div>
    `;
  }
  
  // Navigation clavier pour le mode projection (exercice par exercice)
  document.addEventListener('keydown', (e) => {
    if (appState.view === 'exercise') {
      // Ignorer si l'utilisateur tape dans un champ de texte (pour la suite)
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        const btn = document.getElementById('btnNextExo');
        if (btn) btn.click();
      } else if (e.key === 'ArrowLeft') {
        const btn = document.getElementById('btnPrevExo');
        if (btn) btn.click();
      }
    }
  });
  
  renderView();
  updateEncouragement();
});

// === NAVIGATION EN COUCHES ===
function navigate(view, themeId = null, exoNum = null) {
  appState.view = view;
  appState.themeId = themeId;
  appState.exoNum = exoNum;
  window.scrollTo({top: 0, behavior: 'smooth'});
  renderView();
}

function renderView() {
  const hero = document.getElementById('hero');
  const main = document.getElementById('mainContent');
  const navInner = document.getElementById('navInner');
  const progWrap = document.getElementById('progressGlobalWrap');
  
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
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  let html = `<div class="themes-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin-top:20px;">`;
  
  THEMES.forEach(t => {
    const done = t.exercises.filter(e => saved[`${t.id}-${e.n}`]).length;
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
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const doneCount = theme.exercises.filter(e => saved[`${theme.id}-${e.n}`]).length;
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
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const isDone = saved[key] || false;
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
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  saved[key] = !saved[key];
  localStorage.setItem('livret-progress', JSON.stringify(saved));
  
  const btn = document.getElementById(`successBtn-${key}`);
  const isDone = saved[key];
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
}

function toggleHint(btn, id) {
  const el = document.getElementById('hint-'+id);
  const showing = el.classList.toggle('show');
  btn.classList.toggle('revealed', showing);
  btn.setAttribute('aria-expanded', String(showing));
  if (showing) renderMath();
}

function toggleCorrection(key) {
  const el = document.getElementById('corr-'+key);
  const showing = el.classList.toggle('show');
  const btn = document.getElementById('btn-corr-'+key);
  if (btn) btn.setAttribute('aria-expanded', String(showing));
  if (showing) {
    renderMath();
    // Scroll a bit down to show correction if needed
    el.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }
}

// === PROGRESSION & STATS ===
function updateGlobalProgress() {
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const total = THEMES.reduce((s,t) => s + t.exercises.length, 0);
  const done = Object.values(saved).filter(v => v).length;
  const pct = Math.round(done / total * 100);
  
  const bar = document.getElementById('globalProgress');
  const label = document.getElementById('globalPct');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

function updateEncouragement() {
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const done = Object.values(saved).filter(v => v).length;
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
    localStorage.removeItem('livret-progress');
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
