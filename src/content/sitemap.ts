import { ROUTES } from '@/config/routes'

interface SitemapEntry {
    to: string
    label: string
}

interface SitemapSection {
    heading: string
    entries: SitemapEntry[]
}

export const SITEMAP_CONTENT = {
    meta: {
        title: 'Sitemap',
        description:
            'Sitemap: alle Seiten von Roth Versicherungen und Roth Finanz im Überblick.',
    },

    hero: {
        eyebrow: 'Sitemap',
        title: 'Alle Seiten auf einen Blick.',
    },

    sections: [
        {
            heading: 'Hauptbereiche',
            entries: [
                { to: ROUTES.HOME, label: 'Willkommen' },
                {
                    to: ROUTES.VERSICHERUNGEN.INDEX,
                    label: 'Roth Versicherungen',
                },
                { to: ROUTES.FINANZ.INDEX, label: 'Roth Finanz' },
                { to: ROUTES.TEAM, label: 'Unser Team' },
                { to: ROUTES.KONTAKT, label: 'Kontakt & Anfahrt' },
                { to: ROUTES.ONLINE, label: 'Online Beratung' },
                { to: ROUTES.SERVICE_APP, label: 'Service App' },
            ],
        },
        {
            heading: 'Roth Versicherungen',
            entries: [
                {
                    to: ROUTES.VERSICHERUNGEN.FIRMENKUNDEN,
                    label: 'Firmenkunden',
                },
                { to: ROUTES.VERSICHERUNGEN.CYBER, label: 'Cyber-Police' },
                {
                    to: ROUTES.VERSICHERUNGEN.PRIVATKUNDEN,
                    label: 'Privatkunden',
                },
                {
                    to: ROUTES.VERSICHERUNGEN.TIER,
                    label: 'Tierkrankenversicherung',
                },
                {
                    to: ROUTES.VERSICHERUNGEN.HINWEISE,
                    label: 'Wichtige Hinweise',
                },
                { to: ROUTES.VERSICHERUNGEN.JOBS, label: 'Jobs' },
                {
                    to: ROUTES.VERSICHERUNGEN.ERSTINFO,
                    label: 'Erstinformation',
                },
                {
                    to: ROUTES.VERSICHERUNGEN.DATENSCHUTZ,
                    label: 'Datenschutz',
                },
                { to: ROUTES.VERSICHERUNGEN.IMPRESSUM, label: 'Impressum' },
            ],
        },
        {
            heading: 'Roth Finanz',
            entries: [
                {
                    to: ROUTES.FINANZ.ALTERSVERSORGUNG,
                    label: 'Altersversorgung',
                },
                {
                    to: ROUTES.FINANZ.STERBEGELD,
                    label: 'Sterbegeldversicherung',
                },
                { to: ROUTES.FINANZ.ERSTINFO, label: 'Erstinformation' },
                { to: ROUTES.FINANZ.DATENSCHUTZ, label: 'Datenschutz' },
                { to: ROUTES.FINANZ.IMPRESSUM, label: 'Impressum' },
            ],
        },
    ] satisfies SitemapSection[],
}
