import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const covers = [
    'IT-Forensik',
    'Rechtsberatung',
    'Information Management',
    'Credit Monitoring',
    'Krisenmanagement',
    'PR-Beratung',
    'Betriebsunterbrechungs­schäden',
    'Vertragsstrafen',
    'Lösegeldzahlungen',
    'Wiederherstellungs­kosten',
    'Sicherheits­verbesserungen',
]

const exclusions = [
    'Kartellrechtsverstöße',
    'Patentverletzungen',
    'Vorsatz',
    'Krieg und Terrorismus',
    'Behördliche Vollstreckung',
    'Bußgelder',
    'Innere Streitigkeiten',
    'Garantiezusagen',
]

const stats = [
    {
        value: '146.363',
        label: 'erfasste Fälle in der Polizeilichen Kriminalstatistik 2021',
    },
    {
        value: '1,8 Mio €',
        label: 'durchschnittlicher Schaden für Großunternehmen nach Hackerangriff',
    },
    {
        value: '70.000 €',
        label: 'durchschnittlicher Schaden für kleine und mittlere Unternehmen',
    },
]

const CyberPolice: React.FC = () => (
    <>
        <PageHero
            eyebrow="Firmenkunden › Cyber-Police"
            title="Schutz vor digitalen Bedrohungen."
            subtitle="Versicherungsschutz gegen Internet­kriminalität und IT-Risiken für Unternehmen jeder Größe."
            bgImage={IMAGES.cyber}
        />

        <Section eyebrow="Lagebild" title="Cyberkriminalität ist Realität.">
            <div className="grid md:grid-cols-3 gap-6">
                {stats.map(stat => (
                    <div
                        key={stat.value}
                        className="bg-white p-8 rounded-md shadow-card text-center border-b-2 border-brand-red"
                    >
                        <p className="font-serif text-4xl md:text-5xl font-semibold text-brand-red">
                            {stat.value}
                        </p>
                        <p className="text-stone-700 mt-4 text-sm">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
            <p className="mt-10 text-stone-700 text-lg leading-relaxed max-w-3xl">
                Hinzu kommen mögliche Haftpflichtansprüche Dritter, die durch
                einen Cyber-Vorfall in Ihrem Unternehmen geschädigt wurden.
            </p>
        </Section>

        <Section
            eyebrow="Deckung"
            title="Typische Versicherungs­leistungen."
            bg="page"
        >
            <p className="text-stone-700 mb-8 text-lg">
                Je nach Tarif werden u. a. folgende Kosten übernommen:
            </p>
            <div className="grid md:grid-cols-3 gap-3">
                {covers.map(c => (
                    <div
                        key={c}
                        className="bg-white px-5 py-4 rounded-md shadow-card text-stone-900 flex items-center gap-3"
                    >
                        <span className="text-brand-red font-bold">✓</span>
                        {c}
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Grenzen" title="Typische Ausschlüsse.">
            <div className="grid md:grid-cols-2 gap-3">
                {exclusions.map(e => (
                    <div
                        key={e}
                        className="bg-brand-page px-5 py-4 rounded-md text-stone-700 flex items-center gap-3"
                    >
                        <span className="text-stone-400 font-bold">–</span>
                        {e}
                    </div>
                ))}
            </div>
            <p className="mt-8 text-sm text-stone-500">
                Die konkrete Leistung und Ausschlüsse richten sich nach dem
                jeweiligen Versicherungsvertrag.
            </p>
        </Section>

        <CallToAction />
    </>
)

export default CyberPolice
