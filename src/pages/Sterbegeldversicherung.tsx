import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const Sterbegeldversicherung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Sterbegeldversicherung"
            title="Vorsorge mit Würde."
            subtitle="Der Tod eines Angehörigen ist für die Hinterbliebenen traurig genug – wir helfen, finanzielle Belastungen zu vermeiden."
            bgImage={IMAGES.sterbegeld}
        />

        <Section
            eyebrow="Warum?"
            title="Warum eine Sterbegeld­versicherung?"
        >
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Bestattungskosten sind häufig höher als gedacht. Die
                Sterbegeld­versicherung deckt typischerweise Kosten zwischen
                5.000 und 10.000 Euro ab – damit für die Hinterbliebenen weder
                die organisatorische noch die finanzielle Last allein bleibt.
            </p>
        </Section>

        <Section
            eyebrow="Kostenbeispiele"
            title="Beispielhafte Bestattungs­kosten."
            bg="page"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        ab ca. 2.060 €
                    </p>
                    <p className="text-stone-700 mt-3">
                        für eine einfache Bestattung
                    </p>
                </div>
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        bis ca. 11.660 €
                    </p>
                    <p className="text-stone-700 mt-3">
                        für eine aufwändige Variante
                    </p>
                </div>
            </div>
        </Section>

        <Section eyebrow="Eckpunkte" title="Wichtige Bestandteile.">
            <ul className="space-y-4 text-stone-700 text-lg max-w-3xl">
                {[
                    'Versicherungssummen bis 20.000 € möglich',
                    'Eintrittsalter üblicherweise zwischen 45 und 75 Jahren',
                    'Beitragszahlung zeitlich begrenzt oder lebenslang',
                    'Oft ohne Gesundheitsprüfung, jedoch mit Wartezeiten',
                    'Leistungen werden erbschafts- und einkommensteuerfrei ausgezahlt',
                ].map(item => (
                    <li
                        key={item}
                        className="flex gap-4 border-b border-stone-200 pb-4"
                    >
                        <span className="text-brand-red font-bold mt-1">✓</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-8 text-stone-500 italic max-w-3xl">
                Manche Anbieter offerieren zusätzlich „aktive Unterstützung im
                Trauerfall" durch externe Dienstleister – eine spürbare
                Entlastung für die Angehörigen.
            </p>
        </Section>

        <CallToAction />
    </>
)

export default Sterbegeldversicherung
