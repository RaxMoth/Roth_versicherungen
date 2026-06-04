import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { COMPANY, IMAGES } from '../utils/company'

const Impressum: React.FC = () => (
    <>
        <PageHero
            eyebrow="Impressum"
            title="Impressum."
            subtitle="Versicherungen aller Art seit 1907."
            bgImage={IMAGES.impressum}
        />

        <Section title="Anbieter">
            <p className="text-stone-700 leading-relaxed text-lg">
                <strong className="font-serif text-stone-900 text-xl">
                    {COMPANY.name}
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

        <Section title="Geschäftsführung" bg="page">
            <p className="text-stone-900 text-lg">
                Carlo Roth, Norbert Schmidt
            </p>
        </Section>

        <Section title="Registereintrag">
            <ul className="space-y-3 text-stone-700 text-lg">
                <li>
                    <strong className="text-stone-900">Registergericht:</strong>{' '}
                    Offenbach
                </li>
                <li>
                    <strong className="text-stone-900">Registernummer:</strong>{' '}
                    HRB 32064
                </li>
                <li>
                    <strong className="text-stone-900">Art:</strong>{' '}
                    Versicherungsmakler § 93 HGB
                </li>
                <li>
                    <strong className="text-stone-900">
                        Vermittlerregister-Nr.:
                    </strong>{' '}
                    D-KDM3-NPBF2-75
                </li>
                <li>
                    <strong className="text-stone-900">USt-IdNr.:</strong>{' '}
                    44-242-55522
                </li>
            </ul>
        </Section>

        <Section title="Aufsichtsbehörde" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Zugelassener Versicherungsmakler nach § 34d Abs. 1
                Gewerbeordnung. Aufsichtsbehörde: IHK Offenbach.
            </p>
            <p className="mt-4 text-stone-700 text-lg">
                <strong className="text-stone-900">DIHK</strong>
                <br />
                Breite Straße 29, 10178 Berlin
                <br />
                Tel.: 0180 6 00 58 50
            </p>
        </Section>

        <Section title="Verbandsmitgliedschaft">
            <p className="text-stone-700 text-lg">
                Mitglied im Verband Deutscher Versicherungsmakler e. V.
            </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt" bg="page">
            <p className="text-stone-700 text-lg">
                Carlo Roth (Anschrift wie oben)
            </p>
        </Section>

        <Section title="Haftungshinweis">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt
                verlinkter Seiten sind ausschließlich deren Betreiber
                verantwortlich.
            </p>
        </Section>
    </>
)

export default Impressum
