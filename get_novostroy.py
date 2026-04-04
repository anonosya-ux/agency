import urllib.request
import re
import json

urls = {
  "zhk-one": "https://www.novostroy-m.ru/baza/zhk_one_tower",
  "zhk-badaevskiy": "https://www.novostroy-m.ru/baza/zhk_badaevskiy",
  "zhk-very": "https://www.novostroy-m.ru/baza/zhk_very",
  "zhk-metropolia": "https://www.novostroy-m.ru/baza/jk_metropoliya",
  "zhk-river-park": "https://www.novostroy-m.ru/baza/jk_river_park",
  "zhk-ostrov": "https://www.novostroy-m.ru/baza/zhk_ostrov",
  "zhk-zelenaya-vertical": "https://www.novostroy-m.ru/baza/zhk_zelenaya_vertikal",
  "zhk-seliger": "https://www.novostroy-m.ru/baza/jk_seliger_siti",
  "zhk-luchi": "https://www.novostroy-m.ru/baza/jk_luchi",
  "zhk-preobr": "https://www.novostroy-m.ru/baza/jk_preobrajenie"
}

res = {}
for k, v in urls.items():
    try:
        req = urllib.request.Request(v, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        m = re.search(r'<meta property="og:image"\s+content="([^"]+)"', html)
        if m:
            res[k] = m.group(1)
        else:
            m = re.search(r'background-image:\s*url\(([^)]+)\)', html)
            if m:
                res[k] = m.group(1).strip("'\"")
    except Exception:
        pass
        
print(json.dumps(res, indent=2))
