# 🐟 KABEYA FRESH - Installation Stock & Facturation

## 📋 Vue d'ensemble

Ce package ajoute deux nouvelles sections complètes au module **Points de Vente** :
- **📦 STOCK** : Gestion complète de l'inventaire
- **💰 FACTURATION** : Gestion des factures et paiements

---

## 🚀 Installation Rapide (RECOMMANDÉ)

### Méthode 1 : Script Automatique Master

La méthode la plus simple ! Un seul script fait tout automatiquement.

```powershell
# Ouvrir PowerShell dans le dossier KABEYA
cd C:\Users\mmawo\Desktop\KABEYA

# Lancer l'installation automatique
.\INSTALL_MASTER.ps1
```

**Le script va :**
1. ✅ Vérifier tous les fichiers requis
2. ✅ Créer des backups automatiques
3. ✅ Insérer les sections Stock & Facturation
4. ✅ Ajouter les boutons de navigation
5. ✅ Valider l'installation

**Options disponibles :**
```powershell
# Mode test (aucune modification)
.\INSTALL_MASTER.ps1 -DryRun

# Forcer la réinstallation
.\INSTALL_MASTER.ps1 -Force
```

---

## 🛠️ Installation Manuelle (Alternative)

Si vous préférez contrôler chaque étape :

### Étape 1 : Vérifier les fichiers

Assurez-vous que ces fichiers existent :
```
✅ src/components/SalesPoints.jsx
✅ src/data/mockData.js
✅ sections_stock_facturation.jsx
```

### Étape 2 : Ajouter les imports

Dans `SalesPoints.jsx`, ajoutez ces imports si manquants :

```javascript
import { 
  Package,        // Pour icône Stock
  DollarSign,     // Pour icône Facturation
  AlertTriangle,  // Pour alertes
  TrendingUp,     // Pour mouvements positifs
  TrendingDown,   // Pour mouvements négatifs
  Plus,           // Pour boutons d'ajout
  Edit,           // Pour édition
  Eye,            // Pour visualisation
  CheckCircle,    // Pour validations
  Clock,          // Pour délais
  Download        // Pour téléchargements
} from 'lucide-react';
```

### Étape 3 : Importer les données

Dans `SalesPoints.jsx`, vérifiez l'import de mockData :

```javascript
import * as mockData from '../data/mockData';
```

### Étape 4 : Ajouter les boutons de navigation

Dans la section navigation (vers ligne 80-120), ajoutez AVANT le bouton "Statistiques" :

```javascript
<button
  onClick={() => setActiveView('stock')}
  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
    activeView === 'stock'
      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30'
      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/5'
  }`}
>
  <Package className="w-5 h-5" />
  Stock
</button>

<button
  onClick={() => setActiveView('facturation')}
  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
    activeView === 'facturation'
      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/30'
      : 'glass-effect text-gray-300 hover:text-white hover:bg-white/5'
  }`}
>
  <DollarSign className="w-5 h-5" />
  Facturation
</button>
```

### Étape 5 : Insérer les sections

1. Ouvrez le fichier `sections_stock_facturation.jsx`
2. Copiez TOUT son contenu
3. Dans `SalesPoints.jsx`, trouvez la ligne :
   ```javascript
   {/* SECTION 6: STATISTIQUES */}
   ```
4. **JUSTE AVANT** cette ligne, collez le contenu copié
5. Changez la ligne en :
   ```javascript
   {/* SECTION 7: STATISTIQUES */}
   ```

### Étape 6 : Vérifier les données

Les données ont déjà été ajoutées à `mockData.js` :
- ✅ `stock` (8 produits)
- ✅ `mouvementsStock` (8 mouvements)
- ✅ `factures` (6 factures)
- ✅ `paiements` (5 paiements)

---

## 🧪 Tester l'installation

```bash
# Lancer le serveur
npm run dev

# Ouvrir dans le navigateur
# http://localhost:5173
```

**Vérifications :**
1. ✅ Aller dans **Points de Vente**
2. ✅ Voir 6 onglets : Points de Vente, Pré-commandes, Livraisons, **Stock**, **Facturation**, Statistiques
3. ✅ Cliquer sur **Stock** → Voir l'inventaire
4. ✅ Cliquer sur **Facturation** → Voir les factures

---

## 📊 Fonctionnalités Ajoutées

### 📦 Section STOCK

**Statistiques (4 cartes) :**
- Stock Total (kg)
- Valeur du Stock ($)
- Alertes Stock (nombre de produits en situation critique)
- Produits Actifs

**Tableau Inventaire :**
- 8 produits piscicoles avec détails complets
- Stock actuel vs stock minimum
- Prix unitaire et valeur totale
- Emplacement (Chambre Froide A/B, Zone Séchage)
- Statut coloré : Optimal (vert), Bas (jaune), Critique (rouge)
- Actions : Modifier, Voir mouvements

**Historique Mouvements :**
- 8 derniers mouvements de stock
- Entrées (vert ⬆️) / Sorties (rouge ⬇️)
- Quantités, références et motifs
- Date et heure précises

