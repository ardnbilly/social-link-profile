
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/social-link-profile",
});