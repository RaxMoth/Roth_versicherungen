import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const covered = [
    'Medizinisch notwendige Behandlungen und Operationen',
    'Vor- und Nachbehandlungen',
    'Optional: Impfungen, Kastration, Sterilisation',
    'Leistungen nach der Gebührenordnung für Tierärzte (GOT)',
]

const Tierkrankenversicherung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Privatkunden › Tierkrankenversicherung"
            title="Schutz für den besten Freund."
            subtitle="Damit man sich im Ernstfall nur um die Gesundheit des besten Freundes sorgen muss, nicht um mögliche Kosten."
            bgImage={IMAGES.tier}
        />

        <Section eyebrow="Leistungen" title="Was wird versichert?">
            <ul className="space-y-4 text-stone-700 text-lg max-w-2xl">
                {covered.map(c => (
                    <li
                        key={c}
                        className="flex gap-4 border-b border-stone-200 pb-4"
                    >
                        <span className="text-brand-red font-bold mt-1">✓</span>
                        <span>{c}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-stone-500 italic">
                Ästhetische Eingriffe und chemische Kastrationen sind
                typischerweise nicht versichert.
            </p>
        </Section>

        <Section
            eyebrow="Beispielkosten"
            title="Was kann ein Schadenfall kosten?"
            bg="page"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        ca. 1.600 €
                    </p>
                    <p className="text-stone-700 mt-3">
                        Kreuzbandriss beim Hund
                    </p>
                </div>
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        ca. 1.100 €
                    </p>
                    <p className="text-stone-700 mt-3">
                        Darmverschluss bei der Katze
                    </p>
                </div>
            </div>
        </Section>

        <Section eyebrow="Hinweise" title="Prämie und Zusatzschutz.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-3xl">
                <p>
                    Die Prämie richtet sich nach Rasse, Alter des Tieres und
                    gewähltem Versicherungsumfang.
                </p>
                <p>
                    Sinnvolle Ergänzungen sind die{' '}
                    <strong className="text-stone-900">
                        Tierhalter­haftpflicht
                    </strong>{' '}
                    sowie ein{' '}
                    <strong className="text-stone-900">Rechtsschutz</strong> für
                    Fälle, in denen Tiere durch Dritte verletzt werden.
                </p>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Tierkrankenversicherung
