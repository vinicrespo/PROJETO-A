import os
import re

print("Reverting checkout URL in 9-src/src/App.tsx")
app9_path = '9-src/src/App.tsx'
with open(app9_path, 'r') as f:
    content = f.read()
content = content.replace('https://pay.hotmart.com/R106502862C?off=k9ngswyr', 'https://checkout.kashpay.com.br/checkout/checkout-1782156586439')
with open(app9_path, 'w') as f:
    f.write(content)


print("Reverting upsells in up1 and up2 (React)")
def revert_react_upsell(file_path, button_code, decline_link):
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Remove Hotmart script injection
    content = re.sub(r'\s*const h = document.createElement\("script"\);\s*h\.src = "https://checkout\.hotmart\.com/lib/hotmart-checkout-elements\.js";\s*h\.onload = \(\) => \{\s*// @ts-ignore\s*if \(window\.checkoutElements\) \{\s*// @ts-ignore\s*window\.checkoutElements\.init\(\'salesFunnel\'\)\.mount\(\'#hotmart-sales-funnel\'\);\s*\}\s*\};\s*document\.head\.appendChild\(h\);', '', content, flags=re.DOTALL)
    
    # Add upsell processor script
    if 'upsell-processor.js' not in content:
        insert_code = '''
    const up = document.createElement("script");
    up.src = "https://app.kashpay.com.br/scripts/upsell-processor.js";
    document.head.appendChild(up);
'''
        content = content.replace('React.useEffect(() => {', f'React.useEffect(() => {{{insert_code}')
    
    # Replace div with button and link
    button_html = f'<div className="w-full mb-4" dangerouslySetInnerHTML={{{{ __html: `{button_code}` }}}} />\n\n          <a href="{decline_link}" className="text-gray-500 hover:text-gray-300 text-sm underline">\n            No, thanks!\n          </a>'
    
    content = content.replace('<div id="hotmart-sales-funnel" className="w-full"></div>', button_html)
    
    with open(file_path, 'w') as f:
        f.write(content)

revert_react_upsell('up1-src/src/App.tsx', 
    '''<button onclick="acceptUpsell('https://app.kashpay.com.br/u/5c3ddd2d2f1f0537')" style="font-family: 'Poppins'; font-size: 18px; font-weight: 600; line-height: 1.3; color: #ffffff; background-color: #057932; border: none; border-radius: 10px; padding: 13px 7%; cursor: pointer; text-align: center; display: block; margin: auto;">Get Now</button>''',
    '/up2')
revert_react_upsell('up2-src/src/App.tsx', 
    '''<button onclick="acceptUpsell('https://app.kashpay.com.br/u/2a5f7aedbe19d7b3')" style="font-family: 'Poppins'; font-size: 18px; font-weight: 600; line-height: 1.3; color: #ffffff; background-color: #057932; border: none; border-radius: 10px; padding: 13px 7%; cursor: pointer; text-align: center; display: block; margin: auto;">Get Now</button>''',
    '/up3')


print("Reverting upsells in up3 and up4 (HTML)")
def revert_html_upsell(file_path, button_code, decline_link):
    with open(file_path, 'r') as f:
        content = f.read()
    
    if 'upsell-processor.js' not in content:
        content = content.replace('</title>', '</title>\n  <script src="https://app.kashpay.com.br/scripts/upsell-processor.js"></script>')
    
    hotmart_regex = r'<!-- HOTMART - Sales Funnel Widget -->.*?<!-- HOTMART - Sales Funnel Widget -->'
    button_html = f'{button_code}\n\n      <a href="{decline_link}" class="decline-link">No, thanks!</a>'
    
    content = re.sub(hotmart_regex, button_html, content, flags=re.DOTALL)
    
    with open(file_path, 'w') as f:
        f.write(content)

revert_html_upsell('up3-src/index.html', 
    '''<button onclick="acceptUpsell('https://app.kashpay.com.br/u/5ab892bf41f9b6a0')" style="font-family: 'Poppins'; font-size: 18px; font-weight: 600; line-height: 1.3; color: #ffffff; background-color: #057932; border: none; border-radius: 10px; padding: 13px 7%; cursor: pointer; text-align: center; display: block; margin: auto;">Get Now</button>''',
    '/up4')
revert_html_upsell('up4-src/index.html', 
    '''<button onclick="acceptUpsell('https://app.kashpay.com.br/u/5d1594492dffa1a7')" style="font-family: 'Poppins'; font-size: 18px; font-weight: 600; line-height: 1.3; color: #ffffff; background-color: #057932; border: none; border-radius: 10px; padding: 13px 7%; cursor: pointer; text-align: center; display: block; margin: auto;">Get Now</button>''',
    '/thanks')

print("All done.")
