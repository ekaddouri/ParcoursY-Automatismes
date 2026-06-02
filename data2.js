// data2.js — Thèmes 3, 4, 5
THEMES.push(
{id:"t3",title:"Fonctions",icon:"📈",color:"var(--t3)",bg:"var(--t3-bg)",border:"var(--t3-border)",
subtitle:"Lire, interpréter, exploiter les fonctions",
course:`<h3><span class="icon">📈</span> Rappels de cours</h3><div class="course-content">
<p><strong>Image :</strong> \\(f(a)\\) est l'image de \\(a\\) par \\(f\\).</p>
<p><strong>Antécédent :</strong> Si \\(f(a)=b\\), alors \\(a\\) est un antécédent de \\(b\\).</p>
<div class="formula-box">\\text{Fonction affine : } f(x)=mx+p</div>
<p>\\(m\\) = coefficient directeur (pente), \\(p\\) = ordonnée à l'origine.</p>
<div class="formula-box">m=\\frac{y_B-y_A}{x_B-x_A}</div>
<div class="key-point tip">💡 En BTS, les fonctions modélisent coûts, résistances, températures…</div></div>`,
exercises:[
{n:1,title:"Images et antécédents",
statement:`Soit \\(f(x)=2x-3\\).<ol><li>Calcule \\(f(4)\\), \\(f(-1)\\), \\(f(0)\\).</li><li>Trouve l'antécédent de 7.</li></ol>`,
hints:["Remplace x par la valeur donnée.","Pour l'antécédent de 7 : résous 2x−3=7."],
correction:["\\(f(4)=5\\), \\(f(-1)=-5\\), \\(f(0)=-3\\)","\\(2x-3=7 \\implies x=5\\)"]},
{n:2,title:"Tableau de valeurs",
statement:`Soit \\(f(x)=-x^2+4\\). Complète le tableau pour x∈{−3,−2,−1,0,1,2,3} et trace la courbe.`,
hints:["Remplace x par chaque valeur.","f(−3)=−9+4=−5.","La courbe est une parabole tournée vers le bas."],
correction:["f(−3)=−5, f(−2)=0, f(−1)=3, f(0)=4, f(1)=3, f(2)=0, f(3)=−5","Parabole de sommet (0;4), coupant l'axe des x en −2 et 2."],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="grid1" width="62.5" height="29.166" patternUnits="userSpaceOnUse">
      <line x1="62.5" y1="0" x2="62.5" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="29.166" x2="500" y2="29.166" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#grid1)"/>
  <line x1="62.5" y1="0" x2="62.5" y2="350" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="0" y1="175" x2="500" y2="175" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="30" y1="175" x2="470" y2="175" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="62.5" y1="15" x2="62.5" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="460" y="180" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">x</text>
  <text x="50" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">y</text>
  <text x="60" y="358" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-4</text>
  <text x="185" y="358" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-2</text>
  <text x="295" y="358" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="420" y="358" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="445" y="358" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="18" y="178" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="18" y="90" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="18" y="265" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-4</text>
  <path d="M155,320 C205,280 230,210 250,175 C270,210 295,280 345,320" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="155" cy="320" r="3.5" fill="#f97316"/>
  <circle cx="210" cy="175" r="3.5" fill="#f97316"/>
  <circle cx="230" cy="88" r="3.5" fill="#f97316"/>
  <circle cx="250" cy="58" r="3.5" fill="#f97316"/>
  <circle cx="270" cy="88" r="3.5" fill="#f97316"/>
  <circle cx="290" cy="175" r="3.5" fill="#f97316"/>
  <circle cx="345" cy="320" r="3.5" fill="#f97316"/>
</svg></div>`},
{n:3,title:"Fonction linéaire",
statement:`<ol><li>La consommation d'eau d'un chantier est proportionnelle au temps : 120 L/h. Écris f(t).</li><li>Calcule la consommation pour 8h.</li><li>Combien de temps pour 1800 L ?</li></ol>`,
hints:["f(t) = 120t","f(8) = ?","Résous 120t = 1800."],
correction:["\\(f(t)=120t\\)","\\(f(8)=960\\) L","\\(t=1800÷120=15\\) h"]},
{n:4,title:"Fonction affine",
statement:`Un taxi facture 3,50 € le km + 5 € de prise en charge.<ol><li>Écris f(x) le coût pour x km.</li><li>Coût pour 12 km ?</li><li>Avec 40 €, combien de km maximum ?</li></ol>`,
hints:["f(x) = 3,50x + 5","f(12) = ?","Résous 3,50x + 5 = 40."],
correction:["\\(f(x)=3{,}5x+5\\)","\\(f(12)=47\\) €","\\(3{,}5x=35 \\implies x=10\\) km"]},
{n:5,title:"Variations d'une fonction",
statement:`D'après le graphique, détermine :<ol><li>Les intervalles de croissance et décroissance.</li><li>Le maximum et le minimum.</li><li>f(0), f(3), f(6).</li></ol>
<p><em>(Graphique : f croissante sur [0;3], max en (3;5), décroissante sur [3;6], min en (6;1))</em></p>`,
hints:["Une fonction est croissante quand sa courbe monte.","Le maximum est le point le plus haut.","Lis les ordonnées sur le graphique."],
correction:["Croissante sur [0;3], décroissante sur [3;6].","Maximum : 5 atteint en x=3. Minimum : 1 atteint en x=6.","f(0)=1, f(3)=5, f(6)=1."],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="grid2" width="62.5" height="43.75" patternUnits="userSpaceOnUse">
      <line x1="62.5" y1="0" x2="62.5" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#grid2)"/>
  <line x1="62.5" y1="0" x2="62.5" y2="350" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="30" y1="306.25" x2="470" y2="306.25" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="62.5" y1="15" x2="62.5" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="465" y="315" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">x</text>
  <text x="45" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">y</text>
  <text x="20" y="310" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="20" y="220" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="20" y="135" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="20" y="50" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">6</text>
  <text x="55" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="175" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="295" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">4</text>
  <text x="410" y="325" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">6</text>
  <path d="M62.5,306.25 C120,220 180,135 250,131 C280,131 310,175 375,306.25" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="62.5" cy="306.25" r="3.5" fill="#f97316"/>
  <circle cx="250" cy="131" r="3.5" fill="#f97316"/>
  <circle cx="375" cy="306.25" r="3.5" fill="#f97316"/>
  <line x1="62.5" y1="306.25" x2="62.5" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="250" y1="131" x2="250" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="375" y1="306.25" x2="375" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="30" y1="306.25" x2="62.5" y2="306.25" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="30" y1="131" x2="250" y2="131" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="65" y="348" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">A(0;1)</text>
  <text x="250" y="125" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">B(3;5)</text>
  <text x="375" y="348" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">C(6;1)</text>
</svg></div>`},
{n:6,title:"Maximum et minimum",
statement:`Soit \\(f(x)=-2x^2+8x-3\\) sur [0;5].<ol><li>Calcule f(0), f(1), f(2), f(3), f(4), f(5).</li><li>Quel est le maximum ? Pour quelle valeur de x ?</li></ol>`,
hints:["Remplace x par chaque valeur.","Le maximum est la plus grande valeur de f(x) trouvée.","f(2) = −8+16−3 = 5."],
correction:["f(0)=−3, f(1)=3, f(2)=5, f(3)=3, f(4)=−3, f(5)=−13","Maximum = <strong>5</strong> atteint en <strong>x=2</strong>."]},
{n:7,title:"Équation d'une droite",
statement:`<ol><li>Trouve l'équation de la droite passant par A(1;3) et B(4;9).</li><li>Cette droite passe-t-elle par C(6;13) ?</li></ol>`,
hints:["m = (yB−yA)/(xB−xA)","m = (9−3)/(4−1) = 2","y = 2x + p, remplace par A pour trouver p."],
correction:["\\(m=\\frac{9-3}{4-1}=2\\). Avec A : \\(3=2(1)+p \\implies p=1\\). Droite : \\(y=2x+1\\).","f(6)=13 → oui, C est sur la droite. ✓"]},
{n:8,title:"Fonction carré",
statement:`Soit \\(f(x)=x^2\\).<ol><li>Calcule f(−3), f(−1), f(0), f(1), f(3).</li><li>Que remarques-tu pour f(a) et f(−a) ?</li><li>Résous \\(x^2=9\\).</li></ol>`,
hints:["f(−3) = (−3)² = 9.","Compare f(a) et f(−a).","x²=9 a deux solutions."],
correction:["f(−3)=9, f(−1)=1, f(0)=0, f(1)=1, f(3)=9","f(a)=f(−a) : la fonction est <strong>paire</strong> (symétrique/axe des ordonnées).","\\(x=3\\) ou \\(x=-3\\)"]},
{n:9,title:"Résolution graphique f(x)=k",
statement:`Soit f la fonction dont la courbe passe par (0;1), (1;3), (2;5), (3;3), (4;1).<ol><li>Résous graphiquement f(x)=3.</li><li>Résous f(x)=1.</li><li>Pour quelles valeurs de x a-t-on f(x)≥3 ?</li></ol>`,
hints:["Trace la droite y=3 et cherche les intersections.","f(x)=1 → cherche les x où la courbe atteint 1.","f(x)≥3 → la courbe est au-dessus de y=3."],
correction:["f(x)=3 → <strong>x=1 ou x=3</strong>","f(x)=1 → <strong>x=0 ou x=4</strong>","f(x)≥3 pour <strong>x∈[1;3]</strong>"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="grid3" width="83.33" height="43.75" patternUnits="userSpaceOnUse">
      <line x1="83.33" y1="0" x2="83.33" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#grid3)"/>
  <line x1="83.33" y1="0" x2="83.33" y2="350" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="0" y1="43.75" x2="500" y2="43.75" stroke="#2a2d3a" stroke-width="0.5"/>
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
  <path d="M83.33,306.25 C120,220 160,131 208,88 C240,65 260,65 292,88 C340,131 380,220 416,306.25" fill="none" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="83.33" cy="306.25" r="3.5" fill="#f97316"/>
  <circle cx="166.66" cy="175" r="3.5" fill="#f97316"/>
  <circle cx="250" cy="88" r="3.5" fill="#f97316"/>
  <circle cx="333.33" cy="175" r="3.5" fill="#f97316"/>
  <circle cx="416.66" cy="306.25" r="3.5" fill="#f97316"/>
  <line x1="30" y1="175" x2="470" y2="175" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="380" y="168" fill="#10b981" font-size="11" font-family="Inter,sans-serif">y=3</text>
  <line x1="30" y1="306.25" x2="470" y2="306.25" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="380" y="300" fill="#f59e0b" font-size="11" font-family="Inter,sans-serif">y=1</text>
  <line x1="166.66" y1="175" x2="166.66" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="333.33" y1="175" x2="333.33" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="83.33" y1="306.25" x2="83.33" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="416.66" y1="306.25" x2="416.66" y2="335" stroke="#8b8fa3" stroke-width="1" stroke-dasharray="3,3"/>
  <circle cx="166.66" cy="175" r="4" fill="none" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="333.33" cy="175" r="4" fill="none" stroke="#10b981" stroke-width="1.5"/>
  <circle cx="83.33" cy="306.25" r="4" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <circle cx="416.66" cy="306.25" r="4" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
</svg></div>`},
{n:10,title:"Problème : coût et bénéfice",
statement:`Une entreprise de BTP a un coût de production \\(C(x)=50x+200\\) et un revenu \\(R(x)=80x\\) (x = nombre de m² de mur).<ol><li>Écris le bénéfice \\(B(x)=R(x)-C(x)\\).</li><li>À partir de combien de m² l'entreprise est-elle rentable ?</li></ol>`,
hints:["B(x) = R(x) − C(x) = 80x − (50x+200).","Rentable quand B(x) > 0.","Résous 30x − 200 > 0."],
correction:["\\(B(x)=80x-50x-200=30x-200\\)","\\(30x-200>0 \\implies x>\\frac{200}{30}\\approx6{,}7\\) → Rentable à partir de <strong>7 m²</strong>."],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="grid4" width="37.88" height="30.45" patternUnits="userSpaceOnUse">
      <line x1="37.88" y1="0" x2="37.88" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="30.45" x2="500" y2="30.45" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#grid4)"/>
  <line x1="37.88" y1="0" x2="37.88" y2="350" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="0" y1="304.5" x2="500" y2="304.5" stroke="#2a2d3a" stroke-width="0.5"/>
  <line x1="37.88" y1="15" x2="37.88" y2="335" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="30" y1="304.5" x2="470" y2="304.5" stroke="#8b8fa3" stroke-width="1.5"/>
  <polyline points="37.88,304.5 227.27,228.38 340.91,182.12 454.55,136" fill="none" stroke="#4f9cf7" stroke-width="2.5" stroke-linecap="round"/>
  <polyline points="37.88,304.5 151.52,213.08 265.15,121.67 378.79,30.25" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round"/>
  <text x="455" y="315" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">m²</text>
  <text x="22" y="25" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif">€</text>
  <text x="10" y="308" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="10" y="245" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">200</text>
  <text x="10" y="183" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">400</text>
  <text x="10" y="122" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">600</text>
  <text x="10" y="60" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">800</text>
  <text x="33" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">0</text>
  <text x="110" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">2</text>
  <text x="185" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">4</text>
  <text x="260" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">6</text>
  <text x="335" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">8</text>
  <text x="410" y="325" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">10</text>
  <line x1="265.15" y1="121.67" x2="265.15" y2="335" stroke="#8b8fa3" stroke-width="1.5" stroke-dasharray="5,4"/>
  <rect x="310" y="30" width="155" height="60" fill="rgba(26,29,39,0.9)" stroke="#2a2d3a" stroke-width="1" rx="4"/>
  <line x1="318" y1="45" x2="340" y2="45" stroke="#4f9cf7" stroke-width="2"/>
  <text x="345" y="49" fill="#4f9cf7" font-size="11" font-family="Inter,sans-serif">C(x) = 50x + 200</text>
  <line x1="318" y1="67" x2="340" y2="67" stroke="#10b981" stroke-width="2"/>
  <text x="345" y="71" fill="#10b981" font-size="11" font-family="Inter,sans-serif">R(x) = 80x</text>
  <circle cx="265.15" cy="121.67" r="4" fill="#f97316"/>
  <text x="240" y="115" fill="#f97316" font-size="9" font-family="Inter,sans-serif">≈6,7</text>
</svg></div>`}
]},
// THEME 4
{id:"t4",title:"Géométrie & Mesures",icon:"📐",color:"var(--t4)",bg:"var(--t4-bg)",border:"var(--t4-border)",
subtitle:"Applications directes au bâtiment",
course:`<h3><span class="icon">📐</span> Rappels de cours</h3><div class="course-content">
<p><strong>Pythagore :</strong> Dans un triangle rectangle :</p>
<div class="formula-box">\\(c^2 = a^2 + b^2\\) (c = hypoténuse)</div>
<p><strong>Trigonométrie :</strong></p>
<div class="formula-box">\\(\\sin\\alpha=\\frac{\\text{opposé}}{\\text{hypoténuse}}\\quad\\cos\\alpha=\\frac{\\text{adjacent}}{\\text{hypoténuse}}\\quad\\tan\\alpha=\\frac{\\text{opposé}}{\\text{adjacent}}\\)</div>
<p><strong>Aires :</strong> Rectangle = L×l, Triangle = b×h/2, Disque = πr²</p>
<p><strong>Volumes :</strong> Prisme = Aire base × h, Cylindre = πr²h, Cône = πr²h/3</p>
<div class="key-point tip">💡 SOH-CAH-TOA pour retenir la trigonométrie !</div></div>`,
exercises:[
{n:1,title:"Théorème de Pythagore",
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
{n:2,title:"Théorème de Thalès",
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
{n:3,title:"Trigonométrie",
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
{n:4,title:"Aires de figures composées",
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
{n:5,title:"Volumes de solides",
statement:`<ol><li>Un pilier cylindrique a un rayon de 25 cm et une hauteur de 3 m. Calcule son volume en m³.</li><li>Combien de litres de béton faut-il ?</li></ol>`,
hints:["V = πr²h (tout en mètres !)","r = 0,25 m, h = 3 m","1 m³ = 1000 L"],
correction:["\\(V=\\pi(0{,}25)^2 \\times 3 = \\pi \\times 0{,}0625 \\times 3 ≈ \\textbf{0,589 m³}\\)","0,589 × 1000 ≈ <strong>589 L</strong>"]},
{n:6,title:"Coordonnées dans le plan",
statement:`Soit A(1;2), B(5;2), C(5;6).<ol><li>Place ces points dans un repère.</li><li>Calcule AB, BC et AC.</li><li>Quelle est la nature du triangle ABC ?</li></ol>`,
hints:["AB : même ordonnée → distance = |xB−xA|.","AC : utilise Pythagore.","Compare les côtés."],
correction:["AB = 4, BC = 4","\\(AC=\\sqrt{4^2+4^2}=4\\sqrt{2}\\)","Triangle <strong>rectangle isocèle</strong> en B."]},
{n:7,title:"Vecteurs",
statement:`Soit \\(\\vec{u}(3;-1)\\) et \\(\\vec{v}(-2;4)\\).<ol><li>Calcule \\(\\vec{u}+\\vec{v}\\).</li><li>Calcule \\(2\\vec{u}-\\vec{v}\\).</li><li>Calcule \\(\\|\\vec{u}\\|\\).</li></ol>`,
hints:["On additionne composante par composante.","2u = (6;−2), puis soustrais v.","‖u‖ = √(3²+(−1)²)."],
correction:["\\(\\vec{u}+\\vec{v}=(1;3)\\)","\\(2\\vec{u}-\\vec{v}=(8;-6)\\)","\\(\\|\\vec{u}\\|=\\sqrt{10}≈3{,}16\\)"]},
{n:8,title:"Échelles et agrandissement",
statement:`<ol><li>Sur un plan au 1/200, une pièce mesure 3,5 cm × 2 cm. Dimensions réelles ?</li><li>Aire réelle de cette pièce ?</li><li>Sur un plan au 1/100, quelle serait la taille de cette pièce ?</li></ol>`,
hints:["1 cm plan = 200 cm réel.","Calcule les dimensions réelles puis l'aire.","Au 1/100 : 1 cm = 100 cm réel."],
correction:["3,5×200=700cm=7m ; 2×200=400cm=4m","Aire = 7×4 = <strong>28 m²</strong>","7m=700cm÷100=7cm ; 4m=400cm÷100=4cm → <strong>7cm×4cm</strong>"]},
{n:9,title:"Sections de solides",
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
{n:10,title:"Calcul de surfaces (plan)",
statement:`Un appartement a : salon 5m×4m, cuisine 3m×3m, chambre 4m×3,5m, SDB 2,5m×2m, couloir 5m×1,2m.<ol><li>Calcule l'aire de chaque pièce.</li><li>Calcule la surface totale.</li><li>À 25€/m² pour le carrelage, quel est le coût total ?</li></ol>`,
hints:["Aire rectangle = L×l pour chaque pièce.","Additionne toutes les aires.","Coût = surface × prix au m²."],
correction:["Salon:20, Cuisine:9, Chambre:14, SDB:5, Couloir:6 m²","Total = <strong>54 m²</strong>","54 × 25 = <strong>1 350 €</strong>"]}
]},
// THEME 5
{id:"t5",title:"Statistiques & Probabilités",icon:"📊",color:"var(--t5)",bg:"var(--t5-bg)",border:"var(--t5-border)",
subtitle:"Analyser des données, évaluer des risques",
course:`<h3><span class="icon">📊</span> Rappels de cours</h3><div class="course-content">
<p><strong>Moyenne pondérée :</strong></p>
<div class="formula-box">\\bar{x}=\\frac{\\sum n_i x_i}{\\sum n_i}</div>
<p><strong>Médiane :</strong> Valeur qui partage la série en deux groupes de même effectif.</p>
<p><strong>Probabilité :</strong></p>
<div class="formula-box">P(A)=\\frac{\\text{Nombre de cas favorables}}{\\text{Nombre de cas possibles}}</div>
<p><strong>Événement contraire :</strong> \\(P(\\bar{A})=1-P(A)\\)</p>
<div class="key-point tip">💡 Les stats servent en BTS pour analyser les coûts, délais, contrôles qualité…</div></div>`,
exercises:[
{n:1,title:"Moyenne simple et pondérée",
statement:`Les notes d'un élève (coeff) : Maths 12 (3), Physique 14 (2), Techno 16 (4), Français 10 (1).<ol><li>Calcule la moyenne pondérée.</li></ol>`,
hints:["Multiplie chaque note par son coefficient.","Somme = 12×3+14×2+16×4+10×1.","Divise par la somme des coefficients."],
correction:["\\(\\bar{x}=\\frac{36+28+64+10}{3+2+4+1}=\\frac{138}{10}=\\textbf{13,8}\\)"]},
{n:2,title:"Médiane et quartiles",
statement:`Temps de trajet (min) de 9 ouvriers : 12, 15, 18, 20, 22, 25, 30, 35, 45.<ol><li>Quelle est la médiane ?</li><li>Quels sont Q1 et Q3 ?</li></ol>`,
hints:["La médiane est la valeur du milieu (5e sur 9).","Q1 = médiane de la 1re moitié.","Q3 = médiane de la 2e moitié."],
correction:["Médiane = <strong>22 min</strong> (5e valeur)","Q1 = (15+18)/2 = <strong>16,5 min</strong>, Q3 = (30+35)/2 = <strong>32,5 min</strong>"]},
{n:3,title:"Étendue et dispersion",
statement:`Deux fournisseurs livrent du béton. Délais (jours) :<br>A : 3, 4, 5, 5, 6, 7<br>B : 2, 3, 5, 5, 7, 8<ol><li>Calcule la moyenne et l'étendue de chaque fournisseur.</li><li>Lequel est le plus fiable ? Pourquoi ?</li></ol>`,
hints:["Étendue = max − min.","Moyenne : somme ÷ nombre de valeurs.","Le plus fiable a la plus petite étendue."],
correction:["A : moy=5, étendue=4. B : moy=5, étendue=6.","<strong>A est plus fiable</strong> : même moyenne mais moins de dispersion."]},
{n:4,title:"Lecture de diagrammes",
statement:`Un diagramme circulaire des dépenses d'un chantier montre : Matériaux 40%, Main d'œuvre 35%, Location 15%, Divers 10%. Budget total : 80 000 €.<ol><li>Calcule le montant de chaque poste.</li><li>Quel angle correspond à chaque secteur ?</li></ol>`,
hints:["Montant = % × total.","Angle = % × 360°.","40% × 360° = ?"],
correction:["Mat:32000€, MO:28000€, Loc:12000€, Div:8000€","Mat:144°, MO:126°, Loc:54°, Div:36°"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t5e4g" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t5e4g)"/>
  <text x="125" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Budget chantier : 80 000 €</text>
  <path d="M250,170 L250,50 A120,120 0 0,1 320.5,267.1 Z" fill="#f43f5e" stroke="#1a1d27" stroke-width="2"/>
  <path d="M250,170 L320.5,267.1 A120,120 0 0,1 130,170 Z" fill="#fb7185" stroke="#1a1d27" stroke-width="2"/>
  <path d="M250,170 L130,170 A120,120 0 0,1 179.5,72.9 Z" fill="#fda4af" stroke="#1a1d27" stroke-width="2"/>
  <path d="M250,170 L179.5,72.9 A120,120 0 0,1 250,50 Z" fill="#fecdd3" stroke="#1a1d27" stroke-width="2"/>
  <circle cx="250" cy="170" r="3" fill="#e8eaf0"/>
  <rect x="360" y="80" width="12" height="12" fill="#f43f5e" rx="2"/>
  <text x="378" y="91" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">Matériaux 40% — 32 000€</text>
  <rect x="360" y="110" width="12" height="12" fill="#fb7185" rx="2"/>
  <text x="378" y="121" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">Main d'œuvre 35% — 28 000€</text>
  <rect x="360" y="140" width="12" height="12" fill="#fda4af" rx="2"/>
  <text x="378" y="151" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">Location 15% — 12 000€</text>
  <rect x="360" y="170" width="12" height="12" fill="#fecdd3" rx="2"/>
  <text x="378" y="181" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">Divers 10% — 8 000€</text>
  <text x="265" y="100" fill="#fff" font-size="11" font-family="Inter,sans-serif" font-weight="bold">40%</text>
  <text x="200" y="265" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif" font-weight="bold">35%</text>
  <text x="140" y="130" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif" font-weight="bold">15%</text>
  <text x="200" y="65" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif" font-weight="bold">10%</text>
</svg></div>`},
{n:5,title:"Fréquences cumulées",
statement:`Notes d'un contrôle : [0;5[:2, [5;10[:5, [10;15[:8, [15;20]:5. Total=20.<ol><li>Calcule les fréquences en %.</li><li>Calcule les fréquences cumulées croissantes.</li><li>Quel % d'élèves a moins de 10 ?</li></ol>`,
hints:["Fréquence = effectif/total × 100.","Cumul : additionne les fréquences au fur et à mesure.","Cumul de [0;5[ + [5;10[ = ?"],
correction:["10%, 25%, 40%, 25%","10%, 35%, 75%, 100%","<strong>35%</strong> ont moins de 10."]},
{n:6,title:"Probabilité simple",
statement:`Un sac contient 4 billes rouges, 3 bleues, 2 vertes, 1 jaune.<ol><li>Quelle est la probabilité de tirer une bille rouge ?</li><li>Une bille qui n'est pas verte ?</li><li>Une bille rouge ou bleue ?</li></ol>`,
hints:["P = cas favorables / cas possibles. Total = 10.","P(pas verte) = 1 − P(verte).","P(R ou B) = P(R) + P(B)."],
correction:["P(R) = 4/10 = <strong>2/5</strong>","P(pas verte) = 1−2/10 = <strong>4/5</strong>","P(R ou B) = 7/10 = <strong>0,7</strong>"]},
{n:7,title:"Événement contraire",
statement:`La probabilité qu'une livraison arrive à l'heure est 0,85.<ol><li>Quelle est la probabilité qu'elle soit en retard ?</li><li>Sur 20 livraisons, combien peut-on attendre en retard ?</li></ol>`,
hints:["P(retard) = 1 − P(à l'heure).","Nombre attendu = probabilité × nombre total."],
correction:["P(retard) = 1−0,85 = <strong>0,15</strong>","20 × 0,15 = <strong>3 livraisons</strong>"]},
{n:8,title:"Tableau à double entrée",
statement:`120 ouvriers : 50 maçons (40 avec permis), 70 électriciens (45 avec permis).<ol><li>Complète le tableau.</li><li>P(maçon) ?</li><li>P(permis sachant maçon) ?</li></ol>`,
hints:["Maçons sans permis = 50−40.","P(maçon) = 50/120.","P(permis|maçon) = 40/50."],
correction:["Sans permis : maçons 10, élec 25, total 35","P(maçon) = 50/120 ≈ <strong>0,417</strong>","P(permis|maçon) = 40/50 = <strong>0,8</strong>"]},
{n:9,title:"Arbre de probabilités",
statement:`Un contrôle qualité : 90% des pièces sont conformes. Parmi les conformes, 95% passent le test. Parmi les non-conformes, 20% passent quand même.<ol><li>Construis l'arbre.</li><li>P(conforme ET passe) ?</li><li>P(passe le test) ?</li></ol>`,
hints:["Branche 1 : conforme (0,9) puis passe (0,95) ou non.","Branche 2 : non conforme (0,1) puis passe (0,2) ou non.","Multiplie le long des branches."],
correction:["P(C∩P) = 0,9×0,95 = <strong>0,855</strong>","P(P) = 0,9×0,95 + 0,1×0,20 = 0,855+0,02 = <strong>0,875</strong>"],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t5e9g" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.6)" stroke-width="0.5"/>
    </pattern>
    <marker id="t5e9arr" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="5" markerHeight="5" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#e8eaf0" stroke="none"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t5e9g)"/>
  <text x="140" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Arbre de probabilites pondere</text>
  <circle cx="60" cy="175" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="45" y="193" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">Depart</text>
  <line x1="64" y1="175" x2="220" y2="100" stroke="#e8eaf0" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="220" cy="100" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="115" y="120" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">Conforme</text>
  <text x="125" y="138" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,9)</text>
  <line x1="64" y1="175" x2="220" y2="250" stroke="#e8eaf0" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="220" cy="250" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="105" y="255" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif">Non conforme</text>
  <text x="108" y="270" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,1)</text>
  <line x1="224" y1="100" x2="380" y2="50" stroke="#10b981" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="380" cy="50" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="278" y="55" fill="#10b981" font-size="12" font-family="Inter,sans-serif">Passe</text>
  <text x="295" y="75" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,95)</text>
  <line x1="224" y1="100" x2="380" y2="150" stroke="#f43f5e" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="380" cy="150" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="273" y="150" fill="#f43f5e" font-size="12" font-family="Inter,sans-serif">Ne passe pas</text>
  <text x="273" y="168" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,05)</text>
  <line x1="224" y1="250" x2="380" y2="200" stroke="#10b981" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="380" cy="200" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="278" y="210" fill="#10b981" font-size="12" font-family="Inter,sans-serif">Passe</text>
  <text x="295" y="228" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,20)</text>
  <line x1="224" y1="250" x2="380" y2="300" stroke="#f43f5e" stroke-width="2" marker-end="url(#t5e9arr)"/>
  <circle cx="380" cy="300" r="4" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"/>
  <text x="273" y="303" fill="#f43f5e" font-size="12" font-family="Inter,sans-serif">Ne passe pas</text>
  <text x="273" y="321" fill="#8b8fa3" font-size="11" font-family="Inter,sans-serif">(0,80)</text>
  <text x="400" y="45" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">C ∩ P</text>
  <text x="400" y="60" fill="#8b8fa3" font-size="12" font-family="Inter,sans-serif">0,855</text>
  <text x="400" y="145" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">C ∩ P̅</text>
  <text x="400" y="160" fill="#8b8fa3" font-size="12" font-family="Inter,sans-serif">0,045</text>
  <text x="400" y="195" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">C̅ ∩ P</text>
  <text x="400" y="210" fill="#8b8fa3" font-size="12" font-family="Inter,sans-serif">0,020</text>
  <text x="400" y="295" fill="#e8eaf0" font-size="12" font-family="Inter,sans-serif" font-weight="bold">C̅ ∩ P̅</text>
  <text x="400" y="310" fill="#8b8fa3" font-size="12" font-family="Inter,sans-serif">0,080</text>
  <rect x="50" y="320" width="110" height="25" fill="none" stroke="#e8eaf0" stroke-width="1.5" rx="4"/>
  <text x="62" y="337" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif" font-weight="bold">Total = 1</text>
</svg></div>`},
{n:10,title:"Statistiques de chantier",
statement:`Durées de 10 chantiers (semaines) : 8,10,10,12,14,14,14,16,18,24.<ol><li>Calcule la moyenne.</li><li>Calcule la médiane.</li><li>Quel indicateur est le plus représentatif ici ? Pourquoi ?</li></ol>`,
hints:["Moyenne = somme/10.","Médiane = moyenne des 5e et 6e valeurs.","Le 24 est une valeur extrême…"],
correction:["Moyenne = 140/10 = <strong>14 semaines</strong>","Médiane = (14+14)/2 = <strong>14 semaines</strong>","Ici les deux coïncident, mais la <strong>médiane</strong> est plus robuste face à la valeur extrême 24."]}
]}
);
