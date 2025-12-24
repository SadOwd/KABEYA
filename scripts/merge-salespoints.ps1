# Script PowerShell pour fusionner les 3 parties de SalesPoints.jsx
# Auteur: Assistant Claude
# Date: 22/12/2025

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "  FUSION DES FICHIERS SALESPOINTS   " -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

$baseDir = "C:\Users\mmawo\Desktop\KABEYA\src\components"
$part1 = Join-Path $baseDir "SalesPoints.part1.jsx"
$part2 = Join-Path $baseDir "SalesPoints.part2.jsx"
$part3 = Join-Path $baseDir "SalesPoints.part3.jsx"
$output = Join-Path $baseDir "SalesPoints.jsx"

# Vérification de l'existence des fichiers
Write-Host "[1/4] Vérification des fichiers sources..." -ForegroundColor Yellow

$filesToCheck = @($part1, $part2, $part3)
$allFilesExist = $true

foreach ($file in $filesToCheck) {
    if (Test-Path $file) {
        Write-Host "  ✓ Trouvé: $(Split-Path $file -Leaf)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Manquant: $(Split-Path $file -Leaf)" -ForegroundColor Red
        $allFilesExist = $false
    }
}

if (-not $allFilesExist) {
    Write-Host ""
    Write-Host "ERREUR: Certains fichiers sources sont manquants!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[2/4] Lecture des fichiers..." -ForegroundColor Yellow

try {
    $content1 = Get-Content $part1 -Raw -Encoding UTF8
    $content2 = Get-Content $part2 -Raw -Encoding UTF8
    $content3 = Get-Content $part3 -Raw -Encoding UTF8
    
    Write-Host "  ✓ Part 1: $($content1.Length) caractères" -ForegroundColor Green
    Write-Host "  ✓ Part 2: $($content2.Length) caractères" -ForegroundColor Green
    Write-Host "  ✓ Part 3: $($content3.Length) caractères" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Erreur de lecture: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[3/4] Fusion des contenus..." -ForegroundColor Yellow

try {
    # Fusion des 3 parties
    $finalContent = $content1 + $content2 + $content3
    
    Write-Host "  ✓ Contenu fusionné: $($finalContent.Length) caractères" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Erreur de fusion: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[4/4] Écriture du fichier final..." -ForegroundColor Yellow

try {
    # Sauvegarde de l'ancien fichier si existant
    if (Test-Path $output) {
        $backup = $output + ".backup"
        Copy-Item $output $backup -Force
        Write-Host "  ℹ Sauvegarde créée: SalesPoints.jsx.backup" -ForegroundColor Cyan
    }
    
    # Écriture du nouveau fichier
    $finalContent | Out-File -FilePath $output -Encoding UTF8 -NoNewline
    
    Write-Host "  ✓ Fichier créé: SalesPoints.jsx" -ForegroundColor Green
    Write-Host "  ✓ Taille: $(Get-Item $output | Select-Object -ExpandProperty Length) octets" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Erreur d'écriture: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "  FUSION TERMINÉE AVEC SUCCÈS! ✓    " -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Fichier final: $output" -ForegroundColor White
Write-Host ""
Write-Host "Pour nettoyer les fichiers temporaires, exécutez:" -ForegroundColor Yellow
Write-Host "  Remove-Item '$part1', '$part2', '$part3'" -ForegroundColor Cyan
Write-Host ""

# Option pour nettoyer automatiquement
$clean = Read-Host "Voulez-vous supprimer les fichiers part1, part2, part3 maintenant? (O/N)"
if ($clean -eq "O" -or $clean -eq "o") {
    try {
        Remove-Item $part1, $part2, $part3 -Force
        Write-Host "✓ Fichiers temporaires supprimés!" -ForegroundColor Green
    } catch {
        Write-Host "✗ Erreur lors de la suppression: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "Les fichiers temporaires ont été conservés." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Appuyez sur une touche pour terminer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
