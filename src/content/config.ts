import { z, defineCollection } from "astro:content";

const tegelCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        titel: z.string(),
        datum: z.date(),
        duimnagelBestand: z.string(),
    }),
});

export const collections = {
    tegels: tegelCollection,
};
