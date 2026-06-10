import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { ROUTES } from './src/config/routes'

const SITE_URL = 'https://www.roth-makler.de'

/**
 * Flatten the nested ROUTES object into a list of paths.
 * Stays in sync with the router automatically — adding a route in
 * src/config/routes.ts also adds it to the generated sitemap.xml.
 */
function collectPaths(node: unknown, acc: string[] = []): string[] {
    if (typeof node === 'string') acc.push(node)
    else if (node && typeof node === 'object')
        for (const v of Object.values(node)) collectPaths(v, acc)
    return acc
}

/**
 * Emit sitemap.xml into the build output. Search engines fetch
 * <SITE_URL>/sitemap.xml — referenced from public/robots.txt.
 */
function sitemapPlugin(): Plugin {
    return {
        name: 'roth-sitemap',
        apply: 'build',
        closeBundle() {
            const paths = collectPaths(ROUTES)
            const today = new Date().toISOString().slice(0, 10)
            const urls = paths
                .map(
                    p =>
                        `  <url>\n` +
                        `    <loc>${SITE_URL}${p === '/' ? '' : p}/</loc>\n` +
                        `    <lastmod>${today}</lastmod>\n` +
                        `    <changefreq>monthly</changefreq>\n` +
                        `    <priority>${p === '/' ? '1.0' : '0.7'}</priority>\n` +
                        `  </url>`,
                )
                .join('\n')
            const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
            const outDir = path.resolve(__dirname, 'dist')
            mkdirSync(outDir, { recursive: true })
            writeFileSync(path.resolve(outDir, 'sitemap.xml'), xml, 'utf8')
        },
    }
}

export default defineConfig({
    plugins: [react(), sitemapPlugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
