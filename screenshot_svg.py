from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1920, "height": 1200})
    page.goto('file://' + os.path.abspath('/Users/macbook/Desktop/Новая папка/fatukhin-website/FatuhinKOpremiumSite/Концепция_1.svg'))
    page.wait_for_timeout(2000)
    page.screenshot(path='/tmp/hero.png')
    browser.close()
