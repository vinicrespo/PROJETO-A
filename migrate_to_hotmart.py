import os
import glob
import re

print("Updating UTMify in index.html files...")
for index_path in glob.glob('*/index.html') + glob.glob('*/*/index.html'):
    with open(index_path, 'r') as f:
        content = f.read()
    if 'data-utmify-prevent-xcod-sck' in content:
        # Just remove the specific attribute to be safe and clean
        content = content.replace('data-utmify-prevent-xcod-sck', '')
        # Remove any empty lines that might have been left
        content = re.sub(r'\n\s*\n\s*data-utmify-prevent-subids', '\n      data-utmify-prevent-subids', content)
        with open(index_path, 'w') as f:
            f.write(content)
        print(f"Updated {index_path}")

print("Updating checkout link in 9-src/src/App.tsx...")
app9_path = '9-src/src/App.tsx'
if os.path.exists(app9_path):
    with open(app9_path, 'r') as f:
        app9_content = f.read()
    app9_content = app9_content.replace('https://checkout.kashpay.com.br/checkout/checkout-1782156586439', 'https://pay.hotmart.com/R106502862C?off=k9ngswyr')
    with open(app9_path, 'w') as f:
        f.write(app9_content)
    print("Updated 9-src/src/App.tsx")

print("Updating upsells...")
for up_num in ['1', '2', '3', '4']:
    up_path = f'up{up_num}-src/src/App.tsx'
    if not os.path.exists(up_path):
        print(f"Not found: {up_path}")
        continue
    with open(up_path, 'r') as f:
        content = f.read()
        
    if 'hotmart-checkout-elements' not in content:
        content = re.sub(
            r'(document\.head\.appendChild\(s\);\s*)\}, \[\]\);',
            r'''\1
    const h = document.createElement("script");
    h.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    h.onload = () => {
      // @ts-ignore
      if (window.checkoutElements) {
        // @ts-ignore
        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.head.appendChild(h);
  }, []);''',
            content
        )
        
    content = re.sub(
        rf'(<div className="up{up_num}[^>]*>)\s*<div[^>]*dangerouslySetInnerHTML[^>]*/>\s*<a[^>]*>.*?</a>\s*(</div>)',
        rf'\1\n          <div id="hotmart-sales-funnel" className="w-full"></div>\n        \2',
        content,
        flags=re.DOTALL
    )
    with open(up_path, 'w') as f:
        f.write(content)
    print(f"Updated {up_path}")
