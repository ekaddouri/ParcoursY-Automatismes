// data2.js — Thèmes 3, 4, 5
THEMES.push(
{id:"t3",title:"Fonctions",icon:"📈",color:"var(--t3)",bg:"var(--t3-bg)",border:"var(--t3-border)",
subtitle:"Lire, interpréter, exploiter les fonctions",
objectif:"Savoir lire une courbe, calculer une image/antécédent, modéliser une situation par une fonction affine et exploiter un tableau de valeurs.",
bts:{savoir:'<strong>Lire et interpréter</strong> une courbe (image, antécédent, variations). <strong>Modéliser</strong> une situation par une fonction affine.',pourquoi:'<strong>Coûts, recettes, bénéfices :</strong> en BTS, les fonctions modélisent des situations économiques (seuil de rentabilité, amortissement) et techniques (loi de comportement des matériaux).',erreurs:'<strong>Confondre image et antécédent.</strong> Oublier que f(x)=k se résout graphiquement en lisant l\'abscisse des points d\'intersection avec y=k.'},
course:`<h3><span class="icon">📈</span> Rappels de cours</h3><div class="course-content">
<p><strong>Image :</strong> \\(f(a)\\) est l'image de \\(a\\) par \\(f\\).</p>
<p><strong>Antécédent :</strong> Si \\(f(a)=b\\), alors \\(a\\) est un antécédent de \\(b\\).</p>
<div class="formula-box">\\(\\text{Fonction affine : } f(x)=mx+p\\)</div>
<p>\\(m\\) = coefficient directeur (pente), \\(p\\) = ordonnée à l'origine.</p>
<div class="formula-box">\\(m=\\frac{y_B-y_A}{x_B-x_A}\\)</div>
<div class="key-point tip">💡 En BTS, les fonctions modélisent coûts, résistances, températures…</div></div>`,
exercises:[
{n:1,title:"Images et antécédents",difficulty:1,type:"echauffement",
statement:`Soit \\(f(x)=2x-3\\).<ol><li>Calcule \\(f(4)\\), \\(f(-1)\\), \\(f(0)\\).</li><li>Trouve l'antécédent de 7.</li></ol>`,
hints:["Remplace x par la valeur donnée.","Pour l'antécédent de 7 : résous 2x−3=7."],
correction:["\\(f(4)=5\\), \\(f(-1)=-5\\), \\(f(0)=-3\\)","\\(2x-3=7 \\implies x=5\\)"]},
{n:2,title:"Tableau de valeurs",difficulty:2,
statement:`Soit \\(f(x)=-x^2+4\\). Complète le tableau pour x∈{−3,−2,−1,0,1,2,3} et trace la courbe.`,
hints:["Remplace x par chaque valeur.","f(−3)=−9+4=−5.","La courbe est une parabole tournée vers le bas."],
correction:["f(−3)=−5, f(−2)=0, f(−1)=3, f(0)=4, f(1)=3, f(2)=0, f(3)=−5","Parabole de sommet (0;4), coupant l'axe des x en −2 et 2."],
graphTable:`<table class="val-table" role="table" aria-label="Tableau de valeurs à compléter">
  <caption>f(x) = −x² + 4 — à compléter</caption>
  <thead>
    <tr><th scope="col">x</th><th scope="col">−3</th><th scope="col">−2</th><th scope="col">−1</th><th scope="col">0</th><th scope="col">1</th><th scope="col">2</th><th scope="col">3</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">f(x)</th><td class="val-empty">?</td><td class="val-empty">?</td><td class="val-empty">?</td><td class="val-empty">?</td><td class="val-empty">?</td><td class="val-empty">?</td><td class="val-empty">?</td></tr>
  </tbody>
</table>`,
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <marker id="t3e2arrR" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#8b8fa3" stroke="none"/>
    </marker>
    <marker id="t3e2arrU" viewBox="0 0 10 10" refX="5" refY="0" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,10 L5,0 L10,10" fill="#8b8fa3" stroke="none"/>
    </marker>
  </defs>
  <line x1="40" y1="315" x2="460" y2="315" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="250" y1="25" x2="250" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <polyline points="40,315 455,315" fill="none" stroke="#8b8fa3" stroke-width="1.5" marker-end="url(#t3e2arrR)"/>
  <polyline points="250,335 250,30" fill="none" stroke="#8b8fa3" stroke-width="1.5" marker-end="url(#t3e2arrU)"/>
  <text x="448" y="330" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">x</text>
  <text x="255" y="28" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">y</text>
  <line x1="50" y1="315" x2="50" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="115" y1="315" x2="115" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="180" y1="315" x2="180" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="250" y1="315" x2="250" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="320" y1="315" x2="320" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="385" y1="315" x2="385" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="450" y1="315" x2="450" y2="325" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="250" y1="245" x2="260" y2="245" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="250" y1="175" x2="260" y2="175" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="250" y1="105" x2="260" y2="105" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="250" y1="35" x2="260" y2="35" stroke="#8b8fa3" stroke-width="1"/>
  <text x="44" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">-3</text>
  <text x="110" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">-2</text>
  <text x="177" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">-1</text>
  <text x="247" y="338" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="317" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">1</text>
  <text x="382" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">2</text>
  <text x="447" y="338" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">3</text>
  <text x="15" y="248" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">-5</text>
  <text x="15" y="178" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="15" y="108" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">3</text>
  <text x="15" y="38" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">4</text>
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="220" height="100" fill="rgba(26,29,39,0.95)" stroke="#353849" stroke-width="1" rx="5"/>
    <text x="10" y="17" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">Tableau a completer</text>
    <line x1="5" y1="25" x2="215" y2="25" stroke="#353849" stroke-width="0.5"/>
    <text x="10" y="42" fill="#f97316" font-size="11" font-family="Inter,sans-serif" font-weight="bold">x</text>
    <text x="30" y="42" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">|  -3   -2   -1   0   1   2   3</text>
    <text x="10" y="60" fill="#f97316" font-size="11" font-family="Inter,sans-serif" font-weight="bold">f(x)</text>
    <text x="30" y="60" fill="#2a2d3a" font-size="10" font-family="Inter,sans-serif">|  <tspan fill="#8b8fa3">?</tspan>    <tspan fill="#8b8fa3">?</tspan>    <tspan fill="#8b8fa3">?</tspan>   <tspan fill="#8b8fa3">?</tspan>   <tspan fill="#8b8fa3">?</tspan>   <tspan fill="#8b8fa3">?</tspan>   <tspan fill="#8b8fa3">?</tspan></text>
    <line x1="5" y1="68" x2="215" y2="68" stroke="#353849" stroke-width="0.5"/>
    <text x="10" y="85" fill="#f59e0b" font-size="10" font-family="Inter,sans-serif">Rappel : f(x) = -x² + 4</text>
  </g>
  <line x1="50" y1="315" x2="50" y2="248" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="115" y1="315" x2="115" y2="175" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="180" y1="315" x2="180" y2="105" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="250" y1="315" x2="250" y2="35" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="320" y1="315" x2="320" y2="105" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="385" y1="315" x2="385" y2="175" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="450" y1="315" x2="450" y2="248" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5,4"/>
  <path d="M50,248 Q115,175 180,105 Q250,35 320,105 Q385,175 450,248" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="248" r="5" fill="#f97316"/>
  <circle cx="115" cy="175" r="5" fill="#f97316"/>
  <circle cx="180" cy="105" r="5" fill="#f97316"/>
  <circle cx="250" cy="35" r="6" fill="#f97316" stroke="#fff" stroke-width="2"/>
  <circle cx="320" cy="105" r="5" fill="#f97316"/>
  <circle cx="385" cy="175" r="5" fill="#f97316"/>
  <circle cx="450" cy="248" r="5" fill="#f97316"/>
  <text x="38" y="242" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">−5</text>
  <text x="103" y="169" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="168" y="99" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">3</text>
  <text x="240" y="29" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">4</text>
  <text x="308" y="99" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">3</text>
  <text x="373" y="169" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="438" y="242" fill="#e8eaf0" font-size="9" font-family="Inter,sans-serif">−5</text>
</svg></div>`},
{n:3,title:"Fonction linéaire",difficulty:1,type:"echauffement",
statement:`<ol><li>La consommation d'eau d'un chantier est proportionnelle au temps : 120 L/h. Écris f(t).</li><li>Calcule la consommation pour 8h.</li><li>Combien de temps pour 1800 L ?</li></ol>`,
hints:["f(t) = 120t","f(8) = ?","Résous 120t = 1800."],
correction:["\\(f(t)=120t\\)","\\(f(8)=960\\) L","\\(t=1800÷120=15\\) h"]},
{n:4,title:"Fonction affine",difficulty:1,type:"automatisme",
statement:`Un taxi facture 3,50 € le km + 5 € de prise en charge.<ol><li>Écris f(x) le coût pour x km.</li><li>Coût pour 12 km ?</li><li>Avec 40 €, combien de km maximum ?</li></ol>`,
hints:["f(x) = 3,50x + 5","f(12) = ?","Résous 3,50x + 5 = 40."],
correction:["\\(f(x)=3{,}5x+5\\)","\\(f(12)=47\\) €","\\(3{,}5x=35 \\implies x=10\\) km"]},
{n:5,title:"Variations d'une fonction",difficulty:2,type:"automatisme",
statement:`D'après le graphique, détermine :<ol><li>Les intervalles de croissance et décroissance.</li><li>Le maximum et le minimum.</li><li>f(0), f(3), f(6).</li></ol>
<p><em>(Graphique : f croissante sur [0;3], max en (3;5), décroissante sur [3;6], min en (6;1))</em></p>`,
hints:["Une fonction est croissante quand sa courbe monte.","Le maximum est le point le plus haut.","Lis les ordonnées sur le graphique."],
correction:["Croissante sur [0;3], décroissante sur [3;6].","Maximum : 5 atteint en x=3. Minimum : 1 atteint en x=6.","f(0)=1, f(3)=5, f(6)=1."],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t3e5g" width="62.5" height="43.75" patternUnits="userSpaceOnUse">
      <line x1="62.5" y1="0" x2="62.5" y2="350" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
      <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t3e5g)"/>
  <line x1="62.5" y1="15" x2="62.5" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="20" y1="306.25" x2="480" y2="306.25" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="468" y="315" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">x</text>
  <text x="48" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">y</text>
  <text x="20" y="310" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="20" y="220" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="20" y="135" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="20" y="50" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">6</text>
  <text x="55" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="175" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="295" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="410" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">6</text>
  <path d="M62.5,262.5 C120,131 180,87.5 250,87.5 C280,87.5 310,131 437.5,262.5" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="62.5" cy="262.5" r="4" fill="#f97316"/>
  <circle cx="250" cy="87.5" r="4.5" fill="#f97316" stroke="#fff" stroke-width="1.5"/>
  <circle cx="437.5" cy="262.5" r="4" fill="#f97316"/>
  <line x1="62.5" y1="262.5" x2="62.5" y2="325" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="250" y1="87.5" x2="250" y2="325" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="437.5" y1="262.5" x2="437.5" y2="325" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="20" y1="262.5" x2="62.5" y2="262.5" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="20" y1="87.5" x2="250" y2="87.5" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="55" y="255" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">A(0;1)</text>
  <text x="255" y="82" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">B(3;5)</text>
  <text x="440" y="255" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">C(6;1)</text>
  <text x="55" y="185" fill="#10b981" font-size="11" font-family="Inter,sans-serif">↗ croissante</text>
  <text x="280" y="180" fill="#f43f5e" font-size="11" font-family="Inter,sans-serif">↘ décroissante</text>
</svg></div>`},
{n:6,title:"Maximum et minimum",difficulty:2,type:"automatisme",
statement:`Soit \\(f(x)=-2x^2+8x-3\\) sur [0;5].<ol><li>Calcule f(0), f(1), f(2), f(3), f(4), f(5).</li><li>Quel est le maximum ? Pour quelle valeur de x ?</li></ol>`,
hints:["Remplace x par chaque valeur.","Le maximum est la plus grande valeur de f(x) trouvée.","f(2) = −8+16−3 = 5."],
correction:["f(0)=−3, f(1)=3, f(2)=5, f(3)=3, f(4)=−3, f(5)=−13","Maximum = <strong>5</strong> atteint en <strong>x=2</strong>."]},
{n:7,title:"Équation d'une droite",difficulty:2,type:"automatisme",
statement:`<ol><li>Trouve l'équation de la droite passant par A(1;3) et B(4;9).</li><li>Cette droite passe-t-elle par C(6;13) ?</li></ol>`,
hints:["m = (yB−yA)/(xB−xA)","m = (9−3)/(4−1) = 2","y = 2x + p, remplace par A pour trouver p."],
correction:["\\(m=\\frac{9-3}{4-1}=2\\). Avec A : \\(3=2(1)+p \\implies p=1\\). Droite : \\(y=2x+1\\).","f(6)=13 → oui, C est sur la droite. ✓"]},
{n:8,title:"Fonction carré",difficulty:2,type:"automatisme",
statement:`Soit \\(f(x)=x^2\\).<ol><li>Calcule f(−3), f(−1), f(0), f(1), f(3).</li><li>Que remarques-tu pour f(a) et f(−a) ?</li><li>Résous \\(x^2=9\\).</li></ol>`,
hints:["f(−3) = (−3)² = 9.","Compare f(a) et f(−a).","x²=9 a deux solutions."],
correction:["f(−3)=9, f(−1)=1, f(0)=0, f(1)=1, f(3)=9","f(a)=f(−a) : la fonction est <strong>paire</strong> (symétrique/axe des ordonnées).","\\(x=3\\) ou \\(x=-3\\)"]},
{n:9,title:"Résolution graphique f(x)=k",difficulty:3,type:"prepa-bts",
statement:`Soit f la fonction dont la courbe passe par (0;1), (1;3), (2;5), (3;3), (4;1).<ol><li>Résous graphiquement f(x)=3.</li><li>Résous f(x)=1.</li><li>Pour quelles valeurs de x a-t-on f(x)≥3 ?</li></ol>`,
hints:["Trace la droite y=3 et cherche les intersections.","f(x)=1 → cherche les x où la courbe atteint 1.","f(x)≥3 → la courbe est au-dessus de y=3."],
correction:["f(x)=3 → <strong>x=1 ou x=3</strong>","f(x)=1 → <strong>x=0 ou x=4</strong>","f(x)≥3 pour <strong>x∈[1;3]</strong>"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t3e9g" width="83.33" height="43.75" patternUnits="userSpaceOnUse">
      <line x1="83.33" y1="0" x2="83.33" y2="350" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
      <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t3e9g)"/>
  <line x1="30" y1="306.25" x2="470" y2="306.25" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="83.33" y1="15" x2="83.33" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="465" y="315" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">x</text>
  <text x="68" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">y</text>
  <text x="40" y="310" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="40" y="263" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">1</text>
  <text x="40" y="175" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3</text>
  <text x="40" y="88" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">5</text>
  <text x="78" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="165" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">1</text>
  <text x="245" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="330" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3</text>
  <text x="413" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <path d="M83.33,262.5 Q166.66,87.5 250,87.5 Q333.33,87.5 416.66,262.5" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
  <circle cx="83.33" cy="262.5" r="5" fill="#f97316"/>
  <circle cx="166.66" cy="175" r="5" fill="#f97316"/>
  <circle cx="250" cy="87.5" r="6" fill="#f97316" stroke="#fff" stroke-width="2"/>
  <circle cx="333.33" cy="175" r="5" fill="#f97316"/>
  <circle cx="416.66" cy="262.5" r="5" fill="#f97316"/>
  <line x1="30" y1="175" x2="470" y2="175" stroke="#10b981" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="380" y="168" fill="#10b981" font-size="11" font-family="Inter,sans-serif">y=3</text>
  <line x1="30" y1="262.5" x2="470" y2="262.5" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/>
  <text x="380" y="255" fill="#f59e0b" font-size="11" font-family="Inter,sans-serif">y=1</text>
  <line x1="166.66" y1="175" x2="166.66" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="333.33" y1="175" x2="333.33" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="83.33" y1="262.5" x2="83.33" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="416.66" y1="262.5" x2="416.66" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="166.66" cy="175" r="6" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <circle cx="333.33" cy="175" r="6" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <circle cx="83.33" cy="262.5" r="6" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <circle cx="416.66" cy="262.5" r="6" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <g transform="translate(30, 20)">
    <rect x="0" y="0" width="130" height="45" fill="rgba(26,29,39,0.9)" stroke="#353849" stroke-width="1" rx="4"/>
    <text x="8" y="17" fill="#10b981" font-size="10" font-family="Inter,sans-serif">f(x) = 3 → x=1 ; x=3</text>
    <text x="8" y="33" fill="#f59e0b" font-size="10" font-family="Inter,sans-serif">f(x) = 1 → x=0 ; x=4</text>
  </g>
</svg></div>`},
{n:10,title:"Problème : coût et bénéfice",difficulty:3,type:"applique",
statement:`Une entreprise de BTP a un coût de production \\(C(x)=50x+200\\) et un revenu \\(R(x)=80x\\) (x = nombre de m² de mur).<ol><li>Écris le bénéfice \\(B(x)=R(x)-C(x)\\).</li><li>À partir de combien de m² l'entreprise est-elle rentable ?</li></ol>`,
hints:["B(x) = R(x) − C(x) = 80x − (50x+200).","Rentable quand B(x) > 0.","Résous 30x − 200 > 0."],
correction:["\\(B(x)=80x-50x-200=30x-200\\)","\\(30x-200>0 \\implies x>\\frac{200}{30}\\approx6{,}7\\) → Rentable à partir de <strong>7 m²</strong>."],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t3e10g" width="45.45" height="30.45" patternUnits="userSpaceOnUse">
      <line x1="45.45" y1="0" x2="45.45" y2="350" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
      <line x1="0" y1="30.45" x2="500" y2="30.45" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t3e10g)"/>
  <line x1="30" y1="304.5" x2="480" y2="304.5" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="45.45" y1="15" x2="45.45" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="465" y="315" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">m²</text>
  <text x="22" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">€</text>
  <text x="10" y="308" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="10" y="245" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">200</text>
  <text x="10" y="183" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">400</text>
  <text x="10" y="122" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">600</text>
  <text x="10" y="60" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">800</text>
  <text x="40" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="131" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">2</text>
  <text x="222" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">4</text>
  <text x="313" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">6</text>
  <text x="404" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">8</text>
  <text x="460" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">10</text>
  <polyline points="45.45,243.6 136.36,167.1 227.27,90.6 318.18,14.1 409.09,-62.4" fill="none" stroke="#4f9cf7" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="45.45,304.5 136.36,243.6 227.27,182.7 318.18,121.8 409.09,60.9" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="318.18" y1="14.1" x2="318.18" y2="335" stroke="#8b8fa3" stroke-width="1.5" stroke-dasharray="5,4"/>
  <rect x="310" y="30" width="155" height="60" fill="rgba(26,29,39,0.9)" stroke="#2a2d3a" stroke-width="1" rx="4"/>
  <line x1="318" y1="45" x2="340" y2="45" stroke="#4f9cf7" stroke-width="2"/>
  <text x="345" y="49" fill="#4f9cf7" font-size="11" font-family="Inter,sans-serif">C(x) = 50x + 200</text>
  <line x1="318" y1="67" x2="340" y2="67" stroke="#10b981" stroke-width="2"/>
  <text x="345" y="71" fill="#10b981" font-size="11" font-family="Inter,sans-serif">R(x) = 80x</text>
  <circle cx="318.18" cy="121.8" r="4.5" fill="#f97316" stroke="#fff" stroke-width="1.5"/>
  <text x="280" y="115" fill="#f97316" font-size="9" font-family="Inter,sans-serif">≈6,7</text>
</svg></div>`}
]},
// THEME 4
{id:"t4",title:"Géométrie & Mesures",icon:"📐",color:"var(--t4)",bg:"var(--t4-bg)",border:"var(--t4-border)",
subtitle:"Applications directes au bâtiment",
objectif:"Appliquer Pythagore, Thalès, la trigonométrie et les formules d'aires/volumes à des situations de chantier.",
bts:{savoir:'<strong>Calculer</strong> une longueur par Pythagore ou Thalès, un angle par la trigonométrie, une aire ou un volume simple.',pourquoi:'<strong>Plans, coupes, métrés :</strong> en BTS, tu liras des plans d\'exécution, calculeras des surfaces de façade, des volumes de béton, des pentes de toiture, des sections de canalisations.',erreurs:'<strong>Appliquer Pythagore dans un triangle non rectangle.</strong> Oublier de convertir les unités (cm → m) avant de calculer une aire ou un volume.'},
course:`<h3><span class="icon">📐</span> Rappels de cours</h3><div class="course-content">
<p><strong>Pythagore :</strong> Dans un triangle rectangle :</p>
<div class="formula-box">\\(c^2 = a^2 + b^2\\) (c = hypoténuse)</div>
<p><strong>Trigonométrie :</strong></p>
<div class="formula-box">\\(\\sin\\alpha=\\frac{\\text{opposé}}{\\text{hypoténuse}}\\quad\\cos\\alpha=\\frac{\\text{adjacent}}{\\text{hypoténuse}}\\quad\\tan\\alpha=\\frac{\\text{opposé}}{\\text{adjacent}}\\)</div>
<p><strong>Aires :</strong> Rectangle = L×l, Triangle = b×h/2, Disque = πr²</p>
<p><strong>Volumes :</strong> Prisme = Aire base × h, Cylindre = πr²h, Cône = πr²h/3</p>
<div class="key-point tip">💡 SOH-CAH-TOA pour retenir la trigonométrie !</div></div>`,
exercises:[
{n:1,title:"Théorème de Pythagore",difficulty:1,type:"applique",
statement:`<ol><li>Un mur rectangulaire mesure 3 m de large et 4 m de haut. Quelle est la longueur de la diagonale ?</li><li>Une échelle de 5 m est posée à 3 m du mur. À quelle hauteur touche-t-elle le mur ?</li></ol>`,
hints:["Diagonale² = largeur² + hauteur²","c²=a²+b² → 5²=3²+h²","h²=25−9=16"],
correction:["\\(d=\\sqrt{3^2+4^2}=\\sqrt{25}=\\textbf{5 m}\\)","\\(h=\\sqrt{5^2-3^2}=\\sqrt{16}=\\textbf{4 m}\\)"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t4g1" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t4g1)"/>
  <line x1="250" y1="10" x2="250" y2="340" stroke="#2a2d3a" stroke-width="0.5" stroke-dasharray="4,4"/>
  <text x="220" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Pythagore</text>
  <text x="95" y="50" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">Rectangle 3x4</text>
  <text x="340" y="50" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">Echelle 5 m</text>
  <rect x="50" y="70" width="150" height="200" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <line x1="50" y1="270" x2="200" y2="70" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="95" y="295" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">3 m</text>
  <text x="30" y="175" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">4 m</text>
  <text x="100" y="160" fill="#10b981" font-size="13" font-family="Inter,sans-serif">d = ?</text>
  <polyline points="50,270 65,270 65,255" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <line x1="300" y1="270" x2="450" y2="270" stroke="#e8eaf0" stroke-width="2.5"/>
  <line x1="300" y1="270" x2="300" y2="70" stroke="#e8eaf0" stroke-width="2.5"/>
  <line x1="300" y1="270" x2="450" y2="70" stroke="#10b981" stroke-width="2.5"/>
  <line x1="300" y1="270" x2="300" y2="175" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="360" y="293" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">3 m</text>
  <text x="280" y="220" fill="#10b981" font-size="13" font-family="Inter,sans-serif">h = ?</text>
  <text x="350" y="155" fill="#10b981" font-size="13" font-family="Inter,sans-serif">5 m</text>
  <polyline points="300,270 312,270 312,258" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
</svg></div>`},
{n:2,title:"Théorème de Thalès",difficulty:2,type:"applique",
statement:`Sur un plan, deux murs parallèles sont coupés par une ligne de 10 m. Le premier segment mesure 4 m et la hauteur du premier mur est 3 m. Quelle est la hauteur proportionnelle du second mur si le segment correspondant mesure 6 m ?`,
hints:["Thalès : les rapports sont égaux.","4/6 = 3/h","h = 3×6/4"],
correction:["\\(\\frac{4}{6}=\\frac{3}{h} \\implies h=\\frac{3\\times6}{4}=\\textbf{4,5 m}\\)"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t4g2" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t4g2)"/>
  <text x="180" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Thales - Configuration papillon</text>
  <line x1="40" y1="290" x2="460" y2="290" stroke="#e8eaf0" stroke-width="2"/>
  <text x="470" y="294" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">mur</text>
  <line x1="80" y1="50" x2="80" y2="290" stroke="#e8eaf0" stroke-width="2"/>
  <text x="58" y="43" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">mur</text>
  <line x1="80" y1="100" x2="400" y2="290" stroke="#10b981" stroke-width="2.5"/>
  <line x1="80" y1="170" x2="450" y2="290" stroke="#10b981" stroke-width="2.5"/>
  <line x1="130" y1="50" x2="130" y2="290" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="250" y1="50" x2="250" y2="290" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="80" cy="100" r="3.5" fill="#e8eaf0"/>
  <text x="60" y="95" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">O</text>
  <circle cx="400" cy="290" r="3.5" fill="#e8eaf0"/>
  <text x="395" y="308" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">B</text>
  <circle cx="450" cy="290" r="3.5" fill="#e8eaf0"/>
  <text x="445" y="308" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">D</text>
  <circle cx="130" cy="290" r="3.5" fill="#e8eaf0"/>
  <text x="122" y="308" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">A</text>
  <circle cx="250" cy="290" r="3.5" fill="#e8eaf0"/>
  <text x="242" y="308" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">C</text>
  <line x1="130" y1="290" x2="130" y2="280" stroke="#10b981" stroke-width="1.5"/>
  <line x1="250" y1="290" x2="250" y2="280" stroke="#10b981" stroke-width="1.5"/>
  <text x="145" y="286" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">murs paralleles</text>
  <text x="160" y="195" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">OA = 4 m</text>
  <text x="370" y="250" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">OB = 10 m</text>
  <text x="200" y="310" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">OC = 3 m</text>
  <text x="400" y="320" fill="#10b981" font-size="12" font-family="Inter,sans-serif">OD = ?</text>
</svg></div>`},
{n:3,title:"Trigonométrie",difficulty:2,type:"applique",
statement:`<ol><li>Une rampe fait un angle de 15° avec l'horizontale. Pour une hauteur de 1,2 m, quelle est la longueur de la rampe ?</li><li>Un toit a une pente à 35°. La demi-portée est de 5 m. Quelle est la hauteur du pignon ?</li></ol>`,
hints:["sin(15°) = opposé/hypoténuse = 1,2/rampe","rampe = 1,2/sin(15°)","tan(35°) = hauteur/5"],
correction:["Rampe = 1,2/sin(15°) ≈ 1,2/0,259 ≈ <strong>4,63 m</strong>","h = 5×tan(35°) ≈ 5×0,700 ≈ <strong>3,50 m</strong>"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t4g3" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t4g3)"/>
  <line x1="250" y1="10" x2="250" y2="340" stroke="#2a2d3a" stroke-width="0.5" stroke-dasharray="4,4"/>
  <text x="210" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Trigonometrie</text>
  <text x="55" y="50" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">Rampe d'acces</text>
  <text x="345" y="50" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">Charpente de toit</text>
  <polygon points="40,280 200,280 40,100" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <line x1="40" y1="280" x2="200" y2="280" stroke="#e8eaf0" stroke-width="2.5"/>
  <line x1="40" y1="100" x2="40" y2="280" stroke="#e8eaf0" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="100" y="300" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">sol</text>
  <text x="15" y="195" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">1,2 m</text>
  <text x="100" y="185" fill="#10b981" font-size="13" font-family="Inter,sans-serif">L = ?</text>
  <path d="M40,280 A35,35 0 0,0 67,256" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <text x="55" y="265" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">15deg</text>
  <polyline points="40,280 52,280 52,268" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <polygon points="300,280 400,280 300,140" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <line x1="300" y1="280" x2="400" y2="280" stroke="#e8eaf0" stroke-width="2.5"/>
  <line x1="300" y1="140" x2="300" y2="280" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="340" y="300" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">5 m</text>
  <text x="278" y="210" fill="#10b981" font-size="13" font-family="Inter,sans-serif">h = ?</text>
  <text x="310" y="195" fill="#10b981" font-size="13" font-family="Inter,sans-serif">pente</text>
  <path d="M300,280 A30,30 0 0,0 323,258" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <text x="308" y="268" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">35deg</text>
  <polyline points="300,280 310,280 310,270" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <line x1="300" y1="280" x2="350" y2="280" stroke="#10b981" stroke-width="0.5" stroke-dasharray="3,3"/>
</svg></div>`},
{n:4,title:"Aires de figures composées",difficulty:2,type:"applique",
statement:`Une façade a la forme d'un rectangle de 8 m × 5 m surmonté d'un triangle de hauteur 2 m. Calcule l'aire totale de la façade.`,
hints:["Aire = Aire rectangle + Aire triangle.","Rectangle : 8×5.","Triangle : base×hauteur/2 = 8×2/2."],
correction:["Rectangle : 8×5 = 40 m²","Triangle : 8×2/2 = 8 m²","Total = <strong>48 m²</strong>"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t4g4" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t4g4)"/>
  <text x="175" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Aire de facade composee</text>
  <polygon points="80,310 400,310 400,150 80,150" fill="none" stroke="#10b981" stroke-width="2.5"/>
  <polygon points="80,150 400,150 240,50" fill="rgba(16,185,129,0.12)" stroke="#10b981" stroke-width="2.5"/>
  <line x1="240" y1="50" x2="240" y2="150" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="400" y1="150" x2="400" y2="310" stroke="#e8eaf0" stroke-width="1.5"/>
  <line x1="400" y1="150" x2="400" y2="50" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="200" y="335" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif">8 m</text>
  <text x="410" y="235" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">5 m</text>
  <text x="410" y="105" fill="#10b981" font-size="13" font-family="Inter,sans-serif">2 m</text>
  <text x="415" y="170" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">7 m</text>
  <line x1="425" y1="150" x2="425" y2="310" stroke="#e8eaf0" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="425" y1="50" x2="425" y2="150" stroke="#10b981" stroke-width="1" stroke-dasharray="3,3"/>
  <polyline points="80,310 95,310 95,295" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <polyline points="400,310 400,295 415,295" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <line x1="240" y1="50" x2="240" y2="55" stroke="#10b981" stroke-width="1.5"/>
  <text x="120" y="95" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">triangle (toit)</text>
  <text x="140" y="245" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">rectangle (facade)</text>
</svg></div>`},
{n:5,title:"Volumes de solides",difficulty:2,type:"applique",
statement:`<ol><li>Un pilier cylindrique a un rayon de 25 cm et une hauteur de 3 m. Calcule son volume en m³.</li><li>Combien de litres de béton faut-il ?</li></ol>`,
hints:["V = πr²h (tout en mètres !)","r = 0,25 m, h = 3 m","1 m³ = 1000 L"],
correction:["\\(V=\\pi(0{,}25)^2 \\times 3 = \\pi \\times 0{,}0625 \\times 3 ≈ \\textbf{0,589 m³}\\)","0,589 × 1000 ≈ <strong>589 L</strong>"]},
{n:6,title:"Coordonnées dans le plan",difficulty:1,type:"echauffement",
statement:`Soit A(1;2), B(5;2), C(5;6).<ol><li>Place ces points dans un repère.</li><li>Calcule AB, BC et AC.</li><li>Quelle est la nature du triangle ABC ?</li></ol>`,
hints:["AB : même ordonnée → distance = |xB−xA|.","AC : utilise Pythagore.","Compare les côtés."],
correction:["AB = 4, BC = 4","\\(AC=\\sqrt{4^2+4^2}=4\\sqrt{2}\\)","Triangle <strong>rectangle isocèle</strong> en B."]},
{n:7,title:"Vecteurs",difficulty:2,type:"automatisme",
statement:`Soit \\(\\vec{u}(3;-1)\\) et \\(\\vec{v}(-2;4)\\).<ol><li>Calcule \\(\\vec{u}+\\vec{v}\\).</li><li>Calcule \\(2\\vec{u}-\\vec{v}\\).</li><li>Calcule \\(\\|\\vec{u}\\|\\).</li></ol>`,
hints:["On additionne composante par composante.","2u = (6;−2), puis soustrais v.","‖u‖ = √(3²+(−1)²)."],
correction:["\\(\\vec{u}+\\vec{v}=(1;3)\\)","\\(2\\vec{u}-\\vec{v}=(8;-6)\\)","\\(\\|\\vec{u}\\|=\\sqrt{10}≈3{,}16\\)"]},
{n:8,title:"Échelles et agrandissement",difficulty:1,type:"applique",
statement:`<ol><li>Sur un plan au 1/200, une pièce mesure 3,5 cm × 2 cm. Dimensions réelles ?</li><li>Aire réelle de cette pièce ?</li><li>Sur un plan au 1/100, quelle serait la taille de cette pièce ?</li></ol>`,
hints:["1 cm plan = 200 cm réel.","Calcule les dimensions réelles puis l'aire.","Au 1/100 : 1 cm = 100 cm réel."],
correction:["3,5×200=700cm=7m ; 2×200=400cm=4m","Aire = 7×4 = <strong>28 m²</strong>","7m=700cm÷100=7cm ; 4m=400cm÷100=4cm → <strong>7cm×4cm</strong>"]},
{n:9,title:"Sections de solides",difficulty:3,type:"prepa-bts",
statement:`Un réservoir conique a un rayon de base de 2 m et une hauteur de 6 m. On coupe par un plan horizontal à 3 m de hauteur.<ol><li>Quel est le rayon de la section ?</li><li>Quelle est l'aire de cette section ?</li></ol>`,
hints:["Par Thalès : r/2 = 3/6.","r = 1 m.","Aire = πr²."],
correction:["\\(\\frac{r}{2}=\\frac{3}{6} \\implies r=1\\) m","Aire = \\(\\pi(1)^2 = \\pi ≈ \\textbf{3,14 m²}\\)"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t4e9g" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
    <marker id="t4e9arr" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="none" stroke="#e8eaf0" stroke-width="1"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t4e9g)"/>
  <text x="120" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Section de reservoir conique</text>
  <line x1="170" y1="50" x2="170" y2="290" stroke="#e8eaf0" stroke-width="1.5" stroke-dasharray="6,4"/>
  <polygon points="50,60 290,60 170,280" fill="rgba(16,185,129,0.08)" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/>
  <line x1="80" y1="170" x2="260" y2="170" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8,5"/>
  <line x1="170" y1="170" x2="260" y2="170" stroke="#f43f5e" stroke-width="2"/>
  <circle cx="170" cy="170" r="3" fill="#f43f5e"/>
  <circle cx="260" cy="170" r="3" fill="#f43f5e"/>
  <text x="193" y="162" fill="#f43f5e" font-size="14" font-family="Inter,sans-serif" font-weight="bold">r = ?</text>
  <line x1="170" y1="60" x2="290" y2="60" stroke="#e8eaf0" stroke-width="2"/>
  <circle cx="170" cy="60" r="3" fill="#e8eaf0"/>
  <circle cx="290" cy="60" r="3" fill="#e8eaf0"/>
  <text x="210" y="53" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">R = 2 m</text>
  <line x1="310" y1="60" x2="310" y2="280" stroke="#e8eaf0" stroke-width="1" marker-start="url(#t4e9arr)" marker-end="url(#t4e9arr)"/>
  <text x="318" y="178" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">H = 6 m</text>
  <line x1="330" y1="60" x2="330" y2="170" stroke="#10b981" stroke-width="1" marker-start="url(#t4e9arr)" marker-end="url(#t4e9arr)"/>
  <text x="338" y="122" fill="#10b981" font-size="13" font-family="Inter,sans-serif">h = 3 m</text>
  <line x1="170" y1="280" x2="50" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.5"/>
  <line x1="170" y1="280" x2="80" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.5"/>
  <polygon points="170,280 80,170 170,170" fill="rgba(245,158,11,0.1)" stroke="none"/>
  <polyline points="170,170 180,170 180,180" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <polyline points="170,60 180,60 180,70" fill="none" stroke="#e8eaf0" stroke-width="1.5"/>
  <text x="25" y="165" fill="#f59e0b" font-size="10" font-family="Inter,sans-serif">Thales :</text>
  <text x="22" y="180" fill="#f59e0b" font-size="10" font-family="Inter,sans-serif">r/2 = 3/6</text>
  <circle cx="80" cy="170" r="3" fill="#10b981"/>
  <circle cx="260" cy="170" r="3" fill="#10b981"/>
  <circle cx="290" cy="60" r="3" fill="#10b981"/>
  <circle cx="50" cy="60" r="3" fill="#10b981"/>
  <circle cx="170" cy="280" r="3" fill="#10b981"/>
  <line x1="95" y1="165" x2="105" y2="175" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
  <line x1="115" y1="165" x2="125" y2="175" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
  <line x1="135" y1="165" x2="145" y2="175" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
  <line x1="155" y1="165" x2="160" y2="175" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
  <line x1="120" y1="220" x2="125" y2="225" stroke="rgba(16,185,129,0.15)" stroke-width="0.8"/>
  <line x1="190" y1="220" x2="185" y2="225" stroke="rgba(16,185,129,0.15)" stroke-width="0.8"/>
  <line x1="100" y1="150" x2="105" y2="155" stroke="rgba(16,185,129,0.15)" stroke-width="0.8"/>
  <line x1="235" y1="150" x2="230" y2="155" stroke="rgba(16,185,129,0.15)" stroke-width="0.8"/>
</svg></div>`
},
{n:10,title:"Calcul de surfaces (plan)",difficulty:2,type:"applique",
statement:`Un appartement a : salon 5m×4m, cuisine 3m×3m, chambre 4m×3,5m, SDB 2,5m×2m, couloir 5m×1,2m.<ol><li>Calcule l'aire de chaque pièce.</li><li>Calcule la surface totale.</li><li>À 25€/m² pour le carrelage, quel est le coût total ?</li></ol>`,
hints:["Aire rectangle = L×l pour chaque pièce.","Additionne toutes les aires.","Coût = surface × prix au m²."],
correction:["Salon:20, Cuisine:9, Chambre:14, SDB:5, Couloir:6 m²","Total = <strong>54 m²</strong>","54 × 25 = <strong>1 350 €</strong>"]}
]},
{id:"t5",title:"Statistiques à 1 et 2 variables",icon:"📊",color:"var(--t5)",bg:"var(--t5-bg)",border:"var(--t5-border)",
subtitle:"Analyser des données et faire des prévisions",
objectif:"Savoir calculer les indicateurs de base et réaliser un ajustement affine pour prévoir des données.",
bts:{savoir:'<strong>Calculer</strong> moyenne, médiane. <strong>Réaliser</strong> un ajustement affine (nuage de points, équation y=ax+b, coefficient R²).',pourquoi:'<strong>Étude de prix, prévisions :</strong> en BTS, tu évalueras l\'évolution des coûts des matériaux ou prévoiras des temps de main d\'œuvre.',erreurs:'<strong>Confondre x et y</strong> dans l\'équation. Oublier de vérifier le R² avant de faire une prévision.'},
course:`<h3><span class="icon">📊</span> Rappels de cours</h3><div class="course-content">
<p><strong>Statistiques à 1 variable :</strong></p>
<div class="formula-box">\\(\\bar{x}=\\frac{\\sum n_i x_i}{\\sum n_i}\\)</div>
<p><strong>Médiane :</strong> Partage la série ordonnée en deux groupes de même effectif.</p>
<p><strong>Statistiques à 2 variables (Ajustement affine) :</strong></p>
<ul>
<li><strong>Point moyen :</strong> \\(G(\\bar{x} ; \\bar{y})\\)</li>
<li><strong>Droite d'ajustement :</strong> \\(y = ax + b\\) (par la calculatrice)</li>
<li><strong>Coefficient de détermination :</strong> \\(R^2\\). Si \\(R^2 > 0,9\\), l'ajustement est fiable.</li>
</ul>
<div class="key-point tip">💡 La droite d'ajustement sert à estimer une valeur future (ex: prix d'un matériau dans 2 ans).</div></div>`,
exercises:[
{n:1,title:"Moyenne simple et pondérée",difficulty:1,type:"echauffement",
statement:`Les notes d'un élève (coeff) : Maths 12 (3), Physique 14 (2), Techno 16 (4), Français 10 (1).<ol><li>Calcule la moyenne pondérée.</li></ol>`,
hints:["Multiplie chaque note par son coefficient.","Somme = 12×3+14×2+16×4+10×1.","Divise par la somme des coefficients."],
correction:["\\(\\bar{x}=\\frac{36+28+64+10}{3+2+4+1}=\\frac{138}{10}=\\textbf{13,8}\\)"]},
{n:2,title:"Médiane et quartiles",difficulty:1,type:"automatisme",
statement:`Temps de trajet (min) de 9 ouvriers : 12, 15, 18, 20, 22, 25, 30, 35, 45.<ol><li>Quelle est la médiane ?</li><li>Quels sont Q1 et Q3 ?</li></ol>`,
hints:["La médiane est la valeur du milieu (5e sur 9).","Q1 = médiane de la 1re moitié.","Q3 = médiane de la 2e moitié."],
correction:["Médiane = <strong>22 min</strong> (5e valeur)","Q1 = (15+18)/2 = <strong>16,5 min</strong>, Q3 = (30+35)/2 = <strong>32,5 min</strong>"]},
{n:3,title:"Étendue et dispersion",difficulty:1,type:"automatisme",
statement:`Deux fournisseurs livrent du béton. Délais (jours) :<br>A : 3, 4, 5, 5, 6, 7<br>B : 2, 3, 5, 5, 7, 8<ol><li>Calcule la moyenne et l'étendue de chaque fournisseur.</li><li>Lequel est le plus fiable ? Pourquoi ?</li></ol>`,
hints:["Étendue = max − min.","Moyenne : somme ÷ nombre de valeurs.","Le plus fiable a la plus petite étendue."],
correction:["A : moy=5, étendue=4. B : moy=5, étendue=6.","<strong>A est plus fiable</strong> : même moyenne mais moins de dispersion."]},
{n:4,title:"Lecture de diagrammes",difficulty:1,type:"applique",
statement:`Un diagramme circulaire des dépenses d'un chantier montre : Matériaux 40%, Main d'œuvre 35%, Location 15%, Divers 10%. Budget total : 80 000 €.<ol><li>Calcule le montant de chaque poste.</li></ol>`,
hints:["Montant = % × total."],
correction:["Mat:32000€, MO:28000€, Loc:12000€, Div:8000€"]},
{n:5,title:"Fréquences cumulées",difficulty:2,type:"automatisme",
statement:`Notes d'un contrôle : [0;5[:2, [5;10[:5, [10;15[:8, [15;20]:5. Total=20.<ol><li>Calcule les fréquences en %.</li><li>Quel % d'élèves a moins de 10 ?</li></ol>`,
hints:["Fréquence = effectif/total × 100.","Cumul de [0;5[ + [5;10["],
correction:["10%, 25%, 40%, 25%","<strong>35%</strong> ont moins de 10."]},
{n:6,title:"Point moyen (Stat 2 variables)",difficulty:1,type:"echauffement",
statement:`Évolution du prix d'un matériau :<br>Année (x) : 1, 2, 3, 4<br>Prix en € (y) : 10, 12, 15, 17<ol><li>Calcule les coordonnées du point moyen \\(G(\\bar{x} ; \\bar{y})\\).</li></ol>`,
hints:["\\(\\bar{x}\\) est la moyenne des x.","\\(\\bar{y}\\) est la moyenne des y."],
correction:["\\(\\bar{x} = (1+2+3+4)/4 = 2{,}5\\)","\\(\\bar{y} = (10+12+15+17)/4 = 13{,}5\\)","<strong>G(2,5 ; 13,5)</strong>"]},
{n:7,title:"Ajustement affine (calculatrice)",difficulty:2,type:"automatisme",
statement:`À la calculatrice, détermine l'équation de la droite d'ajustement \\(y=ax+b\\) pour les données suivantes :<br>x (mois) : 1, 2, 3, 4, 5<br>y (ventes) : 12, 15, 18, 22, 24`,
hints:["Entre les x en L1 et les y en L2.","Utilise le menu STAT > CALC > LinReg(ax+b)."],
correction:["\\(a = 3{,}1\\) et \\(b = 8{,}9\\)","Équation : <strong>\\(y = 3{,}1x + 8{,}9\\)</strong>"]},
{n:8,title:"Coefficient de détermination",difficulty:2,type:"applique",
statement:`Pour un ajustement, la calculatrice donne \\(r = 0{,}98\\).<ol><li>Calcule le coefficient de détermination \\(R^2\\).</li><li>L'ajustement est-il pertinent ?</li></ol>`,
hints:["\\(R^2 = r \\times r\\)","Compare à 0,9."],
correction:["\\(R^2 = 0{,}98^2 \\approx 0{,}96\\)","Puisque \\(0{,}96 > 0{,}9\\), l'ajustement affine est <strong>très pertinent</strong>."]},
{n:9,title:"Prévision grâce à l'ajustement",difficulty:2,type:"prepa-bts",
statement:`La droite d'ajustement du coût d'un chantier en fonction de sa durée en mois (x) est : \\(y = 1500x + 3200\\).<ol><li>Estime le coût pour un chantier de 8 mois.</li><li>Au bout de combien de mois le coût dépassera-t-il 20 000 € ?</li></ol>`,
hints:["Remplace x par 8.","Résous \\(1500x + 3200 > 20000\\)."],
correction:["\\(y = 1500(8) + 3200 = 15200\\) €","\\(1500x > 16800 \\implies x > 11{,}2\\). Donc au bout de <strong>12 mois</strong>."]},
{n:10,title:"Interpolation et Extrapolation",difficulty:3,type:"synthese",
statement:`On étudie le temps de séchage (y) en fonction de l'épaisseur du mortier (x).<br>x (mm) : 10, 20, 30<br>y (h) : 24, 45, 68<br>L'équation d'ajustement est \\(y = 2{,}2x + 1{,}67\\).<ol><li>Estime le temps de séchage pour 25 mm. S'agit-il d'une interpolation ou d'une extrapolation ?</li><li>Même question pour 50 mm.</li></ol>`,
hints:["Remplace x par 25, puis par 50 dans l'équation.","Interpolation = valeur cherchée à l'intérieur de l'intervalle connu [10;30].","Extrapolation = valeur cherchée en dehors de l'intervalle connu."],
correction:["\\(y = 2{,}2(25) + 1{,}67 = \\textbf{56,67 h}\\). C'est une <strong>interpolation</strong> (25 ∈ [10;30]).","\\(y = 2{,}2(50) + 1{,}67 = \\textbf{111,67 h}\\). C'est une <strong>extrapolation</strong> (50 > 30)."]}
]},
// THEME 6
{id:"t6",title:"Probabilités",icon:"🎲",color:"var(--t6)",bg:"var(--t6-bg)",border:"var(--t6-border)",
subtitle:"Évaluer et quantifier les risques",
objectif:"Maîtriser le calcul de probabilités, les intersections, réunions, probabilités conditionnelles et les arbres pondérés.",
bts:{savoir:'<strong>Calculer</strong> P(A∩B), P(A∪B) et une probabilité conditionnelle. <strong>Construire</strong> un arbre pondéré.',pourquoi:'<strong>Sécurité, contrôle qualité :</strong> en BTS, on évalue la probabilité qu\'une pièce soit défectueuse ou qu\'un incident survienne en croisant plusieurs critères.',erreurs:'<strong>Somme des branches > 1.</strong> Confondre P(A∩B) et P_A(B). Oublier de soustraire l\'intersection dans la formule de P(A∪B).'},
course:`<h3><span class="icon">🎲</span> Rappels de cours</h3><div class="course-content">
<p><strong>Probabilité simple :</strong> \\(P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}\\) ; \\(P(\\bar{A}) = 1 - P(A)\\)</p>
<p><strong>Intersection (ET) et Réunion (OU) :</strong></p>
<div class="formula-box">\\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\)</div>
<p><strong>Probabilité conditionnelle :</strong> Probabilité de B sachant que A est réalisé.</p>
<div class="formula-box">\\(P_A(B) = \\frac{P(A \\cap B)}{P(A)}\\)</div>
<p><strong>Arbre pondéré :</strong><br>
- La somme des probabilités des branches issues d'un même nœud vaut 1.<br>
- Probabilité d'un chemin (Intersection) : \\(P(A \\cap B) = P(A) \\times P_A(B)\\).</p>
</div>`,
exercises:[
{n:1,title:"Probabilité simple",difficulty:1,type:"echauffement",
statement:`Un lot de 50 parpaings contient 3 parpaings fissurés.<ol><li>Quelle est la probabilité de tirer un parpaing fissuré ?</li><li>Un parpaing intact ?</li></ol>`,
hints:["P = cas favorables / cas possibles.","Intact = événement contraire."],
correction:["P(fissuré) = 3/50 = <strong>0,06</strong>","P(intact) = 1 − 0,06 = <strong>0,94</strong>"]},
{n:2,title:"Tableau à double entrée",difficulty:2,type:"automatisme",
statement:`100 fenêtres produites. 60 sont en PVC (dont 5 défectueuses), 40 en Alu (dont 2 défectueuses).<ol><li>P(PVC) ?</li><li>P(Défectueuse sachant Alu) ?</li></ol>`,
hints:["Total PVC / Total général.","Parmi les 40 Alu, combien sont défectueuses ?"],
correction:["P(PVC) = 60/100 = <strong>0,6</strong>","P_Alu(Déf) = 2/40 = <strong>0,05</strong>"]},
{n:3,title:"Intersection et Réunion",difficulty:2,type:"automatisme",
statement:`Soit P(A) = 0,4 ; P(B) = 0,5 ; P(A ∩ B) = 0,15.<ol><li>Que représente A ∩ B ?</li><li>Calcule P(A ∪ B).</li></ol>`,
hints:["∩ signifie ET (les deux en même temps).","Applique la formule du cours pour la réunion."],
correction:["A ∩ B = Événements A <strong>ET</strong> B réalisés en même temps.","P(A ∪ B) = 0,4 + 0,5 − 0,15 = <strong>0,75</strong>"]},
{n:4,title:"Probabilité conditionnelle",difficulty:2,type:"applique",
statement:`Sur un chantier, la probabilité d'avoir du retard (R) est de 0,3. Si on a du retard, la probabilité d'avoir des pénalités (P) est de 0,8.<ol><li>Écris la probabilité conditionnelle donnée.</li><li>Calcule P(R ∩ P).</li></ol>`,
hints:["P(P sachant R) = 0,8.","P(R ∩ P) = P(R) × P_R(P)."],
correction:["\\(P_R(P) = 0{,}8\\)","\\(P(R \\cap P) = 0{,}3 \\times 0{,}8 = \\textbf{0,24}\\)"]},
{n:5,title:"Construction d'un arbre",difficulty:2,type:"automatisme",
statement:`Un ouvrier vient en voiture (0,6) ou en bus (0,4).<br>En voiture, il est en retard avec une probabilité de 0,1.<br>En bus, il est en retard avec une probabilité de 0,2.<ol><li>Construis l'arbre.</li><li>Quelle est la probabilité d'être à l'heure sachant qu'il prend le bus ?</li></ol>`,
hints:["Deux branches au départ, puis deux sous-branches.","L'heure est l'événement contraire du retard."],
correction:["(Arbre tracé au brouillon)","P_Bus(Heure) = 1 − 0,2 = <strong>0,8</strong>"]},
{n:6,title:"Lecture d'un arbre pondéré",difficulty:2,type:"applique",
statement:`Dans un arbre, la première branche va vers A (0,7). De A, on va vers B (0,9).<ol><li>Calcule la probabilité du chemin (A ∩ B).</li><li>Calcule P(A ∩ B barre).</li></ol>`,
hints:["Multiplie les probabilités du chemin.","Branche vers B barre = 1 − 0,9 = 0,1."],
correction:["P(A ∩ B) = 0,7 × 0,9 = <strong>0,63</strong>","P(A ∩ B̅) = 0,7 × 0,1 = <strong>0,07</strong>"]},
{n:7,title:"Probabilités totales",difficulty:3,type:"prepa-bts",
statement:`Suite de l'exercice 5. L'ouvrier prend la voiture (0,6, retard 0,1) ou le bus (0,4, retard 0,2).<ol><li>Calcule la probabilité totale qu'il soit en retard P(R).</li></ol>`,
hints:["Le retard peut arriver en voiture OU en bus. Additionne les deux chemins de retard."],
correction:["P(R) = P(Voiture ∩ Retard) + P(Bus ∩ Retard)","P(R) = (0,6 × 0,1) + (0,4 × 0,2) = 0,06 + 0,08 = <strong>0,14</strong>"]},
{n:8,title:"Inverser une condition",difficulty:3,type:"synthese",
statement:`On sait que P(R) = 0,14 (exercice précédent). Sachant qu'il est en retard, quelle est la probabilité qu'il ait pris le bus ?`,
hints:["On cherche P_R(Bus). Utilise la formule : P(Bus ∩ R) / P(R)."],
correction:["\\(P_R(\\text{Bus}) = \\frac{P(\\text{Bus} \\cap R)}{P(R)}\\)","\\(= \\frac{0{,}08}{0{,}14} \\approx \\textbf{0,571}\\)"]},
{n:9,title:"Indépendance",difficulty:2,type:"prepa-bts",
statement:`Deux événements A et B sont indépendants si P(A ∩ B) = P(A) × P(B).<br>On donne P(A) = 0,4, P(B) = 0,3 et P(A ∩ B) = 0,12.<ol><li>A et B sont-ils indépendants ?</li></ol>`,
hints:["Vérifie si 0,4 × 0,3 est égal à 0,12."],
correction:["P(A) × P(B) = 0,4 × 0,3 = 0,12.","Comme P(A ∩ B) = 0,12, les événements <strong>sont indépendants</strong>."]},
{n:10,title:"Arbre pondéré visuel",difficulty:2,type:"synthese",
statement:`Soit un test de qualité : 80% des pièces sont issues de la machine A, 20% de la B. Defectuosité : A (2%), B (5%).<ol><li>Calcule la probabilité qu'une pièce soit de A ET défectueuse.</li><li>Probabilité totale qu'elle soit défectueuse ?</li></ol>`,
hints:["P(A ∩ Déf) = P(A) × P_A(Déf)","Ajoute P(B ∩ Déf) pour le total."],
correction:["P(A ∩ Déf) = 0,80 × 0,02 = <strong>0,016</strong>","P(Déf) = 0,016 + (0,20 × 0,05) = 0,016 + 0,010 = <strong>0,026</strong>"]
},
{n:11,title:"Exploitation d'un arbre de probabilités",difficulty:3,type:"applique",
statement:`Un constructeur se fournit en béton chez deux centrales. On définit les événements suivants :<br>- <strong>BR</strong> : « La livraison provient de Béton Rapide »<br>- <strong>BP</strong> : « La livraison provient de Béton Plus »<br>- <strong>H</strong> : « La livraison est à l'heure »<br>- <strong>\\(\\bar{H}\\)</strong> : « La livraison est en retard ».<br><br>Observe l'arbre pondéré ci-dessous :<ol><li>Calcule la probabilité que la livraison vienne de BR et soit en retard (\\(\\bar{H}\\)).</li><li>Calcule la probabilité totale d'être en retard.</li></ol>`,
hints:["Chemin BR puis Retard : multiplie les probabilités.","Retard = (BR ∩ Retard) + (BP ∩ Retard)."],
correction:["\\(P(\\text{BR} \\cap \\bar{H}) = 0{,}70 \\times 0{,}05 = \\textbf{0,035}\\)","\\(P(\\bar{H}) = (0{,}7 \\times 0{,}05) + (0{,}3 \\times 0{,}10) = 0{,}035 + 0{,}030 = \\textbf{0,065}\\)"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t6e11g" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
    <marker id="t6e11arr" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#e8eaf0" stroke="none"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t6e11g)"/>
  <text x="130" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Arbre pondere : Livraisons de beton</text>
  <circle cx="60" cy="175" r="4" fill="#eab308" stroke="#eab308" stroke-width="2"/>
  <line x1="64" y1="175" x2="220" y2="100" stroke="#e8eaf0" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="220" cy="100" r="4" fill="#eab308" stroke="#eab308" stroke-width="2"/>
  <text x="115" y="120" fill="#eab308" font-size="13" font-family="Inter,sans-serif">BR</text>
  <text x="125" y="138" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,70</text>
  <line x1="64" y1="175" x2="220" y2="250" stroke="#e8eaf0" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="220" cy="250" r="4" fill="#eab308" stroke="#eab308" stroke-width="2"/>
  <text x="115" y="255" fill="#eab308" font-size="13" font-family="Inter,sans-serif">BP</text>
  <text x="125" y="270" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,30</text>
  <line x1="224" y1="100" x2="380" y2="50" stroke="#10b981" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="380" cy="50" r="4" fill="#10b981" stroke="#10b981" stroke-width="2"/>
  <text x="278" y="55" fill="#10b981" font-size="13" font-family="Inter,sans-serif">H</text>
  <text x="295" y="75" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,95</text>
  <line x1="224" y1="100" x2="380" y2="150" stroke="#f43f5e" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="380" cy="150" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="278" y="150" fill="#f43f5e" font-size="13" font-family="Inter,sans-serif"><tspan text-decoration="overline">H</tspan></text>
  <text x="295" y="168" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,05</text>
  <line x1="224" y1="250" x2="380" y2="200" stroke="#10b981" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="380" cy="200" r="4" fill="#10b981" stroke="#10b981" stroke-width="2"/>
  <text x="278" y="210" fill="#10b981" font-size="13" font-family="Inter,sans-serif">H</text>
  <text x="295" y="228" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,90</text>
  <line x1="224" y1="250" x2="380" y2="300" stroke="#f43f5e" stroke-width="2" marker-end="url(#t6e11arr)"/>
  <circle cx="380" cy="300" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="278" y="303" fill="#f43f5e" font-size="13" font-family="Inter,sans-serif"><tspan text-decoration="overline">H</tspan></text>
  <text x="295" y="321" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">0,10</text>
</svg></div>`
}
]}
);
