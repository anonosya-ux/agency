export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Фатюхин и Ко',
    url: 'https://fatukhin.ru',
    logo: 'https://fatukhin.ru/logo.png', // Placeholder
    telephone: '+7 (995) 113-89-37',
    email: 'Vitali.fatukhin@mail.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Площадь Журавлева, д. 2, стр. 2, офис 402',
      addressLocality: 'Москва',
      addressCountry: 'RU'
    },
    priceRange: '$$$$',
    description: 'Премиальное агентство недвижимости в Москве. Гарантия качества 100%. Оплата только за результат.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59' // 24/7
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
