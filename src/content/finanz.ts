import { ROUTES } from '@/config/routes'

export const FINANZ = {
    meta: {
        title: 'Roth Finanz – Ihr Vorsorgespezialist seit 1970',
        description:
            'Roth Finanz Maklergesellschaft – Beratung zu Altersversorgung, Sterbegeld­versicherung und Vorsorge. Seit 1970 in Langen.',
    },

    hero: {
        eyebrow: 'Roth Finanz',
        title: 'Ihr Vorsorge Spezialist.',
    },

    intro: {
        eyebrow: 'Roth Finanz seit 1970',
        title: 'Mehr als nur Zahlen.',
        paragraphs: [
            'Wir sind Ihr Partner in finanziellen Belangen seit 1970. Bei Roth Finanz verstehen wir, dass Finanzmanagement weit mehr ist als nur Zahlen. Es geht darum, Ihre individuellen Ziele zu verstehen und maßgeschneiderte Lösungen anzubieten, die Ihnen helfen, diese Ziele zu erreichen.',
            'Für alle Arten der Vorsorge helfen wir Ihnen dabei, die richtige Absicherung zu finden.',
            'Unser Engagement gilt stets höchster Fachkompetenz, Transparenz und persönlicher Betreuung. Wir streben danach, langfristige Partnerschaften aufzubauen, indem wir unseren Kunden helfen, finanzielle Sicherheit zu erreichen.',
            'Kontaktieren Sie uns noch heute, um herauszufinden, wie wir Ihnen helfen können, Ihre finanziellen Ziele zu verwirklichen.',
        ],
        logoAlt: 'Roth Finanz seit 1970',
    },

    services: {
        eyebrow: 'Schwerpunkte',
        title: 'Unsere Themen.',
        items: [
            {
                title: 'Altersversorgung',
                text: 'Beratung und Vermittlung von betrieblichen oder privaten Versorgungsmaßnahmen sowie Management von Unterstützungskassen.',
                to: ROUTES.FINANZ.ALTERSVERSORGUNG,
            },
            {
                title: 'Sterbegeldversicherung',
                text: 'Selbstbestimmt vorsorgen – damit Angehörige finanziell entlastet werden.',
                to: ROUTES.FINANZ.STERBEGELD,
            },
        ],
    },
}
