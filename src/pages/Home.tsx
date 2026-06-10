import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const services = [
    {
        title: 'Privatkunden',
        text: 'Neutrale Beratung rund um Altersvorsorge, Haftpflicht, Kfz, Hausrat und mehr.',
        to: '/roth-versicherungen/privatkunden',
    },
    {
        title: 'Firmenkunden',
        text: 'Maßgeschneiderter Schutz für Unternehmen – vom Risikomanagement bis zur Cyber-Police.',
        to: '/roth-versicherungen/firmenkunden',
    },
    {
        title: 'Altersversorgung',
        text: 'Betriebliche und private Vorsorge­konzepte – staatlich gefördert und individuell abgestimmt.',
        to: '/roth-finanz/altersversorgung',
    },
    {
        title: 'Online Beratung',
        text: 'Sicheres Video-Meeting bequem von zuhause oder unterwegs – wir kommen zu Ihnen.',
        to: '/online-beratung',
    },
]

const trust = [
    { value: 'seit 1907', label: 'Roth Versicherungen' },
    { value: 'seit 1970', label: 'Roth Finanz' },
    { value: '4. Generation', label: 'Familienbetrieb' },
    { value: 'unabhängig', label: 'neutral & ungebunden' },
]

const Home: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen & Roth Finanz"
            title="Ihr Versicherungs- und Finanzmakler in Langen."
            subtitle="Die Zahl der Versicherer und das Angebot an Versicherungsleistungen sind so vielfältig, dass es nicht einfach ist, sich zurechtzufinden und abzuschätzen, ob alle Risiken ausreichend abgedeckt sind."
            bgImage={IMAGES.versicherungen}
            height="tall"
        />

        <section
            className="bg-white border-b border-brand-line"
            aria-label="Auf einen Blick"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 px-6">
                {trust.map((t, i) => (
                    <div
                        key={t.label}
                        className={`py-8 text-center ${
                            i < trust.length - 1
                                ? 'md:border-r border-brand-line'
                                : ''
                        }`}
                    >
                        <p className="font-serif text-2xl md:text-3xl text-stone-900">
                            {t.value}
                        </p>
                        <p className="text-sm text-stone-600 mt-2">{t.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <Section
            eyebrow="Über uns"
            title="Wir sind Ihr roter Faden in diesem Labyrinth."
        >
            <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed max-w-4xl">
                <p>
                    Wir sind Ihr roter Faden in diesem Labyrinth. Der rote
                    Faden der Ariadne ist sprichwörtlich ein Hilfsmittel, um
                    sich in schwierigen Situationen zurechtzufinden. Und die
                    entstehen immer dann, wenn es darum geht, den passenden
                    und umfassenden Versicherungsschutz zu finden oder einen
                    Schaden zu regulieren.
                </p>
                <p>
                    Als Experten für Versicherungen und Finanzdienstleistungen
                    engagieren wir uns{' '}
                    <strong className="text-stone-900">
                        seit 1907 bzw. 1970
                    </strong>{' '}
                    für Unternehmer, Unternehmen und Privatkunden. Unser
                    Anspruch ist eine langfristige und ergebnisorientierte
                    Beratung, damit Sie auf jede Situation optimal vorbereitet
                    sind.
                </p>
                <p>
                    Unsere Dienstleistungen umfassen das gesamte Spektrum des
                    versicherungsrelevanten Risiko-, Vertrags- und
                    Schadenmanagements.
                </p>
            </div>
        </Section>

        <Section
            eyebrow="Beratungsfelder"
            title="Worauf können Sie zählen?"
            bg="page"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map(s => (
                    <Link
                        to={s.to}
                        key={s.title}
                        className="group bg-white p-7 rounded-md shadow-card hover:shadow-card-hover transition-all border-t-[3px] border-brand-red"
                    >
                        <h3 className="font-serif text-xl text-stone-900 mb-3">
                            {s.title}
                        </h3>
                        <p className="text-stone-700 leading-relaxed text-[15px]">
                            {s.text}
                        </p>
                        <p className="mt-5 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                            Mehr erfahren →
                        </p>
                    </Link>
                ))}
            </div>
        </Section>

        <Section eyebrow="Vor Ort" title="Hier finden Sie uns.">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={IMAGES.home}
                    alt="SO NAH. SO GUT. SO LANGEN. Initiative"
                    className="w-64 h-auto"
                    loading="lazy"
                />
                <div className="space-y-4 text-stone-700 text-[17px] leading-relaxed">
                    <p>
                        Wir sind für unsere Kundinnen und Kunden vor Ort in
                        Langen und unterstützen die Initiative{' '}
                        <strong className="text-stone-900">
                            SO NAH. SO GUT. SO LANGEN.
                        </strong>
                    </p>
                    <p>
                        Lesen Sie auch, wie uns unsere Kunden bewerten.
                    </p>
                </div>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Home
