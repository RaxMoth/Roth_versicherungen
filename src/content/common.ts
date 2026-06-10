/**
 * Shared strings used across multiple pages.
 * Edit here to update site-wide labels.
 */
export const COMMON = {
    actions: {
        learnMore: 'Mehr erfahren →',
        callUs: 'Anrufen',
        sendMessage: 'Nachricht senden',
        bookAppointment: 'Termin vereinbaren',
        sendInquiry: 'Termin anfragen',
        backToHome: 'Zurück zur Startseite →',
        downloadPdf: 'PDF herunterladen',
        openBrochure: 'Broschüre öffnen',
    },

    nav: {
        skipToContent: 'Zum Hauptinhalt springen',
        primary: 'Hauptnavigation',
        footer: 'Seitenfuß',
        homeLogo: 'Roth Versicherungen Startseite',
        sectionGeneral: 'Allgemeine Links',
        openMenu: 'Menü öffnen',
        closeMenu: 'Menü schließen',
        welcome: 'Willkommen',
        rothVersicherungen: 'Roth Versicherungen',
        rothFinanz: 'Roth Finanz',
        allgemein: 'Allgemein',
    },

    cta: {
        eyebrow: 'Sprechen Sie uns an',
        headingVers: 'Persönliche Beratung – seit 1907.',
        headingFinanz: 'Persönliche Beratung – seit 1970.',
        body: 'Ob im Büro in Langen, bei Ihnen vor Ort oder online – wir nehmen uns Zeit für Ihr Anliegen. Rufen Sie uns an oder schreiben Sie uns eine Nachricht.',
        hours: 'Bürozeiten: Montag bis Freitag, 9:00 – 17:00 Uhr',
        sendMessage: 'Nachricht schreiben',
    },

    footer: {
        title: {
            allgemein: 'Allgemein',
            hours: 'Öffnungszeiten',
            rothVersicherungen: 'Roth Versicherungen',
            rothFinanz: 'Roth Finanz',
        },
        hoursTable: {
            weekdays: 'Montag – Freitag',
            weekdaysValue: '9:00 – 17:00 Uhr',
            weekend: 'Samstag & Sonntag',
            weekendValue: 'Geschlossen',
        },
        copyrightSuffix: '– Alle Rechte vorbehalten.',
        license: 'Versicherungsmakler nach § 34d Abs. 1 GewO',
        logoAlt: 'Roth Versicherungen Logo',
    },

    header: {
        legacyTagline: (
            // returned as React-friendly tuple for the strip
            // ['Versicherungen seit 1907', 'Finanz seit 1970', 'in Langen']
            ['Versicherungen', 'seit 1907', '· Finanz', 'seit 1970', '· in Langen'] as const
        ),
        hoursShort: 'Mo–Fr 9:00–17:00 Uhr',
    },

    notFound: {
        eyebrow: '404',
        title: 'Seite nicht gefunden.',
        subtitle:
            'Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben.',
    },
}
