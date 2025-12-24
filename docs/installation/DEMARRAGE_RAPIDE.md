# ⚡ DÉMARRAGE RAPIDE - 3 MINUTES

## 🎯 Installation Express

### Étape 1 : Ouvrir PowerShell (10 secondes)

```
1. Appuyer sur Windows + X
2. Cliquer sur "Windows PowerShell" ou "Terminal"
3. Naviguer vers le projet :
```

```powershell
cd C:\Users\mmawo\Desktop\KABEYA
```

---

### Étape 2 : Installer (30 secondes)

```powershell
.\INSTALL_MASTER.ps1
```

**Attendez les messages :**
```
✅ Fichiers vérifiés
✅ Backups créés
✅ Sections insérées
✅ Boutons ajoutés
✅ Validation OK
✨ Installation terminée avec succès! 🎉
```

---

### Étape 3 : Démarrer (20 secondes)

```powershell
npm run dev
```

**Attendez :**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

---

### Étape 4 : Tester (60 secondes)

```
1. Ouvrir navigateur : http://localhost:5173
2. Cliquer sur 📍 Points de Vente
3. Voir les 6 onglets :
   ✅ Points de Vente
   ✅ Pré-commandes
   ✅ Livraisons
   ✅ Stock        ← NOUVEAU (vert)
   ✅ Facturation  ← NOUVEAU (jaune)
   ✅ Statistiques

4. Cliquer sur Stock
   → Voir l'inventaire de 8 produits
   
5. Cliquer sur Facturation
   → Voir 6 factures détaillées
```

---

## ✅ RÉSULTAT ATTENDU

### Stock (Onglet vert 📦)

```
┌─────────────────────────────────────┐
│  📊 4 STATISTIQUES                  │
│  Stock Total  |  Valeur Stock       │
│  Alertes      |  Produits Actifs    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📋 TABLEAU INVENTAIRE              │
│  8 produits avec détails            │
│  • Tilapia Frais (850 kg)           │
│  • Capitaine Congelé (450 kg)       │
│  • ... etc                          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📈 MOUVEMENTS RÉCENTS              │
│  8 derniers mouvements              │
└─────────────────────────────────────┘
```

---

### Facturation (Onglet jaune 💰)

```
┌─────────────────────────────────────┐
│  💵 4 STATISTIQUES                  │
│  CA Total     |  Payées             │
│  En Attente   |  En Retard          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  🧾 TABLEAU FACTURES                │
│  6 factures complètes               │
│  • KAB-2025-001 ($1,204) ✅         │
│  • KAB-2025-002 ($1,810) ⏰         │
│  • ... etc                          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  📦 ARTICLES FACTURÉS               │
│  3 dernières factures détaillées    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  💳 HISTORIQUE PAIEMENTS            │
│  5 derniers paiements               │
└─────────────────────────────────────┘
```

---

## 🚨 EN CAS DE PROBLÈME

### Erreur 1 : "Script non trouvé"

```powershell
# Vérifier que vous êtes dans le bon dossier
pwd
# Doit afficher : C:\Users\mmawo\Desktop\KABEYA

# Lister les fichiers
ls *.ps1
# Doit montrer : INSTALL_MASTER.ps1
```

---

### Erreur 2 : "Execution Policy"

```powershell
# Autoriser l'exécution (une seule fois)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Puis relancer
.\INSTALL_MASTER.ps1
```

---

### Erreur 3 : Page noire après installation

```
1. Ouvrir Console navigateur (F12)
2. Chercher les erreurs en rouge
3. Si "Import error" :
   → Vérifier les imports dans SalesPoints.jsx
   
4. Restaurer backup si nécessaire :
```

```powershell
# Trouver le backup le plus récent
ls backups | Sort-Object -Descending | Select-Object -First 1

# Restaurer
Copy-Item "backups\[TIMESTAMP]\SalesPoints.jsx.backup" "src\components\SalesPoints.jsx" -Force
```

---

### Erreur 4 : Données non affichées

