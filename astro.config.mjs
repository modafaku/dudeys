import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import matthiesenxyzghostcms from "@matthiesenxyz/astro-ghostcms";

// https://astro.build/config
export default defineConfig({
  site: "https://modafaku.com",
  integrations: [
    matthiesenxyzghostcms({
      ghostURL: "https://ghost.modafaku.com",
      ThemeProvider: {
        disableThemeProvider: true,
        theme: "@matthiesenxyz/astro-ghostcms-theme-default",
      },
      disableDefault404: true,
      enableRSSFeed: true,
      enableOGImages:true,
      verbose: false,
      Integrations: {
        robotsTxt: {
        },
        sitemap: {
        },
      }
    }),    
    mdx(), 
    sitemap(), 
    solidJs(), 
    tailwind({
    applyBaseStyles: false
  }), ]
});