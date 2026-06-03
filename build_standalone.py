import os
import re
import base64
import urllib.request

def build():
    print("Building standalone offline HTML...")
    
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Inline local CSS
    with open('style.css', 'r', encoding='utf-8') as f:
        css = f.read()
    html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>\n{css}\n</style>')

    # Inline local JS
    for js_file in ['data.js', 'data2.js', 'app.js']:
        with open(js_file, 'r', encoding='utf-8') as f:
            js = f.read()
        html = html.replace(f'<script src="{js_file}"></script>', f'<script>\n{js}\n</script>')

    # === GOOGLE FONTS OFFLINE ===
    print("Fetching Google Fonts for offline embedding...")
    fonts_css_url = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
    req = urllib.request.Request(fonts_css_url, headers={'User-Agent': 'Mozilla/5.0'})
    fonts_css = urllib.request.urlopen(req).read().decode('utf-8')
    
    # Find ALL font URLs (woff2 or ttf)
    font_urls = re.findall(r'url\((https://fonts\.gstatic\.com[^)]+\.(?:woff2|ttf))\)', fonts_css)
    for font_url in font_urls:
        font_name = font_url.split('/')[-1]
        print(f"  Downloading Google Font: {font_name}")
        req = urllib.request.Request(font_url, headers={'User-Agent': 'Mozilla/5.0'})
        font_data = urllib.request.urlopen(req).read()
        b64 = base64.b64encode(font_data).decode('utf-8')
        # Determine MIME type
        if font_url.endswith('.woff2'):
            mime = 'font/woff2'
        else:
            mime = 'font/ttf'
        fonts_css = fonts_css.replace(font_url, f'data:{mime};base64,{b64}')
    
    html = html.replace('<link rel="preconnect" href="https://fonts.googleapis.com">\n', '')
    html = html.replace(
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">',
        f'<style>\n{fonts_css}\n</style>'
    )

    # === KATEX OFFLINE ===
    print("Fetching KaTeX for offline embedding...")
    base_url = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/"
    
    # 1. KaTeX CSS & Fonts
    req = urllib.request.Request(base_url + "katex.min.css", headers={'User-Agent': 'Mozilla/5.0'})
    katex_css = urllib.request.urlopen(req).read().decode('utf-8')
    
    font_urls = set(re.findall(r'url\((fonts/[^)]+\.woff2)\)', katex_css))
    for font_path in font_urls:
        print(f"  KaTeX font: {font_path}")
        font_url = base_url + font_path
        req = urllib.request.Request(font_url, headers={'User-Agent': 'Mozilla/5.0'})
        font_data = urllib.request.urlopen(req).read()
        b64 = base64.b64encode(font_data).decode('utf-8')
        katex_css = katex_css.replace(font_path, f'data:font/woff2;base64,{b64}')
    
    # Remove other font formats (woff, ttf) as fallback
    katex_css = re.sub(r',\s*url\(fonts/[^)]+\.(woff|ttf)\)[^,;]+', '', katex_css)
    
    html = html.replace(
        '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">',
        f'<style>\n{katex_css}\n</style>'
    )

    # 2. KaTeX JS
    print("  Downloading KaTeX JS...")
    req = urllib.request.Request(base_url + "katex.min.js", headers={'User-Agent': 'Mozilla/5.0'})
    katex_js = urllib.request.urlopen(req).read().decode('utf-8')
    html = html.replace(
        '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>',
        f'<script>\n{katex_js}\n</script>'
    )

    req = urllib.request.Request(base_url + "contrib/auto-render.min.js", headers={'User-Agent': 'Mozilla/5.0'})
    auto_render_js = urllib.request.urlopen(req).read().decode('utf-8')
    html = html.replace(
        '<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>',
        f'<script>\n{auto_render_js}\n</script>'
    )

    os.makedirs('Version_Eleves', exist_ok=True)
    
    # Remove online visit counter for 100% offline compatibility
    html = re.sub(r'<div[^>]*>\s*<img src="https://hits\.seeyoufarm\.com[^>]+>\s*</div>', '', html)
    
    output_path = 'Version_Eleves/Livret_Automatismes_HorsLigne.html'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    size_kb = os.path.getsize(output_path) / 1024
    print(f"Success! Standalone file created at: {output_path}")
    print(f"File size: {size_kb:.0f} KB ({size_kb/1024:.1f} MB)")

if __name__ == "__main__":
    build()
