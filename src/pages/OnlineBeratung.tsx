import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { IMAGES } from '../utils/company'

const steps = [
    {
        n: '01',
        t: 'Termin anfragen',
        d: 'Sie vereinbaren mit uns telefonisch oder per E-Mail einen Wunschtermin.',
    },
    {
        n: '02',
        t: 'Meeting-Link erhalten',
        d: 'Wir senden Ihnen eine Meeting-ID und einen Link für Ihren persönlichen Beratungstermin.',
    },
    {
        n: '03',
        t: 'Sicher beraten',
        d: 'Zur vereinbarten Zeit treffen wir uns sicher und bequem im Online-Meeting – einfach vom Schreibtisch oder von zuhause aus.',
    },
]

const OnlineBeratung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Online Beratung"
            title="Wir beraten Sie dort, wo Sie sind."
            subtitle="Im Büro, vor Ort oder online – Sie entscheiden, wie und wo wir uns sehen."
            bgImage={IMAGES.online}
        />

        <Section eyebrow="Ablauf" title="So funktioniert die Online-Beratung.">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
                {steps.map(step => (
                    <div
                        key={step.n}
                        className="bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red"
                    >
                        <p className="font-serif text-5xl text-brand-red mb-3">
                            {step.n}
                        </p>
                        <h3 className="font-serif text-xl text-stone-900 mb-3">
                            {step.t}
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-sm">
                            {step.d}
                        </p>
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Jetzt starten" title="Termin vereinbaren." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg mb-8 max-w-3xl">
                Geben Sie einen Wunschtermin ein oder nutzen Sie eine bereits
                von uns erhaltene Meeting-ID.
            </p>
            <Link
                to="/kontakt-anfahrt"
                className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm"
            >
                Termin anfragen →
            </Link>
        </Section>
    </>
)

export default OnlineBeratung
