#!/usr/bin/env pwsh
# Script d'intégration automatique des sections Stock et Facturation
# Version : 1.0
# Date : 21/12/2025

Write-Host "`n🐟 " -ForegroundColor Green -NoNewline
Write-Host "KABEYA FRESH - Intégration Stock & Facturation" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Gray

$projectRoot = "C:\Users\mmawo\Desktop\KABEYA"
$salesPointsFile = "$projectRoot\src\components\SalesPoints.jsx"
$sectionsFile = "$projectRoot\sections_stock_facturation.jsx"
$backupFile = "$projectRoot\src\components\SalesPoints.jsx.backup"

# Vérifier que les fichiers existent
if (-not (Test-Path $salesPointsFile)) {
    Write-Host "❌ Fichier SalesPoints.jsx introuvable!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $sectionsFile)) {
    Write-Host "❌ Fichier sections_stock_facturation.jsx introuvable!" -ForegroundColor Red
    exit 1
}

Write-Host "`n📋 Étape 1: Création de la sauvegarde..." -ForegroundColor Yellow
Copy-Item $salesPointsFile $backupFile -Force
Write-Host "✅ Sauvegarde créée: SalesPoints.jsx.backup" -ForegroundColor Green

Write-Host "`n📖 Étape 2: Lecture des fichiers..." -ForegroundColor Yellow
$salesPointsContent = Get-Content $salesPointsFile -Raw
$sectionsContent = Get-Content $sectionsFile -Raw

# Compter les lignes
$salesPointsLines = ($salesPointsContent -split "`n").Count
$sectionsLines = ($sectionsContent -split "`n").Count

Write-Host "   - SalesPoints.jsx : $salesPointsLines lignes" -ForegroundColor Cyan
Write-Host "   - Sections nouvelles : $sectionsLines lignes" -ForegroundColor Cyan

Write-Host "`n🔍 Étape 3: Recherche du point d'insertion..." -ForegroundColor Yellow

# Chercher la section Statistiques
$insertionMarker = "{/* SECTION 6: STATISTIQUES */}"
$insertionIndex = $salesPointsContent.IndexOf($insertionMarker)

if ($insertionIndex -eq -1) {
    # Essayer avec SECTION 7
    $insertionMarker = "{/* SECTION 7: STATISTIQUES */}"
    $insertionIndex = $salesPointsContent.IndexOf($insertionMarker)
}

if ($insertionIndex -eq -1) {
    Write-Host "❌ Point d'insertion introuvable!" -ForegroundColor Red
    Write-Host "   Recherchez manuellement la section STATISTIQUES" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Point d'insertion trouvé à la position $insertionIndex" -ForegroundColor Green

Write-Host "`n✂️ Étape 4: Insertion des nouvelles sections..." -ForegroundColor Yellow

# Insérer le contenu
$beforeInsertion = $salesPointsContent.Substring(0, $insertionIndex)
$afterInsertion = $salesPointsContent.Substring($insertionIndex)

# Renommer SECTION 6 en SECTION 7
$afterInsertion = $afterInsertion -replace '{/\* SECTION 6: STATISTIQUES \*/}', '{/* SECTION 7: STATISTIQUES */}'

$newContent = $beforeInsertion + $sectionsContent + "`n`n      " + $afterInsertion

Write-Host "`n💾 Étape 5: Écriture du nouveau fichier..." -ForegroundColor Yellow
Set-Content -Path $salesPointsFile -Value $newContent -Encoding UTF8

$newLines = ($newContent -split "`n").Count
Write-Host "✅ Fichier mis à jour: $newLines lignes totales" -ForegroundColor Green

Write-Host "`n🎨 Étape 6: Vérification des imports..." -ForegroundColor Yellow

# Vérifier les imports nécessaires
$requiredImports = @(
    'Package',
    'DollarSign',
    'AlertTriangle',
    'TrendingUp',
    'TrendingDown',
    'Plus',
    'Edit',
    'Eye',
    'CheckCircle',
    'Clock',
    'Download'
)

$importLine = $newContent -match "from 'lucide-react'"
$missingImports = @()

foreach ($import in $requiredImports) {
    if ($newContent -notmatch [regex]::Escape($import)) {
        $missingImports += $import
    }
}

if ($missingImports.Count -gt 0) {
    Write-Host "⚠️  Imports manquants détectés:" -ForegroundColor Yellow
    foreach ($missing in $missingImports) {
        Write-Host "   - $missing" -ForegroundColor Red
    }
    Write-Host "`n   Ajoutez-les manuellement dans les imports lucide-react" -ForegroundColor Cyan
} else {
    Write-Host "✅ Tous les imports nécessaires sont présents" -ForegroundColor Green
}

Write-Host "`n📊 RÉSUMÉ DE L'INTÉGRATION" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Gray
Write-Host "✅ Sections ajoutées : Stock & Facturation" -ForegroundColor Green
Write-Host "✅ Fichier sauvegardé : $backupFile" -ForegroundColor Green
Write-Host "✅ Lignes ajoutées   : $sectionsLines" -ForegroundColor Green
Write-Host "✅ Total lignes      : $newLines" -ForegroundColor Green

Write-Host "`n🚀 PROCHAINES ÉTAPES" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Gray
Write-Host "1. Vérifiez que les imports sont complets" -ForegroundColor Yellow
Write-Host "2. Ajoutez les boutons Stock et Facturation dans la navigation" -ForegroundColor Yellow
Write-Host "3. Testez l'application : npm run dev" -ForegroundColor Yellow
Write-Host "4. Consultez le guide : GUIDE_INTEGRATION_STOCK_FACTURATION.md" -ForegroundColor Yellow

Write-Host "`n🔧 EN CAS DE PROBLÈME" -ForegroundColor Cyan
Write-Host "=" * 60 -ForegroundColor Gray
Write-Host "Restaurer la sauvegarde :" -ForegroundColor Yellow
Write-Host "   Copy-Item '$backupFile' '$salesPointsFile' -Force" -ForegroundColor White

Write-Host "`n✨ Intégration terminée avec succès! 🎉`n" -ForegroundColor Green
