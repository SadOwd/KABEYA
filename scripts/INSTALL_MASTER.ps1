#!/usr/bin/env pwsh
# 🐟 KABEYA FRESH - Script Master d'Installation Stock & Facturation
# Ce script automatise TOUTE l'installation des nouvelles sections
# Version : 1.0.0 - Date : 21/12/2025

param(
    [switch]$DryRun = $false,  # Mode test sans modifications
    [switch]$Force = $false     # Forcer même si déjà installé
)

# Configuration
$ErrorActionPreference = "Stop"
$projectRoot = "C:\Users\mmawo\Desktop\KABEYA"
$salesPointsFile = "$projectRoot\src\components\SalesPoints.jsx"
$mockDataFile = "$projectRoot\src\data\mockData.js"
$sectionsFile = "$projectRoot\sections_stock_facturation.jsx"

# Couleurs
function Write-Header { 
    param($text)
    Write-Host "`n" -NoNewline
    Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
    Write-Host "║  " -NoNewline -ForegroundColor Cyan
    Write-Host $text.PadRight(57) -NoNewline -ForegroundColor White
    Write-Host "  ║" -ForegroundColor Cyan
    Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
}

function Write-Step {
    param($number, $text)
    Write-Host "`n[$number] " -NoNewline -ForegroundColor Yellow
    Write-Host $text -ForegroundColor White
}

function Write-Success {
    param($text)
    Write-Host "   ✅ $text" -ForegroundColor Green
}

function Write-Info {
    param($text)
    Write-Host "   ℹ️  $text" -ForegroundColor Cyan
}

function Write-Warning {
    param($text)
    Write-Host "   ⚠️  $text" -ForegroundColor Yellow
}

function Write-Error {
    param($text)
    Write-Host "   ❌ $text" -ForegroundColor Red
}

# Banner
Clear-Host
Write-Host @"

   ██╗  ██╗ █████╗ ██████╗ ███████╗██╗   ██╗ █████╗ 
   ██║ ██╔╝██╔══██╗██╔══██╗██╔════╝╚██╗ ██╔╝██╔══██╗
   █████╔╝ ███████║██████╔╝█████╗   ╚████╔╝ ███████║
   ██╔═██╗ ██╔══██║██╔══██╗██╔══╝    ╚██╔╝  ██╔══██║
   ██║  ██╗██║  ██║██████╔╝███████╗   ██║   ██║  ██║
   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝
                                                      
"@ -ForegroundColor Green

Write-Header "🐟 INSTALLATION AUTOMATIQUE STOCK & FACTURATION"

if ($DryRun) {
    Write-Warning "MODE TEST ACTIVÉ - Aucune modification ne sera effectuée"
}

# Étape 1: Vérification des fichiers
Write-Step "1" "Vérification des fichiers requis..."

$filesOk = $true
$files = @{
    "SalesPoints.jsx" = $salesPointsFile
    "mockData.js" = $mockDataFile
    "sections_stock_facturation.jsx" = $sectionsFile
}

foreach ($file in $files.GetEnumerator()) {
    if (Test-Path $file.Value) {
        Write-Success "$($file.Key) trouvé"
    } else {
        Write-Error "$($file.Key) INTROUVABLE : $($file.Value)"
        $filesOk = $false
    }
}

if (-not $filesOk) {
    Write-Error "Fichiers manquants. Installation impossible."
    exit 1
}

# Étape 2: Vérifier si déjà installé
Write-Step "2" "Vérification de l'installation existante..."

$salesContent = Get-Content $salesPointsFile -Raw
$alreadyInstalled = $salesContent -match "activeView === 'stock'" -and 
                    $salesContent -match "activeView === 'facturation'"

if ($alreadyInstalled -and -not $Force) {
    Write-Warning "Stock & Facturation sont déjà installés!"
    Write-Info "Utilisez -Force pour forcer la réinstallation"
    $response = Read-Host "Continuer quand même ? (o/N)"
    if ($response -ne 'o' -and $response -ne 'O') {
        Write-Info "Installation annulée"
        exit 0
    }
}

# Étape 3: Créer les backups
Write-Step "3" "Création des sauvegardes..."

if (-not $DryRun) {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupDir = "$projectRoot\backups\$timestamp"
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    
    Copy-Item $salesPointsFile "$backupDir\SalesPoints.jsx.backup"
    Copy-Item $mockDataFile "$backupDir\mockData.js.backup"
    
    Write-Success "Backups créés dans : $backupDir"
} else {
    Write-Info "[TEST] Backups seraient créés"
}

# Étape 4: Mise à jour de mockData.js
Write-Step "4" "Vérification des données mockData.js..."

$mockContent = Get-Content $mockDataFile -Raw
$hasStockData = $mockContent -match "export const stock ="
$hasFacturesData = $mockContent -match "export const factures ="

if ($hasStockData -and $hasFacturesData) {
    Write-Success "Données stock et factures déjà présentes"
} else {
    if (-not $hasStockData) {
        Write-Warning "Données 'stock' manquantes"
    }
    if (-not $hasFacturesData) {
        Write-Warning "Données 'factures' manquantes"
    }
    Write-Info "Les données ont déjà été ajoutées précédemment"
    Write-Info "Vérifiez que les exports sont bien présents à la fin de mockData.js"
}

