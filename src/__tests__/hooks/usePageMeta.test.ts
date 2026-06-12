import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { usePageMeta } from '@/hooks/usePageMeta'

/**
 * The hook owns <title> and <meta name="description"> for SEO.
 * Verify it writes both, suffixes the title, and updates on re-render.
 */
describe('usePageMeta', () => {
    beforeEach(() => {
        document.title = ''
        document
            .querySelectorAll('meta[name="description"]')
            .forEach(el => el.remove())
    })

    it('sets the document title with the site suffix', () => {
        renderHook(() => usePageMeta({ title: 'Test Page' }))
        expect(document.title).toMatch(/^Test Page \| /)
    })

    it('uses the site suffix alone when no title is provided', () => {
        renderHook(() => usePageMeta({}))
        // Empty title path: suffix-only
        expect(document.title.length).toBeGreaterThan(0)
        expect(document.title).not.toContain('|')
    })

    it('writes the description meta tag', () => {
        renderHook(() =>
            usePageMeta({
                title: 'About',
                description: 'A test description',
            }),
        )
        const tag = document.querySelector('meta[name="description"]')
        expect(tag).not.toBeNull()
        expect(tag?.getAttribute('content')).toBe('A test description')
    })

    it('reuses the existing meta tag on re-render instead of duplicating', () => {
        const { rerender } = renderHook(
            ({ description }: { description: string }) =>
                usePageMeta({ title: 'P', description }),
            { initialProps: { description: 'first' } },
        )
        rerender({ description: 'second' })

        const tags = document.querySelectorAll('meta[name="description"]')
        expect(tags.length).toBe(1)
        expect(tags[0].getAttribute('content')).toBe('second')
    })
})
