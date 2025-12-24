# 📋 GUIDE D'INTÉGRATION - SECTIONS STOCK & FACTURATION
## Pour SalesPoints.jsx

### ✅ Étape 1: Vérifier les imports nécessaires
Ajoutez ces imports en haut de SalesPoints.jsx s'ils ne sont pas déjà présents :

```javascript
import { 
  Package, 
  DollarSign, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  Clock,
  Download
} from 'lucide-react';
```

### ✅ Étape 2: Importer les nouvelles données
Dans les imports de mockData, ajoutez :

```javascript
import * as mockData from '../data/mockData';
```

Ou si vous importez individuellement :

```javascript
import { 
  pointsDeVente,
  preCommandes,
  livraisonsHistorique,
  stock,              // ← NOUVEAU
  mouvementsStock,    // ← NOUVEAU
  factures,           // ← NOUVEAU
  paiements           // ← NOUVEAU
} from '../data/mockData';
```

### ✅ Étape 3: Ajouter les onglets Stock et Facturation
Dans la navigation (vers la ligne 80-120), ajoutez ces deux boutons :

**APRÈS l'onglet "Livraisons" et AVANT "Statistiques" :**

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

### ✅ Étape 4: Insérer les sections
Le contenu des sections Stock et Facturation se trouve dans le fichier :
**`sections_stock_facturation.jsx`**

**Copiez le contenu de ce fichier et insérez-le dans SalesPoints.jsx**

**POSITION D'INSERTION :** Juste avant la section Statistiques
```javascript
{/* SECTION 5: STOCK */}
{activeView === 'stock' && (
  // ... Contenu de sections_stock_facturation.jsx ...
)}

{/* SECTION 6: FACTURATION */}
{activeView === 'facturation' && (
  // ... Suite du contenu de sections_stock_facturation.jsx ...
)}

{/* SECTION 7: STATISTIQUES */}  ← Renommer en SECTION 7
{activeView === 'statistiques' && (
  // ... Contenu existant ...
)}
```

### ✅ Étape 5: Tester

1. Sauvegardez tous les fichiers
2. Le serveur devrait se recharger automatiquement
3. Naviguez vers **Points de Vente** dans le dashboard
4. Vous devriez voir 6 onglets : 
   - Points de Vente
   - Pré-commandes
   - Livraisons
   - **Stock** ← NOUVEAU
   - **Facturation** ← NOUVEAU
   - Statistiques

---

## 🎨 Fonctionnalités ajoutées

### Section STOCK
✅ **4 cartes de statistiques :**
- Stock Total (kg)
- Valeur du Stock ($)
- Alertes Stock (nombre)
- Produits Actifs

✅ **Tableau inventaire complet :**
- 8 produits avec détails
- Stock actuel vs stock minimum
- Valeur unitaire et totale
- Emplacement (Chambre Froide A/B, Zone Séchage)
- Statut coloré (Optimal/Bas/Critique)
- Actions : Modifier, Voir mouvements

✅ **Historique des mouvements :**
- 8 derniers mouvements
- Entrées/Sorties avec quantités
- Références et motifs
- Icônes vertes (entrée) / rouges (sortie)

### Section FACTURATION
✅ **4 cartes de statistiques :**
- CA Total
- Factures Payées
- En Attente
- En Retard

✅ **Tableau factures :**
- 6 factures avec détails complets
- Client, dates (émission, échéance)
- Montants : Total, Payé, Reste à payer
- Statuts : Payée, En attente, Partielle, En retard
- Actions : Voir, Paiement, Télécharger PDF

✅ **Détails articles facturés :**
- Liste des 3 dernières factures
- Détail des articles par facture
- Quantités et prix unitaires

✅ **Historique paiements :**
- 5 derniers paiements
- Montants et méthodes (Virement, Chèque, Espèces, Mobile Money)
- Clients et dates

---

## 🚨 Points d'attention

1. **Taille du fichier** : SalesPoints.jsx devient volumineux (~1500 lignes)
   - Considérez de séparer en composants si nécessaire
   
2. **Performances** : Les calculs de totaux sont faits à chaque rendu
   - Utilisez `useMemo` si vous constatez des ralentissements

3. **Données mockData** : Toutes ajoutées dans `mockData.js`
   - `stock` (8 produits)
   - `mouvementsStock` (8 mouvements)
   - `factures` (6 factures)
   - `paiements` (5 paiements)

---

## 🎯 Prochaines étapes recommandées

1. **Formulaires d'ajout :**
   - Nouveau produit au stock
   - Nouvelle facture
   - Enregistrer un paiement

2. **Filtres et recherche :**
   - Filtrer par statut
   - Rechercher par nom de produit/client
   - Filtrer par date

3. **Actions fonctionnelles :**
   - Modifier un produit
   - Générer PDF de facture
   - Enregistrer un mouvement de stock

4. **Graphiques supplémentaires :**
   - Évolution du stock dans le temps
   - Analyse des paiements par méthode
   - Prévisions de rupture de stock

---

**Auteur :** Système d'intégration Kabeya Fresh
**Date :** 21/12/2025
**Version :** 1.0
