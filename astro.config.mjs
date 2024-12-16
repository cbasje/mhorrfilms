import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
    output: "static",

    integrations: [mdx(), icon(), sitemap()],

    site: "https://mhorrfilms.nl",

    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist(">= 0.25%")),
                drafts: {
                    customMedia: true,
                },
            },
        },
        build: {
            cssMinify: "lightningcss",
        },
    },
});
