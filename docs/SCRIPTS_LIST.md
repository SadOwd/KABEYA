# 📋 SCRIPTS KABEYA - LISTE COMPLÈTE

## ✅ Scripts Créés

| # | Fichier | Type | Description | Statut |
|---|---------|------|-------------|--------|
| 1 | `fusion.bat` | Batch | Fusion simple Windows | ✅ Créé |
| 2 | `fusion.ps1` | PowerShell | Fusion avancée avec options | ✅ Créé |
| 3 | `division.ps1` | PowerShell | Division de fichiers | ✅ Créé |
| 4 | `START.bat` | Batch | Démarrage rapide du projet | ✅ Existant |
| 5 | `FUSION_README.md` | Doc | Documentation fusion | ✅ Créé |
| 6 | `UTILITAIRES.md` | Doc | Guide rapide | ✅ Créé |

---

## 🚀 Utilisation Rapide

### Fusionner des fichiers
```bash
# Windows CMD
fusion.bat NomFichier 3

# PowerShell
.\fusion.ps1 -BaseName "NomFichier" -NumParts 3
```

### Diviser un fichier
```powershell
.\division.ps1 -SourceFile "fichier.jsx" -NumParts 3
```

### Démarrer le projet
```bash
START.bat
```

---

## 📂 Emplacement des Fichiers

```
C:\Users\mmawo\Desktop\KABEYA\
├── 📄 fusion.bat           → Script fusion simple
├── 📄 fusion.ps1           → Script fusion avancé  
├── 📄 division.ps1         → Script division
├── 📄 START.bat            → Démarrage projet
├── 📄 FUSION_README.md     → Doc détaillée fusion
├── 📄 UTILITAIRES.md       → Guide rapide
└── 📄 SCRIPTS_LIST.md      → Ce fichier
```

---

## 🎯 Workflow Recommandé

### Pour créer SalesPoints avec Stock et Facturation :

1. **Créer les parties manuellement**
   ```
   SalesPoints_part1.jsx  → Imports + Base
   SalesPoints_part2.jsx  → Section Stock
   SalesPoints_part3.jsx  → Section Facturation
   SalesPoints_part4.jsx  → Fin + Export
   ```

2. **Fusionner**
   ```bash
   fusion.bat SalesPoints 4
   ```

3. **Tester**
   ```bash
   npm run dev
   ```

4. **Si OK, nettoyer**
   ```powershell
   # Optionnel: supprimer les fichiers _part
   del SalesPoints_part*.jsx
   ```

---

## 📚 Documentation

- **Guide complet** : `FUSION_README.md`
- **Guide rapide** : `UTILITAIRES.md`
- **Ce fichier** : Liste et workflow

---

## ✨ Prochaines Étapes

Pour terminer SalesPoints avec Stock et Facturation :

1. ✅ Scripts créés
2. ⏳ Créer les 4 parties de SalesPoints
3. ⏳ Fusionner avec `fusion.bat`
4. ⏳ Tester l'application
5. ⏳ Commit Git

---

**Prêt à utiliser !** 🚀

Pour toute question : david.kabeya@hotmail.com
