import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CatalogDetailClient } from './CatalogDetailClient';
import { properties } from '@/data/properties';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = (await params).id;
  const property = properties.find(p => p.id === id);
  
  if (!property) return { title: 'Не найдено | Фатюхин и Ко' };
  
  return {
    title: `${property.title} | Каталог | Фатюхин и Ко`,
    description: property.description || `Каталог недвижимости — ${property.title}. Агентство Фатюхин и Ко.`,
    openGraph: {
      title: property.title,
      description: property.description || `Каталог недвижимости — ${property.title}.`,
      images: [property.image],
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function CatalogDetailPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find(p => p.id === id);

  if (!property) {
    notFound();
  }

  // Generate Schema.org structured data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description || `Агентство Фатюхин и Ко: ${property.title}`,
    image: [property.image],
    offers: {
      '@type': 'Offer',
      price: property.priceNum,
      priceCurrency: 'RUB', // Thailand features mention Baht, but structural data handles numeric values usually in site's primary currency or requires exact mapping
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: property.location,
    },
    numberOfRooms: property.specs?.beds,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-bg flex flex-col">
        <Navigation />
        <CatalogDetailClient property={property} />
        <Footer />
      </main>
    </>
  );
}
