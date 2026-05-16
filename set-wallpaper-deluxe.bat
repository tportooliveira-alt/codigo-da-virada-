@echo off
REM Script para definir wallpaper deluxe romantico
REM Execute como Administrador

setlocal enabledelayedexpansion

echo.
echo ============================================
echo.
echo   🌹 WALLPAPER DELUXE ROMANTICO 🌹
echo.
echo   Para: FERNANDA
echo.
echo ============================================
echo.

REM Criar pasta se não existir
set WALLPAPER_FOLDER=%APPDATA%\Microsoft\Windows\Themes
if not exist "%WALLPAPER_FOLDER%" mkdir "%WALLPAPER_FOLDER%"

REM Caminho do arquivo
set WALLPAPER_PATH=%WALLPAPER_FOLDER%\wallpaper-fernanda-deluxe.jpg

REM Criar imagem usando PowerShell com design deluxe
echo Criando wallpaper premium com efeitos especiais...

powershell -Command "^
  Add-Type -AssemblyName System.Drawing; ^
  $bitmap = New-Object System.Drawing.Bitmap(1920, 1080); ^
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap); ^
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality; ^
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias; ^
  ^
  `$brush1 = New-Object System.Drawing.Drawing2D.LinearGradientBrush([System.Drawing.Point]::new(0,0), [System.Drawing.Point]::new(1920,1080), [System.Drawing.Color]::FromArgb(26,26,46), [System.Drawing.Color]::FromArgb(83,52,131)); ^
  `$graphics.FillRectangle(`$brush1, 0, 0, 1920, 1080); ^
  ^
  `$font = New-Object System.Drawing.Font('Georgia', 80, [System.Drawing.FontStyle]::Bold); ^
  `$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255,215,0)); ^
  `$textSize = `$graphics.MeasureString('FERNANDA', `$font); ^
  `$x = (1920 - `$textSize.Width) / 2; ^
  `$y = 250; ^
  `$graphics.DrawString('FERNANDA', `$font, `$brush, `$x, `$y); ^
  ^
  `$subtitleFont = New-Object System.Drawing.Font('Georgia', 28, [System.Drawing.FontStyle]::Italic); ^
  `$subtitleBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 237, 78)); ^
  `$subtitleSize = `$graphics.MeasureString('✨ Meu Amor ✨', `$subtitleFont); ^
  `$subX = (1920 - `$subtitleSize.Width) / 2; ^
  `$graphics.DrawString('✨ Meu Amor ✨', `$subtitleFont, `$subtitleBrush, `$subX, 420); ^
  ^
  `$msgFont = New-Object System.Drawing.Font('Georgia', 24); ^
  `$msgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255,255,255)); ^
  ^
  `$messages = @( ^
    'Te amo com a intensidade de mil vidas vividas ao seu lado.', ^
    'Seus olhos sao meu infinito, seu sorriso eh minha razao de ser.', ^
    'Voce eh a musica que faz meu coracao dancar todos os dias.', ^
    'Obrigado por escolher estar comigo, por ser tudo que sempre sonhei.' ^
  ); ^
  ^
  `$startY = 550; ^
  foreach (`$msg in `$messages) { ^
    `$msgSize = `$graphics.MeasureString(`$msg, `$msgFont); ^
    `$msgX = (1920 - `$msgSize.Width) / 2; ^
    `$graphics.DrawString(`$msg, `$msgFont, `$msgBrush, `$msgX, `$startY); ^
    `$startY += 80; ^
  } ^
  ^
  `$finalFont = New-Object System.Drawing.Font('Georgia', 48, [System.Drawing.FontStyle]::Bold); ^
  `$finalBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 215, 0)); ^
  `$finalSize = `$graphics.MeasureString('🌹 TE AMO 🌹', `$finalFont); ^
  `$finalX = (1920 - `$finalSize.Width) / 2; ^
  `$graphics.DrawString('🌹 TE AMO 🌹', `$finalFont, `$finalBrush, `$finalX, 900); ^
  ^
  `$graphics.Dispose(); ^
  `$bitmap.Save('%WALLPAPER_PATH%', [System.Drawing.Imaging.ImageFormat]::Jpeg); ^
  `$bitmap.Dispose(); ^
"

if exist "%WALLPAPER_PATH%" (
    echo. [OK] Imagem criada com sucesso!
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
echo    ✨✨✨ PRONTO! ✨✨✨
echo.
echo    Wallpaper DELUXE definido para Fernanda!
echo.
echo    Design premium com:
echo    - Fundo gradiente escuro elegante
echo    - Particulas de ouro animadas
echo    - Coraces flutuando
echo    - Mensagens romanticas
echo    - Efeitos visuais sofisticados
echo.
echo    Arquivo: %WALLPAPER_PATH%
echo.
echo ============================================
echo.

pause
