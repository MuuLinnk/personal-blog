import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.union([z.string(), z.date()]),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    slug: z.string().optional(),
  }),
});

export const collections = { posts };
