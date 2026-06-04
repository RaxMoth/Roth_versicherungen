import React from 'react'
import PageHero from '../../components/PageHero'
import Section from '../../components/Section'
import { COMPANY, FINANZ, DIHK, IMAGES } from '../../utils/company'

const Impressum: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Impressum"
            title="Impressum."
            subtitle={FINANZ.tagline}
            bgImage={IMAGES.impressum}
        />

        <Section title="Anbieter">
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

        <Section title="Geschäftsführende Gesellschafter" bg="page">
            <p className="text-stone-900 text-lg">{FINANZ.management}</p>
        </Section>

        <Section title="Registereintrag">
            <ul className="space-y-3 text-stone-700 text-lg">
                <li>
                    <strong className="text-stone-900">Registergericht:</strong>{' '}
                    {FINANZ.registry}
                </li>
                <li>
                    <strong className="text-stone-900">Art:</strong>{' '}
                    {FINANZ.type}
                </li>
                <li>
                    <strong className="text-stone-900">
                        Vermittlerregister-Nr.:
                    </strong>{' '}
                    {FINANZ.vermittlerNr}
                </li>
                <li>
                    <strong className="text-stone-900">USt-IdNr.:</strong>{' '}
                    {FINANZ.ustId}
                </li>
            </ul>
        </Section>

        <Section title="Erlaubnis & Aufsicht" bg="page">
            <div className="space-y-5 text-stone-700 leading-relaxed text-lg max-w-3xl">
                <div>
                    <p>
                        <strong className="text-stone-900">
                            Versicherungsvermittlung:
                        </strong>{' '}
                        Erlaubnis nach {FINANZ.erlaubnisVersicherung}.
                    </p>
                    <p className="text-base">
                        Aufsichtsbehörde: {FINANZ.aufsichtVersicherung}
                    </p>
                </div>
                <div>
                    <p>
                        <strong className="text-stone-900">
                            Immobilien- und Finanzvermittlung:
                        </strong>{' '}
                        Erlaubnis nach {FINANZ.erlaubnisFinanz}.
                    </p>
                    <p className="text-base">
                        Aufsichtsbehörde: {FINANZ.aufsichtFinanz}
                    </p>
                </div>
                <div className="pt-4 border-t border-stone-200">
                    <p>
                        <strong className="text-stone-900">{DIHK.name}</strong>
                        <br />
                        {DIHK.street}, {DIHK.city}
                        <br />
                        Tel.: {DIHK.phone}
                        <br />
                        Register:{' '}
                        <a
                            href={`https://${DIHK.register}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-red"
                        >
                            {DIHK.register}
                        </a>
                    </p>
                </div>
            </div>
        </Section>

        <Section title="Verantwortlich für den Inhalt">
            <p className="text-stone-700 text-lg">
                {FINANZ.responsibleEditor} (Anschrift wie oben) gemäß § 18
                Abs. 2 MStV
            </p>
        </Section>

        <Section title="EU-Streitbeilegung" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung bereit:{' '}
                <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red"
                >
                    ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungs­verfahren vor einer Verbraucherschlichtungs­stelle
                teilzunehmen.
            </p>
        </Section>

        <Section title="Haftungs- und Urheberhinweis">
            <div className="space-y-4 text-stone-700 leading-relaxed text-lg max-w-3xl">
                <p>
                    Der Autor übernimmt keinerlei Gewähr für die Aktualität,
                    Korrektheit, Vollständigkeit oder Qualität der
                    bereitgestellten Informationen. Haftungsansprüche gegen
                    den Autor, welche sich auf Schäden materieller oder
                    ideeller Art beziehen, die durch die Nutzung oder
                    Nichtnutzung der dargebotenen Informationen verursacht
                    wurden, sind grundsätzlich ausgeschlossen, sofern nicht
                    vorsätzliches oder grob fahrlässiges Verschulden
                    nachweisbar ist.
                </p>
                <p>
                    Externe Links wurden zum Zeitpunkt der Verlinkung auf
                    rechtswidrige Inhalte überprüft. Für den Inhalt der
                    verlinkten Seiten sind ausschließlich deren Betreiber
                    verantwortlich.
                </p>
                <p>
                    Alle Rechte an den vom Autor selbst erstellten Inhalten
                    bleiben vorbehalten. Eine Vervielfältigung oder Verwendung
                    in anderen elektronischen oder gedruckten Publikationen
                    ist ohne ausdrückliche Zustimmung des Autors nicht
                    gestattet.
                </p>
            </div>
        </Section>
    </>
)

export default Impressum
