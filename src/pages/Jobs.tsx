import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { COMPANY, IMAGES } from '../utils/company'

const tasks = [
    'Kundenberatung und Gestaltung von Versicherungs­verträgen',
    'Schadensbearbeitung – Schwerpunkt Kfz- und Sachschäden',
    'Angebotserstellung',
    'Korrespondenz mit Versicherern',
    'Allgemeine administrative Tätigkeiten',
]

const requirements = [
    'Abgeschlossene Ausbildung als Versicherungs­kaufmann/-frau oder vergleichbare Qualifikation',
    'Mindestens zwei Jahre Berufserfahrung in der Versicherungs­branche',
    'Sicherer Umgang mit Microsoft Office',
    'Gute Englischkenntnisse',
    'Professionelles Auftreten und Kundensensibilität',
    'Selbstständige, leistungs­orientierte Arbeitsweise und Teamfähigkeit',
]

const Jobs: React.FC = () => (
    <>
        <PageHero
            eyebrow="Karriere"
            title="Mitarbeiter (m/w/d) Versicherung & Schadenbearbeitung."
            subtitle="Schwerpunkt Innendienst – Voll- oder Teilzeit. Werden Sie Teil eines Teams mit über 100 Jahren Erfahrung."
            bgImage={IMAGES.jobs}
        />

        <Section eyebrow="Aufgaben" title="Ihr Aufgabenbereich.">
            <ul className="space-y-4 text-stone-700 text-lg max-w-3xl">
                {tasks.map(t => (
                    <li
                        key={t}
                        className="flex gap-4 border-b border-stone-200 pb-4"
                    >
                        <span className="text-brand-red font-bold mt-1">›</span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section eyebrow="Profil" title="Das bringen Sie mit." bg="page">
            <ul className="space-y-4 text-stone-700 text-lg max-w-3xl">
                {requirements.map(r => (
                    <li
                        key={r}
                        className="flex gap-4 border-b border-stone-300 pb-4"
                    >
                        <span className="text-brand-red font-bold mt-1">✓</span>
                        <span>{r}</span>
                    </li>
                ))}
            </ul>
        </Section>

        <Section eyebrow="Bewerbung" title="Wir freuen uns auf Sie.">
            <p className="text-stone-700 leading-relaxed text-lg mb-6 max-w-3xl">
                Wir freuen uns auf Ihre vollständigen Bewerbungs­unterlagen
                inkl. gewünschtem Eintrittstermin und Gehaltsvorstellung per
                E-Mail oder Post.
            </p>
            <div className="bg-brand-page p-8 rounded-md shadow-card inline-block">
                <p className="text-stone-900 leading-relaxed">
                    <strong className="font-serif text-xl text-stone-900">
                        {COMPANY.name}
                    </strong>
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.city}
                    <br />
                    <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-brand-red font-semibold mt-3 inline-block"
                    >
                        {COMPANY.email}
                    </a>
                </p>
            </div>
        </Section>
    </>
)

export default Jobs
