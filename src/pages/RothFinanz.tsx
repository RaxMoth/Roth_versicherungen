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
            subtitle="Wir sind Ihr Partner in finanziellen Belangen seit 1970."
            bgImage={IMAGES.finanz}
        />

        <Section eyebrow="Philosophie" title="Mehr als nur Zahlen.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-3xl">
                <p>
                    Wir sind Ihr Partner in finanziellen Belangen{' '}
                    <strong className="text-stone-900">seit 1970</strong>. Bei
                    Roth Finanz verstehen wir, dass Finanzmanagement weit
                    mehr ist als nur Zahlen. Es geht darum, Ihre individuellen
                    Ziele zu verstehen und maßgeschneiderte Lösungen
                    anzubieten, die Ihnen helfen, diese Ziele zu erreichen.
                </p>
                <p>
                    Für alle Arten der Vorsorge helfen wir Ihnen dabei, die
                    richtige Absicherung zu finden.
                </p>
                <p>
                    Unser Engagement gilt stets höchster Fachkompetenz,
                    Transparenz und persönlicher Betreuung. Wir streben
                    danach, langfristige Partnerschaften aufzubauen, indem
                    wir unseren Kunden helfen, finanzielle Sicherheit zu
                    erreichen.
                </p>
                <p>
                    Kontaktieren Sie uns noch heute, um herauszufinden, wie
                    wir Ihnen helfen können, Ihre finanziellen Ziele zu
                    verwirklichen.
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
