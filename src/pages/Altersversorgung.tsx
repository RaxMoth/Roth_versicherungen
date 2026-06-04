import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const services = [
    'Betreuung bestehender Versorgungswerke',
    'Optimierung bestehender Versorgungswerke',
    'Individuelle Altersvorsorge',
    'Beratung über staatlich geförderte Altersversorgungsmodelle',
    'Beratung und Absicherung',
    'Mitarbeiterfinanzierte Versorgungskonzepte',
]

const Altersversorgung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Altersversorgung"
            title="Sorgenfrei in die Zukunft."
            subtitle="Beratung und Vermittlung von betrieblichen oder privaten Versorgungs­maßnahmen sowie Management von Unterstützungskassen."
            bgImage={IMAGES.altersversorgung}
        />

        <Section eyebrow="Leistungen" title="Was wir für Sie tun.">
            <div className="grid md:grid-cols-2 gap-4">
                {services.map(s => (
                    <div
                        key={s}
                        className="bg-white border-l-2 border-brand-red shadow-card p-6 text-stone-900 font-medium rounded-md"
                    >
                        {s}
                    </div>
                ))}
            </div>
        </Section>

        <Section
            eyebrow="Konzept"
            title="Interessenausgleich zwischen Mitarbeiter und Unternehmen."
            bg="page"
        >
            <p className="text-stone-700 text-lg leading-relaxed max-w-3xl">
                Wir entwickeln Konzepte, welche einen Interessenausgleich von
                Arbeitnehmern und Unternehmen gewährleisten: Mitarbeiter
                erhalten zusätzliche Leistungen, während die Belastung des
                Unternehmens vertretbar bleibt.
            </p>
        </Section>

        <CallToAction />
    </>
)

export default Altersversorgung
