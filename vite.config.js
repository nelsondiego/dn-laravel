import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { run } from "vite-plugin-run";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        run([
            {
                name: "wayfinder",
                run: ["php", "artisan", "wayfinder:generate"],
                pattern: ["routes/**/*.php", "app/**/Http/**/*.php"],
            },
        ]),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            "@actions/": "./resources/js/actions",
            "@routes/": "./resources/js/routes",
        },
    },

});
