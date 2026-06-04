import React from 'react'
import PageHero from '../../components/PageHero'
import Section from '../../components/Section'
import { FINANZ, IMAGES } from '../../utils/company'

const Datenschutz: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Datenschutz"
            title="Datenschutzerklärung."
            subtitle={`Informationen zur Verarbeitung Ihrer personenbezogenen Daten durch ${FINANZ.short} gemäß DSGVO.`}
            bgImage={IMAGES.datenschutz}
        />

        <Section title="Information zur Verwendung Ihrer Daten">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Versicherungs- und Finanzdaten können sensible Daten
                enthalten. Wir respektieren Ihre Persönlichkeitsrechte. Die
                Verarbeitung Ihrer Daten erfolgt nur mit Ihrer Einwilligung
                zum Vertragsabschluss bzw. zur Vertragserfüllung. Eine
                Weitergabe Ihrer Daten erfolgt nur, wenn dies rechtlich
                notwendig oder für den Vertrag erforderlich ist.
            </p>
        </Section>

        <Section title="Beschwerden" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Wenn Sie mit unseren Dienstleistungen unzufrieden sind, können
                Sie eine Beschwerde bei der Hessischen Datenschutzbeauftragten
                einreichen:
            </p>
            <p className="mt-4 text-stone-900 text-lg">
                Postfach 3163, 65021 Wiesbaden
                <br />
                Tel.: +49 611 1408-0
            </p>
        </Section>

        <Section title="1. Geltungsbereich">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Diese Richtlinie regelt die datenschutzkonforme
                Informationsverarbeitung gemäß DSGVO und Bundesdatenschutz­gesetz
                und gilt für Mitarbeiter, Kunden, Interessenten und
                Dienstleister von {FINANZ.name}.
            </p>
        </Section>

        <Section title="2. Begriffsdefinitionen" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Personenbezogene Daten sind Einzelangaben über persönliche
                oder sachliche Verhältnisse einer natürlichen Person (z. B.
                Name, Adresse, Vertragsdaten). Zu den besonderen Kategorien
                zählen Gesundheits­daten, religiöse Anschauungen und
                wirtschaftliche Verhältnisse.
            </p>
        </Section>

        <Section title="3. Erheben und Verarbeiten">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Die Verarbeitung Ihrer Daten setzt einen ausdrücklichen
                Maklerauftrag und eine dokumentierte Einwilligung voraus. Es
                findet kein Profiling statt; Daten werden nur zu den
                vereinbarten Zwecken verwendet. Nach Vertragsende werden
                Kundendaten unter Beachtung gesetzlicher Aufbewahrungsfristen
                gelöscht.
            </p>
        </Section>

        <Section title="4. Verschwiegenheit der Mitarbeiter" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Alle Mitarbeiterinnen und Mitarbeiter werden bei Eintritt zur
                Verschwiegenheit verpflichtet. Diese Verpflichtung wird
                jährlich aufgefrischt.
            </p>
        </Section>

        <Section title="5. Sicherheits­maßnahmen">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Wir setzen technische und organisatorische Schutzmaßnahmen
                gemäß dem aktuellen Stand der Technik um. Eine Übermittlung
                in Drittländer ist nicht vorgesehen.
            </p>
        </Section>

        <Section title="6. Rechte von Betroffenen" bg="page">
            <ul className="space-y-2 text-stone-700 text-lg max-w-3xl">
                <li>• Auskunft über gespeicherte Daten</li>
                <li>• Berichtigung unrichtiger Daten</li>
                <li>• Widerspruch gegen die Verarbeitung zu Werbezwecken</li>
                <li>
                    • Löschung (soweit rechtliche Grundlagen vorliegen)
                </li>
                <li>• Datenübertragbarkeit</li>
                <li>
                    • Beschwerde bei einer Aufsichtsbehörde
                </li>
            </ul>
        </Section>

        <Section title="7. Datenpannen">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Mitarbeiter sind verpflichtet, Sicherheitsvorfälle
                unverzüglich an den Vorgesetzten oder die Geschäftsleitung zu
                melden, damit die gesetzlichen Meldepflichten erfüllt werden
                können.
            </p>
        </Section>

        <Section title="Cookie-Richtlinie" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Diese Website nutzt ausschließlich technische Cookies. Es
                werden keine Profiling-Cookies eingesetzt.
            </p>
        </Section>
    </>
)

export default Datenschutz
