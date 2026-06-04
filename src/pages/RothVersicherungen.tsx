import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const RothVersicherungen: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen"
            title="Ihr Experte für Versicherungen seit 1907."
            subtitle="Mehr als hundert Jahre Erfahrung sind ein guter Anfang."
            bgImage={IMAGES.versicherungen}
        />

        <Section
            eyebrow="Tradition"
            title="Über ein Jahrhundert Versicherungs­kompetenz."
        >
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-3xl">
                <p>
                    Die Geschichte der Roth Versicherungen reicht bis zum
                    Anfang des letzten Jahrhunderts zurück. Damals, im Jahre
                    1907, gründete Hch. Werner XII in Langen ein Unternehmen
                    zur Vermittlung von Versicherungs­leistungen. Im Jahr 1932
                    trat sein Schwiegersohn Fritz Roth sen. in das Unternehmen
                    ein. Seit 1949 firmiert das Unternehmen unter Roth
                    Versicherungen.
                </p>
                <p>
                    Für die Kundinnen und Kunden des Unternehmens bedeutet
                    dies Sicherheit durch Kontinuität und Tradition sowie
                    kompetente Betreuung mit dem Wissen und der Erfahrung aus
                    über einem Jahrhundert Präsenz in der Versicherungs­branche.
                </p>
                <p>
                    Unser Anspruch ist eine langfristige und ergebnisorientierte
                    Beratung, damit Sie mit Roth Versicherungen auf jede
                    Situation optimal vorbereitet sind.
                </p>
            </div>
        </Section>

        <Section eyebrow="Leistungen" title="Unsere Dienstleistungen." bg="page">
            <p className="text-stone-700 text-lg leading-relaxed mb-10 max-w-3xl">
                Unsere Dienstleistungen umfassen das gesamte Spektrum des
                versicherungsrelevanten Risiko-, Vertrags- und
                Schadenmanagements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <Link
                    to="/roth-versicherungen/firmenkunden"
                    className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                >
                    <h3 className="font-serif text-3xl text-stone-900 mb-4">
                        Firmenkunden
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Rückenstärkung für Ihr Unternehmen – von der
                        Risikoanalyse bis zur Cyber-Police.
                    </p>
                    <p className="mt-6 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Mehr erfahren →
                    </p>
                </Link>
                <Link
                    to="/roth-versicherungen/privatkunden"
                    className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                >
                    <h3 className="font-serif text-3xl text-stone-900 mb-4">
                        Privatkunden
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Wir halten Sie auf der richtigen Spur – individuelle
                        Absicherung für jede Lebenslage.
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

export default RothVersicherungen
