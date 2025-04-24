import { defineCollection, z } from 'astro:content';

const homepage = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Aquí puedes agregar más campos según necesites
    draft: z.boolean().optional(),
    featured: z.boolean().optional(),
    author: z.string().optional()
  })
});

export const collections = {
  'homepage': homepage
};