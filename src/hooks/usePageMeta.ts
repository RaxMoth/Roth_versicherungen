import { useEffect } from 'react'
import { buildTitle, SITE } from '@/config/seo'

interface PageMetaOptions {
    title?: string
    description?: string
}

/**
 * Lightweight page-meta hook — sets <title> and meta description.
 *
 * Why not react-helmet-async? It's available as a fallback but adds
 * complexity for a single-language site. This hook is enough for SEO,
 * social share scrapers, and the browser tab.
 */
export function usePageMeta({ title, description }: PageMetaOptions): void {
    useEffect(() => {
        document.title = buildTitle(title)

        if (description) {
            let tag = document.querySelector<HTMLMetaElement>(
                'meta[name="description"]',
            )
            if (!tag) {
                tag = document.createElement('meta')
                tag.name = 'description'
                document.head.appendChild(tag)
            }
            tag.content = description
        }
        // Cleanup not strictly needed since the next page overrides
    }, [title, description])
}

export { SITE }
