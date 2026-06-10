import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const services = [
    {
        title: 'Betreuung bestehender Versorgungswerke',
        text: 'Antworten auf Fragen, die in einem Unternehmen hausintern nicht mit letzter Sicherheit geklärt werden können und die sich durch ständigen legislativen Wandel sowie systemimmanent ergeben.',
    },
    {
        title: 'Optimierung bestehender Versorgungswerke',
        text: 'Aufzeigen von Schwachpunkten und Handlungsspielräumen bei Versorgungswerken, die häufig vor vielen Jahren eingerichtet und in der Zwischenzeit nicht wesentlich verändert worden sind.',
    },
    {
        title: 'Individuelle Altersvorsorge',
        text: 'Individuelle und attraktive Lösungen für Unternehmen und leitende Angestellte unter Beachtung der Rechtsform des Unternehmens, der Beteiligungsverhältnisse, eventueller Ansprüche an die gesetzliche Rentenversicherung und der sonstigen persönlichen Verhältnisse.',
    },
    {
        title: 'Beratung über staatlich geförderte Altersversorgungsmodelle',
        text: '',
    },
    {
        title: 'Beratung und Absicherung',
        text: '',
    },
    {
        title: 'Mitarbeiterfinanzierte Versorgungskonzepte',
        text: '',
    },
]

const Altersversorgung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Altersversorgung"
            title="Altersvorsorge – heute für morgen vorsorgen."
            bgImage={IMAGES.altersversorgung}
        />

        <Section eyebrow="Einführung" title="Vorsorge ist Vertrauenssache.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Ein spezieller Aspekt unserer Dienstleistungen deckt die
                    Beratung und Vermittlung von betrieblichen oder privaten
                    Versorgungsmaßnahmen ab. Wir übernehmen zudem das
                    Management von Unterstützungskassen sowie die Beratung im
                    Zusammenhang mit der Einführung von betrieblichen
                    Versorgungsmaßnahmen.
                </p>
                <p>
                    Daneben erarbeiten wir Konzepte, die einen
                    Interessenausgleich von Arbeitnehmern und Unternehmen
                    gewährleisten. So erhalten Arbeitnehmer zusätzliche
                    Leistungen, während die Belastungen des Unternehmens in
                    jeder Hinsicht vertretbar bleiben.
                </p>
            </div>
        </Section>

        <Section eyebrow="Unsere Leistungen" title="Was wir für Sie tun." bg="page">
            <div className="grid md:grid-cols-2 gap-6">
                {services.map(s => (
                    <div
                        key={s.title}
                        className="bg-white p-8 rounded-md shadow-card border-l-2 border-brand-red"
                    >
                        <h3 className="font-serif text-xl text-stone-900 mb-3">
                            {s.title}
                        </h3>
                        {s.text && (
                            <p className="text-stone-700 leading-relaxed">
                                {s.text}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Altersversorgung
