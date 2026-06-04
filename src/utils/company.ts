// Central text/data for Roth Versicherungen. Edit here to retune wording site-wide.

export const COMPANY = {
    name: 'Roth Versicherungen Maklergesellschaft m.b.H.',
    finanzName: 'Roth Finanz Maklergesellschaft m.b.H.',
    tagline: 'Ihr Versicherungsmakler seit 1907',
    address: 'Bahnstraße 95, 63225 Langen',
    street: 'Bahnstraße 95',
    city: '63225 Langen',
    phone: '+49 6103 70648-0',
    phoneHref: 'tel:+4961037064800',
    fax: '+49 6103 70648-48',
    email: 'info@rothversicherungen.de',
    emailFinanz: 'info@rothfinanz.de',
    hours: 'Montag - Freitag: 9:00 - 17:00 Uhr',
    hoursExtra: 'Termine außerhalb der Bürozeiten nach Vereinbarung.',
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

// Curated Unsplash hero images — local-consultant tone.
// Replace any URL with your own photography to make it yours.
const u = (id: string, w = 1920) =>
    `https://images.unsplash.com/${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
    home: u('photo-1556761175-b413da4baf72'),
    versicherungen: u('photo-1521737852567-6949f3f9f2b5'),
    firmenkunden: u('photo-1556761175-4b46a572b786'),
    cyber: u('photo-1573164713714-d95e436ab8d6'),
    privatkunden: u('photo-1511895426328-dc8714191300'),
    tier: u('photo-1601758228041-f3b2795255f1'),
    hinweise: u('photo-1450101499163-c8848c66ca85'),
    jobs: u('photo-1521737604893-d14cc237f11d'),
    erstinfo: u('photo-1454165804606-c3d57bc86b40'),
    datenschutz: u('photo-1563013544-824ae1b704d3'),
    impressum: u('photo-1454165804606-c3d57bc86b40'),
    finanz: u('photo-1554224155-6726b3ff858f'),
    altersversorgung: u('photo-1581579438747-104c53d7fbc4'),
    sterbegeld: u('photo-1518709594023-6eab9bab7b23'),
    team: u('photo-1521737852567-6949f3f9f2b5'),
    kontakt: u('photo-1502920917128-1aa500764cbd'),
    online: u('photo-1591115765373-5207764f72e7'),
    serviceapp: u('photo-1512941937669-90a1b58e7e9c'),

    history: u('photo-1568667256549-094345857637', 1200),
    consulting: u('photo-1573497019940-1c28c88b4f3e', 1200),
}
