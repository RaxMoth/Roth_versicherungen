import { Link } from 'react-router-dom'
import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { PRIVATKUNDEN } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Privatkunden = () => {
    usePageMeta(PRIVATKUNDEN.meta)

    return (
        <>
            <PageHero
                eyebrow={PRIVATKUNDEN.hero.eyebrow}
                title={PRIVATKUNDEN.hero.title}
                bgImage={IMAGES.privatkunden}
            />

            <Section
                eyebrow={PRIVATKUNDEN.intro.eyebrow}
                title={PRIVATKUNDEN.intro.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {PRIVATKUNDEN.intro.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={PRIVATKUNDEN.offerings.eyebrow}
                title={PRIVATKUNDEN.offerings.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {PRIVATKUNDEN.offerings.items.map(s => (
                        <div
                            key={s}
                            className="bg-white p-5 rounded-md shadow-card border-l-2 border-brand-red text-stone-900 font-medium"
                        >
                            {s}
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-stone-700 text-lg leading-relaxed">
                    {PRIVATKUNDEN.offerings.outro}
                </p>
            </Section>

            <Section
                eyebrow={PRIVATKUNDEN.tier.eyebrow}
                title={PRIVATKUNDEN.tier.title}
            >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <img
                        src={IMAGES.tier}
                        alt={PRIVATKUNDEN.tier.imageAlt}
                        className="w-full h-[340px] object-cover rounded-md shadow-card"
                        loading="lazy"
                    />
                    <div>
                        <p className="text-stone-700 text-lg leading-relaxed mb-6">
                            {PRIVATKUNDEN.tier.body}
                        </p>
                        <Link
                            to={PRIVATKUNDEN.tier.ctaLink}
                            className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm"
                        >
                            {PRIVATKUNDEN.tier.cta}
                        </Link>
                    </div>
                </div>
            </Section>

            <CallToAction />
        </>
    )
}

export default Privatkunden
