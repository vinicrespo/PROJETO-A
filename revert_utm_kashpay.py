import glob
import re

print("Updating UTMify in index.html files...")
for index_path in glob.glob('*/index.html') + glob.glob('*/*/index.html'):
    with open(index_path, 'r') as f:
        content = f.read()
    
    if 'data-utmify-prevent-subids' in content and 'data-utmify-prevent-xcod-sck' not in content:
        # Re-add data-utmify-prevent-xcod-sck before data-utmify-prevent-subids
        content = content.replace('data-utmify-prevent-subids', 'data-utmify-prevent-xcod-sck\n      data-utmify-prevent-subids')
        with open(index_path, 'w') as f:
            f.write(content)
        print(f"Updated {index_path}")
