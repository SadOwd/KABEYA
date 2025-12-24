#!/usr/bin/env pwsh
# Script pour ajouter les boutons Stock et Facturation dans la navigation
# Version : 1.0

Write-Host "`n🎨 Ajout des boutons de navigation Stock & Facturation`n" -ForegroundColor Cyan

$salesPointsFile = "C:\Users\mmawo\Desktop\KABEYA\src\components\SalesPoints.jsx"
$backupFile = "C:\Users\mmawo\Desktop\KABEYA\src\components\SalesPoints.jsx.nav_backup"

# Créer backup
Write-Host "📋 Création backup..." -ForegroundColor Yellow
Copy-Item $salesPointsFile $backupFile -Force
Write-Host "✅ Backup créé`n" -ForegroundColor Green

# Lire le fichier
$content = Get-Content $salesPointsFile -Raw

# Boutons à ajouter
$stockButton = @"
          <button
            onClick={() => setActiveView('stock')}
            className={``px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ``{
              activeView === 'stock'
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30'
                : 'glass-effect text-gray-300 hover:text-white hover:bg-white/5'
            }``}
          >
            <Package className="w-5 h-5" />
            Stock
          </button>
"@

$facturationButton = @"
          <button
            onClick={() => setActiveView('facturation')}
            className={``px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ``{
              activeView === 'facturation'
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/30'
                : 'glass-effect text-gray-300 hover:text-white hover:bg-white/5'
            }``}
          >
            <DollarSign className="w-5 h-5" />
            Facturation
          </button>
"@

# Chercher le bouton Statistiques
Write-Host "🔍 Recherche du bouton Statistiques..." -ForegroundColor Yellow

$statsButtonPattern = @"
          <button\s+onClick=\{\(\) => setActiveView\('statistiques'\)\}[^>]+>\s+<TrendingUp[^>]+/>\s+Statistiques\s+</button>
"@

if ($content -match $statsButtonPattern) {
    Write-Host "✅ Bouton Statistiques trouvé`n" -ForegroundColor Green
    
    # Insérer les nouveaux boutons AVANT le bouton Statistiques
    $content = $content -replace $statsButtonPattern, ($stockButton + "`n`n" + $facturationButton + "`n`n" + $Matches[0])
    
    # Sauvegarder
    Write-Host "💾 Écriture des modifications..." -ForegroundColor Yellow
    Set-Content -Path $salesPointsFile -Value $content -Encoding UTF8
    Write-Host "✅ Boutons ajoutés avec succès!`n" -ForegroundColor Green
    
    Write-Host "📊 MODIFICATIONS EFFECTUÉES" -ForegroundColor Cyan
    Write-Host "=" * 50 -ForegroundColor Gray
    Write-Host "✅ Bouton Stock ajouté (vert)" -ForegroundColor Green
    Write-Host "✅ Bouton Facturation ajouté (jaune)" -ForegroundColor Green
    Write-Host "✅ Navigation mise à jour" -ForegroundColor Green
    
} else {
    Write-Host "❌ Bouton Statistiques introuvable!" -ForegroundColor Red
    Write-Host "   Ajoutez les boutons manuellement" -ForegroundColor Yellow
}

Write-Host "`n🚀 Testez maintenant : npm run dev`n" -ForegroundColor Cyan
