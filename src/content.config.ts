import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const tegelCollection = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "src/content" }),
    schema: z.object({
        titel: z.string(),
        datum: z.date(),
        duimnagelBestand: z.string(),
    }),
});

export const collections = {
    tegels: tegelCollection,
};
