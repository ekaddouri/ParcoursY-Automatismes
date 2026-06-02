// app.js — Moteur du livret d'automatismes
document.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');

  // Build nav
  const navInner = document.getElementById('navInner');
  THEMES.forEach((t, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-link' + (i === 0 ? ' active' : '');
    btn.textContent = t.icon + ' ' + t.title.split(' ')[0];
    btn.style.cssText = i === 0 ? `background:${t.bg};color:${t.color};border:1px solid ${t.border}` : '';
    btn.onclick = () => {
      document.getElementById(t.id).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach((n, j) => {
        n.classList.toggle('active', j === i);
        n.style.cssText = j === i ? `background:${THEMES[j].bg};color:${THEMES[j].color};border:1px solid ${THEMES[j].border}` : '';
      });
    };
    navInner.appendChild(btn);
  });

  // Build hero stats
  const heroStats = document.getElementById('heroStats');
  heroStats.innerHTML = `
    <div class="hero-stat"><span class="val">${THEMES.length}</span><span class="lbl">Thèmes</span></div>
    <div class="hero-stat"><span class="val">${THEMES.reduce((s, t) => s + t.exercises.length, 0)}</span><span class="lbl">Exercices</span></div>
    <div class="hero-stat"><span class="val">150</span><span class="lbl">Coups de pouce</span></div>
    <div class="hero-stat"><span class="val">100%</span><span class="lbl">Hors-ligne</span></div>
  `;

  // Build themes
  const main = document.getElementById('mainContent');
  THEMES.forEach((theme) => {
    const section = document.createElement('section');
    section.className = 'theme-section';
    section.id = theme.id;

    let exoCards = '';
    theme.exercises.forEach((exo) => {
      const key = `${theme.id}-${exo.n}`;
      const isDone = saved[key] || false;

      // Hints
      let hintsHTML = '';
      if (exo.hints && exo.hints.length) {
        hintsHTML = '<div class="hints-section">';
        exo.hints.forEach((h, i) => {
          hintsHTML += `<button class="hint-btn" data-hint="${key}-${i}" onclick="toggleHint(this,'${key}-${i}')">💡 Coup de pouce ${i + 1}</button>`;
          hintsHTML += `<div class="hint-content" id="hint-${key}-${i}">${h}</div>`;
        });
        hintsHTML += '</div>';
      }

      // Correction
      let corrHTML = '';
      if (exo.correction && exo.correction.length) {
        corrHTML = '<div class="correction-section">';
        corrHTML += `<button class="correction-btn" onclick="toggleCorrection('${key}')">✅ Voir la correction (étapes clés)</button>`;
        corrHTML += `<div class="correction-content" id="corr-${key}">`;
        exo.correction.forEach((step, i) => {
          corrHTML += `<div class="correction-step"><div class="step-num">${i + 1}</div><div class="step-text"><div class="formula-box">${step}</div></div></div>`;
        });
        corrHTML += '</div></div>';
      }

      exoCards += `
        <div class="exercise-card" id="card-${key}">
          <div class="exercise-header" onclick="toggleExo('${key}')">
            <div class="exercise-check ${isDone ? 'done' : ''}" id="check-${key}" onclick="event.stopPropagation();toggleCheck('${key}')">✓</div>
            <span class="exercise-num" style="background:${theme.bg};color:${theme.color};border:1px solid ${theme.border}">Ex ${exo.n}</span>
            <span class="exercise-title">${exo.title}</span>
            <span class="exercise-toggle">▼</span>
          </div>
          <div class="exercise-body">
            <div class="exo-statement">${exo.statement}</div>
            ${exo.svg || ''}
            ${hintsHTML}
            ${corrHTML}
          </div>
        </div>`;
    });

    const doneCount = theme.exercises.filter(e => saved[`${theme.id}-${e.n}`]).length;
    const pct = Math.round(doneCount / theme.exercises.length * 100);

    section.innerHTML = `
      <div class="theme-header">
        <div class="theme-icon" style="background:${theme.bg};border:1px solid ${theme.border}">${theme.icon}</div>
        <div>
          <h2 class="theme-title" style="color:${theme.color}">${theme.title}</h2>
          <p class="theme-subtitle">${theme.subtitle}</p>
        </div>
      </div>
      <div class="theme-progress">
        <div class="progress-bar-wrap"><div class="progress-bar-fill" id="prog-${theme.id}" style="width:${pct}%;background:${theme.color}"></div></div>
        <span class="theme-progress-pct" style="color:${theme.color}" id="pct-${theme.id}">${doneCount}/${theme.exercises.length}</span>
      </div>
      <div class="course-card" style="border-left:3px solid ${theme.color}">${theme.course}</div>
      ${exoCards}
    `;
    main.appendChild(section);
  });

  updateGlobal();
  renderMath();
});

function toggleExo(key) {
  const card = document.getElementById('card-' + key);
  card.classList.toggle('open');
  if (card.classList.contains('open')) renderMath();
}

function toggleCheck(key) {
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  saved[key] = !saved[key];
  localStorage.setItem('livret-progress', JSON.stringify(saved));
  const el = document.getElementById('check-' + key);
  el.classList.toggle('done');
  updateThemeProgress(key.split('-')[0]);
  updateGlobal();
}

function toggleHint(btn, id) {
  const el = document.getElementById('hint-' + id);
  const showing = el.classList.toggle('show');
  btn.classList.toggle('revealed', showing);
  if (showing) renderMath();
}

function toggleCorrection(key) {
  const el = document.getElementById('corr-' + key);
  el.classList.toggle('show');
  if (el.classList.contains('show')) renderMath();
}

function updateThemeProgress(tid) {
  const theme = THEMES.find(t => t.id === tid);
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const done = theme.exercises.filter(e => saved[`${tid}-${e.n}`]).length;
  const pct = Math.round(done / theme.exercises.length * 100);
  const bar = document.getElementById('prog-' + tid);
  const label = document.getElementById('pct-' + tid);
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = `${done}/${theme.exercises.length}`;
}

function updateGlobal() {
  const saved = JSON.parse(localStorage.getItem('livret-progress') || '{}');
  const total = THEMES.reduce((s, t) => s + t.exercises.length, 0);
  const done = Object.values(saved).filter(v => v).length;
  const pct = Math.round(done / total * 100);
  const bar = document.getElementById('globalProgress');
  const label = document.getElementById('globalPct');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = pct + '%';
}

function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '$$', right: '$$', display: true }
      ],
      throwOnError: false
    });
  }
}
