export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Фатюхин и Ко — Элитная недвижимость",
    image: "https://fatukhin.ru/renders/hero_skyscraper.png",
    "@id": "https://fatukhin.ru",
    url: "https://fatukhin.ru",
    telephone: "+74950000000",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Пресненская наб., 12",
      addressLocality: "Москва",
      postalCode: "123112",
      addressCountry: "RU"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.747115,
      longitude: 37.539078
    },
    sameAs: [
      "https://t.me/fatukhin_realestate",
      "https://www.youtube.com/@fatukhin"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
