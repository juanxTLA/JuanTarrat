import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    }),
    paths: {
      base: process.env.BASE_URL || '', // use BASE_URL environment variable, or '' for local development
      assets: process.env.BASE_URL || '' // use BASE_URL environment variable, or '' for local development
    },
    //target: '#svelte'
  },
  preprocess: vitePreprocess()
};

export default config;