import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://life-line-training.nl",
  integrations: [tailwind({ applyBaseStyles: false })]
});
