import { ROUTES } from '@/config/routes'

export const PRIVATKUNDEN = {
    meta: {
        title: 'Privatkunden – Wir halten Sie auf der richtigen Spur',
        description:
            'Individuelle Versicherungsberatung für Privatkunden: Altersvorsorge, Haftpflicht, Kfz, Hausrat, Tierkranken und mehr.',
    },

    hero: {
        eyebrow: 'Roth Versicherungen › Privatkunden',
        title: 'Wir halten Sie auf der richtigen Spur.',
    },

    intro: {
        eyebrow: 'Beratungsansatz',
        title: 'Jeder Mensch ist einzigartig.',
        paragraphs: [
            'Jeder Mensch ist einzigartig und hat eigene Wünsche und Träume für sein Leben. Damit Sie für Ihre Ziele optimal vorsorgen können, nehmen wir uns Zeit für Ihre persönliche Lebenssituation.',
            'Auf dieser Basis ermitteln wir gemeinsam mit Ihnen mögliche Risiken für Ihre Lebensplanung. Anschließend stimmen wir den Versicherungsschutz neutral und unabhängig darauf ab. Wir sagen Ihnen offen, welche Risiken Sie selbst tragen können und welche Sie besser absichern sollten.',
        ],
    },

    offerings: {
        eyebrow: 'Unser Versicherungsangebot',
        title: 'Leistungen für Privatkunden.',
        items: [
            'Altersvorsorge',
            'Sterbegeldversicherung',
            'Berufsunfähigkeits­versicherung',
            'Rechtsschutz­versicherung',
            'Gebäudeversicherung',
            'Haftpflichtversicherung',
            'Hausratversicherung',
            'Kfz-Versicherung',
            'Tierkrankenversicherung',
            'Schmuck- und Kunstversicherung',
            'Unfallversicherung',
            'Vermögens­schadenversicherung',
            'Versicherungen für Auslandsimmobilien und dort befindliche Werte',
            'Versicherungen für Flugzeuge, Yachten und historische Fahrzeuge',
        ],
        outro: 'Selbstverständlich stehen wir Ihnen auch im Schadenfall zur Seite.',
    },

    tier: {
        eyebrow: 'Spezialthema',
        title: 'Tierkrankenversicherung.',
        imageAlt: 'Tierkrankenversicherung',
        body: 'Damit man sich im Ernstfall nur um die Gesundheit des besten Freundes sorgen muss, nicht um mögliche Kosten.',
        cta: 'Mehr zur Tierkranken­versicherung →',
        ctaLink: ROUTES.VERSICHERUNGEN.TIER,
    },
}
