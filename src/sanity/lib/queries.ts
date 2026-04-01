import { groq } from 'next-sanity'

// Fetch all properties (New Buildings, Secondary, etc)
export const propertiesQuery = groq`*[_type == "property"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  propertyClass,
  developer,
  price,
  priceNum,
  location,
  coordinates,
  specs,
  "mainImage": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  features,
  tags,
  description
}`

// Fetch a single property by slug
export const propertyBySlugQuery = groq`*[_type == "property" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  propertyClass,
  developer,
  price,
  priceNum,
  location,
  coordinates,
  specs,
  "mainImage": mainImage.asset->url,
  "gallery": gallery[].asset->url,
  features,
  tags,
  description
}`

// Fetch all posts
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  "mainImage": mainImage.asset->url,
  categories,
  publishedAt,
  excerpt
}`

// Fetch a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  author,
  "mainImage": mainImage.asset->url,
  categories,
  publishedAt,
  excerpt,
  body
}`

// Fetch page by slug
export const pageBySlugQuery = groq`*[_type == "page" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  seoTitle,
  seoDescription,
  blocks
}`