```
Vérifier mockData.js contient :
✅ export const stock = [...]
✅ export const mouvementsStock = [...]
✅ export const factures = [...]
✅ export const paiements = [...]
```

---

## 📱 AIDE RAPIDE

### Mode Test (sans modifier les fichiers)

```powershell
.\INSTALL_MASTER.ps1 -DryRun
```

### Forcer la réinstallation

```powershell
.\INSTALL_MASTER.ps1 -Force
```

### Voir l'aide détaillée

```powershell
Get-Help .\INSTALL_MASTER.ps1 -Full
```

---

## 📚 DOCUMENTATION COMPLÈTE

```
📖 README_STOCK_FACTURATION.md
   → Guide complet (6 pages)

📖 GUIDE_INTEGRATION_STOCK_FACTURATION.md
   → Installation manuelle pas à pas

📖 LISTE_FICHIERS_STOCK_FACTURATION.md
   → Inventaire de tous les fichiers

📖 RECAPITULATIF_FINAL.md
   → Vue d'ensemble visuelle
```

---

## ⏱️ TEMPS D'INSTALLATION

```
Préparation    : 10 secondes
Installation   : 30 secondes
Démarrage      : 20 secondes
Test           : 60 secondes
────────────────────────────
TOTAL          : ~2 minutes
```

---

## 🎯 CHECK-LIST 30 SECONDES

```
☐ Ouvrir PowerShell
☐ cd C:\Users\mmawo\Desktop\KABEYA
☐ .\INSTALL_MASTER.ps1
☐ npm run dev
☐ Ouvrir http://localhost:5173
☐ Cliquer Points de Vente
☐ Tester Stock ✨
☐ Tester Facturation ✨
```

---

## 🚀 COMMANDES ESSENTIELLES

### Installation
```powershell
.\INSTALL_MASTER.ps1
```

### Démarrage
```powershell
npm run dev
```

### Arrêt
```
Ctrl + C dans le terminal
```

### Restauration
```powershell
# Lister les backups
ls backups

# Restaurer (remplacer [DATE] par la date)
Copy-Item "backups\[DATE]\*.backup" "src\components\" -Force
```

---

## 💡 ASTUCES

### Astuce 1 : Terminal rapide
```
Windows + X
→ Terminal/PowerShell
```

### Astuce 2 : Rechargement automatique
```
Le serveur npm run dev recharge 
automatiquement à chaque modification !
```

### Astuce 3 : Console navigateur
```
F12 → Console
Pour voir les erreurs en temps réel
```

### Astuce 4 : Navigation rapide
```
Ctrl + Clic sur les onglets
pour navigation rapide
```

---

## 🎊 SUCCÈS !

```
Si vous voyez :
✅ Onglet Stock (vert) fonctionnel
✅ Onglet Facturation (jaune) fonctionnel
✅ Données affichées correctement
✅ Pas d'erreurs dans la console

→ FÉLICITATIONS ! Installation réussie ! 🎉
```

---

## 📞 BESOIN D'AIDE ?

### Documentation
- 📖 `README_STOCK_FACTURATION.md` - Guide complet
- 📖 `GUIDE_INTEGRATION_STOCK_FACTURATION.md` - Détails techniques

### Console
```
F12 dans le navigateur
→ Onglet Console
→ Copier les erreurs
```

### Backups
```
Toujours créés automatiquement !
Emplacement : backups/[DATE]/
```

---

## ⚡ RECAP 10 SECONDES

```bash
cd C:\Users\mmawo\Desktop\KABEYA
.\INSTALL_MASTER.ps1
npm run dev
# Ouvrir http://localhost:5173
# Tester Stock & Facturation
# ✨ Terminé !
```

---

**🐟 Kabeya Fresh - Stock & Facturation v1.0.0**  
**⚡ Démarrage en 3 minutes top chrono !**  
**✨ Simple, Rapide, Efficace**

🎉 **BON DÉVELOPPEMENT !** 🚀
