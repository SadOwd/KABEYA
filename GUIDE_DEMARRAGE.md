# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## ⚡ Méthode 1 : Démarrage Automatique (Recommandé)

1. **Double-cliquez sur `START.bat`**
   - Le script va installer toutes les dépendances
   - Puis lancer automatiquement le dashboard
   - Ouvrir votre navigateur sur http://localhost:3000

## 🛠️ Méthode 2 : Démarrage Manuel

### Étape 1 : Installation
```bash
npm install
```

### Étape 2 : Lancement
```bash
npm run dev
```

### Étape 3 : Ouvrir
Ouvrez votre navigateur sur : **http://localhost:3000**

---

## 📱 Fonctionnalités Disponibles

### ✅ **7 Sections Complètes**

1. **Vue d'ensemble** 
   - KPIs principaux (CA, ROI, Production, Emplois)
   - Graphiques de production par espèce
   - Évolution mensuelle (ventes/dépenses)
   - Indicateurs temps réel

2. **Monitoring Temps Réel**
   - Surveillance en direct des 4 bassins
   - Température, pH, Oxygène dissous
   - Alertes automatiques
   - Mise à jour toutes les 5 secondes

3. **Production**
   - Détails par espèce (Ngolo, Tilapia, Kongo ya Sika)
   - Courbe de croissance hebdomadaire
   - Caractéristiques des espèces
   - Taux de mortalité

4. **Finances**
   - Compte de résultat détaillé
   - ROI 628% annuel
   - Répartition du bénéfice (6 catégories)
   - Indicateurs de performance

5. **Tâches**
   - Calendrier d'exécution
   - Filtres par statut (Effectuée/En cours/Attente)
   - Priorités et responsables
   - Planning récurrent

6. **Alimentation**
   - Grille de ration par espèce/stade
   - Formules de calcul (biomasse, quantité)
   - Recommandations nutritionnelles
   - Bonnes pratiques

7. **Traitements Sanitaires**
   - Historique complet des traitements
   - Protocoles préventifs et curatifs
   - Produits sanitaires utilisés
   - Consignes de sécurité

8. **Dépenses**
   - Suivi budgétaire complet
   - Répartition par catégorie
   - Top 5 dépenses
   - Conseils de gestion

---

## 🎯 Fonctionnalités Premium

### 🔔 **Système d'Alertes Automatiques**
- Température eau anormale
- Stock aliment faible
- Tâches en retard
- Contrôles sanitaires
- **Mise à jour : toutes les 30 secondes**

### 📄 **Export PDF**
- Génération rapide de rapports
- Inclut tous les KPIs
- Production par espèce
- Résumé financier
- Alertes actives

### ⏱️ **Mise à Jour Temps Réel**
- Dernière MAJ affichée en header
- Refresh automatique toutes les 5s
- Indicateur de connexion en direct

---

## 🎨 Personnalisation

### Modifier les Données
Éditez : `src/data/mockData.js`

```javascript
export const productionData = [
  { species: 'Ngolo', alevins: 31800, ... },
  // Ajoutez vos données ici
];
```

### Modifier les Couleurs
Éditez : `tailwind.config.js`

### Ajouter des Sections
Créez un nouveau composant dans : `src/components/`

---

## 📊 Données Incluses

- ✅ 3 espèces de poissons
- ✅ 77,800 kg production totale
- ✅ $389,000 CA par cycle
- ✅ 628% ROI annuel
- ✅ 4 bassins en surveillance
- ✅ 8 tâches récentes
- ✅ 3 traitements sanitaires
- ✅ 7 dépenses enregistrées
- ✅ Grille alimentation complète

---

## 🆘 Dépannage

### Erreur "Port 3000 déjà utilisé"
```bash
# Modifiez le port dans vite.config.js
server: {
  port: 3001  // Changez ici
}
```

### Erreur "Module not found"
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
```

### Les graphiques ne s'affichent pas
- Vérifiez que Recharts est installé
- Videz le cache du navigateur (Ctrl + Shift + R)

---

## 📞 Support

**KABEYA INC**
- 📧 david.kabeya@hotmail.com
- 📱 +1 (514) 441-2992
- 📍 Kinshasa, RDC

---

## 🔥 Prochaines Étapes

1. ✅ Tester toutes les sections
2. 📝 Remplacer les données mockées par vos données réelles
3. 🎨 Personnaliser les couleurs/logo
4. 📱 Déployer en production (npm run build)
5. 🚀 Partager avec votre équipe !

---

**Développé avec ❤️ pour KABEYA INC**

*Dashboard mis à jour le 08/12/2025*
