import { ROUTES } from '@/config/routes'

export const FIRMENKUNDEN = {
    meta: {
        title: 'Firmenkunden – Rückenstärkung für Ihr Unternehmen',
        description:
            'Neutrale, ergebnisorientierte Beratung zu Risiko-, Vertrags- und Schadenmanagement. Spezialprodukte wie Allgefahren-Policen und betriebliche Altersvorsorge.',
    },

    hero: {
        eyebrow: 'Roth Versicherungen › Firmenkunden',
        title: 'Rückenstärkung für Ihr Unternehmen.',
        subtitle:
            'Außergewöhnliche Risiken erfordern außergewöhnliche Lösungen.',
    },

    intro: {
        eyebrow: 'Beratungsansatz',
        title: 'Die Schnittstelle zwischen Ihnen und Ihren Versicherern.',
        paragraphs: [
            'Außergewöhnliche Risiken erfordern außergewöhnliche Lösungen. Wir sind die Schnittstelle zwischen Ihnen und unseren Versicherungspartnern. Unsere neutrale und ergebnisorientierte Beratung zeigt Ihnen die Möglichkeiten und Wege zur Absicherung der individuellen Risiken Ihres Unternehmens auf. So können Sie fundiert entscheiden, welche unserer Leistungen Sie in Anspruch nehmen möchten.',
            'Gemeinsam mit Ihnen entscheiden wir über Art und Umfang unserer Zusammenarbeit: einmalig oder fortlaufend. Ebenso stimmen wir mit Ihnen die Art der Vergütung ab: erfolgsabhängig, aufwandsbezogen oder pauschal auf Honorar- oder Courtagebasis. Selbstverständlich ist auch eine Kombination der Systeme möglich.',
        ],
    },

    pillars: {
        eyebrow: 'Leistungsspektrum',
        title: 'Drei Säulen unseres Mandats.',
        categories: [
            {
                title: 'Risiko-Management',
                items: [
                    'Suche und Bewertung individueller Unternehmensrisiken und deren Lösung',
                    'Überprüfung bestehender Policen',
                ],
            },
            {
                title: 'Vertragsmanagement',
                items: [
                    'Soll-Ist-Vergleich bestehender Versicherungspolicen',
                    'Optimierungsempfehlungen oder Neuordnung bestehender Policen',
                    'Erstellung von Angeboten',
                    'Platzierung von Deckungskonzepten',
                    'Regelmäßige Anpassung der Policen nach gesetzlichen Änderungen, aufgrund aktueller Marktentwicklungen oder bei Einführung neuer Produkte',
                ],
            },
            {
                title: 'Schadenmanagement',
                items: [
                    'Erfassung aller schadensersatzpflichtigen Kosten',
                    'Bei Bedarf Unterstützung durch geeignete Sachverständige',
                    'Interessenvertretung gegenüber dem Versicherer',
                    'Entlastung der Schadensquote durch Prüfung der Regressfähigkeit',
                    'Prüfung der Schadenabrechnung',
                ],
            },
        ],
    },

    specialProducts: {
        eyebrow: 'Spezialprodukte',
        title: 'Eine Auswahl an Spezialprodukten.',
        items: [
            'Allgefahren-Policen',
            'Mitarbeiterprogramme',
            'Betriebliche Altersvorsorge',
        ],
    },

    cyber: {
        eyebrow: 'Cyber-Risk',
        title: 'Schutz vor digitalen Bedrohungen.',
        imageAlt: 'Cybersicherheit',
        body: 'Cyberkriminalität ist längst Alltag. Wir helfen Ihrem Unternehmen, sich gegen die finanziellen Folgen von IT-Risiken abzusichern.',
        cta: 'Mehr zur Cyber-Police →',
        ctaLink: ROUTES.VERSICHERUNGEN.CYBER,
    },
}
