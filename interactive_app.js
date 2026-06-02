// interactive_app.js — Moteur interactif du livret d'automatismes
document.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
  const answers = JSON.parse(localStorage.getItem('livret-interactif-answers') || '{}');
  const prefs = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  applyPrefs(prefs);

  // Build nav
  const navInner = document.getElementById('navInner');
  THEMES.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (i === 0 ? ' active' : '');
    btn.textContent = t.icon + ' ' + t.title.split(' ')[0];
    btn.style.cssText = i === 0 ? `background:${t.bg};color:${t.color};border:1px solid ${t.border}` : '';
    btn.onclick = () => {
      document.getElementById(t.id).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-btn').forEach((n, j) => {
        n.classList.toggle('active', j === i);
        n.style.cssText = j === i ? `background:${THEMES[j].bg};color:${THEMES[j].color};border:1px solid ${THEMES[j].border}` : '';
      });
    };
    navInner.appendChild(btn);
  });

  // Header stats
  const totalExos = THEMES.reduce((s, t) => s + t.exercises.length, 0);
  const doneCount = Object.values(saved).filter(v => v).length;
  document.getElementById('headerStats').innerHTML = `
    <span class="stat-chip">📚 <strong>${THEMES.length}</strong> thèmes</span>
    <span class="stat-chip">📝 <strong>${totalExos}</strong> exercices</span>
    <span class="stat-chip">✅ <strong id="doneStat">${doneCount}</strong>/${totalExos} réussis</span>
  `;

  // Build themes
  const main = document.getElementById('mainContent');
  THEMES.forEach((theme, ti) => {
    const section = document.createElement('section');
    section.className = 'theme';
    section.id = theme.id;

    let exosHTML = '';
    theme.exercises.forEach((exo) => {
      const key = `${theme.id}-${exo.n}`;
      const isDone = saved[key] || false;
      const diff = exo.difficulty || 1;
      const stars = '★'.repeat(diff) + '☆'.repeat(3 - diff);
      const exoTypeLabel = { echauffement: 'Échauffement', automatisme: 'Automatisme', applique: 'Appliqué Bâtiment', 'prepa-bts': 'Prépa BTS', synthese: 'Synthèse' }[exo.type || 'automatisme'];
      const exoTypeClass = exo.type || 'automatisme';

      // Build hints
      let hintsHTML = '';
      if (exo.hints && exo.hints.length) {
        hintsHTML = '<div class="hints-section">';
        exo.hints.forEach((h, i) => {
          const hid = `hint-${key}-${i}`;
          const hintLabel = `💡 Indice ${i+1}`;
          hintsHTML += `<button class="hint-btn" onclick="toggleHint(this,'${hid}')">${hintLabel}</button>`;
          hintsHTML += `<div class="hint-content" id="${hid}">${h}</div>`;
        });
        hintsHTML += '</div>';
      }

      // Build correction
      let corrHTML = '';
      if (exo.correction && exo.correction.length) {
        const cid = `corr-${key}`;
        corrHTML = '<div class="correction-section">';
        corrHTML += `<button class="correction-btn" onclick="toggleCorrection('${cid}')">✅ Voir la correction</button>`;
        corrHTML += `<div class="correction-content" id="${cid}">`;
        exo.correction.forEach((step, i) => {
          corrHTML += `<div class="correction-step"><div class="step-num">${i+1}</div><div class="step-text">${step}</div></div>`;
        });
        corrHTML += '</div></div>';
      }

      // Build answer input area
      const ansKey = `ans-${key}`;
      const savedAns = answers[ansKey] || '';
      const ansStatus = isDone ? 'correct' : (savedAns ? 'wrong' : '');
      exosHTML += `
        <div class="exercise-card ${isDone ? 'open' : ''}" id="card-${key}" data-theme-index="${ti}" data-exo-index="${exo.n - 1}">
          <div class="exercise-header" onclick="toggleExo('${key}')" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleExo('${key}')}">
            <span class="num" style="background:${theme.bg};color:${theme.color};border:1px solid ${theme.border}">Ex ${exo.n}</span>
            <span class="title">${exo.title}</span>
            <span class="type ${exoTypeClass}">${exoTypeLabel}</span>
            <span class="diff">${stars}</span>
            <span class="toggle">▼</span>
          </div>
          <div class="exercise-body">
            <div class="exo-statement">${exo.statement}</div>
            ${exo.graphTable || ''}
            ${exo.svg || ''}
            <div class="interactive-area">
              <div class="answer-row">
                <label for="input-${key}">Ta réponse :</label>
                <input type="text" id="input-${key}" value="${savedAns}" class="${ansStatus}" placeholder="Tape ta réponse ici..." onkeydown="if(event.key==='Enter')checkAnswer('${key}')">
                <button class="btn btn-primary" onclick="checkAnswer('${key}')">Vérifier</button>
                <button class="btn-outline" onclick="revealAnswer('${key}')">💡 Révéler</button>
              </div>
              <div class="feedback" id="fb-${key}">${isDone ? '<span class="success">✅ Bonne réponse !</span>' : (savedAns ? '<span class="error">❌ Réponse incorrecte, réessaie.</span>' : '')}</div>
            </div>
            ${hintsHTML}
            ${corrHTML}
          </div>
        </div>`;
    });

    const doneInTheme = theme.exercises.filter(e => saved[`${theme.id}-${e.n}`]).length;
    const pctTheme = Math.round(doneInTheme / theme.exercises.length * 100);

    // BTS box
    const btsHTML = theme.bts ? `
      <div class="bts-box">
        <h3>🎯 Parcours BTS — ${theme.title}</h3>
        <div class="bts-grid">
          <div class="bts-item"><div class="bts-label">Savoir-faire</div><div class="bts-content">${theme.bts.savoir}</div></div>
          <div class="bts-item"><div class="bts-label">Pourquoi en BTS</div><div class="bts-content">${theme.bts.pourquoi}</div></div>
          <div class="bts-item"><div class="bts-label">Erreurs fréquentes</div><div class="bts-content">${theme.bts.erreurs}</div></div>
        </div>
      </div>` : '';

    section.innerHTML = `
      <div class="theme-header">
        <div class="theme-icon" style="background:${theme.bg};border:1px solid ${theme.border}">${theme.icon}</div>
        <div>
          <h2 class="theme-title" style="color:${theme.color}">${theme.title}</h2>
          <p class="theme-sub">${theme.subtitle}</p>
          <div class="theme-obj">${theme.objectif || ''}</div>
        </div>
      </div>
      <div class="theme-progress">
        <div class="pr-bar"><div class="pr-fill" id="prog-${theme.id}" style="width:${pctTheme}%;background:${theme.color}"></div></div>
        <span class="pr-pct" style="color:${theme.color}" id="pct-${theme.id}">${doneInTheme}/${theme.exercises.length}</span>
      </div>
      ${btsHTML}
      <div class="course-card" style="border-left:3px solid ${theme.color}">${theme.course}</div>
      ${exosHTML}
      <div class="auto-bilan">
        <h3>📊 Auto-bilan — ${theme.title}</h3>
        <div class="bilan-stats">
          <span>Exercices réussis : <strong id="bilan-${theme.id}">${doneInTheme}/${theme.exercises.length}</strong></span>
          <span>Progression : <strong>${pctTheme}%</strong></span>
        </div>
        <div class="bilan-passerelle">
          🚀 ${pctTheme >= 80 ? '✅ Prêt pour le BTS sur ce thème !' : pctTheme >= 50 ? '⚠️ Bonnes bases, mais revois les exercices non réussis.' : '📘 Continue à t\'entraîner, les bases sont essentielles pour le BTS.'}
        </div>
      </div>
    `;
    main.appendChild(section);
  });

  updateGlobal();
  renderMath();
});

