import { PageHero, Section } from '@/components'
import { IMAGES } from '@/utils/company'
import { VERSICHERUNGEN_LEGAL, DATENSCHUTZ_STRINGS } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Datenschutz = () => {
    usePageMeta({
        title: `Datenschutz – ${VERSICHERUNGEN_LEGAL.short}`,
        description: `Datenschutzerklärung der ${VERSICHERUNGEN_LEGAL.name} gemäß DSGVO.`,
    })
    const v = VERSICHERUNGEN_LEGAL
    const s = DATENSCHUTZ_STRINGS

    return (
        <>
            <PageHero
                eyebrow="Roth Versicherungen › Datenschutz"
                title="Datenschutzerklärung."
                subtitle={`Informationen zur Verarbeitung Ihrer personenbezogenen Daten durch ${v.short} gemäß DSGVO.`}
                bgImage={IMAGES.datenschutz}
            />

            <Section title="Information zur Verwendung Ihrer Daten">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Versicherungsdaten sind sensible Daten. Wir wahren Ihre
                    Persönlichkeits­rechte. Daten werden nur übermittelt,
                    wenn eine rechtliche Notwendigkeit besteht oder dies für
                    den Versicherungs­vertrag erforderlich ist.
                </p>
            </Section>

            <Section title="1. Geltungsbereich" bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Diese Richtlinie basiert auf der Europäischen
                    Datenschutz-Grundverordnung (DS-GVO) sowie dem
                    Bundesdatenschutz­gesetz und gilt für Mitarbeiter, Kunden,
                    Interessenten und Dienstleister von {v.name}.
                </p>
            </Section>

            <Section title="2. Begriffsdefinitionen">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Personenbezogene Daten umfassen unter anderem Name,
                    Vorname, Geburtstag, Adressdaten und Vertragsdaten.
                    Besondere Kategorien beinhalten Gesundheit und
                    wirtschaftliche Verhältnisse.
                </p>
            </Section>

            <Section title="3. Erheben und Speichern" bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Die Verarbeitung erfolgt auf Grundlage des
                    Makler­auftrages und Ihrer schriftlichen Einwilligung.
                    Profiling findet in unserem Unternehmen nicht statt.
                </p>
            </Section>

            <Section title="4. Vertraulichkeit">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Unsere Mitarbeiterinnen und Mitarbeiter sind zur
                    Verschwiegenheit verpflichtet.
                </p>
            </Section>

            <Section title="5. Sicherheit" bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Wir treffen technische und organisatorische Maßnahmen
                    entsprechend dem aktuellen Stand der Technik, um Ihre
                    Daten gegen Verlust, Zerstörung, Zugriff, Veränderung
                    oder Verbreitung durch Unbefugte zu schützen.
                </p>
            </Section>

            <Section title="6. Rechte von Betroffenen">
                <ul className="space-y-2 text-stone-700 text-lg max-w-3xl">
                    {s.rightsItems.map(r => (
                        <li key={r}>• {r}</li>
                    ))}
                </ul>
            </Section>

            <Section title="7. Datenpannen" bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Verstöße werden dem Datenschutzbeauftragten unverzüglich
                    gemeldet, um den gesetzlichen Meldepflichten
                    nachzukommen.
                </p>
            </Section>

            <Section title="Beschwerdeverfahren">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Beschwerden können bei der {s.hessischeBeauftragte.name}{' '}
                    eingereicht werden ({s.hessischeBeauftragte.street},{' '}
                    {s.hessischeBeauftragte.city}, Tel.:{' '}
                    {s.hessischeBeauftragte.phone}).
                </p>
            </Section>

            <Section title="Cookie-Richtlinie" bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    {s.cookies}
                </p>
            </Section>
        </>
    )
}

export default Datenschutz
