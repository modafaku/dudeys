//import preload from "astro-preload";
import { passthroughImageService, defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import matthiesenxyzghostcms from "@matthiesenxyz/astro-ghostcms";
import cloudflare from "@astrojs/cloudflare";
import linkPreview from "astro-link-preview";
//import satori from "satori-astro";
import { imageService } from "@unpic/astro/service";
import relativeLinks from "astro-relative-links";

import betterImageService from "astro-better-image-service";

// https://astro.build/config
export default defineConfig({
  image: {
    service: imageService()
  },
  site: "https://modafaku.com/",
  integrations: [linkPreview(),
  //    preload(), 
  matthiesenxyzghostcms({
    ghostURL: "https://ghost.modafaku.com/",
    ThemeProvider: {
      disableThemeProvider: true,
      theme: "@matthiesenxyz/astro-ghostcms-theme-default"
    },
    disableDefault404: true,
    enableRSSFeed: true,
    enableOGImages: false,
    verbose: true,
    Integrations: {
      robotsTxt: {},
      sitemap: {}
    }
  }), 
  mdx(), 
  sitemap(), 
  solidJs(), 
  tailwind({
    applyBaseStyles: false
  }), 
//  satori(), 
  relativeLinks(), 
  betterImageService()],
//    output: "hybrid",
//    vite: {
//      ssr: {
//        external: true,
//      },
//    },
//    adapter: cloudflare()
});