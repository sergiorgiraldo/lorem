
import { sveltekit } from '@sveltejs/kit/vite';
import { viteprocess } from @sveltejs/vite-plugin-svelte; 
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
