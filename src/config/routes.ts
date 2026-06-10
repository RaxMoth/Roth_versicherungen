/**
 * Single source of truth for all route paths.
 * Use ROUTES.* everywhere instead of hard-coded strings.
 *
 * Benefits:
 *   • Compile-time errors when a path is misspelled
 *   • One place to change a URL site-wide
 *   • Autocomplete in editors
 */
export const ROUTES = {
    HOME: '/',

    VERSICHERUNGEN: {
        INDEX: '/roth-versicherungen',
        FIRMENKUNDEN: '/roth-versicherungen/firmenkunden',
        CYBER: '/roth-versicherungen/firmenkunden/cyber-police',
        PRIVATKUNDEN: '/roth-versicherungen/privatkunden',
        TIER: '/roth-versicherungen/privatkunden/tierkrankenversicherung',
        HINWEISE: '/roth-versicherungen/wichtige-hinweise',
        JOBS: '/roth-versicherungen/jobs',
        ERSTINFO: '/roth-versicherungen/erstinformation',
        DATENSCHUTZ: '/roth-versicherungen/datenschutz',
        IMPRESSUM: '/roth-versicherungen/impressum',
    },

    FINANZ: {
        INDEX: '/roth-finanz',
        ALTERSVERSORGUNG: '/roth-finanz/altersversorgung',
        STERBEGELD: '/roth-finanz/sterbegeldversicherung',
        ERSTINFO: '/roth-finanz/erstinformation',
        DATENSCHUTZ: '/roth-finanz/datenschutz',
        IMPRESSUM: '/roth-finanz/impressum',
    },

    TEAM: '/team',
    KONTAKT: '/kontakt-anfahrt',
    ONLINE: '/online-beratung',
    SERVICE_APP: '/service-app',
} as const
