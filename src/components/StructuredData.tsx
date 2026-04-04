'use client';

import { usePathname } from 'next/navigation';

export const StructuredData = () => {
  const pathname = usePathname();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://fatukhin.ru/#organization",
        "name": "Фатюхин и Ко",
        "url": "https://fatukhin.ru",
        "logo": "https://fatukhin.ru/logo.svg",
        "image": "https://fatukhin.ru/images/founder.jpg",
        "description": "Агентство недвижимости в Москве. Купля, продажа, срочный выкуп и обмен квартир от 10 млн ₽. Бесплатная консультация.",
        "telephone": "+79951138937",
        "email": "info@fatukhin.ru",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "пл. Журавлёва",
          "addressLocality": "Москва",
          "postalCode": "123317",
          "addressCountry": "RU"
        },
        "priceRange": "$$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "sameAs": [
          "https://t.me/fatukhin_ko",
          "https://instagram.com/fatukhin_ko"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "120"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://fatukhin.ru/#website",
        "url": "https://fatukhin.ru",
        "name": "Фатюхин и Ко | Элитная Недвижимость",
        "publisher": {
          "@id": "https://fatukhin.ru/#organization"
        }
      }
    ]
  };

  // Dynamically add structured data based on route
  if (pathname?.startsWith('/catalog')) {
    jsonLd['@graph'].push({
      "@type": "BreadcrumbList",
      "@id": "https://fatukhin.ru/catalog/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://fatukhin.ru/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Каталог недвижимости",
          "item": "https://fatukhin.ru/catalog"
        }
      ]
    });
  }

  if (pathname === '/contacts') {
    jsonLd['@graph'].push({
       "@type": "LocalBusiness",
       "@id": "https://fatukhin.ru/contacts/#localbusiness",
       "name": "Запись на консультацию — Фатюхин и Ко",
       "url": "https://fatukhin.ru/contacts",
       "telephone": "+79951138937",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "пл. Журавлёва",
         "addressLocality": "Москва",
         "postalCode": "123317",
         "addressCountry": "RU"
       }
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
