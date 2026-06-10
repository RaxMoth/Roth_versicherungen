import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const services = [
    'Altersvorsorge',
    'Sterbegeldversicherung',
    'Berufsunfähigkeits­versicherung',
    'Rechtsschutz­versicherung',
    'Gebäudeversicherung',
    'Haftpflichtversicherung',
    'Hausratversicherung',
    'Kfz-Versicherung',
    'Tierkrankenversicherung',
    'Schmuck- und Kunstversicherung',
    'Unfallversicherung',
    'Vermögens­schadenversicherung',
    'Versicherungen für Auslandsimmobilien und dort befindliche Werte',
    'Versicherungen für Flugzeuge, Yachten und historische Fahrzeuge',
]

const Privatkunden: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen › Privatkunden"
            title="Wir halten Sie auf der richtigen Spur."
            bgImage={IMAGES.privatkunden}
        />

        <Section eyebrow="Beratungsansatz" title="Jeder Mensch ist einzigartig.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Jeder Mensch ist einzigartig und hat eigene Wünsche und
                    Träume für sein Leben. Damit Sie für Ihre Ziele optimal
                    vorsorgen können, nehmen wir uns Zeit für Ihre persönliche
                    Lebenssituation.
                </p>
                <p>
                    Auf dieser Basis ermitteln wir gemeinsam mit Ihnen
                    mögliche Risiken für Ihre Lebensplanung. Anschließend
                    stimmen wir den Versicherungsschutz neutral und
                    unabhängig darauf ab. Wir sagen Ihnen offen, welche
                    Risiken Sie selbst tragen können und welche Sie besser
                    absichern sollten.
                </p>
            </div>
        </Section>

        <Section
            eyebrow="Unser Versicherungsangebot"
            title="Leistungen für Privatkunden."
            bg="page"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {services.map(s => (
                    <div
                        key={s}
                        className="bg-white p-5 rounded-md shadow-card border-l-2 border-brand-red text-stone-900 font-medium"
                    >
                        {s}
                    </div>
                ))}
            </div>
            <p className="mt-10 text-stone-700 text-lg leading-relaxed">
                Selbstverständlich stehen wir Ihnen auch im Schadenfall zur
                Seite.
            </p>
        </Section>

        <Section
            eyebrow="Spezialthema"
            title="Tierkrankenversicherung."
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={IMAGES.tier}
                    alt="Tierkrankenversicherung"
                    className="w-full h-[340px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
                <div>
                    <p className="text-stone-700 text-lg leading-relaxed mb-6">
                        Damit man sich im Ernstfall nur um die Gesundheit des
                        besten Freundes sorgen muss, nicht um mögliche Kosten.
                    </p>
                    <Link
                        to="/roth-versicherungen/privatkunden/tierkrankenversicherung"
                        className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm"
                    >
                        Mehr zur Tierkranken­versicherung →
                    </Link>
                </div>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Privatkunden