// ===== ANSWER CHECKING =====
function checkAnswer(key) {
  const input = document.getElementById('input-' + key);
  const fb = document.getElementById('fb-' + key);
  const val = input.value.trim();
  if (!val) { fb.innerHTML = '<span class="info">💡 Tape une réponse avant de vérifier.</span>'; return; }

  const parts = key.split('-');
  const tid = parts[0];
  const exoN = parseInt(parts[1]);
  const theme = THEMES.find(t => t.id === tid);
  if (!theme) return;
  const exo = theme.exercises.find(e => e.n === exoN);
  if (!exo) return;

  const expected = exo.correction ? exo.correction.join(' ') : '';
  const isCorrect = evaluateAnswer(val, expected, exo);

  // Save answer
  const answers = JSON.parse(localStorage.getItem('livret-interactif-answers') || '{}');
  answers['ans-' + key] = val;
  localStorage.setItem('livret-interactif-answers', JSON.stringify(answers));

  if (isCorrect) {
    input.className = 'correct';
    fb.innerHTML = '<span class="success">✅ Bonne réponse !</span>';
    const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
    if (!saved[key]) {
      saved[key] = true;
      localStorage.setItem('livret-interactif-progress', JSON.stringify(saved));
      updateThemeProgress(tid);
      updateGlobal();
    }
  } else {
    input.className = 'wrong';
    fb.innerHTML = '<span class="error">❌ Ce n\'est pas la bonne réponse. Essaie encore ou utilise un indice.</span>';
    const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
    if (saved[key]) {
      delete saved[key];
      localStorage.setItem('livret-interactif-progress', JSON.stringify(saved));
      updateThemeProgress(tid);
      updateGlobal();
    }
  }
}

