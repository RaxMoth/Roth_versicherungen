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
    { value: 'seit 1907', label: 'in Langen für Sie da' },
    { value: '4 Generationen', label: 'Familientradition' },
    { value: '5 Berater', label: 'persönlich erreichbar' },
    { value: 'unabhängig', label: 'neutral & ungebunden' },
]

const Home: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Versicherungen & Roth Finanz"
            title="Ihr Versicherungs­makler aus Langen."
            subtitle="Persönliche, neutrale Beratung – seit 1907. Wir nehmen uns Zeit für Ihre Fragen und finden mit Ihnen die Lösung, die wirklich passt."
            bgImage={IMAGES.home}
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
            title="Eine Maklerfamilie aus Langen – seit 1907."
        >
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-5 text-stone-700 text-[17px] leading-relaxed">
                    <p>
                        Schon 1907 gründete Hch. Werner XII in Langen ein
                        Unternehmen zur Vermittlung von Versicherungen – heute
                        sind wir in vierter Generation für unsere Kundinnen und
                        Kunden da.
                    </p>
                    <p>
                        Wir kennen die Menschen, mit denen wir arbeiten, beim
                        Namen. Statt anonymer Hotlines bekommen Sie bei uns
                        immer dieselbe Ansprechperson – jemand, der zuhört,
                        mitdenkt und sich Zeit nimmt.
                    </p>
                    <p>
                        Als Makler sind wir keinem Versicherer verpflichtet,
                        sondern ausschließlich Ihnen. Das macht unsere
                        Empfehlungen ehrlich und Ihren Schutz so passgenau wie
                        möglich.
                    </p>
                    <p className="text-stone-900 border-l-2 border-brand-red pl-5 italic">
                        „Der rote Faden der Ariadne ist sprichwörtlich ein
                        Hilfsmittel, um sich in schwierigen Situationen
                        zurechtzufinden – genau das möchten wir für Sie sein."
                    </p>
                </div>
                <img
                    src={IMAGES.history}
                    alt="Eingang unseres Maklerbüros in Langen"
                    className="w-full h-[420px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
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

        <Section
            eyebrow="Beratung"
            title="Wir kommen zu Ihnen – auch nach Hause."
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={IMAGES.consulting}
                    alt="Beratungsgespräch"
                    className="w-full h-[380px] object-cover rounded-md shadow-card"
                    loading="lazy"
                />
                <div className="space-y-4 text-stone-700 text-[17px] leading-relaxed">
                    <p>
                        Beratung im Büro in der Bahnstraße, direkt bei Ihnen
                        zuhause, im Unternehmen oder online per Video – Sie
                        entscheiden, wie und wo wir uns sehen.
                    </p>
                    <p>
                        Wir sind für unsere Kundinnen und Kunden vor Ort in
                        Langen und unterstützen die Initiative{' '}
                        <strong className="text-stone-900">
                            SO NAH. SO GUT. SO LANGEN.
                        </strong>
                    </p>
                    <div className="flex flex-wrap gap-3 pt-3">
                        <Link
                            to="/online-beratung"
                            className="bg-stone-900 hover:bg-stone-800 transition text-white font-semibold px-6 py-3 rounded-sm text-[15px]"
                        >
                            Online-Termin anfragen
                        </Link>
                        <Link
                            to="/team"
                            className="border border-stone-900 hover:bg-stone-900 hover:text-white transition text-stone-900 font-semibold px-6 py-3 rounded-sm text-[15px]"
                        >
                            Team kennenlernen
                        </Link>
                    </div>
                </div>
            </div>
        </Section>

        <CallToAction />
    </>
)

export default Home
