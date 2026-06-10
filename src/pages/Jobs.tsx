import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { COMPANY, IMAGES } from '../utils/company'

const qualifications = [
    'Versicherungskaufmann/-frau',
    'Kaufmann/-frau für Versicherungen und Finanzen',
    'Fachwirt/in für Versicherungen und Finanzen oder Fachwirt/in für Finanzberatung',
]

const requirements = [
    'Mindestens 2 Jahre Berufserfahrung in der Versicherungsbranche – gerne auch mehr, je nach individuellem Profil.',
    'Gute MS-Office-Kenntnisse',
    'Gute Englischkenntnisse',
    'Souveränes Auftreten, Sensibilität und Professionalität im Umgang mit unseren Kunden',
    'Eigenständiges und leistungsorientiertes Arbeiten sowie Teamfähigkeit',
]

const tasks = [
    'Kundenberatung und Gestaltung von Versicherungsverträgen',
    'Bearbeitung von Schäden (Schwerpunkt Kfz- und Sachschäden)',
    'Angebotserstellung und Umdeckung von Versicherungsverträgen',
    'Kommunikation mit unseren Versicherungsgesellschaften',
    'Erledigung allgemeiner Büroarbeiten',
]

const Jobs: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen › Karriere"
            title="Mitarbeiter (m/w/d) Versicherung & Schadenbearbeitung."
            subtitle="Schwerpunkt Innendienst – Voll- oder Teilzeit."
            bgImage={IMAGES.jobs}
        />

        <Section eyebrow="Ihr Profil" title="Was wir uns wünschen.">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-6">
                Abgeschlossene Ausbildung als:
            </p>
            <ul className="space-y-3 text-stone-700 text-lg max-w-3xl mb-8">
                {qualifications.map(q => (
                    <li
                        key={q}
                        className="flex gap-3 border-b border-stone-200 pb-3"
                    >
                        <span className="text-brand-red font-bold mt-1">✓</span>
                        <span>{q}</span>
                    </li>
                ))}
            </ul>
            <p className="text-stone-700 italic leading-relaxed text-base max-w-4xl mb-10 border-l-2 border-stone-300 pl-5">
                Der Ausbildungsnachweis ist eine gesetzliche Verpflichtung für
                Mitarbeiter mit Kundenkontakt und zudem notwendig, um im
                Interesse unserer Kunden eine kompetente Beratung zu
                gewährleisten. Daher können nur Bewerber/innen berücksichtigt
                werden, die über einen dieser Abschlüsse verfügen.
            </p>
            <ul className="space-y-3 text-stone-700 text-lg max-w-3xl">
                {requirements.map(r => (
                    <li
                        key={r}
                        className="flex gap-3 border-b border-stone-200 pb-3"
                    >
                        <span className="text-brand-red font-bold mt-1">›</span>
                        <span>{r}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section eyebrow="Aufgabengebiet" title="Ihre Aufgaben bei uns." bg="page">
            <ul className="space-y-3 text-stone-700 text-lg max-w-3xl">
                {tasks.map(t => (
                    <li
                        key={t}
                        className="flex gap-3 border-b border-stone-300 pb-3"
                    >
                        <span className="text-brand-red font-bold mt-1">›</span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section eyebrow="Unser Angebot" title="Was wir Ihnen bieten.">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Wir bieten Ihnen eine verantwortungsvolle und
                abwechslungsreiche Tätigkeit in einem engagierten Team –
                wahlweise in Vollzeit oder Teilzeit.
            </p>
        </Section>

        <Section eyebrow="Kontakt" title="Wir freuen uns auf Ihre Bewerbung." bg="page">
            <div className="space-y-5 text-stone-700 leading-relaxed text-lg max-w-4xl">
                <p>
                    Wir freuen uns auf Ihre aussagekräftige Bewerbung mit
                    Angabe Ihres möglichen Eintrittstermins sowie Ihrer
                    Gehaltsvorstellung.
                </p>
                <p>
                    Bitte senden Sie uns Ihre vollständigen
                    Bewerbungsunterlagen (mit Lebenslauf und Zeugnissen) an:
                </p>
            </div>
            <div className="mt-8 bg-white p-8 rounded-md shadow-card inline-block border-l-2 border-brand-red">
                <p className="text-stone-900 leading-relaxed">
                    <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-brand-red font-semibold text-xl"
                    >
                        {COMPANY.email}
                    </a>
                    <br />
                    <span className="text-stone-700">oder</span>
                    <br />
                    <strong className="font-serif text-lg">
                        Roth Versicherungen Maklergesellschaft
                    </strong>
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.city}
                </p>
            </div>
        </Section>
    </>
)

export default Jobs
