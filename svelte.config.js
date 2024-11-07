import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    paths: {
      base: '/../build' // Set this to an empty string for root hosting
    }
  }
};

export default config;