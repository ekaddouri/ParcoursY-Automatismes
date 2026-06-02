// data.js — Livret Automatismes Bac Pro Bâtiment → BTS
const THEMES = [
{
  id:"t1", title:"Calcul Numérique & Proportionnalité", icon:"🔢", color:"var(--t1)",
  bg:"var(--t1-bg)", border:"var(--t1-border)",
  subtitle:"Fondations indispensables pour le BTS bâtiment",
  objectif:"Maîtriser les fractions, pourcentages, puissances et conversions pour aborder sereinement les calculs de chantier et de devis en BTS.",
  bts:{savoir:'<strong>Calculer rapidement</strong> des proportions, des pourcentages d\'évolution, des conversions d\'unités et des ordres de grandeur.',pourquoi:'<strong>Devis, métrés, dosage béton :</strong> chaque jour en BTS, tu auras à manipiler des proportions, appliquer des TVA, convertir des unités (m→cm, m²→m³…) et estimer des ordres de grandeur.',erreurs:'<strong>Confondre ×1,15 et ×0,85</strong> pour une augmentation de 15%. Oublier de convertir toutes les unités dans la même référence avant de calculer.'},
  course:`<h3><span class="icon">📐</span> Rappels de cours</h3>
<div class="course-content">
<p><strong>Fractions :</strong> Pour additionner deux fractions, on les met au même dénominateur.</p>
<div class="formula-box">\\(\\frac{a}{b}+\\frac{c}{d}=\\frac{ad+bc}{bd}\\)</div>
<p><strong>Pourcentages :</strong> Augmenter de t% revient à multiplier par \\((1+\\frac{t}{100})\\). Diminuer de t% → multiplier par \\((1-\\frac{t}{100})\\).</p>
<div class="formula-box">\\(\\text{Pourcentage} = \\frac{\\text{Partie}}{\\text{Total}} \\times 100\\)</div>
<p><strong>Puissances de 10 :</strong></p>
<div class="formula-box">\\(10^a \\times 10^b = 10^{a+b} \\quad;\\quad \\frac{10^a}{10^b}=10^{a-b}\\)</div>
<p><strong>Proportionnalité & Échelles :</strong></p>
<div class="formula-box">\\(\\text{Échelle} = \\frac{\\text{Distance plan}}{\\text{Distance réelle}}\\)</div>
<div class="key-point tip">💡 En BTS Bâtiment, tu utiliseras constamment les échelles (1/50, 1/100, 1/200) pour lire et produire des plans.</div>
<p><strong>Conversions :</strong></p>
<ul>
<li>1 m = 100 cm = 1000 mm</li>
<li>1 m² = 10 000 cm²</li>
<li>1 m³ = 1 000 000 cm³ = 1000 L</li>
</ul>
</div>`,
  exercises:[
{n:1,title:"Simplifier des fractions",difficulty:1,type:"echauffement",
statement:`Simplifie les fractions suivantes :<ol>
<li>\\(\\frac{12}{18}\\)</li>
<li>\\(\\frac{45}{60}\\)</li>
<li>\\(\\frac{84}{126}\\)</li></ol>`,
hints:["Cherche le PGCD de chaque numérateur et dénominateur.","PGCD(12,18)=6 ; PGCD(45,60)=15 ; PGCD(84,126)=42.","Divise numérateur et dénominateur par le PGCD trouvé."],
correction:[
"\\(\\frac{12}{18}=\\frac{12÷6}{18÷6}=\\frac{2}{3}\\)",
"\\(\\frac{45}{60}=\\frac{45÷15}{60÷15}=\\frac{3}{4}\\)",
"\\(\\frac{84}{126}=\\frac{84÷42}{126÷42}=\\frac{2}{3}\\)"
]},
{n:2,title:"Opérations sur les fractions",difficulty:1,type:"echauffement",
statement:`Calcule et donne le résultat sous forme irréductible :<ol>
<li>\\(\\frac{2}{3}+\\frac{5}{6}\\)</li>
<li>\\(\\frac{7}{4}-\\frac{3}{8}\\)</li>
<li>\\(\\frac{3}{5}\\times\\frac{10}{9}\\)</li></ol>`,
hints:["Pour additionner : trouve un dénominateur commun.","Dénominateur commun de 3 et 6 → 6 ; de 4 et 8 → 8.","Pour la multiplication, multiplie les numérateurs entre eux et les dénominateurs entre eux, puis simplifie."],
correction:[
"\\(\\frac{2}{3}+\\frac{5}{6}=\\frac{4}{6}+\\frac{5}{6}=\\frac{9}{6}=\\frac{3}{2}\\)",
"\\(\\frac{7}{4}-\\frac{3}{8}=\\frac{14}{8}-\\frac{3}{8}=\\frac{11}{8}\\)",
"\\(\\frac{3}{5}\\times\\frac{10}{9}=\\frac{30}{45}=\\frac{2}{3}\\)"
]},
{n:3,title:"Pourcentages et évolutions",difficulty:1,type:"automatisme",
statement:`<ol>
<li>Un matériau coûte 80 €. Il augmente de 15%. Quel est le nouveau prix ?</li>
<li>Après une remise de 20%, un lot de parpaings coûte 240 €. Quel était le prix initial ?</li>
<li>Un prix passe de 50 € à 62 €. Quel est le taux d'augmentation en % ?</li></ol>`,
hints:["Augmenter de 15% → multiplier par 1,15.","Si le prix après remise = prix initial × 0,80, alors prix initial = 240 ÷ 0,80.","Taux = (valeur finale − valeur initiale) ÷ valeur initiale × 100."],
correction:[
"80 × 1,15 = <strong>92 €</strong>",
"240 ÷ 0,80 = <strong>300 €</strong>",
"(62 − 50) ÷ 50 × 100 = 12 ÷ 50 × 100 = <strong>24%</strong>"
]},
{n:4,title:"Puissances de 10 et notation scientifique",difficulty:2,type:"automatisme",
statement:`Écris en notation scientifique :<ol>
<li>0,00045</li>
<li>3 200 000</li>
<li>Calcule : \\(\\frac{3\\times10^5 \\times 2\\times10^{-3}}{4\\times10^4}\\)</li></ol>`,
hints:["Notation scientifique : \\(a \\times 10^n\\) avec \\(1 \\leq a < 10\\).","0,00045 → décale la virgule de 4 rangs vers la droite.","Au numérateur : multiplie les coefficients et additionne les exposants."],
correction:[
"0,00045 = \\(4{,}5 \\times 10^{-4}\\)",
"3 200 000 = \\(3{,}2 \\times 10^{6}\\)",
"\\(\\frac{6\\times10^{2}}{4\\times10^{4}}=1{,}5\\times10^{-2}=0{,}015\\)"
]},
{n:5,title:"Conversions d'unités",difficulty:1,type:"automatisme",
statement:`Convertis :<ol>
<li>3,5 m en mm</li>
<li>45 000 cm² en m²</li>
<li>2,7 m³ en litres</li>
<li>0,8 km en cm</li></ol>`,
hints:["1 m = 1000 mm","1 m² = 10 000 cm², donc divise par 10 000.","1 m³ = 1000 L"],
correction:[
"3,5 m = 3,5 × 1000 = <strong>3 500 mm</strong>",
"45 000 cm² = 45 000 ÷ 10 000 = <strong>4,5 m²</strong>",
"2,7 m³ = 2,7 × 1000 = <strong>2 700 L</strong>",
"0,8 km = 0,8 × 100 000 = <strong>80 000 cm</strong>"
]},
{n:6,title:"Proportionnalité et échelles",difficulty:2,type:"applique",
statement:`Sur un plan à l'échelle 1/50 :<ol>
<li>Une pièce mesure 8 cm sur le plan. Quelle est sa longueur réelle ?</li>
<li>Un mur fait 6 m en réalité. Quelle est sa longueur sur le plan ?</li>
<li>Une pièce mesure 8 cm × 6 cm sur le plan. Quelle est son aire réelle en m² ?</li></ol>`,
hints:["Échelle 1/50 signifie 1 cm sur le plan = 50 cm en réalité.","Pour passer du réel au plan : divise par 50.","Calcule d'abord les dimensions réelles, puis multiplie pour avoir l'aire."],
correction:[
"8 cm × 50 = 400 cm = <strong>4 m</strong>",
"6 m = 600 cm → 600 ÷ 50 = <strong>12 cm</strong>",
"Réel : 4 m × 3 m = <strong>12 m²</strong>"
]},
{n:7,title:"Calculs avec les racines carrées",difficulty:2,type:"automatisme",
statement:`Simplifie :<ol>
<li>\\(\\sqrt{50}\\)</li>
<li>\\(3\\sqrt{2}+5\\sqrt{2}\\)</li>
<li>\\(\\sqrt{3}\\times\\sqrt{12}\\)</li></ol>`,
hints:["Décompose 50 = 25 × 2, donc √50 = √25 × √2.","On additionne les racines comme des termes semblables.","√a × √b = √(a×b), puis simplifie."],
correction:[
"\\(\\sqrt{50}=\\sqrt{25\\times2}=5\\sqrt{2}\\)",
"\\(3\\sqrt{2}+5\\sqrt{2}=8\\sqrt{2}\\)",
"\\(\\sqrt{3}\\times\\sqrt{12}=\\sqrt{36}=6\\)"
]},
{n:8,title:"Ordres de grandeur",difficulty:1,type:"applique",
statement:`Donne un ordre de grandeur du résultat (sans calculatrice) :<ol>
<li>498 × 21</li>
<li>\\(\\frac{6\\,120}{29}\\)</li>
<li>Un chantier nécessite 1 980 parpaings à 1,20 € pièce. Estime le coût total.</li></ol>`,
hints:["Arrondis chaque nombre à un chiffre significatif.","500 × 20 = ?","2000 × 1 = ?"],
correction:[
"≈ 500 × 20 = <strong>10 000</strong> (exact : 10 458)",
"≈ 6 000 ÷ 30 = <strong>200</strong> (exact : 211)",
"≈ 2 000 × 1,2 = <strong>2 400 €</strong> (exact : 2 376 €)"
]},
{n:9,title:"Ratios et mélanges",difficulty:2,type:"prepa-bts",
statement:`<ol>
<li>Un béton est dosé dans le ratio ciment/sable/gravier = 1:2:3. Pour 900 kg de mélange, quelle masse de chaque composant ?</li>
<li>Un mortier utilise 1 volume de ciment pour 3 volumes de sable. Combien de sacs de ciment de 35 kg pour 420 kg de sable ?</li></ol>`,
hints:["Total des parts = 1+2+3 = 6. Chaque part = 900÷6.","1 part = 150 kg.","Ratio 1:3 → ciment = sable ÷ 3 → puis divise par 35 kg/sac."],
correction:[
  "1 part = 900÷6 = 150 kg → Ciment: <strong>150 kg</strong>, Sable: <strong>300 kg</strong>, Gravier: <strong>450 kg</strong>",
  "Ciment = 420 ÷ 3 = 140 kg → 140 ÷ 35 = <strong>4 sacs</strong>"
],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t1e9g" width="20" height="20" patternUnits="userSpaceOnUse">
      <line x1="20" y1="0" x2="20" y2="350" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t1e9g)"/>
  <text x="120" y="25" fill="#e8eaf0" font-size="15" font-family="Inter,sans-serif" font-weight="bold">Dosage beton 1:2:3 -- 900 kg</text>
  <rect x="50" y="200" width="60" height="80" fill="#8b8fa3" rx="4"/>
  <rect x="130" y="120" width="110" height="160" fill="#f59e0b" rx="4"/>
  <rect x="260" y="40" width="150" height="240" fill="#f97316" rx="4"/>
  <text x="55" y="230" fill="#1a1d27" font-size="13" font-family="Inter,sans-serif" font-weight="bold">Ciment</text>
  <text x="58" y="250" fill="#1a1d27" font-size="11" font-family="Inter,sans-serif">150 kg</text>
  <text x="155" y="210" fill="#1a1d27" font-size="13" font-family="Inter,sans-serif" font-weight="bold">Sable</text>
  <text x="158" y="230" fill="#1a1d27" font-size="11" font-family="Inter,sans-serif">300 kg</text>
  <text x="285" y="145" fill="#e8eaf0" font-size="13" font-family="Inter,sans-serif" font-weight="bold">Gravier</text>
  <text x="285" y="165" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">450 kg</text>
  <line x1="40" y1="300" x2="450" y2="300" stroke="#8b8fa3" stroke-width="1.5"/>
  <text x="30" y="295" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="80" y="295" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">1 part</text>
  <text x="160" y="295" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2 parts</text>
  <text x="295" y="295" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3 parts</text>
  <text x="330" y="320" fill="#8b8fa3" font-size="9" font-family="Inter,sans-serif">Total: 6 parts = 900 kg</text>
</svg></div>`},
{n:10,title:"Calculs de TVA et devis",difficulty:2,type:"applique",
statement:`Un devis comprend :<ul>
<li>Main d'œuvre : 2 400 € HT</li>
<li>Matériaux : 3 800 € HT</li>
<li>TVA à 10% sur la main d'œuvre, 20% sur les matériaux</li></ul>
<ol><li>Calcule le montant TTC de chaque poste.</li>
<li>Calcule le total TTC du devis.</li>
<li>Quel pourcentage du total TTC représente la main d'œuvre ?</li></ol>`,
hints:["TTC = HT × (1 + taux TVA).","Additionne les deux montants TTC.","% = (partie ÷ total) × 100."],
correction:[
"MO TTC = 2400 × 1,10 = <strong>2 640 €</strong>",
"Mat TTC = 3800 × 1,20 = <strong>4 560 €</strong>",
"Total TTC = 2640 + 4560 = <strong>7 200 €</strong>",
"Part MO = 2640 ÷ 7200 × 100 ≈ <strong>36,7%</strong>"
]}
]},
// THEME 2
{
  id:"t2", title:"Calcul Littéral & Équations", icon:"✖️", color:"var(--t2)",
  bg:"var(--t2-bg)", border:"var(--t2-border)",
  subtitle:"Manipuler les formules techniques du BTS",
  objectif:"Savoir développer, factoriser, résoudre des équations et isoler une variable dans des formules techniques.",
  bts:{savoir:'<strong>Résoudre</strong> une équation du 1er degré, <strong>isoler</strong> une variable dans une formule technique, <strong>développer/factoriser</strong> des expressions simples.',pourquoi:'<strong>RDM, thermique, mécanique :</strong> toutes les disciplines du BTS utilisent des formules où tu devras isoler une inconnue (contrainte = F/S, débit = V/t…).',erreurs:'<strong>Oublier de changer le signe</strong> quand on passe un terme de l\'autre côté. <strong>Diviser par zéro.</strong> Appliquer une identité remarquable sans vérifier le double produit.'},
  course:`<h3><span class="icon">📝</span> Rappels de cours</h3>
<div class="course-content">
<p><strong>Développer :</strong> \\(a(b+c) = ab + ac\\)</p>
<p><strong>Identités remarquables :</strong></p>
<div class="formula-box">\\((a+b)^2 = a^2+2ab+b^2\\)<br>\\((a-b)^2 = a^2-2ab+b^2\\)<br>\\((a+b)(a-b)=a^2-b^2\\)</div>
<p><strong>Résoudre une équation du 1er degré :</strong></p>
<div class="formula-box">\\(ax+b=0 \\implies x=-\\frac{b}{a}\\quad(a\\neq0)\\)</div>
<p><strong>Isoler une variable :</strong> On applique les opérations inverses des deux côtés.</p>
<div class="formula-box">Si \\(S = \\pi r^2 h\\), alors \\(h = \\frac{S}{\\pi r^2}\\)</div>
<div class="key-point tip">💡 En BTS, tu devras constamment isoler des variables dans des formules de résistance des matériaux, thermique, etc.</div>
</div>`,
  exercises:[
{n:1,title:"Réduire une expression littérale",difficulty:1,type:"echauffement",
statement:`Réduis :<ol>
<li>\\(3x+5x-2x\\)</li>
<li>\\(4a-7+2a+3\\)</li>
<li>\\(5x^2+3x-2x^2+x-4\\)</li></ol>`,
hints:["Regroupe les termes qui ont la même partie littérale.","Les constantes se regroupent aussi entre elles.","Attention : \\(x^2\\) et \\(x\\) sont des termes différents."],
correction:[
"\\(3x+5x-2x = 6x\\)",
"\\(4a-7+2a+3 = 6a-4\\)",
"\\(5x^2-2x^2+3x+x-4 = 3x^2+4x-4\\)"
]},
{n:2,title:"Développer (simple distributivité)",difficulty:1,type:"echauffement",
statement:`Développe et réduis :<ol>
<li>\\(3(2x+5)\\)</li>
<li>\\(-(4x-3)\\)</li>
<li>\\(2x(3x-4)+5x\\)</li></ol>`,
hints:["Multiplie chaque terme entre parenthèses par le facteur.","Attention au signe − devant une parenthèse.","Développe d'abord, puis regroupe les termes semblables."],
correction:[
"\\(3(2x+5)=6x+15\\)",
"\\(-(4x-3)=-4x+3\\)",
"\\(2x(3x-4)+5x=6x^2-8x+5x=6x^2-3x\\)"
]},
{n:3,title:"Factoriser",difficulty:2,type:"automatisme",
statement:`Factorise :<ol>
<li>\\(6x+18\\)</li>
<li>\\(4x^2-10x\\)</li>
<li>\\(3x(x+2)-5(x+2)\\)</li></ol>`,
hints:["Cherche le facteur commun le plus grand.","Pour 4x²−10x, le facteur commun est 2x.","(x+2) est un facteur commun."],
correction:[
"\\(6x+18 = 6(x+3)\\)",
"\\(4x^2-10x = 2x(2x-5)\\)",
"\\(3x(x+2)-5(x+2) = (x+2)(3x-5)\\)"
]},
{n:4,title:"Résoudre ax + b = 0",difficulty:1,type:"automatisme",
statement:`Résous :<ol>
<li>\\(3x-12=0\\)</li>
<li>\\(-5x+20=0\\)</li>
<li>\\(\\frac{x}{4}-3=0\\)</li></ol>`,
hints:["Isole x : passe la constante de l'autre côté.","Change le signe quand tu passes un terme de l'autre côté.","Multiplie les deux côtés par 4."],
correction:[
"\\(3x=12 \\implies x=4\\)",
"\\(-5x=-20 \\implies x=4\\)",
"\\(\\frac{x}{4}=3 \\implies x=12\\)"
]},
{n:5,title:"Résoudre ax + b = cx + d",difficulty:2,type:"automatisme",
statement:`Résous :<ol>
<li>\\(5x+3=2x+15\\)</li>
<li>\\(7-3x=4x-14\\)</li>
<li>\\(\\frac{2x+1}{3}=5\\)</li></ol>`,
hints:["Regroupe les x d'un côté, les constantes de l'autre.","Soustrais 2x des deux côtés pour le 1er exercice.","Multiplie les deux côtés par 3 d'abord."],
correction:[
"\\(5x-2x=15-3 \\implies 3x=12 \\implies x=4\\)",
"\\(7+14=4x+3x \\implies 21=7x \\implies x=3\\)",
"\\(2x+1=15 \\implies 2x=14 \\implies x=7\\)"
]},
{n:6,title:"Isoler une variable dans une formule",difficulty:2,type:"applique",
statement:`Isole la variable indiquée :<ol>
<li>\\(P = 2(L+l)\\) → isole \\(l\\)</li>
<li>\\(S = \\pi r^2\\) → isole \\(r\\)</li>
<li>\\(v = \\frac{d}{t}\\) → isole \\(t\\)</li></ol>`,
hints:["Divise par 2, puis soustrais L.","Divise par π, puis prends la racine carrée.","t est au dénominateur → multiplie par t, puis divise par v."],
correction:[
"\\(l = \\frac{P}{2}-L\\)",
"\\(r = \\sqrt{\\frac{S}{\\pi}}\\)",
"\\(t = \\frac{d}{v}\\)"
]},
{n:7,title:"Inéquations du 1er degré",difficulty:2,type:"automatisme",
statement:`Résous et représente sur une droite graduée :<ol>
<li>\\(2x-6 > 0\\)</li>
<li>\\(5-3x \\leq 11\\)</li>
<li>\\(-4x+8 \\geq 0\\)</li></ol>`,
hints:["Isole x comme pour une équation.","Attention : quand tu divises par un nombre négatif, l'inégalité change de sens !","Pour le 3e : −4x ≥ −8, divise par −4…"],
correction:[
  "\\(2x>6 \\implies x>3\\)",
  "\\(-3x \\leq 6 \\implies x \\geq -2\\) (on divise par −3, on inverse)",
  "\\(-4x \\geq -8 \\implies x \\leq 2\\) (on divise par −4, on inverse)"
],
svg:`<div class="graph-container"><svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="500" height="350" fill="#1a1d27" stroke="#2a2d3a" stroke-width="1"/>
  <defs>
    <pattern id="t2e7g" width="40" height="40" patternUnits="userSpaceOnUse">
      <line x1="40" y1="0" x2="40" y2="350" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
      <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(42,45,58,0.5)" stroke-width="0.5"/>
    </pattern>
    <marker id="arrowRightT2e7" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10" fill="#f97316" stroke="none"/>
    </marker>
    <marker id="arrowLeftT2e7" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10" fill="#f97316" stroke="none"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="500" height="350" fill="url(#t2e7g)"/>
  <text x="120" y="25" fill="#e8eaf0" font-size="14" font-family="Inter,sans-serif" font-weight="bold">Inequations -- Droites graduees</text>
  <line x1="40" y1="65" x2="460" y2="65" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="100" y1="60" x2="100" y2="70" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="180" y1="60" x2="180" y2="70" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="260" y1="60" x2="260" y2="70" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="340" y1="60" x2="340" y2="70" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="380" y1="60" x2="380" y2="70" stroke="#8b8fa3" stroke-width="1"/>
  <text x="95" y="55" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-4</text>
  <text x="175" y="55" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-2</text>
  <text x="255" y="55" fill="#e8eaf0" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="335" y="55" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="375" y="55" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3</text>
  <text x="10" y="69" fill="#10b981" font-size="10" font-family="Inter,sans-serif">x>3</text>
  <line x1="380" y1="65" x2="475" y2="65" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
  <circle cx="380" cy="65" r="5" fill="#1a1d27" stroke="#f97316" stroke-width="2.5"/>
  <line x1="460" y1="65" x2="475" y2="65" stroke="#f97316" stroke-width="4" marker-end="url(#arrowRightT2e7)"/>
  <line x1="40" y1="155" x2="460" y2="155" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="100" y1="150" x2="100" y2="160" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="180" y1="150" x2="180" y2="160" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="260" y1="150" x2="260" y2="160" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="340" y1="150" x2="340" y2="160" stroke="#8b8fa3" stroke-width="1"/>
  <text x="95" y="145" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-4</text>
  <text x="175" y="145" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-2</text>
  <text x="255" y="145" fill="#e8eaf0" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="335" y="145" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="375" y="145" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3</text>
  <text x="10" y="159" fill="#10b981" font-size="10" font-family="Inter,sans-serif">x≥-2</text>
  <line x1="180" y1="155" x2="475" y2="155" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
  <circle cx="180" cy="155" r="5" fill="#f97316" stroke="#f97316" stroke-width="2.5"/>
  <line x1="460" y1="155" x2="475" y2="155" stroke="#f97316" stroke-width="4" marker-end="url(#arrowRightT2e7)"/>
  <line x1="40" y1="245" x2="460" y2="245" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="100" y1="240" x2="100" y2="250" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="180" y1="240" x2="180" y2="250" stroke="#8b8fa3" stroke-width="1"/>
  <line x1="260" y1="240" x2="260" y2="250" stroke="#8b8fa3" stroke-width="1.5"/>
  <line x1="340" y1="240" x2="340" y2="250" stroke="#8b8fa3" stroke-width="1"/>
  <text x="95" y="235" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-4</text>
  <text x="175" y="235" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">-2</text>
  <text x="255" y="235" fill="#e8eaf0" font-size="10" font-family="Inter,sans-serif">0</text>
  <text x="335" y="235" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">2</text>
  <text x="375" y="235" fill="#8b8fa3" font-size="10" font-family="Inter,sans-serif">3</text>
  <text x="10" y="249" fill="#10b981" font-size="10" font-family="Inter,sans-serif">x≤2</text>
  <line x1="25" y1="245" x2="340" y2="245" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
  <circle cx="340" cy="245" r="5" fill="#f97316" stroke="#f97316" stroke-width="2.5"/>
  <line x1="25" y1="245" x2="40" y2="245" stroke="#f97316" stroke-width="4" marker-end="url(#arrowLeftT2e7)"/>
  <text x="90" y="300" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">2x-6 > 0  x > 3</text>
  <text x="90" y="320" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">5-3x ≤ 11  x ≥ -2</text>
  <text x="310" y="300" fill="#e8eaf0" font-size="11" font-family="Inter,sans-serif">-4x+8 ≥ 0  x ≤ 2</text>
</svg></div>`},
{n:8,title:"Systèmes de 2 équations",difficulty:3,type:"automatisme",
statement:`Résous le système :<br>
\\(\\begin{cases} 2x+y=10 \\\\ x-y=2 \\end{cases}\\)<br>
Puis vérifie ta solution.`,
hints:["Additionne les deux équations membre à membre pour éliminer y.","2x + y + x − y = 10 + 2 → 3x = 12.","x = 4, remplace dans une équation pour trouver y."],
correction:[
"Addition : \\(3x = 12 \\implies x = 4\\)",
"Dans la 2e : \\(4 - y = 2 \\implies y = 2\\)",
"Vérif : \\(2(4)+2=10\\) ✓ et \\(4-2=2\\) ✓ → <strong>Solution : (4 ; 2)</strong>"
]},
{n:9,title:"Identités remarquables",difficulty:2,type:"prepa-bts",
statement:`Développe en utilisant les identités remarquables :<ol>
<li>\\((x+3)^2\\)</li>
<li>\\((2x-5)^2\\)</li>
<li>\\((x+4)(x-4)\\)</li></ol>`,
hints:["(a+b)² = a² + 2ab + b²","(a−b)² = a² − 2ab + b²","(a+b)(a−b) = a² − b²"],
correction:[
"\\((x+3)^2 = x^2+6x+9\\)",
"\\((2x-5)^2 = 4x^2-20x+25\\)",
"\\((x+4)(x-4) = x^2-16\\)"
]},
{n:10,title:"Mise en équation (problème BTP)",difficulty:3,type:"applique",
statement:`Un artisan facture 45 € de l'heure plus 120 € de déplacement. Le client paie 525 €.<ol>
<li>Écris l'équation permettant de trouver le nombre d'heures \\(h\\).</li>
<li>Résous cette équation.</li>
<li>Un deuxième artisan facture 55 €/h sans frais de déplacement. À partir de combien d'heures le 1er artisan est-il plus cher ?</li></ol>`,
hints:["Coût = 45h + 120 = 525.","Isole h.","Compare : 45h + 120 > 55h → résous l'inéquation."],
correction:[
"\\(45h + 120 = 525\\)",
"\\(45h = 405 \\implies h = 9\\) heures",
"\\(45h+120 > 55h \\implies 120 > 10h \\implies h < 12\\). Le 1er est moins cher pour moins de 12h."
]}
]}
];
