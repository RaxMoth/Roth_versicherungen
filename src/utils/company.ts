// Central text/data for Roth Versicherungen + Roth Finanz.
// Two legally separate Maklergesellschaften share the same office.

export const COMPANY = {
    // Shared identity
    tagline: 'Ihr Versicherungsmakler seit 1907',
    street: 'Bahnstraße 95',
    city: '63225 Langen',
    address: 'Bahnstraße 95, 63225 Langen',
    phone: '+49 6103 70648-0',
    phoneHref: 'tel:+4961037064800',
    fax: '+49 6103 70648-48',
    email: 'info@rothversicherungen.de',
    emailFinanz: 'info@rothfinanz.de',
    hours: 'Montag - Freitag: 9:00 - 17:00 Uhr',
    hoursExtra: 'Termine außerhalb der Bürozeiten nach Vereinbarung.',

    // Display names (used widely)
    name: 'Roth Versicherungen Maklergesellschaft m.b.H.',
    finanzName: 'Roth Finanz Maklergesellschaft m.b.H.',
}

// Roth Versicherungen GmbH – legal data
export const VERSICHERUNGEN = {
    name: 'Roth Versicherungen Maklergesellschaft m.b.H.',
    short: 'Roth Versicherungen',
    tagline: 'Versicherungen aller Art seit 1907',
    management: 'Carlo Roth, Norbert Schmidt',
    registry: 'Offenbach HRB 32064',
    type: 'Versicherungsmakler § 93 HGB',
    vermittlerNr: 'D-KDM3-NPBF2-75',
    ustId: '44-242-55522',
    erlaubnis: '§ 34d Abs. 1 Gewerbeordnung',
    aufsicht: 'IHK Offenbach',
    verband: 'Verband Deutscher Versicherungsmakler e. V.',
    responsibleEditor: 'Carlo Roth',
}

// Roth Finanz GmbH – legal data
export const FINANZ = {
    name: 'Roth Finanz Maklergesellschaft m.b.H.',
    short: 'Roth Finanz',
    tagline: 'Ihr Vorsorge­spezialist seit 1970',
    management: 'Monika J. Roth, Carlo Roth',
    registry: 'Offenbach HRB 32072',
    type: 'Versicherungs- und Finanzmakler',
    vermittlerNr: 'D-31G3-HBHB8-02',
    ustId: '44-242-55370',
    erlaubnisVersicherung: '§ 34d Abs. 1 Gewerbeordnung',
    erlaubnisFinanz: '§ 34c Gewerbeordnung (Immobilien- und Finanzmakler)',
    aufsichtVersicherung: 'IHK Offenbach',
    aufsichtFinanz: 'Kreis Offenbach, Ordnungsamt',
    responsibleEditor: 'Carlo Roth',
}

// Shared DIHK contact info
export const DIHK = {
    name: 'DIHK (Deutscher Industrie- und Handelskammertag)',
    street: 'Breite Straße 29',
    city: '10178 Berlin',
    phone: '0180 6 00 58 50',
    register: 'www.vermittlerregister.info',
}

// Team
export const TEAM = {
    CARLO: 'Carlo Roth',
    CARLO_TITLE: 'Gesellschafter-Geschäftsführer',
    CARLO_FOCUS: ['Privat- und Geschäftskunden', 'Krankenversicherung'],

    PETRA: 'Petra Born',
    PETRA_TITLE: 'Kauffrau für Versicherungen und Finanzen',
    PETRA_FOCUS: [
        'Geschäftskunden',
        'Flotten- und Kfz-Versicherung & Kfz-Schadensbearbeitung',
        'Maschinenversicherung',
        'Elektronikversicherung',
    ],

    SABRINA: 'Sabrina Beck',
    SABRINA_TITLE: 'Kauffrau für Versicherungen und Finanzen',
    SABRINA_FOCUS: [
        'Sachversicherungen',
        'Krankenzusatz- und Krankenvollversicherungen',
        'Schadensbearbeitung',
    ],

    WILLIAM: 'Chris Williams',
    WILLIAM_TITLE: 'Kaufmann für Versicherungen und Finanzen',
    WILLIAM_QUALIFIKATIONS: [
        'Kaufmann für Versicherungen und Finanzen',
        'Staatl. geprüfter Wirtschaftsfachwirt IHK',
        'Fachmann für betriebliche Altersvorsorge',
    ],
    WILLIAM_FOCUS: [
        'Betriebliche Altersvorsorge',
        'Risikoanalyse',
        'Berufsunfähigkeitsversicherung',
        'Krankenversicherung',
        'Unfallversicherung',
        'Tierkrankenversicherung',
        'E-Bike Versicherung',
    ],

    DOGS: 'Finnley & Yves-Alain',
    DOGS_TITLE: 'Office dogs',
    DOGS_FOCUS: ['Schadensbesichtigung', 'Gutes Betriebsklima'],
}

// Real images downloaded from roth-makler.de live in src/utils/images.ts
// Re-exported here so existing pages keep working.
export { IMAGES, TEAM_PHOTOS } from './images'
