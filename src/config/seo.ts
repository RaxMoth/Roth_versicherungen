/**
 * Site-wide SEO configuration.
 */

export const SITE = {
    name: 'Roth Versicherungen Maklergesellschaft m.b.H.',
    url: 'https://www.roth-makler.de',
    titleSuffix: 'Roth Versicherungen Langen',
    defaultDescription:
        'Roth Versicherungen Maklergesellschaft in Langen – persönliche, neutrale Beratung für Privat- und Firmenkunden seit 1907. Ihr lokaler Versicherungs- und Finanzmakler.',
    locale: 'de_DE',
    lang: 'de',
    twitter: '@rothmakler',
} as const

/** Build a full <title> tag value for a page. */
export const buildTitle = (pageTitle?: string): string =>
    pageTitle ? `${pageTitle} | ${SITE.titleSuffix}` : SITE.titleSuffix
