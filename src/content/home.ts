import { ROUTES } from '@/config/routes'

export const HOME = {
    meta: {
        title: 'Ihr Versicherungs- und Finanzmakler in Langen',
        description:
            'Roth Versicherungen und Roth Finanz in Langen – persönliche, neutrale Beratung seit 1907 bzw. 1970. Ihr roter Faden im Versicherungslabyrinth.',
    },

    hero: {
        eyebrow: 'Roth Versicherungen & Roth Finanz',
        title: 'Ihr Versicherungs- und Finanzmakler in Langen.',
        subtitle:
            'Die Zahl der Versicherer und das Angebot an Versicherungsleistungen sind so vielfältig, dass es nicht einfach ist, sich zurechtzufinden und abzuschätzen, ob alle Risiken ausreichend abgedeckt sind.',
    },

    trust: [
        { value: 'seit 1907', label: 'Roth Versicherungen' },
        { value: 'seit 1970', label: 'Roth Finanz' },
        { value: '4. Generation', label: 'Familienbetrieb' },
        { value: 'unabhängig', label: 'neutral & ungebunden' },
    ],

    about: {
        eyebrow: 'Über uns',
        title: 'Wir sind Ihr roter Faden in diesem Labyrinth.',
        paragraphs: [
            'Wir sind Ihr roter Faden in diesem Labyrinth. Der rote Faden der Ariadne ist sprichwörtlich ein Hilfsmittel, um sich in schwierigen Situationen zurechtzufinden. Und die entstehen immer dann, wenn es darum geht, den passenden und umfassenden Versicherungsschutz zu finden oder einen Schaden zu regulieren.',
            'Als Experten für Versicherungen und Finanzdienstleistungen engagieren wir uns seit 1907 bzw. 1970 für Unternehmer, Unternehmen und Privatkunden. Unser Anspruch ist eine langfristige und ergebnisorientierte Beratung, damit Sie auf jede Situation optimal vorbereitet sind.',
            'Unsere Dienstleistungen umfassen das gesamte Spektrum des versicherungsrelevanten Risiko-, Vertrags- und Schadenmanagements.',
        ],
    },

    services: {
        eyebrow: 'Beratungsfelder',
        title: 'Worauf können Sie zählen?',
        items: [
            {
                title: 'Privatkunden',
                text: 'Neutrale Beratung rund um Altersvorsorge, Haftpflicht, Kfz, Hausrat und mehr.',
                to: ROUTES.VERSICHERUNGEN.PRIVATKUNDEN,
            },
            {
                title: 'Firmenkunden',
                text: 'Maßgeschneiderter Schutz für Unternehmen – vom Risikomanagement bis zur Cyber-Police.',
                to: ROUTES.VERSICHERUNGEN.FIRMENKUNDEN,
            },
            {
                title: 'Altersversorgung',
                text: 'Betriebliche und private Vorsorgekonzepte – staatlich gefördert und individuell abgestimmt.',
                to: ROUTES.FINANZ.ALTERSVERSORGUNG,
            },
            {
                title: 'Online Beratung',
                text: 'Sicheres Video-Meeting bequem von zuhause oder unterwegs – wir kommen zu Ihnen.',
                to: ROUTES.ONLINE,
            },
        ],
    },

    location: {
        eyebrow: 'Vor Ort',
        title: 'Hier finden Sie uns.',
        imageAlt: 'SO NAH. SO GUT. SO LANGEN. Initiative',
        body: 'Wir sind für unsere Kundinnen und Kunden vor Ort in Langen und unterstützen die Initiative SO NAH. SO GUT. SO LANGEN.',
        bodyExtra: 'Lesen Sie auch, wie uns unsere Kunden bewerten.',
    },
}
