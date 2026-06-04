import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { IMAGES } from '../utils/company'

const features = [
    'Schadenmeldungen mit Sprachnachricht, Foto oder Video schnell und einfach an uns senden – Standortdaten werden automatisch ergänzt.',
    'Rechnungen oder Versicherungspolicen unabhängig vom Herkunftsversicherer einfach fotografieren und zur Prüfung einreichen.',
    'Push-Mitteilungen zu Neuigkeiten, hilfreichen Informationen und wichtigen Updates erhalten.',
    'Eine breite Auswahl an Landing-Pages jederzeit mobil aufrufen.',
    'Mit einem Klick eine Beratung anfordern – wir kontaktieren Sie.',
    'Jederzeit über die hinterlegten Kontaktdaten mit uns in Verbindung treten.',
]

const ServiceApp: React.FC = () => (
    <>
        <PageHero
            eyebrow="Service App"
            title="Roth in Ihrer Tasche."
            subtitle="In Kooperation mit der VEMA Versicherungs-Makler-Genossenschaft eG bieten wir Ihnen eine moderne ServiceApp."
            bgImage={IMAGES.serviceapp}
        />

        <Section eyebrow="Funktionen" title="Was kann die App?">
            <ul className="space-y-4 text-stone-700 text-lg max-w-3xl">
                {features.map(f => (
                    <li
                        key={f}
                        className="flex gap-4 border-b border-stone-200 pb-4"
                    >
                        <span className="text-brand-red font-bold mt-1">›</span>
                        <span>{f}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section eyebrow="Anmeldung" title="Installation und Login." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg mb-6 max-w-3xl">
                Suchen Sie im App Store oder Google Play Store nach{' '}
                <strong className="text-stone-900">„VEMA MaklerApp"</strong>.
                Anschließend geben Sie Benutzernamen und Code ein – bitte
                achten Sie auf Groß-/Kleinschreibung.
            </p>
            <div className="bg-white p-8 rounded-md shadow-card border-l-2 border-brand-red inline-block">
                <p className="text-stone-900 text-lg leading-relaxed">
                    <strong className="text-stone-900">Benutzername:</strong>{' '}
                    VEMA
                    <br />
                    <strong className="text-stone-900">Code:</strong> MTM0fA
                </p>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
                <a
                    href="https://apps.apple.com/de/app/vema-maklerapp/id1054211833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-900 text-white px-6 py-4 rounded-sm hover:bg-stone-800 transition font-semibold"
                >
                    App Store
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=de.vema.maklerapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-900 text-white px-6 py-4 rounded-sm hover:bg-stone-800 transition font-semibold"
                >
                    Google Play
                </a>
            </div>
        </Section>
    </>
)

export default ServiceApp
