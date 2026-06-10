/**
 * Legal pages content for both entities.
 * Roth Versicherungen and Roth Finanz are separate Maklergesellschaften
 * with separate Handelsregister numbers, USt-IDs and Geschäftsführer.
 */

import { COMPANY } from '@/utils/company'

// ── Shared regulator info ────────────────────────────────────────────────────
export const DIHK = {
    name: 'DIHK (Deutscher Industrie- und Handelskammertag)',
    street: 'Breite Straße 29',
    city: '10178 Berlin',
    phone: '0180 6 00 58 50',
    register: 'www.vermittlerregister.info',
}

// ── Roth Versicherungen GmbH ─────────────────────────────────────────────────
export const VERSICHERUNGEN_LEGAL = {
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
    email: COMPANY.email,
}

// ── Roth Finanz GmbH ─────────────────────────────────────────────────────────
export const FINANZ_LEGAL = {
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
    email: COMPANY.emailFinanz,
}

// ── Shared impressum strings ─────────────────────────────────────────────────
export const IMPRESSUM_STRINGS = {
    sections: {
        provider: 'Anbieter',
        management: 'Geschäftsführende Gesellschafter',
        registry: 'Registereintrag',
        authority: 'Aufsichtsbehörde',
        authorityFinanz: 'Erlaubnis & Aufsicht',
        association: 'Verbandsmitgliedschaft',
        editor: 'Verantwortlich für den Inhalt',
        liability: 'Haftungs- und Urheberhinweis',
        odr: 'EU-Streitbeilegung',
    },
    labels: {
        court: 'Registergericht:',
        type: 'Art:',
        vermittlerNr: 'Vermittlerregister-Nr.:',
        ustId: 'USt-IdNr.:',
    },
    liabilityParagraphs: [
        'Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern nicht vorsätzliches oder grob fahrlässiges Verschulden nachweisbar ist.',
        'Alle Rechte an den vom Autor selbst erstellten Inhalten bleiben vorbehalten. Eine Vervielfältigung oder Verwendung in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.',
    ],
    externalLinksParagraph:
        'Externe Links wurden zum Zeitpunkt der Verlinkung auf rechtswidrige Inhalte überprüft. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
    odr: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ec.europa.eu/consumers/odr. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungs­verfahren vor einer Verbraucherschlichtungs­stelle teilzunehmen.',
    odrUrl: 'https://ec.europa.eu/consumers/odr',
    editorSuffix: '(Anschrift wie oben) gemäß § 18 Abs. 2 MStV',
}

// ── Datenschutz shared strings ───────────────────────────────────────────────
export const DATENSCHUTZ_STRINGS = {
    rightsItems: [
        'Recht auf Auskunft',
        'Recht auf Berichtigung',
        'Recht auf Widerspruch',
        'Recht auf Datenlöschung (soweit rechtlich zulässig)',
        'Recht auf Datenübertragbarkeit',
        'Recht zur Beschwerde bei einer Aufsichtsbehörde',
    ],
    hessischeBeauftragte: {
        name: 'Hessische Datenschutzbeauftragte',
        street: 'Postfach 3163',
        city: '65021 Wiesbaden',
        phone: '+49 611 1408-0',
    },
    cookies: 'Diese Website nutzt nur technische Cookies. Profiling-Cookies werden nicht verwendet.',
}
