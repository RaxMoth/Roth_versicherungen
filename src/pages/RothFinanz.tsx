import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const RothFinanz: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz"
            title="Ihr Vorsorge­spezialist."
            subtitle="Seit 1970 Ihr Partner in Finanzfragen – mit Fokus auf Vorsorge, Sicherheit und langfristige Partnerschaft."
            bgImage={IMAGES.finanz}
        />

        <Section eyebrow="Philosophie" title="Mehr als nur Zahlen.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-3xl">
                <p>
                    Bei Roth Finanz verstehen wir, dass Finanzmanagement weit
                    mehr ist als nur Zahlen. Es geht darum, Ihre individuellen
                    Ziele zu erkennen und maßgeschneiderte Lösungen rund um
                    alle Arten der Vorsorge zu entwickeln.
                </p>
                <p>
                    Wir setzen auf fachliche Kompetenz, Transparenz und
                    persönlichen Service, um langfristige Partnerschaften zu
                    schaffen, die Ihnen finanzielle Sicherheit ermöglichen.
                </p>
            </div>
        </Section>

        <Section eyebrow="Schwerpunkte" title="Unsere Themen." bg="page">
            <div className="grid md:grid-cols-2 gap-6">
                <Link
                    to="/roth-finanz/altersversorgung"
                    className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                >
                    <h3 className="font-serif text-3xl text-stone-900 mb-4">
                        Altersversorgung
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Betriebliche und private Vorsorgekonzepte – staatlich
                        gefördert und individuell abgestimmt.
                    </p>
                    <p className="mt-6 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Mehr erfahren →
                    </p>
                </Link>
                <Link
                    to="/roth-finanz/sterbegeldversicherung"
                    className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                >
                    <h3 className="font-serif text-3xl text-stone-900 mb-4">
                        Sterbegeldversicherung
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Vorsorge für den Trauerfall – damit Angehörige
                        finanziell entlastet werden.
                    </p>
                    <p className="mt-6 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Mehr erfahren →
                    </p>
                </Link>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default RothFinanz
