import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

url = "https://fatukhin.ru"
save_dir = "/Users/macbook/Desktop/Новая папка/fatukhin-website/src/assets/raw_uploads/scraped"
os.makedirs(save_dir, exist_ok=True)

try:
    response = requests.get(url, verify=False, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')
    imgs = soup.find_all('img')
    print(f"Found {len(imgs)} images on the site.")
    for img in imgs:
        src = img.get('src')
        if src:
            img_url = urljoin(url, src)
            if img_url.startswith('http'):
                try:
                    img_data = requests.get(img_url, verify=False, timeout=5).content
                    filename = os.path.basename(img_url.split('?')[0])
                    if not filename:
                        filename = "scraped_image.jpg"
                    if not any(ext in filename.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg']):
                        continue
                        
                    filepath = os.path.join(save_dir, filename)
                    with open(filepath, 'wb') as f:
                        f.write(img_data)
                    print(f"Downloaded: {filename}")
                except Exception as e:
                    pass
except Exception as e:
    print(f"Scraping failed: {e}")
