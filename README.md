# 🐟 KABEYA INC - Dashboard de Gestion Piscicole

Dashboard de gestion premium pour la ferme piscicole KABEYA INC à Kinshasa, RDC.

## 📋 Fonctionnalités

- ✅ **Vue d'ensemble** - KPIs principaux et graphiques
- ✅ **Monitoring temps réel** - Suivi des bassins en direct
- ✅ **Gestion de production** - Suivi par espèce
- ✅ **Finances** - Compte de résultat, ROI, répartition des bénéfices
- ✅ **Calendrier des tâches** - Planning opérationnel
- ✅ **Alimentation** - Grilles de ration par espèce
- ✅ **Traitements sanitaires** - Fiches de traitement
- ✅ **Dépenses** - Suivi budgétaire
- ✅ **Système d'alertes automatiques** - Notifications en temps réel
- ✅ **Export PDF** - Génération de rapports

## 🚀 Installation

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étapes

1. **Ouvrir le terminal dans le dossier du projet**
   ```bash
   cd C:\Users\mmawo\Desktop\KABEYA
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📦 Build pour production

```bash
npm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 🎨 Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling moderne
- **Recharts** - Graphiques interactifs
- **Lucide React** - Icônes
- **jsPDF** - Export PDF
- **html2canvas** - Capture d'écran

## 📊 Indicateurs Clés

- CA par cycle : **$389,000**
- Résultat net : **$277,976**
- ROI annuel : **628%**
- Production totale : **77,800 kg**
- Seuil de rentabilité : **8,306 kg**

## 📱 Structure du Projet

```
KABEYA/
├── src/
│   ├── components/         # Composants React
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Overview.jsx
│   │   ├── RealtimeMonitoring.jsx
│   │   ├── Production.jsx
│   │   ├── Finances.jsx
│   │   ├── Tasks.jsx
│   │   ├── Feeding.jsx
│   │   ├── Treatments.jsx
│   │   └── Expenses.jsx
│   ├── data/              # Données mock
│   │   └── mockData.js
│   ├── App.jsx            # Composant principal
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # Styles globaux
├── public/                # Assets statiques
├── index.html             # HTML principal
├── package.json           # Dépendances
├── vite.config.js         # Config Vite
├── tailwind.config.js     # Config Tailwind
└── README.md             # Documentation
```

## 🔧 Configuration

### Modifier les données

Éditez `src/data/mockData.js` pour ajuster :
- Production par espèce
- Données financières
- Tâches et traitements
- Dépenses

### Personnaliser le thème

Éditez `tailwind.config.js` pour modifier :
- Couleurs
- Animations
- Breakpoints

## 📞 Contact

**KABEYA INC**
- 📧 Email: david.kabeya@hotmail.com
- 📱 Téléphone: +1 (514) 441-2992
- 📍 Localisation: Kinshasa, RDC

## 📄 Licence

© 2025 KABEYA INC. Tous droits réservés.

---

**Développé avec ❤️ pour KABEYA INC**
