@echo off
REM Script para definir wallpaper romântico
REM Execute como Administrador

setlocal enabledelayedexpansion

echo.
echo ============================================
echo.  Configurando Wallpaper Romantrico
echo.   Para: FERNANDA
echo.============================================
echo.

REM Criar pasta se não existir
set WALLPAPER_FOLDER=%APPDATA%\Microsoft\Windows\Themes
if not exist "%WALLPAPER_FOLDER%" mkdir "%WALLPAPER_FOLDER%"

REM Caminho do arquivo
set WALLPAPER_PATH=%WALLPAPER_FOLDER%\wallpaper-fernanda.jpg

REM Criar imagem usando PowerShell
echo Criando imagem romantica...

powershell -Command "^
  Add-Type -AssemblyName System.Drawing; ^
  $bitmap = New-Object System.Drawing.Bitmap(1920, 1080); ^
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap); ^
  $brush1 = New-Object System.Drawing.Drawing2D.LinearGradientBrush([System.Drawing.Point]::new(0,0), [System.Drawing.Point]::new(1920,1080), [System.Drawing.Color]::FromArgb(255,214,232), [System.Drawing.Color]::FromArgb(232,180,240)); ^
  $graphics.FillRectangle($brush1, 0, 0, 1920, 1080); ^
  $font = New-Object System.Drawing.Font('Georgia', 60, [System.Drawing.FontStyle]::Bold); ^
  $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(214,51,132)); ^
  $graphics.DrawString('FERNANDA', $font, $brush, 800, 350); ^
  $smallFont = New-Object System.Drawing.Font('Georgia', 28); ^
  $smallBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(100,100,100)); ^
  $graphics.DrawString('Te amo com toda minha forca', $smallFont, $smallBrush, 500, 550); ^
  $graphics.DrawString('Voce eh minha paz', $smallFont, $smallBrush, 600, 650); ^
  $graphics.DrawString('Obrigado por existir', $smallFont, $smallBrush, 550, 750); ^
  $graphics.Dispose(); ^
  $bitmap.Save('%WALLPAPER_PATH%', [System.Drawing.Imaging.ImageFormat]::Jpeg); ^
  $bitmap.Dispose(); ^
"

if exist "%WALLPAPER_PATH%" (
    echo. [OK] Imagem criada!
) else (
    echo. [ERRO] Nao conseguiu criar a imagem
    pause
    exit /b 1
)

REM Definir no Registry
echo Definindo como plano de fundo...

reg add "HKCU\Control Panel\Desktop" /v Wallpaper /d "%WALLPAPER_PATH%" /f
reg add "HKCU\Control Panel\Desktop" /v WallpaperStyle /d 10 /f
reg add "HKCU\Control Panel\Desktop" /v TileWallpaper /d 0 /f

REM Atualizar wallpaper
powershell -Command "^
  Add-Type -TypeDefinition 'using System.Runtime.InteropServices; public class W { [DllImport(\"user32.dll\")]public static extern int SystemParametersInfo(int u, int p, string v, int f); }'; ^
  [W]::SystemParametersInfo(20, 0, '%WALLPAPER_PATH%', 3); ^
"

echo.
echo ============================================
echo.
echo    ✨ PRONTO! ✨
echo.
echo    Wallpaper definido para Fernanda!
echo.
echo    Arquivo: %WALLPAPER_PATH%
echo.
echo    Aproveite o visual romantico!
echo.
echo ============================================
echo.

pause
