# 🔧 Scripts de Fusion de Fichiers - KABEYA

## 📋 Description

Ces scripts permettent de fusionner plusieurs fichiers en parties en un seul fichier complet. Très utile pour assembler de gros composants React qui ont été créés en plusieurs parties.

## 📁 Fichiers Disponibles

### 1. `fusion.bat` (Windows Batch)
Script simple en ligne de commande Windows.

### 2. `fusion.ps1` (PowerShell)
Script avancé avec plus de fonctionnalités et meilleure présentation.

---

## 🚀 Utilisation

### Méthode 1 : Batch Script (Simple)

```batch
fusion.bat [nom_fichier] [nombre_parties]
```

**Exemple :**
```batch
fusion.bat SalesPoints 3
```

Cela va fusionner :
- `SalesPoints_part1.jsx`
- `SalesPoints_part2.jsx`
- `SalesPoints_part3.jsx`

En un seul fichier :
- `src\components\SalesPoints.jsx`

### Méthode 2 : PowerShell (Avancé)

```powershell
.\fusion.ps1 -BaseName "SalesPoints" -NumParts 3
```

**Avec options personnalisées :**
```powershell
.\fusion.ps1 -BaseName "MyComponent" -NumParts 5 -OutputDir "src\pages" -Extension ".tsx"
```

#### Paramètres PowerShell

| Paramètre | Description | Obligatoire | Défaut |
|-----------|-------------|-------------|--------|
| `-BaseName` | Nom de base du fichier | ✅ Oui | - |
| `-NumParts` | Nombre de parties à fusionner | ✅ Oui | - |
| `-OutputDir` | Répertoire de destination | ❌ Non | `src\components` |
| `-Extension` | Extension des fichiers | ❌ Non | `.jsx` |

---

## 📝 Convention de Nommage

Les fichiers parties doivent suivre ce format :
```
[BaseName]_part[Numéro][Extension]
```

**Exemples :**
- `SalesPoints_part1.jsx`
- `SalesPoints_part2.jsx`
- `SalesPoints_part3.jsx`
- `Header_part1.jsx`
- `Header_part2.jsx`

---

## ✨ Fonctionnalités

### Script Batch (`fusion.bat`)
- ✅ Fusion simple et rapide
- ✅ Vérification des fichiers manquants
- ✅ Affichage de la taille du fichier final
- ✅ Compatible tous Windows

### Script PowerShell (`fusion.ps1`)
- ✅ Toutes les fonctionnalités du Batch
- ✅ Affichage coloré et détaillé
- ✅ Comptage des lignes
- ✅ Option de suppression automatique des parties
- ✅ Paramètres personnalisables
- ✅ Gestion d'erreurs avancée

---

## 🎯 Exemples d'Utilisation

### Exemple 1 : Fusionner SalesPoints en 3 parties

**Structure avant :**
```
C:\Users\mmawo\Desktop\KABEYA\
├── SalesPoints_part1.jsx
├── SalesPoints_part2.jsx
├── SalesPoints_part3.jsx
└── fusion.bat
```

**Commande :**
```batch
fusion.bat SalesPoints 3
```

**Structure après :**
```
C:\Users\mmawo\Desktop\KABEYA\
├── SalesPoints_part1.jsx
├── SalesPoints_part2.jsx
├── SalesPoints_part3.jsx
├── fusion.bat
└── src\
    └── components\
        └── SalesPoints.jsx   ✨ NOUVEAU
```

### Exemple 2 : Fusionner avec PowerShell et nettoyer

```powershell
# Fusionner
.\fusion.ps1 -BaseName "SalesPoints" -NumParts 3

# Le script vous demandera :
# "Voulez-vous supprimer les fichiers parties? (O/N)"
# Tapez O pour supprimer les fichiers _part1, _part2, etc.
```

### Exemple 3 : Fichier TypeScript personnalisé

```powershell
.\fusion.ps1 -BaseName "Dashboard" -NumParts 4 -OutputDir "src\pages" -Extension ".tsx"
```

Fusionne :
- `Dashboard_part1.tsx` → `src\pages\Dashboard.tsx`
- `Dashboard_part2.tsx`
- `Dashboard_part3.tsx`
- `Dashboard_part4.tsx`

---

## ⚠️ Notes Importantes

### 1. **Ordre des parties**
Les fichiers sont fusionnés dans l'ordre numérique : part1, part2, part3, etc.
Assurez-vous que vos parties sont numérotées correctement !

### 2. **Pas de ligne vide entre les parties**
Les fichiers sont fusionnés directement sans ajout de lignes vides.
Si vous voulez des séparations, ajoutez-les manuellement dans les fichiers parties.

### 3. **PowerShell Execution Policy**
Si vous avez une erreur avec PowerShell, exécutez :
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### 4. **Vérification avant fusion**
Le script vérifie que TOUS les fichiers parties existent avant de commencer.
Si un fichier manque, la fusion s'arrête immédiatement.

---

## 🐛 Résolution de Problèmes

### Problème : "Fichier introuvable"
**Solution :** Vérifiez que :
- Les fichiers parties existent dans le répertoire actuel
- Le nom de base est correct (sensible à la casse)
- Les fichiers sont bien nommés `[BaseName]_part[N].jsx`

### Problème : PowerShell refuse d'exécuter
**Solution :**
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Problème : Le fichier fusionné ne fonctionne pas
**Solution :** Vérifiez que :
- Chaque partie est un code JSX/JS valide
- Les imports sont dans la première partie
- Les exports sont dans la dernière partie
- Pas de duplication de code entre les parties

---

## 📊 Exemple Complet : SalesPoints

### Partie 1 (Imports + début)
```javascript
// SalesPoints_part1.jsx
import React, { useState } from 'react';
import { Store, Package } from 'lucide-react';

const SalesPoints = () => {
  const [activeView, setActiveView] = useState('stock');
  // ... code ...
```

### Partie 2 (Sections Stock)
```javascript
// SalesPoints_part2.jsx
  // Section Stock
  {activeView === 'stock' && (
    <div className="space-y-6">
      {/* Code de la section stock */}
    </div>
  )}
```

### Partie 3 (Fin + Export)
```javascript
// SalesPoints_part3.jsx
  // Fin du composant
  );
};

export default SalesPoints;
```

### Fusion
```batch
fusion.bat SalesPoints 3
```

### Résultat
Fichier complet `src\components\SalesPoints.jsx` fonctionnel ! ✅

---

## 🎨 Personnalisation

Vous pouvez modifier les scripts pour :
- Changer le répertoire de sortie par défaut
- Ajouter des en-têtes/pieds de page automatiques
- Créer des backups avant fusion
- Ajouter une validation du code fusionné

---

## 📞 Support

Pour toute question sur ces scripts :
- **Email** : david.kabeya@hotmail.com
- **Téléphone** : +1 (514) 441-2992

---

**Date de création** : 20 Décembre 2024  
**Version** : 1.0  
**Projet** : KABEYA INC - Dashboard Piscicole
