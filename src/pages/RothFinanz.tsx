import { Link } from 'react-router-dom'
import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { FINANZ } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const RothFinanz = () => {
    usePageMeta(FINANZ.meta)

    return (
        <>
            <PageHero
                eyebrow={FINANZ.hero.eyebrow}
                title={FINANZ.hero.title}
                bgImage={IMAGES.finanz}
            />

            <Section eyebrow={FINANZ.intro.eyebrow} title={FINANZ.intro.title}>
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    <div className="md:col-span-2 space-y-6 text-stone-700 text-lg leading-relaxed">
                        {FINANZ.intro.paragraphs.map(p => (
                            <p key={p}>{p}</p>
                        ))}
                    </div>
                    <img
                        src={IMAGES.finanzLogo}
                        alt={FINANZ.intro.logoAlt}
                        className="w-full h-auto"
                        loading="lazy"
                    />
                </div>
            </Section>

            <Section
                eyebrow={FINANZ.services.eyebrow}
                title={FINANZ.services.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {FINANZ.services.items.map(item => (
                        <Link
                            key={item.title}
                            to={item.to}
                            className="group bg-white p-10 rounded-md shadow-card hover:shadow-card-hover transition border-t-2 border-brand-red"
                        >
                            <h3 className="font-serif text-3xl text-stone-900 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-stone-700 leading-relaxed">
                                {item.text}
                            </p>
                            <p className="mt-6 text-brand-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                Mehr erfahren →
                            </p>
                        </Link>
                    ))}
                </div>
            </Section>

            <CallToAction />
        </>
    )
}

export default RothFinanz
