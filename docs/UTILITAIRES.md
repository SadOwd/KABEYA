# 🔧 KABEYA - Utilitaires de Gestion de Fichiers

## 📦 Scripts Disponibles

### 1. **fusion.bat** - Fusion Simple (Windows)
```batch
fusion.bat SalesPoints 3
```

### 2. **fusion.ps1** - Fusion Avancée (PowerShell)
```powershell
.\fusion.ps1 -BaseName "SalesPoints" -NumParts 3
```

### 3. **division.ps1** - Division de Fichiers (PowerShell)
```powershell
.\division.ps1 -SourceFile "SalesPoints.jsx" -NumParts 3
```

---

## 🚀 Guide Rapide

### Fusionner 3 parties en 1 fichier
```batch
# Méthode 1: Batch (Simple)
fusion.bat SalesPoints 3

# Méthode 2: PowerShell (Avancé)
.\fusion.ps1 -BaseName "SalesPoints" -NumParts 3
```

### Diviser 1 fichier en 3 parties
```powershell
.\division.ps1 -SourceFile "src\components\SalesPoints.jsx" -NumParts 3
```

---

## 📋 Cas d'Usage Typiques

### Scénario 1: Créer un gros composant en plusieurs parties

1. **Créer les parties manuellement**
   ```
   SalesPoints_part1.jsx  (Imports + Header)
   SalesPoints_part2.jsx  (Section Stock)
   SalesPoints_part3.jsx  (Section Facturation)
   SalesPoints_part4.jsx  (Export)
   ```

2. **Fusionner**
   ```batch
   fusion.bat SalesPoints 4
   ```

3. **Résultat**
   ```
   src\components\SalesPoints.jsx ✅
   ```

### Scénario 2: Diviser un fichier trop gros

1. **Fichier existant trop volumineux**
   ```
   src\components\Dashboard.jsx (2000 lignes)
   ```

2. **Diviser en 4 parties**
   ```powershell
   .\division.ps1 -SourceFile "src\components\Dashboard.jsx" -NumParts 4
   ```

3. **Résultat**
   ```
   Dashboard_part1.jsx (500 lignes)
   Dashboard_part2.jsx (500 lignes)
   Dashboard_part3.jsx (500 lignes)
   Dashboard_part4.jsx (500 lignes)
   ```

---

## ⚡ Commandes Rapides

| Action | Commande |
|--------|----------|
| Fusionner 2 parties | `fusion.bat MonFichier 2` |
| Fusionner 5 parties | `.\fusion.ps1 -BaseName "MonFichier" -NumParts 5` |
| Diviser en 3 parties | `.\division.ps1 -SourceFile "MonFichier.jsx" -NumParts 3` |
| Fusionner vers pages/ | `.\fusion.ps1 -BaseName "Page" -NumParts 2 -OutputDir "src\pages"` |

---

## 🎯 Avantages

### Fusion
✅ Assembler facilement de gros composants  
✅ Travailler en équipe sur différentes parties  
✅ Éviter les conflits Git  
✅ Meilleure organisation du code  

### Division
✅ Diviser un fichier trop gros  
✅ Faciliter la maintenance  
✅ Partager le travail en équipe  
✅ Révision de code plus facile  

---

## 📁 Structure Recommandée

```
KABEYA/
├── fusion.bat              # Script de fusion simple
├── fusion.ps1              # Script de fusion avancé
├── division.ps1            # Script de division
├── FUSION_README.md        # Documentation détaillée
├── UTILITAIRES.md          # Ce fichier
│
├── src/
│   └── components/
│       ├── SalesPoints.jsx      # Fichier final fusionné
│       ├── Header.jsx
│       └── Navigation.jsx
│
└── (Fichiers temporaires de travail)
    ├── SalesPoints_part1.jsx
    ├── SalesPoints_part2.jsx
    └── SalesPoints_part3.jsx
```

---

## 💡 Conseils & Bonnes Pratiques

### 1. Nommage des Parties
```
✅ BON: Component_part1.jsx, Component_part2.jsx
❌ MAUVAIS: Component-1.jsx, ComponentPartOne.jsx
```

### 2. Organisation du Code
- **Partie 1** : Imports, déclarations, état
- **Parties 2-N** : Sections du JSX
- **Dernière partie** : Fermeture + Export

### 3. Commentaires de Séparation
```javascript
// ==========================================
// SECTION STOCK - PARTIE 2
// ==========================================
```

### 4. Vérification Post-Fusion
Après fusion, toujours :
1. Vérifier la syntaxe
2. Tester l'application
3. Vérifier les imports/exports

---

## 🔐 Sécurité

⚠️ Ces scripts :
- Ne modifient PAS les fichiers sources
- Créent de NOUVEAUX fichiers
- Ne suppriment que sur confirmation

---

## 📞 Support

**Email** : david.kabeya@hotmail.com  
**Téléphone** : +1 (514) 441-2992  
**Projet** : KABEYA INC - Dashboard Piscicole

---

**Version** : 1.0  
**Date** : 20 Décembre 2024  
**Auteur** : KABEYA Development Team