function evaluateAnswer(userVal, expected, exo) {
  const u = userVal.toLowerCase().replace(/\s+/g, ' ').trim();
  const e = expected.toLowerCase().replace(/\s+/g, ' ').trim();

  // Direct match (after normalization)
  if (u === e) return true;

  // Check each correction step
  if (exo.correction) {
    for (const step of exo.correction) {
      const cleanStep = step.replace(/<[^>]*>/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
      if (u === cleanStep) return true;
      // Check if user answer is contained in expected (for multi-part)
      if (u.length > 3 && cleanStep.includes(u)) return true;
      // Check for numeric equivalence
      const nums = matchNumbers(u);
      const expNums = matchNumbers(e);
      if (nums.length > 0 && expNums.length > 0) {
        if (arraysEqual(nums, expNums)) return true;
      }
    }
  }

  // For numeric answers, try to evaluate
  try {
    const uNum = parseFloat(userVal.replace(',', '.'));
    const expNums = expected.match(/-?\d+(?:[.,]\d+)?/g);
    if (expNums && expNums.length === 1) {
      const expNum = parseFloat(expNums[0].replace(',', '.'));
      if (Math.abs(uNum - expNum) < 0.01) return true;
    }
  } catch (_) {}

  return false;
}

function matchNumbers(s) {
  const m = s.match(/-?\d+(?:[.,]\d+)?/g);
  return m ? m.map(x => parseFloat(x.replace(',', '.'))) : [];
}
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (Math.abs(a[i] - b[i]) > 0.001) return false;
  return true;
}

function revealAnswer(key) {
  const parts = key.split('-');
  const tid = parts[0];
  const exoN = parseInt(parts[1]);
  const theme = THEMES.find(t => t.id === tid);
  if (!theme) return;
  const exo = theme.exercises.find(e => e.n === exoN);
  if (!exo || !exo.correction) return;

  const fb = document.getElementById('fb-' + key);
  const full = exo.correction.map(c => c.replace(/<[^>]*>/g, '')).join(' — ');
  fb.innerHTML = `<span class="info">💡 La réponse attendue : ${full}</span>`;

  const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
  if (!saved[key]) {
    saved[key] = true;
    localStorage.setItem('livret-interactif-progress', JSON.stringify(saved));
    document.getElementById('input-' + key).className = 'correct';
    updateThemeProgress(tid);
    updateGlobal();
  }
}

// ===== TOGGLES =====
function toggleExo(key) {
  const card = document.getElementById('card-' + key);
  card.classList.toggle('open');
  renderMath();
}

function toggleHint(btn, id) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
  btn.classList.toggle('revealed');
  if (el.classList.contains('show')) renderMath();
}

