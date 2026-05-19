import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string(),
    h1: z.string(),
    intro: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    sections: z.array(z.object({ heading: z.string(), text: z.string() })).default([]),
  }),
});

const trainingen = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    title: z.string(),
    href: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { pages, trainingen };
