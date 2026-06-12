import { describe, it, expect } from 'vitest'
import { ROUTES } from '@/config/routes'

/**
 * Smoke tests for the single source of truth for paths.
 * Catches accidental "/foo" -> "foo" typos, duplicate paths,
 * or accidental removal of a route the rest of the app links to.
 */
describe('ROUTES', () => {
    function collect(node: unknown, acc: string[] = []): string[] {
        if (typeof node === 'string') acc.push(node)
        else if (node && typeof node === 'object')
            for (const v of Object.values(node)) collect(v, acc)
        return acc
    }

    const paths = collect(ROUTES)

    it('contains the canonical entry points', () => {
        expect(ROUTES.HOME).toBe('/')
        expect(ROUTES.VERSICHERUNGEN.INDEX).toBe('/roth-versicherungen')
        expect(ROUTES.FINANZ.INDEX).toBe('/roth-finanz')
    })

    it('every path is a non-empty string starting with /', () => {
        for (const p of paths) {
            expect(p, `path ${p}`).toMatch(/^\/[a-z0-9/-]*$/)
        }
    })

    it('has no duplicate paths', () => {
        const set = new Set(paths)
        expect(set.size).toBe(paths.length)
    })

    it('keeps Versicherungen and Finanz legal pages parallel', () => {
        const vKeys = Object.keys(ROUTES.VERSICHERUNGEN)
        const fKeys = Object.keys(ROUTES.FINANZ)
        // Both must offer their own legal triad
        for (const k of ['ERSTINFO', 'DATENSCHUTZ', 'IMPRESSUM']) {
            expect(vKeys).toContain(k)
            expect(fKeys).toContain(k)
        }
    })
})