function toggleCorrection(id) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
  if (el.classList.contains('show')) renderMath();
}

// ===== PROGRESS =====
function updateThemeProgress(tid) {
  const theme = THEMES.find(t => t.id === tid);
  if (!theme) return;
  const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
  const done = theme.exercises.filter(e => saved[`${tid}-${e.n}`]).length;
  const pct = Math.round(done / theme.exercises.length * 100);
  const bar = document.getElementById('prog-' + tid);
  const label = document.getElementById('pct-' + tid);
  const bilan = document.getElementById('bilan-' + tid);
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = `${done}/${theme.exercises.length}`;
  if (bilan) bilan.textContent = `${done}/${theme.exercises.length}`;
}

function updateGlobal() {
  const saved = JSON.parse(localStorage.getItem('livret-interactif-progress') || '{}');
  const total = THEMES.reduce((s, t) => s + t.exercises.length, 0);
  const done = Object.values(saved).filter(v => v).length;
  const pct = Math.round(done / total * 100);
  const bar = document.getElementById('globalProgress');
  const label = document.getElementById('globalPct');
  const score = document.getElementById('scoreDisplay');
  const doneStat = document.getElementById('doneStat');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
  if (score) score.textContent = `${done}/${total}`;
  if (doneStat) doneStat.textContent = done;
}

// ===== ACCESSIBILITY =====
function applyPrefs(prefs) {
  document.body.classList.toggle('dys', prefs.dys || false);
  document.body.classList.toggle('projection', prefs.projection || false);
  if (prefs.theme === 'light') {
    document.body.style.setProperty('--bg', '#f4f6fa');
    document.body.style.setProperty('--bg-card', '#ffffff');
    document.body.style.setProperty('--text', '#1a1d27');
    document.body.style.setProperty('--text-muted', '#5a5e72');
    document.body.style.setProperty('--text-dim', '#8b8fa3');
    document.body.style.setProperty('--border', '#d1d5db');
    document.body.style.setProperty('--border-light', '#e5e7eb');
    document.getElementById('themeBtn').textContent = '☀️ Clair';
  } else {
    document.body.style.setProperty('--bg', '#0f1117');
    document.body.style.setProperty('--bg-card', '#1a1d27');
    document.body.style.setProperty('--text', '#e8eaf0');
    document.body.style.setProperty('--text-muted', '#8b8fa3');
    document.body.style.setProperty('--text-dim', '#5a5e72');
    document.body.style.setProperty('--border', '#2a2d3a');
    document.body.style.setProperty('--border-light', '#353849');
    document.getElementById('themeBtn').textContent = '🌙 Sombre';
  }

  // WCAG overrides for dys mode - high contrast, non-justified, pastel backgrounds
  if (prefs.dys) {
    if (p.theme !== 'dark') {
      document.body.style.setProperty('--bg', '#fbf7e9');
      document.body.style.setProperty('--bg-card', '#fefcf3');
      document.body.style.setProperty('--text', '#1a1a1a');
      document.body.style.setProperty('--text-muted', '#333');
      document.body.style.setProperty('--border', '#d4c9a8');
      document.body.style.setProperty('--border-light', '#e8e0c8');
    } else {
      document.body.style.setProperty('--bg-card', '#2a2d3a');
      document.body.style.setProperty('--text', '#f0f0f0');
      document.body.style.setProperty('--text-muted', '#ccc');
      document.body.style.setProperty('--border', '#555');
      document.body.style.setProperty('--border-light', '#444');
    }
    document.body.style.setProperty('--t1-bg', '#e6f0ff');
    document.body.style.setProperty('--success-bg', '#e6f9ef');
    document.body.style.setProperty('--error-bg', '#ffe6e6');
  }

  if (prefs.fontSize) {
    document.documentElement.style.setProperty('--font-size-base', Math.min(28, Math.max(12, parseInt(prefs.fontSize))) + 'px');
    document.getElementById('fontLabel').textContent = prefs.fontSize;
  }
}

