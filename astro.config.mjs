import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
    output: "static",

    integrations: [mdx(), icon()],

    site: "https://mhorrfilms.benjami.in",

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
