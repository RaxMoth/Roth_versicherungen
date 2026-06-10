import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { TIER } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Tierkrankenversicherung = () => {
    usePageMeta(TIER.meta)

    return (
        <>
            <PageHero
                eyebrow={TIER.hero.eyebrow}
                title={TIER.hero.title}
                subtitle={TIER.hero.subtitle}
                bgImage={IMAGES.tier}
            />

            <Section eyebrow={TIER.intro.eyebrow} title={TIER.intro.title}>
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.intro.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.target.eyebrow}
                title={TIER.target.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.target.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.coverage.eyebrow}
                title={TIER.coverage.title}
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.coverage.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.exclusions.eyebrow}
                title={TIER.exclusions.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.exclusions.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.premium.eyebrow}
                title={TIER.premium.title}
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.premium.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.payout.eyebrow}
                title={TIER.payout.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {TIER.payout.body}
                </p>
            </Section>

            <Section
                eyebrow={TIER.examples.eyebrow}
                title={TIER.examples.title}
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {TIER.examples.items.map(ex => (
                        <div
                            key={ex.title}
                            className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red"
                        >
                            <p className="font-serif text-2xl text-stone-900 mb-2">
                                {ex.title}
                            </p>
                            <p className="font-serif text-4xl font-semibold text-brand-red">
                                {ex.price}
                            </p>
                            <p className="text-stone-700 mt-3 leading-relaxed">
                                {ex.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={TIER.extras.eyebrow}
                title={TIER.extras.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {TIER.extras.items.map(item => (
                        <div
                            key={item.title}
                            className="bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red"
                        >
                            <h3 className="font-serif text-2xl text-stone-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-stone-700 leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-sm text-stone-500">
                    {TIER.extras.source}
                </p>
            </Section>

            <CallToAction />
        </>
    )
}

export default Tierkrankenversicherung
