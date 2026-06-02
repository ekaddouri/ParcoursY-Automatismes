# Livret d'Automatismes — Bac Pro Bâtiment → BTS

[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey)](LICENSE)

Un livret interactif de mathématiques pour consolider les acquis du Bac Pro Bâtiment et préparer la poursuite d'études en BTS.

## 🎯 Contenu

- **5 thèmes** couvrant les automatismes essentiels
- **50 exercices** progressifs avec contexte BTP
- **Coups de pouce** à 3 niveaux pour chaque exercice
- **Corrections détaillées** pas à pas
- **Graphiques et schémas techniques** SVG intégrés

## 📚 Thèmes

| # | Thème | Nombre d'exercices |
|---|---|---|
| 1 | Calcul Numérique & Proportionnalité | 10 |
| 2 | Calcul Littéral & Équations | 10 |
| 3 | Fonctions | 10 |
| 4 | Géométrie & Mesures | 10 |
| 5 | Statistiques & Probabilités | 10 |

## 🚀 Accès rapide

👉 **[Accéder au livret en ligne](https://NOM_UTILISATEUR.github.io/NOM_DU_REPO/)**

*(Remplacez NOM_UTILISATEUR et NOM_DU_REPO par les valeurs réelles après création du dépôt)*

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript (vanilla)
- [KaTeX](https://katex.org/) pour le rendu mathématique
- [Google Fonts](https://fonts.google.com/) (Inter + JetBrains Mono)
- Graphiques SVG inline (dark theme)
- Stockage local (localStorage) pour la progression

## 📂 Structure du projet

```
├── livret.html          # Page principale
├── style.css            # Feuille de styles (dark theme)
├── data.js              # Données des thèmes 1 et 2
├── data2.js             # Données des thèmes 3, 4 et 5
├── app.js               # Moteur JavaScript du livret
├── index.html → livret.html  # Redirection
├── README.md            # Ce fichier
└── .gitignore           # Fichiers exclus de Git
```

## 💻 Utilisation

1. Clonez le dépôt
2. Ouvrez `livret.html` dans un navigateur
3. (Connexion Internet requise pour KaTeX et les polices)

## 📦 Version élèves (hors-ligne)

Une version autonome du livret — **sans besoin de connexion Internet** — est disponible dans le dossier `Version_Eleves/` :

```
📁 Version_Eleves/
   └── livret_eleve.html     # Fichier unique, prêt pour clé USB
```

Cette version intègre directement :
- KaTeX (moteur de rendu mathématique)
- Les polices Inter et JetBrains Mono
- Tous les graphiques SVG

**→ Ouvrir `Version_Eleves/livret_eleve.html` dans un navigateur pour une utilisation hors-ligne**

> ⚠️ Le fichier pèse environ **2,8 Mo** (contre quelques Ko pour la version CDN).

## 📄 Licence

Ce projet est mis à disposition sous licence [Creative Commons BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
