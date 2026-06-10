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
            title="Mehr als hundert Jahre Erfahrung sind ein guter Anfang."
            bgImage={IMAGES.versicherungen}
        />

        <Section
            eyebrow="Tradition"
            title="Über ein Jahrhundert Versicherungs­kompetenz."
        >
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Die Geschichte der Roth Versicherungen reicht bis zum
                    Anfang des letzten Jahrhunderts zurück.
                </p>
                <p>
                    Damals, im Jahre 1907, gründete Hch. Werner XII in Langen
                    ein Unternehmen zur Vermittlung von
                    Versicherungsleistungen.
                </p>
                <p>
                    Im Jahr 1932 trat sein Schwiegersohn Fritz Roth sen. in
                    das Unternehmen ein. Seit 1949 firmiert das Unternehmen
                    unter Roth Versicherungen. Es wurde stets von einem
                    Mitglied der Familie Roth geführt. Heute leitet{' '}
                    <strong className="text-stone-900">Carlo Roth</strong> das
                    Unternehmen in vierter Generation.
                </p>
                <p>
                    Für die Kundinnen und Kunden des Unternehmens bedeutet
                    dies Sicherheit durch Kontinuität und Tradition sowie
                    kompetente Betreuung mit dem Wissen und der Erfahrung aus
                    über einem Jahrhundert Präsenz in der
                    Versicherungsbranche.
                </p>
                <p>
                    Unser Anspruch ist eine langfristige und
                    ergebnisorientierte Beratung, damit Sie mit Roth
                    Versicherungen auf jede Situation optimal vorbereitet
                    sind. Wir freuen uns deshalb sehr, dass viele unserer
                    Kundinnen und Kunden bereits seit Generationen mit Roth
                    Versicherungen zusammenarbeiten. Unsere Dienstleistungen
                    umfassen das gesamte Spektrum des versicherungsrelevanten
                    Risiko-, Vertrags- und Schadenmanagements.
                </p>
            </div>
        </Section>

        <Section
            eyebrow="Historisches Archiv"
            title="Roth Versicherungen früher."
            bg="page"
        >
            <div className="grid md:grid-cols-2 gap-8">
                <img
                    src={IMAGES.versicherungen}
                    alt="Historisches Foto des Roth-Büros"
                    className="w-full h-[360px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
                <img
                    src={IMAGES.versicherungenContent}
                    alt="Historische Roth Versicherungen Renault 4 Firmenfahrzeuge"
                    className="w-full h-[360px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
            </div>
        </Section>

        <Section eyebrow="Leistungen" title="Unsere Dienstleistungen.">
            <div className="grid md:grid-cols-2 gap-6">
                <Link
                    to="/roth-versicherungen/firmenkunden"
                    className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                >
                    <h3 className="font-serif text-3xl text-stone-900 mb-4">
                        Firmenkunden
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Als Firmenkunde profitieren Sie von den Vorteilen
                        unserer operativen und strategischen Risikoerfassung.
                        Darüber hinaus bieten wir Ihnen spezielle
                        Branchenlösungen sowie eine breite Produkt- und
                        Leistungsvielfalt.
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
                        Für Privatkunden und Freiberufler entwickeln wir
                        individuelle Konzepte zur Risikovorsorge. Wir beraten
                        unabhängig und neutral. Dabei wägen wir stets ab, ob
                        Risiken von unseren Kunden selbst getragen werden
                        können oder auf einen Versicherer übertragen werden
                        sollten.
                    </p>
                    <p className="mt-6 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Mehr erfahren →
                    </p>
                </Link>
            </div>
            <p className="mt-10 text-stone-700 text-lg leading-relaxed italic max-w-3xl">
                Überzeugen Sie sich selbst und vereinbaren Sie einen
                Beratungstermin mit uns.
            </p>
        </Section>

        <CallToAction />
    </>
)

export default RothVersicherungen
