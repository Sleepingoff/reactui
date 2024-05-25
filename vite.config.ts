import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@/', replacement: '/src' },
      { find: '@/components', replacement: '/src/components' },
      { find: '@/components/atoms', replacement: '/src/components/atoms' },
      {
        find: '@/components/molecules',
        replacement: '/src/components/molecules'
      },
      {
        find: '@/components/organisms',
        replacement: '/src/components/organisms'
      },
      { find: '@/assets', replacement: '/src/assets' },
      { find: '@/types', replacement: '/src/types' },
      { find: '@/utils', replacement: '/src/utils' },
      { find: '@/hooks', replacement: '/src/hooks' }
    ]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-simple-ui',
      formats: ['es', 'cjs'],
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', '**/*.stories.tsx'],
      output: {
        globals: {
          react: 'React'
        },
        banner: '"use client";',
        interop: 'auto'
      }
    },
    commonjsOptions: {
      esmExternals: ['react']
    }
  }
});
