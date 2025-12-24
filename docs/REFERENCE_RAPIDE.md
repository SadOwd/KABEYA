# 🚀 RÉFÉRENCE RAPIDE - 1 PAGE

## ⚡ Installation en 30 secondes

```powershell
cd C:\Users\mmawo\Desktop\KABEYA
.\INSTALL_MASTER.ps1
npm run dev
```
**→ http://localhost:5173 → Points de Vente → Stock & Facturation ✅**

---

## 📦 Ce qui a été ajouté

### 2 Nouvelles Sections

| Section | Icône | Couleur | Contenu |
|---------|-------|---------|---------|
| **Stock** | 📦 | Vert | 8 produits, mouvements, alertes |
| **Facturation** | 💰 | Jaune | 6 factures, paiements, détails |

---

## 📊 Données ajoutées (mockData.js)

```javascript
stock            // 8 produits (Tilapia, Capitaine, etc.)
mouvementsStock  // 8 mouvements (entrées/sorties)
factures         // 6 factures complètes
paiements        // 5 paiements (Virement, Chèque, etc.)
```

---

## 🎨 Fonctionnalités Stock

```
📊 4 Statistiques : Total, Valeur, Alertes, Produits
📋 Tableau Inventaire : 8 produits avec détails
📈 Mouvements : Historique entrées/sorties
```

---

## 💰 Fonctionnalités Facturation

```
💵 4 Statistiques : CA, Payées, Attente, Retard
🧾 Tableau Factures : 6 factures détaillées
📦 Articles : Détail par facture
💳 Paiements : Historique avec méthodes
```

---

## 🔧 Scripts Disponibles

| Script | Usage | Durée |
|--------|-------|-------|
| `INSTALL_MASTER.ps1` | Installation complète ⭐⭐⭐ | 30s |
| `integrer_stock_facturation.ps1` | Sections seulement | 15s |
| `ajouter_boutons_navigation.ps1` | Boutons seulement | 10s |

---

## 📚 Documentation

| Fichier | Utilité | Pages |
|---------|---------|-------|
| `DEMARRAGE_RAPIDE.md` | Quick start ⭐⭐⭐ | 5 |
| `README_STOCK_FACTURATION.md` | Guide complet ⭐⭐⭐ | 6 |
| `RECAPITULATIF_FINAL.md` | Vue d'ensemble | 12 |
| `GUIDE_INTEGRATION_STOCK_FACTURATION.md` | Manuel | 4 |
| `INDEX_STOCK_FACTURATION.md` | Index complet | 8 |
| `CHECKLIST_INSTALLATION.md` | À imprimer | 6 |

---

## 🚨 Dépannage Express

### Page noire
```
F12 → Console → Vérifier erreurs
→ Imports manquants → Ajouter dans SalesPoints.jsx
```

### Boutons absents
```powershell
.\ajouter_boutons_navigation.ps1
```

### Données manquantes
```javascript
// Vérifier dans mockData.js :
export const stock = [...]
export const factures = [...]
```

### Restaurer backup
```powershell
ls backups  # Trouver la date
Copy-Item "backups\[DATE]\*.backup" "src\components\" -Force
```

---

## ✅ Check Rapide (30s)

```
☑ Points de Vente → 6 onglets ?
☑ Stock (vert) → 8 produits ?
☑ Facturation (jaune) → 6 factures ?
☑ Console (F12) → Pas d'erreurs ?
→ ✅ Installation OK !
```

---

## 🎯 Commandes Essentielles

```powershell
# Installation
.\INSTALL_MASTER.ps1

# Test sans modifier
.\INSTALL_MASTER.ps1 -DryRun

# Forcer réinstallation
.\INSTALL_MASTER.ps1 -Force

# Démarrer app
npm run dev

# Arrêter app
Ctrl + C
```

---

## 📂 Structure Fichiers

```
KABEYA/
├── INSTALL_MASTER.ps1                    ← Lance tout
├── sections_stock_facturation.jsx        ← Contenu sections
├── src/
│   ├── components/SalesPoints.jsx        ← Modifié
│   └── data/mockData.js                  ← Données ajoutées
└── backups/[DATE]/                       ← Sauvegardes auto
```

---

## 🔑 Imports Requis (lucide-react)

```javascript
Package, DollarSign, AlertTriangle,
TrendingUp, TrendingDown, Plus, Edit,
Eye, CheckCircle, Clock, Download
```

---

## 🎨 Couleurs Kabeya

```
Vert clair : #34d399, #10b981  (dominant)
Vert foncé : #065f46, #064e3b  (fond)
Jaune      : #fbbf24, #f59e0b  (argent)
```

---

## 📈 Statistiques Package

```
Fichiers créés       : 13
Lignes de code       : ~800
Lignes documentation : ~2000
Temps installation   : 2-5 min
```

---

## 🏆 Version

```
Package : Stock & Facturation
Version : 1.0.0
Date    : 21/12/2025
Statut  : ✅ Production Ready
```

---

## 💡 Tips Rapides

1. **Toujours avoir un backup** → Créés automatiquement
2. **Console = votre ami** → F12 pour debug
3. **Mode test disponible** → `-DryRun`
4. **Docs complètes** → 6 fichiers markdown
5. **Navigation simple** → 6 onglets clairs

---

## 🆘 Aide Urgente

**Problème ?**
1. Consulter `DEMARRAGE_RAPIDE.md`
2. Vérifier console (F12)
3. Restaurer backup
4. Relancer installation

**Backups :**
```powershell
# Localisation
backups/YYYYMMDD_HHMMSS/

# Restaurer
Copy-Item "backups\[DATE]\*.backup" "src\components\" -Force
```

---

## 🎊 One-Liner Installation

```powershell
cd C:\Users\mmawo\Desktop\KABEYA && .\INSTALL_MASTER.ps1 && npm run dev
```

---

**🐟 Kabeya Fresh - Stock & Facturation v1.0.0**  
**Une page, tout l'essentiel !**

🎉 **RÉFÉRENCE RAPIDE - Gardez cette page sous la main !** 🚀
