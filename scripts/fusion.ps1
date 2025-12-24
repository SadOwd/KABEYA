# ========================================
# KABEYA - Script de Fusion de Fichiers
# ========================================

param(
    [Parameter(Mandatory=$true)]
    [string]$BaseName,
    
    [Parameter(Mandatory=$true)]
    [int]$NumParts,
    
    [string]$OutputDir = "src\components",
    
    [string]$Extension = ".jsx"
)

Write-Host "========================================" -ForegroundColor Green
Write-Host "KABEYA - Script de Fusion de Fichiers" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

Write-Host "Configuration:" -ForegroundColor Cyan
Write-Host "  Fichier de base: $BaseName" -ForegroundColor White
Write-Host "  Nombre de parties: $NumParts" -ForegroundColor White
Write-Host "  Répertoire de sortie: $OutputDir" -ForegroundColor White
Write-Host "  Extension: $Extension" -ForegroundColor White
Write-Host ""

# Créer le répertoire de sortie s'il n'existe pas
if (-not (Test-Path $OutputDir)) {
    Write-Host "Création du répertoire $OutputDir..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

$OutputFile = Join-Path $OutputDir "$BaseName$Extension"

# Supprimer le fichier de sortie s'il existe
if (Test-Path $OutputFile) {
    Write-Host "Suppression de l'ancien fichier..." -ForegroundColor Yellow
    Remove-Item $OutputFile -Force
}

Write-Host "Fusion en cours..." -ForegroundColor Cyan
Write-Host ""

$TotalLines = 0
$Success = $true

# Fusionner tous les fichiers parties
for ($i = 1; $i -le $NumParts; $i++) {
    $PartFile = "${BaseName}_part${i}${Extension}"
    
    if (Test-Path $PartFile) {
        Write-Host "[$i/$NumParts] Ajout de $PartFile..." -ForegroundColor Green
        
        # Lire le contenu du fichier partie
        $Content = Get-Content $PartFile -Raw
        $Lines = (Get-Content $PartFile).Count
        $TotalLines += $Lines
        
        # Ajouter au fichier de sortie
        Add-Content -Path $OutputFile -Value $Content -NoNewline
        
        Write-Host "        → $Lines lignes ajoutées" -ForegroundColor DarkGray
    } else {
        Write-Host "[ERREUR] Fichier $PartFile introuvable!" -ForegroundColor Red
        $Success = $false
        break
    }
}

Write-Host ""

if ($Success) {
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "Fusion terminée avec succès!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    
    # Afficher les informations du fichier créé
    $FileInfo = Get-Item $OutputFile
    Write-Host "Fichier créé: $($FileInfo.FullName)" -ForegroundColor White
    Write-Host "Taille: $([math]::Round($FileInfo.Length / 1KB, 2)) KB" -ForegroundColor White
    Write-Host "Lignes totales: $TotalLines" -ForegroundColor White
    Write-Host ""
    
    # Proposer de supprimer les fichiers parties
    $Response = Read-Host "Voulez-vous supprimer les fichiers parties? (O/N)"
    if ($Response -eq "O" -or $Response -eq "o") {
        for ($i = 1; $i -le $NumParts; $i++) {
            $PartFile = "${BaseName}_part${i}${Extension}"
            if (Test-Path $PartFile) {
                Remove-Item $PartFile -Force
                Write-Host "✓ $PartFile supprimé" -ForegroundColor DarkGray
            }
        }
        Write-Host ""
        Write-Host "Fichiers parties supprimés." -ForegroundColor Green
    }
    
} else {
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "Erreur lors de la fusion!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
}

Write-Host ""
Write-Host "Appuyez sur une touche pour continuer..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
