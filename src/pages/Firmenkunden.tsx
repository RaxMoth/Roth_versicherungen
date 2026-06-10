import { Link } from 'react-router-dom'
import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { FIRMENKUNDEN } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Firmenkunden = () => {
    usePageMeta(FIRMENKUNDEN.meta)

    return (
        <>
            <PageHero
                eyebrow={FIRMENKUNDEN.hero.eyebrow}
                title={FIRMENKUNDEN.hero.title}
                subtitle={FIRMENKUNDEN.hero.subtitle}
                bgImage={IMAGES.firmenkunden}
            />

            <Section
                eyebrow={FIRMENKUNDEN.intro.eyebrow}
                title={FIRMENKUNDEN.intro.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {FIRMENKUNDEN.intro.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={FIRMENKUNDEN.pillars.eyebrow}
                title={FIRMENKUNDEN.pillars.title}
                bg="page"
            >
                <div className="grid md:grid-cols-3 gap-6">
                    {FIRMENKUNDEN.pillars.categories.map(cat => (
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

            <Section
                eyebrow={FIRMENKUNDEN.specialProducts.eyebrow}
                title={FIRMENKUNDEN.specialProducts.title}
            >
                <div className="grid md:grid-cols-3 gap-4">
                    {FIRMENKUNDEN.specialProducts.items.map(item => (
                        <div
                            key={item}
                            className="bg-white p-6 rounded-md shadow-card text-stone-900 font-medium text-center border-l-2 border-brand-red"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={FIRMENKUNDEN.cyber.eyebrow}
                title={FIRMENKUNDEN.cyber.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src={IMAGES.cyber}
                        alt={FIRMENKUNDEN.cyber.imageAlt}
                        className="w-full h-[340px] object-cover rounded-md shadow-card"
                        loading="lazy"
                    />
                    <div>
                        <p className="text-stone-700 text-lg leading-relaxed mb-6">
                            {FIRMENKUNDEN.cyber.body}
                        </p>
                        <Link
                            to={FIRMENKUNDEN.cyber.ctaLink}
                            className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm"
                        >
                            {FIRMENKUNDEN.cyber.cta}
                        </Link>
                    </div>
                </div>
            </Section>

            <CallToAction />
        </>
    )
}

export default Firmenkunden
