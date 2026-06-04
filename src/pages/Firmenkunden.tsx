import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const categories = [
    {
        title: 'Risikomanagement',
        items: [
            'Identifikation und Bewertung firmen­spezifischer Risiken und Lösungen',
            'Überprüfung bestehender Versicherungs­policen',
        ],
    },
    {
        title: 'Vertragsmanagement',
        items: [
            'Gegenüberstellung von bestehendem und benötigtem Versicherungsschutz',
            'Optimierungsvorschläge oder Umstellung von Policen',
            'Erstellung von Angeboten',
            'Platzierung von Deckungskonzepten',
            'Regelmäßige Anpassung an gesetzliche Änderungen und Marktentwicklungen',
        ],
    },
    {
        title: 'Schadenmanagement',
        items: [
            'Dokumentation aller erstattungs­fähigen Kosten',
            'Unterstützung durch Sachverständige bei Bedarf',
            'Vertretung gegenüber dem Versicherer',
            'Schadenquoten­reduzierung durch Regressprüfung',
            'Prüfung der Schadenregulierung',
        ],
    },
]

const Firmenkunden: React.FC = () => (
    <>
        <PageHero
            eyebrow="Firmenkunden"
            title="Rückenstärkung für Ihr Unternehmen."
            subtitle="Als Bindeglied zwischen Ihrem Unternehmen und unseren Versicherungs­partnern bieten wir neutrale, ergebnisorientierte Beratung zur Identifikation und Absicherung Ihrer individuellen Unternehmensrisiken."
            bgImage={IMAGES.firmenkunden}
        />

        <Section
            eyebrow="Leistungsspektrum"
            title="Drei Säulen unseres Mandats."
        >
            <div className="grid md:grid-cols-3 gap-6">
                {categories.map(cat => (
                    <div
                        key={cat.title}
                        className="bg-white p-8 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                    >
                        <h3 className="font-serif text-2xl text-stone-900 mb-5">
                            {cat.title}
                        </h3>
                        <ul className="space-y-3 text-stone-700">
                            {cat.items.map(i => (
                                <li
                                    key={i}
                                    className="flex gap-3 leading-snug text-sm"
                                >
                                    <span className="text-brand-red font-bold mt-0.5">
                                        ›
                                    </span>
                                    <span>{i}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Spezialprodukte" title="Mehr als Standard." bg="page">
            <div className="grid md:grid-cols-3 gap-4">
                {[
                    'All-Risk-Policen',
                    'Mitarbeiter­programme',
                    'Betriebliche Altersvorsorge',
                ].map(item => (
                    <div
                        key={item}
                        className="bg-white p-6 rounded-md shadow-card text-stone-900 font-medium text-center"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <p className="mt-10 text-stone-700 text-lg leading-relaxed max-w-3xl">
                Ob einmaliges Mandat oder fortlaufende Betreuung – wir sind
                flexibel in Bezug auf Häufigkeit und Vergütung
                (erfolgsabhängig, kostenbasiert, Pauschalen oder Mischformen).
            </p>
        </Section>

        <Section eyebrow="Cyber-Risk" title="Schutz vor digitalen Bedrohungen.">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={IMAGES.cyber}
                    alt="Cybersicherheit"
                    className="w-full h-[340px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
                <div>
                    <p className="text-stone-700 text-lg leading-relaxed mb-6">
                        Cyberkriminalität ist längst Alltag. Wir helfen Ihrem
                        Unternehmen, sich gegen die finanziellen Folgen von
                        IT-Risiken abzusichern.
                    </p>
                    <Link
                        to="/roth-versicherungen/firmenkunden/cyber-police"
                        className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm"
                    >
                        Mehr zur Cyber-Police →
                    </Link>
                </div>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Firmenkunden
