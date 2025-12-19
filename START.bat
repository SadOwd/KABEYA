@echo off
echo ================================
echo   KABEYA INC - Dashboard Setup
echo ================================
echo.

echo [1/3] Installation des dependances...
call npm install

echo.
echo [2/3] Verification...
if exist node_modules (
    echo ✓ Dependencies installees avec succes
) else (
    echo ✗ Erreur lors de l'installation
    pause
    exit
)

echo.
echo [3/3] Lancement du serveur de developpement...
echo.
echo ================================
echo   Dashboard disponible sur:
echo   http://localhost:3000
echo ================================
echo.

call npm run dev

pause
