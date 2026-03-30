// src/types/sanity.ts
// TypeScript типы для данных из Sanity

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityProperty {
  _id: string;
  title: string;
  slug: SanitySlug;
  propertyType: 'new' | 'abroad' | 'rent' | 'secondary';
  status?: 'hot' | 'premium' | 'new' | 'ready' | 'done';
  price: string;
  location: string;
  mainImage?: SanityImage;
  gallery?: SanityImage[];
  specs?: {
    beds?: number;
    baths?: number;
    area?: number;
    floor?: string;
    completion?: string;
  };
  description?: any[];  // Portable Text
  features?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  isFeatured?: boolean;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  publishedAt?: string;
  mainImage?: SanityImage;
  excerpt?: string;
  category?: string;
  body?: any[];  // Portable Text
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