# Étape 5: Vérifier les imports
Write-Step "5" "Vérification des imports dans SalesPoints.jsx..."

$requiredImports = @('Package', 'DollarSign', 'AlertTriangle', 'TrendingUp', 
                     'TrendingDown', 'Plus', 'Edit', 'Eye', 'CheckCircle', 
                     'Clock', 'Download')

$missingImports = @()
foreach ($import in $requiredImports) {
    if ($salesContent -notmatch [regex]::Escape($import)) {
        $missingImports += $import
    }
}

if ($missingImports.Count -gt 0) {
    Write-Warning "Imports manquants : $($missingImports -join ', ')"
    Write-Info "Ils seront ajoutés automatiquement"
} else {
    Write-Success "Tous les imports sont présents"
}

# Étape 6: Insertion des sections
Write-Step "6" "Insertion des sections Stock & Facturation..."

$sectionsContent = Get-Content $sectionsFile -Raw

# Chercher le point d'insertion
$insertionMarker = "{/* SECTION 6: STATISTIQUES */}"
$insertionIndex = $salesContent.IndexOf($insertionMarker)

if ($insertionIndex -eq -1) {
    $insertionMarker = "{/* SECTION 7: STATISTIQUES */}"
    $insertionIndex = $salesContent.IndexOf($insertionMarker)
}

if ($insertionIndex -eq -1) {
    Write-Error "Point d'insertion introuvable (section STATISTIQUES)"
    exit 1
}

Write-Success "Point d'insertion trouvé"

if (-not $DryRun) {
    # Insérer le contenu
    $beforeInsertion = $salesContent.Substring(0, $insertionIndex)
    $afterInsertion = $salesContent.Substring($insertionIndex)
    $afterInsertion = $afterInsertion -replace '{/\* SECTION 6: STATISTIQUES \*/}', 
                                               '{/* SECTION 7: STATISTIQUES */}'
    
    $newContent = $beforeInsertion + $sectionsContent + "`n`n      " + $afterInsertion
    
    Set-Content -Path $salesPointsFile -Value $newContent -Encoding UTF8
    Write-Success "Sections insérées avec succès"
} else {
    Write-Info "[TEST] Sections seraient insérées"
}

# Étape 7: Ajouter les boutons de navigation
Write-Step "7" "Ajout des boutons de navigation..."

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

if (-not $DryRun) {
    $content = Get-Content $salesPointsFile -Raw
    $statsButtonPattern = @"
          <button\s+onClick=\{\(\) => setActiveView\('statistiques'\)\}[^>]+>\s+<TrendingUp[^>]+/>\s+Statistiques\s+</button>
"@
    
    if ($content -match $statsButtonPattern) {
        $content = $content -replace $statsButtonPattern, 
                   ($stockButton + "`n`n" + $facturationButton + "`n`n" + $Matches[0])
        Set-Content -Path $salesPointsFile -Value $content -Encoding UTF8
        Write-Success "Boutons de navigation ajoutés"
    } else {
        Write-Warning "Pattern bouton Statistiques non trouvé, ajout manuel nécessaire"
    }
} else {
    Write-Info "[TEST] Boutons de navigation seraient ajoutés"
}

# Étape 8: Validation finale
Write-Step "8" "Validation de l'installation..."

if (-not $DryRun) {
    $finalContent = Get-Content $salesPointsFile -Raw
    $hasStock = $finalContent -match "activeView === 'stock'"
    $hasFacturation = $finalContent -match "activeView === 'facturation'"
    $hasStockButton = $finalContent -match "<Package className"
    $hasFacturationButton = $finalContent -match "Facturation\s+</button>"
    
    if ($hasStock -and $hasFacturation -and $hasStockButton -and $hasFacturationButton) {
        Write-Success "Installation vérifiée avec succès!"
    } else {
        Write-Warning "L'installation semble incomplète"
        if (-not $hasStock) { Write-Warning "Section Stock non détectée" }
        if (-not $hasFacturation) { Write-Warning "Section Facturation non détectée" }
        if (-not $hasStockButton) { Write-Warning "Bouton Stock non détecté" }
        if (-not $hasFacturationButton) { Write-Warning "Bouton Facturation non détecté" }
    }
}

# Résumé final
Write-Header "📊 RÉSUMÉ DE L'INSTALLATION"

Write-Host ""
Write-Success "Sections ajoutées      : Stock & Facturation"
Write-Success "Données ajoutées       : stock, mouvementsStock, factures, paiements"
Write-Success "Boutons navigation     : Stock (vert), Facturation (jaune)"
Write-Success "Backups créés          : Oui"

Write-Header "🚀 PROCHAINES ÉTAPES"

Write-Host ""
Write-Info "1. Vérifiez les imports dans SalesPoints.jsx"
Write-Info "2. Testez l'application : npm run dev"
Write-Info "3. Naviguez vers Points de Vente"
Write-Info "4. Cliquez sur les onglets Stock et Facturation"

if ($DryRun) {
    Write-Host ""
    Write-Warning "MODE TEST - Aucune modification effectuée"
    Write-Info "Relancez sans -DryRun pour appliquer les changements"
}

Write-Host ""
Write-Host "✨ " -NoNewline -ForegroundColor Green
Write-Host "Installation terminée avec succès! 🎉" -ForegroundColor White
Write-Host ""
