import sveltePreprocess from 'svelte-preprocess';
import nodeAdapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isProduction = process.env.VITE_SVARIA_MODE === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: nodeAdapter(),
  },
  preprocess: [
    sveltePreprocess({
      typescript: true,
      sourceMap: !isProduction,
    }),
    vitePreprocess()
  ]
};

export default config;
