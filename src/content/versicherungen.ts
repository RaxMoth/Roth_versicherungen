import { ROUTES } from '@/config/routes'

export const VERSICHERUNGEN = {
    meta: {
        title: 'Roth Versicherungen – seit 1907 in Langen',
        description:
            'Roth Versicherungen Maklergesellschaft seit 1907 – über ein Jahrhundert Versicherungskompetenz für Privat- und Firmenkunden in Langen.',
    },

    hero: {
        eyebrow: 'Roth Versicherungen',
        title: 'Mehr als hundert Jahre Erfahrung sind ein guter Anfang.',
    },

    tradition: {
        eyebrow: 'Tradition',
        title: 'Über ein Jahrhundert Versicherungs­kompetenz.',
        paragraphs: [
            'Die Geschichte der Roth Versicherungen reicht bis zum Anfang des letzten Jahrhunderts zurück.',
            'Damals, im Jahre 1907, gründete Hch. Werner XII in Langen ein Unternehmen zur Vermittlung von Versicherungsleistungen.',
            'Im Jahr 1932 trat sein Schwiegersohn Fritz Roth sen. in das Unternehmen ein. Seit 1949 firmiert das Unternehmen unter Roth Versicherungen. Es wurde stets von einem Mitglied der Familie Roth geführt. Heute leitet Carlo Roth das Unternehmen in vierter Generation.',
            'Für die Kundinnen und Kunden des Unternehmens bedeutet dies Sicherheit durch Kontinuität und Tradition sowie kompetente Betreuung mit dem Wissen und der Erfahrung aus über einem Jahrhundert Präsenz in der Versicherungsbranche.',
            'Unser Anspruch ist eine langfristige und ergebnisorientierte Beratung, damit Sie mit Roth Versicherungen auf jede Situation optimal vorbereitet sind. Wir freuen uns deshalb sehr, dass viele unserer Kundinnen und Kunden bereits seit Generationen mit Roth Versicherungen zusammenarbeiten. Unsere Dienstleistungen umfassen das gesamte Spektrum des versicherungsrelevanten Risiko-, Vertrags- und Schadenmanagements.',
        ],
    },

    archive: {
        eyebrow: 'Historisches Archiv',
        title: 'Roth Versicherungen früher.',
        images: [
            { alt: 'Historisches Foto des Roth-Büros' },
            { alt: 'Historische Roth Versicherungen Renault 4 Firmenfahrzeuge' },
        ],
    },

    services: {
        eyebrow: 'Leistungen',
        title: 'Unsere Dienstleistungen.',
        items: [
            {
                title: 'Firmenkunden',
                text: 'Als Firmenkunde profitieren Sie von den Vorteilen unserer operativen und strategischen Risikoerfassung. Darüber hinaus bieten wir Ihnen spezielle Branchenlösungen sowie eine breite Produkt- und Leistungsvielfalt.',
                to: ROUTES.VERSICHERUNGEN.FIRMENKUNDEN,
            },
            {
                title: 'Privatkunden',
                text: 'Für Privatkunden und Freiberufler entwickeln wir individuelle Konzepte zur Risikovorsorge. Wir beraten unabhängig und neutral. Dabei wägen wir stets ab, ob Risiken von unseren Kunden selbst getragen werden können oder auf einen Versicherer übertragen werden sollten.',
                to: ROUTES.VERSICHERUNGEN.PRIVATKUNDEN,
            },
        ],
        outro: 'Überzeugen Sie sich selbst und vereinbaren Sie einen Beratungstermin mit uns.',
    },
}
