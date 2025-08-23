import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4b6vfhb6',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production',
  // Add token for authentication
  token: process.env.SANITY_API_TOKEN,
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a helper function for generating Image URLs with only the asset reference data in your documents.
// https://www.sanity.io/docs/image-url
export const urlFor = (source) => imageUrlBuilder(config).image(source)

// Helper function to get all posts
export async function getAllPosts() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "author": author->name
    }
  `)
  return posts
}

// Helper function to get a single post by slug
export async function getPostBySlug(slug) {
  const post = await sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      body,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "author": author->name
    }
  `, { slug })
  return post
}

// Helper function to get all posts with body content
export async function getAllPostsWithBody() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      body,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      "author": author->name
    }
  `)
  return posts
}

// Helper function to get all categories
export async function getAllCategories() {
  const categories = await sanityClient.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      description
    }
  `)
  return categories
}
