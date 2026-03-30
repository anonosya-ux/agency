import { Metadata } from 'next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CatalogDetailClient, propertyDetails } from './CatalogDetailClient';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  
  // In a real app we fetch by id
  // const property = await fetchProperty(id)
  
  return {
    title: `${propertyDetails.title} | Каталог | Фатюхин и Ко`,
    description: propertyDetails.description,
    openGraph: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      images: [propertyDetails.images[0]],
      type: 'website',
    },
  }
}

export default async function CatalogDetailPage({ params }: Props) {
  const { id } = await params;

  // Generate Schema.org structured data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: propertyDetails.title,
    description: propertyDetails.description,
    image: propertyDetails.images,
    offers: {
      '@type': 'Offer',
      price: propertyDetails.price.replace(/[^0-9]/g, ''),
      priceCurrency: propertyDetails.price.includes('$') ? 'USD' : 'RUB',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: propertyDetails.location,
    },
    numberOfRooms: propertyDetails.specs.beds,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-bg flex flex-col pt-24">
        <Navigation />
        <CatalogDetailClient id={id} />
        <Footer />
      </main>
    </>
  );
}

