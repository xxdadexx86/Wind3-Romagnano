import requests
from bs4 import BeautifulSoup
import json

url = "https://www.windtre.it/offerte-mobile/"
headers = {"User-Agent": "Mozilla/5.0"}

response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.content, "html.parser")

offers = []
cards = soup.find_all("div", class_="product-card")

for card in cards[:5]:
    title_tag = card.find("h3")
    img_tag = card.find("img")
    link_tag = card.find("a", href=True)

    title = title_tag.text.strip() if title_tag else "Senza titolo"
    img = img_tag["src"] if img_tag and img_tag.has_attr("src") else ""
    link = "https://www.windtre.it" + link_tag["href"] if link_tag else ""

    offers.append({
        "titolo": title,
        "immagine": img,
        "link": link
    })

with open("public/promozioni.json", "w", encoding="utf-8") as f:
    json.dump(offers, f, indent=2, ensure_ascii=False)
