import React from 'react'
import PageHero from '../../components/PageHero'
import Section from '../../components/Section'
import { COMPANY, FINANZ, IMAGES } from '../../utils/company'

const Erstinformation: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Erstinformation"
            title="Erstinformation für den Kunden."
            subtitle="Gemäß § 15 Versicherungs­vermittlungs­verordnung (VersVermV)"
            bgImage={IMAGES.erstinfo}
        />

        <Section eyebrow="Unternehmen" title="Unternehmensdaten.">
            <p className="text-stone-700 leading-relaxed text-lg">
                <strong className="font-serif text-stone-900 text-xl">
                    {FINANZ.name}
                </strong>
                <br />
                {COMPANY.street}
                <br />
                {COMPANY.city}
                <br />
                Tel.: {COMPANY.phone}
                <br />
                Fax: {COMPANY.fax}
                <br />
                E-Mail:{' '}
                <a
                    href={`mailto:${COMPANY.emailFinanz}`}
                    className="text-brand-red"
                >
                    {COMPANY.emailFinanz}
                </a>
            </p>
        </Section>

        <Section eyebrow="Status" title="Rechtlicher Status." bg="page">
            <div className="space-y-5 text-stone-700 leading-relaxed text-lg max-w-3xl">
                <p>
                    Wir sind als Assekuranz-Versicherungsmakler nach{' '}
                    {FINANZ.erlaubnisVersicherung} sowie als Immobilien- und
                    Finanzmakler nach {FINANZ.erlaubnisFinanz} zugelassen.
                </p>
                <p>
                    <strong className="text-stone-900">Aufsichts­behörden:</strong>
                    <br />
                    {FINANZ.aufsichtVersicherung} (Versicherungs­vermittlung)
                    <br />
                    {FINANZ.aufsichtFinanz} (Immobilien- und Finanz­vermittlung)
                </p>
                <p>
                    Die Eintragung kann unter{' '}
                    <a
                        href="https://www.vermittlerregister.info"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red"
                    >
                        www.vermittlerregister.info
                    </a>{' '}
                    überprüft werden.
                </p>
                <p>
                    <strong>Registernummer:</strong> {FINANZ.vermittlerNr}
                </p>
            </div>
        </Section>

        <Section eyebrow="Vergütung" title="Wie wir vergütet werden.">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Die Vergütung – Courtage genannt – für unsere Beratungs- und
                Vermittlungstätigkeit erhalten wir in der Regel von den
                Versicherungs­gesellschaften als Bestandteil der
                Versicherungsprämie. Bei Nettoprodukten sind im Beitrag keine
                Courtagen einkalkuliert; in diesem Fall vereinbaren wir die
                Vergütung gesondert mit Ihnen. Sonstige Zuwendungen erhalten
                wir nicht.
            </p>
        </Section>

        <Section
            eyebrow="Beteiligungen"
            title="Beteiligungs­verhältnisse."
            bg="page"
        >
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Weder wir noch unsere Gesellschafter halten eine unmittelbare
                oder mittelbare Beteiligung von über 10 % an den Stimmrechten
                oder am Kapital eines Versicherungs­unternehmens. Umgekehrt
                halten auch keine Versicherungs­gesellschaften vergleichbare
                Beteiligungen an uns.
            </p>
        </Section>

        <Section eyebrow="Streitbeilegung" title="Schlichtungsstellen.">
            <ul className="space-y-5 text-stone-700 max-w-3xl">
                <li>
                    <strong className="text-stone-900">
                        Versicherungs­ombudsmann e. V.
                    </strong>
                    <br />
                    Postfach 08 06 22, 10006 Berlin
                </li>
                <li>
                    <strong className="text-stone-900">
                        EU-Plattform zur Online-Streitbeilegung
                    </strong>
                    <br />
                    <a
                        href="https://webgate.ec.europa.eu/odr/main/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red"
                    >
                        https://webgate.ec.europa.eu/odr/main/
                    </a>
                </li>
            </ul>
            <p className="mt-6 text-stone-700 text-lg max-w-3xl">
                Beschwerden können auch direkt an uns gerichtet werden:{' '}
                <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-brand-red"
                >
                    {COMPANY.email}
                </a>{' '}
                · {COMPANY.phone}
            </p>
        </Section>

        <Section eyebrow="ESG" title="Hinweis zur Nachhaltigkeit." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Wir beraten unsere Mandanten auf Wunsch zu nachhaltigen
                Anlagen, insbesondere ESG-konformen Investmentfonds im Rahmen
                von Versicherungsprodukten. Die Vergütung unterscheidet sich
                dabei nicht von konventionellen Produkten.
            </p>
        </Section>
    </>
)

export default Erstinformation
