import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const inlineCssPlugin = () => {
  return {
    name: 'inline-css',
    enforce: 'post' as const,
    generateBundle(options: any, bundle: any) {
      const cssAsset = Object.values(bundle).find(
        (chunk: any) => chunk.type === 'asset' && chunk.fileName.endsWith('.css')
      ) as any;
      const htmlChunk = Object.values(bundle).find(
        (chunk: any) => chunk.type === 'asset' && chunk.fileName.endsWith('.html')
      ) as any;

      if (cssAsset && htmlChunk && typeof htmlChunk.source === 'string') {
        htmlChunk.source = htmlChunk.source
          .replace(/<link[^>]*rel="stylesheet"[^>]*>/gi, '')
          .replace('</head>', `<style>${cssAsset.source}</style>\n</head>`);
        delete bundle[cssAsset.fileName];
      }
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
