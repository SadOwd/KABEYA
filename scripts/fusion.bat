@echo off
REM Script de fusion de fichiers pour le projet KABEYA
REM Usage: fusion.bat [nom_fichier_base] [nombre_parties]

echo ========================================
echo KABEYA - Script de Fusion de Fichiers
echo ========================================
echo.

REM Vérifie si les arguments sont fournis
if "%~1"=="" (
    echo ERREUR: Nom du fichier de base manquant
    echo Usage: fusion.bat [nom_fichier] [nombre_parties]
    echo Exemple: fusion.bat SalesPoints 3
    pause
    exit /b 1
)

if "%~2"=="" (
    echo ERREUR: Nombre de parties manquant
    echo Usage: fusion.bat [nom_fichier] [nombre_parties]
    echo Exemple: fusion.bat SalesPoints 3
    pause
    exit /b 1
)

set BASE_NAME=%~1
set NUM_PARTS=%~2
set OUTPUT_DIR=src\components
set OUTPUT_FILE=%OUTPUT_DIR%\%BASE_NAME%.jsx

echo Fichier de base: %BASE_NAME%
echo Nombre de parties: %NUM_PARTS%
echo Repertoire de sortie: %OUTPUT_DIR%
echo.

REM Crée le répertoire de sortie s'il n'existe pas
if not exist "%OUTPUT_DIR%" (
    echo Creation du repertoire %OUTPUT_DIR%...
    mkdir "%OUTPUT_DIR%"
)

REM Supprime le fichier de sortie s'il existe déjà
if exist "%OUTPUT_FILE%" (
    echo Suppression de l'ancien fichier...
    del "%OUTPUT_FILE%"
)

echo Fusion en cours...
echo.

REM Fusionne tous les fichiers parties
for /L %%i in (1,1,%NUM_PARTS%) do (
    set PART_FILE=%BASE_NAME%_part%%i.jsx
    
    if exist "!PART_FILE!" (
        echo [%%i/%NUM_PARTS%] Ajout de !PART_FILE!...
        type "!PART_FILE!" >> "%OUTPUT_FILE%"
    ) else (
        echo [ERREUR] Fichier !PART_FILE! introuvable
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo Fusion terminee avec succes!
echo Fichier cree: %OUTPUT_FILE%
echo ========================================
echo.

REM Affiche la taille du fichier
for %%A in ("%OUTPUT_FILE%") do echo Taille: %%~zA octets

echo.
pause
