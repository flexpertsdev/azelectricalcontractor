/**
 * Content Collections Configuration
 *
 * Define schemas for content collections (blog, docs, etc.)
 * Extend as needed - this is minimal on purpose.
 */
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    // Extend here:
    // tags: z.array(z.string()).optional(),
    // category: z.string().optional(),
  }),
});

export const collections = { blog };
