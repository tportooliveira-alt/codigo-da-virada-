# Script PowerShell para definir o wallpaper romântico como plano de fundo
# Execute como Administrador: Right-click → "Executar com PowerShell"

# URLs dos arquivos
$htmlUrl = "https://raw.githubusercontent.com/tportooliveira-alt/codigo-da-virada-/claude/review-code-clip-h7JdW/wallpaper-fernanda.html"
$wallpaperPath = "$env:USERPROFILE\Pictures\wallpaper-fernanda.jpg"
$tempHtml = "$env:TEMP\wallpaper-temp.html"

Write-Host "🎨 Configurando wallpaper romântico para Fernanda..." -ForegroundColor Magenta
Write-Host ""

# Baixar o arquivo HTML
Write-Host "⏳ Baixando arquivo..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri $htmlUrl -OutFile $tempHtml -ErrorAction Stop
    Write-Host "✅ Arquivo baixado com sucesso!" -ForegroundColor Green
} catch {
    Write-Host "❌ Erro ao baixar: $_" -ForegroundColor Red
    exit
}

# Converter HTML para imagem usando edge/chrome
Write-Host "⏳ Convertendo para imagem..." -ForegroundColor Cyan

# Usar printscreen do HTML
$code = @"
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

`$form = New-Object System.Windows.Forms.Form
`$form.Width = 1920
`$form.Height = 1080
`$form.WindowState = 'Maximized'
`$form.StartPosition = 'CenterScreen'
`$form.BackColor = [System.Drawing.Color]::White

# Criar bitmap
`$bitmap = New-Object System.Drawing.Bitmap(`$form.Width, `$form.Height)
`$graphics = [System.Drawing.Graphics]::FromImage(`$bitmap)
`$graphics.Clear([System.Drawing.Color]::White)

# Desenhar gradiente (rosa, roxo, azul)
`$brush1 = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    [System.Drawing.Point]::new(0, 0),
    [System.Drawing.Point]::new(`$form.Width, `$form.Height),
    [System.Drawing.Color]::FromArgb(255, 214, 232),
    [System.Drawing.Color]::FromArgb(232, 180, 240)
)
`$graphics.FillRectangle(`$brush1, 0, 0, `$form.Width, `$form.Height)

# Adicionar texto
`$font = New-Object System.Drawing.Font("Georgia", 60, [System.Drawing.FontStyle]::Bold)
`$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(214, 51, 132))
`$textSize = `$graphics.MeasureString("FERNANDA", `$font)
`$x = (`$form.Width - `$textSize.Width) / 2
`$y = (`$form.Height - `$textSize.Height) / 2 - 150

`$graphics.DrawString("FERNANDA", `$font, `$brush, `$x, `$y)

# Adicionar mensagens
`$smallFont = New-Object System.Drawing.Font("Georgia", 24, [System.Drawing.FontStyle]::Italic)
`$smallBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(80, 80, 80))

`$messages = @(
    "Te amo com toda minha força",
    "Você é minha paz",
    "Obrigado por existir"
)

`$startY = `$y + 200
foreach (`$msg in `$messages) {
    `$msgSize = `$graphics.MeasureString(`$msg, `$smallFont)
    `$msgX = (`$form.Width - `$msgSize.Width) / 2
    `$graphics.DrawString(`$msg, `$smallFont, `$smallBrush, `$msgX, `$startY)
    `$startY += 80
}

`$graphics.Dispose()

# Salvar imagem
`$bitmap.Save("$wallpaperPath", [System.Drawing.Imaging.ImageFormat]::Jpeg)
`$bitmap.Dispose()

Write-Host "✅ Imagem criada!" -ForegroundColor Green
"@

# Executar código
Invoke-Expression $code

# Definir como wallpaper
Write-Host "⏳ Definindo como plano de fundo..." -ForegroundColor Cyan

$RegPath = "HKCU:\Control Panel\Desktop"

try {
    # Copiar imagem para a pasta de wallpapers do Windows
    $wallpaperFolder = "$env:APPDATA\Microsoft\Windows\Themes"
    $finalPath = "$wallpaperFolder\wallpaper-fernanda.jpg"

    if (-not (Test-Path $wallpaperFolder)) {
        New-Item -ItemType Directory -Path $wallpaperFolder -Force | Out-Null
    }

    Copy-Item -Path $wallpaperPath -Destination $finalPath -Force

    # Definir no Registry
    Set-ItemProperty -Path $RegPath -Name "Wallpaper" -Value $finalPath
    Set-ItemProperty -Path $RegPath -Name "WallpaperStyle" -Value "10"
    Set-ItemProperty -Path $RegPath -Name "TileWallpaper" -Value "0"

    # Atualizar wallpaper
    Add-Type -TypeDefinition @"
    using System;
    using System.Runtime.InteropServices;
    public class Wallpaper {
        [DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
        private static extern int SystemParametersInfo(int uAction, int uParam, string lpvParam, int fuWinIni);
        public static void SetWallpaper(string path) {
            SystemParametersInfo(20, 0, path, 3);
        }
    }
"@

    [Wallpaper]::SetWallpaper($finalPath)

    Write-Host ""
    Write-Host "✨✨✨ PRONTO! ✨✨✨" -ForegroundColor Green -BackgroundColor Magenta
    Write-Host "Wallpaper definido com sucesso para Fernanda!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Arquivo salvo em: $finalPath" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "💕 Aproveite o visual romântico! 💕" -ForegroundColor Magenta

} catch {
    Write-Host "❌ Erro ao definir wallpaper: $_" -ForegroundColor Red
    Write-Host "Tente executar como Administrador" -ForegroundColor Yellow
}

# Limpar
Remove-Item -Path $tempHtml -Force -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Pressione qualquer tecla para fechar..." -ForegroundColor Gray
[void][System.Console]::ReadKey($true)
