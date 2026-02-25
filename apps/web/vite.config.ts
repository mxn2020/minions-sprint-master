import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@minions-sprint-master/sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/sprint-master/, /node_modules/],
        },
    },
});
