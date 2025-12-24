# ========================================
# KABEYA - Script de Division de Fichiers
# ========================================

param(
    [Parameter(Mandatory=$true)]
    [string]$SourceFile,
    
    [Parameter(Mandatory=$true)]
    [int]$NumParts,
    
    [string]$OutputPrefix = ""
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "KABEYA - Script de Division de Fichiers" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si le fichier source existe
if (-not (Test-Path $SourceFile)) {
    Write-Host "ERREUR: Fichier source '$SourceFile' introuvable!" -ForegroundColor Red
    exit 1
}

$FileInfo = Get-Item $SourceFile
$BaseName = [System.IO.Path]::GetFileNameWithoutExtension($SourceFile)
$Extension = $FileInfo.Extension

if ($OutputPrefix -eq "") {
    $OutputPrefix = $BaseName
}

Write-Host "Configuration:" -ForegroundColor Yellow
Write-Host "  Fichier source: $SourceFile" -ForegroundColor White
Write-Host "  Taille: $([math]::Round($FileInfo.Length / 1KB, 2)) KB" -ForegroundColor White
Write-Host "  Nombre de parties: $NumParts" -ForegroundColor White
Write-Host "  Préfixe de sortie: $OutputPrefix" -ForegroundColor White
Write-Host ""

# Lire tout le contenu
Write-Host "Lecture du fichier..." -ForegroundColor Cyan
$Content = Get-Content $SourceFile
$TotalLines = $Content.Count
$LinesPerPart = [math]::Ceiling($TotalLines / $NumParts)

Write-Host "  Total de lignes: $TotalLines" -ForegroundColor White
Write-Host "  Lignes par partie: ~$LinesPerPart" -ForegroundColor White
Write-Host ""

Write-Host "Division en cours..." -ForegroundColor Cyan
Write-Host ""

for ($i = 1; $i -le $NumParts; $i++) {
    $StartLine = ($i - 1) * $LinesPerPart
    $EndLine = [math]::Min($i * $LinesPerPart - 1, $TotalLines - 1)
    $PartLines = $EndLine - $StartLine + 1
    
    $PartFile = "${OutputPrefix}_part${i}${Extension}"
    
    Write-Host "[$i/$NumParts] Création de $PartFile..." -ForegroundColor Green
    Write-Host "        → Lignes $($StartLine + 1) à $($EndLine + 1) ($PartLines lignes)" -ForegroundColor DarkGray
    
    # Extraire et écrire les lignes
    $PartContent = $Content[$StartLine..$EndLine]
    $PartContent | Set-Content -Path $PartFile -Encoding UTF8
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Division terminée avec succès!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# Afficher les fichiers créés
Write-Host "Fichiers créés:" -ForegroundColor Yellow
for ($i = 1; $i -le $NumParts; $i++) {
    $PartFile = "${OutputPrefix}_part${i}${Extension}"
    $PartInfo = Get-Item $PartFile
    Write-Host "  ✓ $PartFile - $([math]::Round($PartInfo.Length / 1KB, 2)) KB" -ForegroundColor White
}

Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