function savePref(key, val) {
  const p = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  p[key] = val;
  localStorage.setItem('livret-interactif-prefs', JSON.stringify(p));
  applyPrefs(p);
}

function toggleDys() {
  const p = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  p.dys = !p.dys;
  localStorage.setItem('livret-interactif-prefs', JSON.stringify(p));
  applyPrefs(p);
  document.getElementById('dysBtn').classList.toggle('active', p.dys);
}

function toggleProjection() {
  const p = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  const was = p.projection || false;
  p.projection = !was;
  localStorage.setItem('livret-interactif-prefs', JSON.stringify(p));
  applyPrefs(p);
  document.getElementById('projBtn').classList.toggle('active', p.projection);
  document.getElementById('projNav').style.display = p.projection ? 'flex' : 'none';

  if (p.projection && !was) {
    // Show first exercise in projection
    const firstCard = document.querySelector('.exercise-card');
    if (firstCard) {
      firstCard.classList.add('active-proj');
      firstCard.classList.add('open');
      const tid = firstCard.id.replace('card-', '').split('-')[0];
      const theme = THEMES.find(t => t.id === tid);
      if (theme) {
        const exoN = parseInt(firstCard.id.replace('card-', '').split('-')[1]);
        document.getElementById('projCounter').textContent = `${exoN}/${theme.exercises.length}`;
      }
    }
  } else if (!p.projection) {
    document.querySelectorAll('.exercise-card.active-proj').forEach(c => c.classList.remove('active-proj'));
  }
}

function projNext() {
  const current = document.querySelector('.exercise-card.active-proj');
  if (!current) return;
  const next = current.nextElementSibling;
  if (next && next.classList.contains('exercise-card')) {
    current.classList.remove('active-proj');
    next.classList.add('active-proj');
    next.classList.add('open');
    const parts = next.id.replace('card-', '').split('-');
    const theme = THEMES.find(t => t.id === parts[0]);
    if (theme) {
      document.getElementById('projCounter').textContent = `${parseInt(parts[1])}/${theme.exercises.length}`;
    }
    renderMath();
  }
}

function projPrev() {
  const current = document.querySelector('.exercise-card.active-proj');
  if (!current) return;
  const prev = current.previousElementSibling;
  if (prev && prev.classList.contains('exercise-card')) {
    current.classList.remove('active-proj');
    prev.classList.add('active-proj');
    prev.classList.add('open');
    const parts = prev.id.replace('card-', '').split('-');
    const theme = THEMES.find(t => t.id === parts[0]);
    if (theme) {
      document.getElementById('projCounter').textContent = `${parseInt(parts[1])}/${theme.exercises.length}`;
    }
    renderMath();
  }
}

function cycleTheme() {
  const p = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  p.theme = p.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('livret-interactif-prefs', JSON.stringify(p));
  applyPrefs(p);
}

function adjFont(delta) {
  const p = JSON.parse(localStorage.getItem('livret-interactif-prefs') || '{}');
  const cur = parseInt(p.fontSize || '16');
  const next = Math.min(28, Math.max(12, cur + delta));
  p.fontSize = String(next);
  localStorage.setItem('livret-interactif-prefs', JSON.stringify(p));
  applyPrefs(p);
}

function resetAll() {
  if (!confirm('Réinitialiser toute la progression ? Cette action est définitive.')) return;
  localStorage.removeItem('livret-interactif-progress');
  localStorage.removeItem('livret-interactif-answers');
  document.querySelectorAll('.exercise-card .exercise-body').forEach(el => el.style.display = '');
  document.querySelectorAll('.exercise-card').forEach(c => c.classList.remove('open'));
  document.querySelectorAll('.feedback').forEach(el => el.innerHTML = '');
  document.querySelectorAll('.answer-row input').forEach(el => { el.value = ''; el.className = ''; });
  THEMES.forEach(t => { updateThemeProgress(t.id); });
  updateGlobal();
}

// ===== KATEX =====
function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [{ left: '\\(', right: '\\)', display: false }, { left: '\\[', right: '\\]', display: true }, { left: '$$', right: '$$', display: true }],
      throwOnError: false
    });
  }
}
