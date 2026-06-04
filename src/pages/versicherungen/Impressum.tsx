import React from 'react'
import PageHero from '../../components/PageHero'
import Section from '../../components/Section'
import { COMPANY, VERSICHERUNGEN, DIHK, IMAGES } from '../../utils/company'

const Impressum: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen › Impressum"
            title="Impressum."
            subtitle={VERSICHERUNGEN.tagline}
            bgImage={IMAGES.impressum}
        />

        <Section title="Anbieter">
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

        <Section title="Geschäftsführende Gesellschafter" bg="page">
            <p className="text-stone-900 text-lg">
                {VERSICHERUNGEN.management}
            </p>
        </Section>

        <Section title="Registereintrag">
            <ul className="space-y-3 text-stone-700 text-lg">
                <li>
                    <strong className="text-stone-900">Registergericht:</strong>{' '}
                    {VERSICHERUNGEN.registry}
                </li>
                <li>
                    <strong className="text-stone-900">Art:</strong>{' '}
                    {VERSICHERUNGEN.type}
                </li>
                <li>
                    <strong className="text-stone-900">
                        Vermittlerregister-Nr.:
                    </strong>{' '}
                    {VERSICHERUNGEN.vermittlerNr}
                </li>
                <li>
                    <strong className="text-stone-900">USt-IdNr.:</strong>{' '}
                    {VERSICHERUNGEN.ustId}
                </li>
            </ul>
        </Section>

        <Section title="Aufsichtsbehörde" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                Erlaubnis nach {VERSICHERUNGEN.erlaubnis}. Zuständige
                Aufsichtsbehörde: {VERSICHERUNGEN.aufsicht}.
            </p>
            <p className="mt-4 text-stone-700 text-lg">
                <strong className="text-stone-900">{DIHK.name}</strong>
                <br />
                {DIHK.street}
                <br />
                {DIHK.city}
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
        </Section>

        <Section title="Verbandsmitgliedschaft">
            <p className="text-stone-700 text-lg">
                Mitglied im {VERSICHERUNGEN.verband}.
            </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt" bg="page">
            <p className="text-stone-700 text-lg">
                {VERSICHERUNGEN.responsibleEditor} (Anschrift wie oben) gemäß
                § 18 Abs. 2 MStV
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
