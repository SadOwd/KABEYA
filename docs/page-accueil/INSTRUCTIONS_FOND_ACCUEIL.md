# 🎨 Instructions pour le Fond de la Page d'Accueil

## ✅ Modifications Effectuées

La page d'accueil (SplashScreen) a été mise à jour avec :

### 🌊 Nouveau Thème Aquatique
- **Dégradé dynamique** : Bleu profond → Cyan → Teal (thème mer/eau)
- **Effets d'animation** : 
  - Bulles d'eau montantes (20 bulles animées)
  - Particules flottantes aquatiques (40 particules)
  - Cercles lumineux flottants
  - Vagues de lumière pulsantes

### 🎨 Nouvelles Couleurs
- Remplacement du vert par cyan/bleu
- Effets lumineux cyan avec ombres portées
- Dégradés bleu-cyan-teal partout

### 🖼️ Support Image de Fond
L'application supporte maintenant une **image de fond de poissons/bassin**.

---

## 📸 Comment Ajouter Votre Image de Fond

### Option 1 : Image de Poissons/Bassin (Recommandé)

1. **Trouvez une belle image** de :
   - Poissons dans un bassin
   - Vue sous-marine
   - Pisciculture
   - Aquarium

2. **Renommez le fichier** en : `fish-background.jpg`

3. **Placez le fichier** dans :
   ```
   C:\Users\mmawo\Desktop\KABEYA\public\images\
   ```

4. **Redémarrez l'application** et l'image apparaîtra en fond !

### Option 2 : Utiliser Uniquement le Dégradé (Sans Image)

Si vous préférez ne pas avoir d'image de fond, rien à faire ! Le magnifique dégradé bleu-cyan animé est déjà actif.

---

## 🎯 Recommandations pour l'Image

### Caractéristiques Idéales :
- **Format** : JPG, PNG ou WEBP
- **Résolution** : Minimum 1920x1080 pixels (Full HD)
- **Qualité** : Haute résolution pour éviter le flou
- **Composition** : 
  - Image claire avec des poissons visibles
  - Couleurs bleues/vertes naturelles
  - Pas trop chargée (pour que le texte reste lisible)

### Où Trouver des Images :
- **Unsplash.com** : Photos gratuites haute qualité
- **Pexels.com** : Banque d'images gratuites
- **Pixabay.com** : Images libres de droits
- **Vos propres photos** : Photos de votre pisciculture !

### Exemples de recherche :
- "fish farm underwater"
- "tilapia fish pond"
- "aquaculture basin"
- "fish swimming blue water"

---

## 🎨 Personnalisation Avancée

### Changer l'Opacité de l'Overlay

Si l'image est trop visible ou pas assez, modifiez dans `SplashScreen.jsx` :

```jsx
// Ligne actuelle :
<div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-cyan-900/90 to-teal-950/95">

// Pour plus de transparence (image plus visible) :
<div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-cyan-900/75 to-teal-950/80">

// Pour moins de transparence (image moins visible) :
<div className="absolute inset-0 bg-gradient-to-br from-blue-950/98 via-cyan-900/95 to-teal-950/98">
```

### Changer le Format de l'Image

Pour utiliser PNG ou WEBP au lieu de JPG :

```jsx
// Ligne à modifier dans SplashScreen.jsx :
src="/images/fish-background.jpg"

// Changez en :
src="/images/fish-background.png"
// ou
src="/images/fish-background.webp"
```

---

## 🚀 Tester les Modifications

1. **Placez votre image** dans `public/images/`
2. **Ouvrez un terminal** dans le dossier KABEYA
3. **Lancez l'application** :
   ```bash
   npm run dev
   ```
4. **Ouvrez votre navigateur** sur `http://localhost:5173`

---

## ✨ Résultat Final

Vous aurez une page d'accueil magnifique avec :
- ✅ Logo Kabeya Fresh centré
- ✅ Image de fond de votre pisciculture (optionnel)
- ✅ Dégradé bleu-cyan animé
- ✅ Bulles d'eau montantes
- ✅ Particules flottantes
- ✅ Effets lumineux aquatiques
- ✅ Animations fluides et modernes

---

## 🆘 Besoin d'Aide ?

Si l'image ne s'affiche pas :
1. Vérifiez que le fichier est bien dans `public/images/`
2. Vérifiez que le nom est exactement `fish-background.jpg`
3. Rechargez la page (Ctrl + F5)
4. Vérifiez la console du navigateur (F12) pour les erreurs

---

**Bon design ! 🐟💙**
