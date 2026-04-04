import xml.etree.ElementTree as ET
import re

tree = ET.parse('/Users/macbook/Desktop/Новая папка/fatukhin-website/FatuhinKOpremiumSite/Концепция_1.svg')
root = tree.getroot()

# namespace removing helper
def strip_ns(tag):
    return tag.split('}')[1] if '}' in tag else tag

texts = {}
for elem in root.iter():
    tag = strip_ns(elem.tag)
    if tag == 'text' or tag == 'tspan':
        if elem.text and any(x in elem.text for x in ['Новостройки', 'Готовые квартиры', 'Аренда квартир', 'загородная недв.', 'зарубежная недвижимость', 'Коммерческая недвижимость']):
            # find parent transform or x/y
            x = elem.attrib.get('x', '')
            y = elem.attrib.get('y', '')
            transform = elem.attrib.get('transform', '')
            print(f"Found text: {elem.text.strip()} | x={x} y={y} transform={transform}")

# Let's find polygons
print("\nPolygons:")
polygons = []
for elem in root.iter():
    tag = strip_ns(elem.tag)
    if tag == 'polygon':
        points = elem.attrib.get('points', '')
        # print only polygons that seem to be the big images/masks
        pts = points.split()
        if len(pts) == 4 or len(pts) == 8: # 4 points (x,y)
            print(f"Polygon points: {points[:100]}...")

