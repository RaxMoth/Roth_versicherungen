import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const categories = [
    {
        title: 'Risiko-Management',
        items: [
            'Suche und Bewertung individueller Unternehmensrisiken und deren Lösung',
            'Überprüfung bestehender Policen',
        ],
    },
    {
        title: 'Vertragsmanagement',
        items: [
            'Soll-Ist-Vergleich bestehender Versicherungspolicen',
            'Optimierungsempfehlungen oder Neuordnung bestehender Policen',
            'Erstellung von Angeboten',
            'Platzierung von Deckungskonzepten',
            'Regelmäßige Anpassung der Policen nach gesetzlichen Änderungen, aufgrund aktueller Marktentwicklungen oder bei Einführung neuer Produkte',
        ],
    },
    {
        title: 'Schadenmanagement',
        items: [
            'Erfassung aller schadensersatzpflichtigen Kosten',
            'Bei Bedarf Unterstützung durch geeignete Sachverständige',
            'Interessenvertretung gegenüber dem Versicherer',
            'Entlastung der Schadensquote durch Prüfung der Regressfähigkeit',
            'Prüfung der Schadenabrechnung',
        ],
    },
]

const specialProducts = [
    'Allgefahren-Policen',
    'Mitarbeiterprogramme',
    'Betriebliche Altersvorsorge',
]

const Firmenkunden: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen › Firmenkunden"
            title="Rückenstärkung für Ihr Unternehmen."
            subtitle="Außergewöhnliche Risiken erfordern außergewöhnliche Lösungen."
            bgImage={IMAGES.firmenkunden}
        />

        <Section eyebrow="Beratungsansatz" title="Die Schnittstelle zwischen Ihnen und Ihren Versicherern.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Außergewöhnliche Risiken erfordern außergewöhnliche
                    Lösungen. Wir sind die Schnittstelle zwischen Ihnen und
                    unseren Versicherungspartnern. Unsere neutrale und
                    ergebnisorientierte Beratung zeigt Ihnen die Möglichkeiten
                    und Wege zur Absicherung der individuellen Risiken Ihres
                    Unternehmens auf. So können Sie fundiert entscheiden,
                    welche unserer Leistungen Sie in Anspruch nehmen möchten.
                </p>
                <p>
                    Gemeinsam mit Ihnen entscheiden wir über Art und Umfang
                    unserer Zusammenarbeit:{' '}
                    <strong className="text-stone-900">
                        einmalig oder fortlaufend
                    </strong>
                    . Ebenso stimmen wir mit Ihnen die Art der Vergütung ab:
                    erfolgsabhängig, aufwandsbezogen oder pauschal auf
                    Honorar- oder Courtagebasis. Selbstverständlich ist auch
                    eine Kombination der Systeme möglich.
                </p>
            </div>
        </Section>

        <Section
            eyebrow="Leistungsspektrum"
            title="Drei Säulen unseres Mandats."
            bg="page"
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

        <Section eyebrow="Spezialprodukte" title="Eine Auswahl an Spezialprodukten.">
            <div className="grid md:grid-cols-3 gap-4">
                {specialProducts.map(item => (
                    <div
                        key={item}
                        className="bg-white p-6 rounded-md shadow-card text-stone-900 font-medium text-center border-l-2 border-brand-red"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Cyber-Risk" title="Schutz vor digitalen Bedrohungen." bg="page">
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
