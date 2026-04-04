import urllib.request
import json
import urllib.parse
import re

queries = [
    "ЖК ONE MR Group рендер",
    "ЖК Бадаевский Capital Group рендер",
    "ЖК VERY ГК Основа",
    "ЖК Метрополия MR Group",
    "ЖК Ривер Парк Коломенское",
    "ЖК Остров Донстрой",
    "ЖК Зеленая вертикаль",
    "ЖК Селигер Сити MR Group",
    "ЖК Лучи ЛСР",
    "ЖК Преображение INGRAD"
]

results = {}

for q in queries:
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(q)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        # find image urls
        imgs = re.findall(r'src="(//external-content\.duckduckgo\.com/[^"]+)"', html)
        results[q] = ["https:" + img for img in imgs[:5]]
    except Exception as e:
        results[q] = []

print(json.dumps(results, ensure_ascii=False, indent=2))
