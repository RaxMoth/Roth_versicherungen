import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { IMAGES } from '../utils/company'

const features = [
    {
        title: 'Schaden melden',
        text: 'Schnell und unkompliziert einen Schaden melden. Einfach eine Sprachnachricht, Fotos oder ein Video aufnehmen und an uns senden. So können Sie zum Beispiel am Unfallort mit dem Unfallgegner ein Sprachprotokoll aufnehmen – ganz unkompliziert. Und der Schadenort wird gleich mitgeliefert.',
    },
    {
        title: 'Policen prüfen lassen',
        text: 'Uns beauftragen, eine Rechnung oder Police zu prüfen – egal, ob sie über uns abgeschlossen wurde oder nicht. Einfach abfotografieren und einschicken. Wir melden uns – garantiert.',
    },
    {
        title: 'Push-Nachrichten',
        text: 'Push-Nachrichten von uns erhalten, mit denen wir Sie über Neuigkeiten, Wissenswertes oder wichtige Änderungen informieren.',
    },
    {
        title: 'Mobile Landing-Pages',
        text: 'Jederzeit mobil auf die große Auswahl an Landingpages zugreifen, die wir Ihnen zur Verfügung stellen.',
    },
    {
        title: 'Beratung anfordern',
        text: 'Und natürlich ganz unkompliziert eine Beratung bei uns anfordern – ein Klick und wir melden uns bei Ihnen!',
    },
    {
        title: 'Direktkontakt',
        text: 'Uns jederzeit über die Kontaktdaten erreichen.',
    },
]

const ServiceApp: React.FC = () => (
    <>
        <PageHero
            eyebrow="Service App"
            title="ServiceApp."
            subtitle="In Zusammenarbeit mit der VEMA Versicherungs-Makler-Genossenschaft eG haben wir eine Service-App entwickelt."
            bgImage={IMAGES.serviceapp}
        />

        <Section eyebrow="Mit der App können Sie" title="Was kann die App?">
            <div className="grid md:grid-cols-2 gap-6">
                {features.map(f => (
                    <div
                        key={f.title}
                        className="bg-white p-6 rounded-md shadow-card border-l-2 border-brand-red"
                    >
                        <h3 className="font-serif text-xl text-stone-900 mb-3">
                            {f.title}
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-[15px]">
                            {f.text}
                        </p>
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Anmeldung" title="Installation und Login." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg mb-6 max-w-3xl">
                Bitte suchen Sie in beiden Stores unter dem Stichwort{' '}
                <strong className="text-stone-900">VEMA MaklerApp</strong> und
                geben Sie den Code bzw. Code und Benutzernamen ein. Bitte
                achten Sie auf Groß- und Kleinschreibung. Nach der
                Installation müssen Sie sich einmalig anmelden.
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