### 💰 Section FACTURATION

**Statistiques (4 cartes) :**
- CA Total
- Factures Payées
- En Attente
- En Retard

**Tableau Factures :**
- 6 factures avec tous les détails
- Client, dates (émission, échéance)
- Montants : Total, Payé, Reste à payer
- Statuts : Payée (vert), En attente (orange), Partielle (bleu), En retard (rouge)
- Actions : Voir, Paiement, Télécharger PDF

**Articles Facturés :**
- Détail des 3 dernières factures
- Liste des articles par facture
- Quantités et prix unitaires

**Historique Paiements :**
- 5 derniers paiements
- Montants et méthodes (Virement, Chèque, Espèces, Mobile Money)
- Clients et dates

---

## 📁 Structure des Fichiers

```
KABEYA/
├── src/
│   ├── components/
│   │   └── SalesPoints.jsx          ← Modifié (sections ajoutées)
│   └── data/
│       └── mockData.js               ← Modifié (données ajoutées)
├── sections_stock_facturation.jsx    ← Nouveau (contenu des sections)
├── INSTALL_MASTER.ps1                ← Script d'installation automatique
├── integrer_stock_facturation.ps1    ← Script d'intégration manuel
├── ajouter_boutons_navigation.ps1    ← Script pour navigation
├── GUIDE_INTEGRATION_STOCK_FACTURATION.md
└── README_STOCK_FACTURATION.md       ← Ce fichier
```

---

## 🔧 Scripts Disponibles

### INSTALL_MASTER.ps1 (RECOMMANDÉ)
Installation automatique complète
```powershell
.\INSTALL_MASTER.ps1
```

### integrer_stock_facturation.ps1
Intègre uniquement les sections (sans navigation)
```powershell
.\integrer_stock_facturation.ps1
```

### ajouter_boutons_navigation.ps1
Ajoute uniquement les boutons de navigation
```powershell
.\ajouter_boutons_navigation.ps1
```

---

## ⚠️ Dépannage

### Problème : Page noire après installation

**Solution :**
1. Vérifiez la console du navigateur (F12)
2. Cherchez les erreurs d'import
3. Assurez-vous que tous les imports lucide-react sont présents

### Problème : Boutons absents

**Solution :**
1. Vérifiez que les boutons ont bien été ajoutés dans la navigation
2. Utilisez `ajouter_boutons_navigation.ps1` pour les réinsérer

### Problème : Données manquantes

**Solution :**
1. Vérifiez que `mockData.js` contient les exports :
   - `export const stock`
   - `export const mouvementsStock`
   - `export const factures`
   - `export const paiements`

### Restaurer une backup

Si quelque chose ne va pas :
```powershell
# Les backups sont dans backups/YYYYMMDD_HHMMSS/
Copy-Item "backups/20251221_143000/SalesPoints.jsx.backup" "src/components/SalesPoints.jsx" -Force
```

---

## 🎯 Prochaines Améliorations Suggérées

### Phase 1 : Interactivité
- [ ] Formulaire d'ajout de produit au stock
- [ ] Formulaire de création de facture
- [ ] Enregistrement de paiement
- [ ] Édition de produits existants

### Phase 2 : Filtres & Recherche
- [ ] Filtrer par statut
- [ ] Rechercher par nom de produit/client
- [ ] Filtrer par période
- [ ] Tri personnalisé des tableaux

### Phase 3 : Exports & Rapports
- [ ] Génération PDF des factures
- [ ] Export Excel de l'inventaire
- [ ] Rapport de mouvements de stock
- [ ] Analyse des paiements

### Phase 4 : Graphiques Avancés
- [ ] Évolution du stock dans le temps
- [ ] Analyse des paiements par méthode
- [ ] Prévisions de rupture de stock
- [ ] Tableau de bord financier

---

## 📞 Support

**Fichiers de documentation :**
- `GUIDE_INTEGRATION_STOCK_FACTURATION.md` - Guide détaillé d'intégration
- `README_STOCK_FACTURATION.md` - Ce fichier
- `SCRIPTS_LIST.md` - Liste de tous les scripts disponibles

**En cas de problème :**
1. Vérifiez les logs de la console (F12)
2. Consultez les fichiers de backup
3. Relancez le script INSTALL_MASTER.ps1

---

## ✨ Résumé

**Installation rapide :**
```powershell
.\INSTALL_MASTER.ps1
npm run dev
```

**Résultat :**
- ✅ 2 nouvelles sections complètes
- ✅ 8 produits en stock
- ✅ 6 factures avec détails
- ✅ Historique complet des mouvements
- ✅ Interface moderne avec couleurs Kabeya (vert)
- ✅ Prêt à l'emploi !

---

**Version :** 1.0.0  
**Date :** 21/12/2025  
**Auteur :** Système Kabeya Fresh  
**License :** Propriétaire Kabeya Fresh

🐟 **Bon développement avec Kabeya Fresh !** 💚
