import { Link } from 'react-router-dom'
import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { HOME } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Home = () => {
    usePageMeta(HOME.meta)

    return (
        <>
            <PageHero
                eyebrow={HOME.hero.eyebrow}
                title={HOME.hero.title}
                subtitle={HOME.hero.subtitle}
                bgImage={IMAGES.versicherungen}
                height="tall"
            />

            <TrustStrip />
            <AboutSection />
            <ServicesSection />
            <LocationSection />
            <CallToAction />
        </>
    )
}

const TrustStrip = () => (
    <section
        className="bg-white border-b border-brand-line"
        aria-label="Auf einen Blick"
    >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 px-6">
            {HOME.trust.map((t, i) => (
                <div
                    key={t.label}
                    className={`py-8 text-center ${
                        i < HOME.trust.length - 1
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
)

const AboutSection = () => (
    <Section eyebrow={HOME.about.eyebrow} title={HOME.about.title}>
        <div className="space-y-6 text-stone-700 text-[17px] leading-relaxed max-w-4xl">
            {HOME.about.paragraphs.map(p => (
                <p key={p}>{p}</p>
            ))}
        </div>
    </Section>
)

const ServicesSection = () => (
    <Section
        eyebrow={HOME.services.eyebrow}
        title={HOME.services.title}
        bg="page"
    >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOME.services.items.map(s => (
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
)

const LocationSection = () => (
    <Section eyebrow={HOME.location.eyebrow} title={HOME.location.title}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
                src={IMAGES.home}
                alt={HOME.location.imageAlt}
                className="w-64 h-auto"
                loading="lazy"
            />
            <div className="space-y-4 text-stone-700 text-[17px] leading-relaxed">
                <p>{HOME.location.body}</p>
                <p>{HOME.location.bodyExtra}</p>
            </div>
        </div>
    </Section>
)

export default Home
