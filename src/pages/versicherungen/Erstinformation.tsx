import React from 'react'
import PageHero from '../../components/PageHero'
import Section from '../../components/Section'
import { COMPANY, VERSICHERUNGEN, IMAGES } from '../../utils/company'

const Erstinformation: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen › Erstinformation"
            title="Erstinformation für den Kunden."
            subtitle="Gemäß § 15 Versicherungs­vermittlungs­verordnung (VersVermV)"
            bgImage={IMAGES.erstinfo}
        />

        <Section eyebrow="Unternehmen" title="Unternehmensdaten.">
            <p className="text-stone-700 leading-relaxed text-lg">
                <strong className="font-serif text-stone-900 text-xl">
                    {VERSICHERUNGEN.name}
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
                    href={`mailto:${COMPANY.email}`}
                    className="text-brand-red"
                >
                    {COMPANY.email}
                </a>
            </p>
        </Section>

        <Section eyebrow="Status" title="Rechtlicher Status." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Wir sind als Versicherungs­makler nach {VERSICHERUNGEN.erlaubnis}{' '}
                bei der zuständigen IHK zugelassen und in das
                Vermittlerregister der DIHK eingetragen. Die Eintragung kann
                unter{' '}
                <a
                    href="https://www.vermittlerregister.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red"
                >
                    www.vermittlerregister.info
                </a>{' '}
                oder telefonisch unter (0180) 6 00 58 50 überprüft werden.
            </p>
            <p className="mt-4 text-stone-900 text-lg">
                <strong>Registernummer:</strong> {VERSICHERUNGEN.vermittlerNr}
            </p>
        </Section>

        <Section eyebrow="Vergütung" title="Wie wir vergütet werden.">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Als Versicherungs­makler erhalten wir – wie marktüblich – von
                den Versicherungs­gesellschaften eine Courtage. Diese ist
                Teil der Versicherungsprämie. Bei sogenannten Nettoprodukten
                sind im Beitrag keine Courtagen einkalkuliert; in diesem Fall
                vereinbaren wir die Vergütung gesondert mit Ihnen. Sonstige
                Zuwendungen erhalten wir nicht.
            </p>
        </Section>

        <Section
            eyebrow="Beteiligungen"
            title="Beteiligungs­verhältnisse."
            bg="page"
        >
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Weder wir noch unsere Gesellschafter halten eine
                unmittelbare oder mittelbare Beteiligung von über 10 % an
                den Stimmrechten oder am Kapital eines Versicherungs­unter­nehmens.
                Umgekehrt halten auch keine Versicherungs­gesellschaften
                vergleichbare Beteiligungen an uns.
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
                        Ombudsmann Private Kranken- und Pflegeversicherung
                    </strong>
                    <br />
                    Postfach 06 02 22, 10052 Berlin
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
                Im Rahmen unserer Beratung berücksichtigen wir auf Wunsch
                Nachhaltigkeits­faktoren in Anlageentscheidungen (ESG-konforme
                Investmentfonds). Die Vergütungen unterscheiden sich dabei
                nicht von denen konventioneller Produkte.
            </p>
        </Section>
    </>
)

export default Erstinformation
