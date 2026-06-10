import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { CYBER } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const CyberPolice = () => {
    usePageMeta(CYBER.meta)

    return (
        <>
            <PageHero
                eyebrow={CYBER.hero.eyebrow}
                title={CYBER.hero.title}
                bgImage={IMAGES.cyber}
            />

            <Section
                eyebrow={CYBER.risks.eyebrow}
                title={CYBER.risks.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {CYBER.risks.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={CYBER.impact.eyebrow}
                title={CYBER.impact.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {CYBER.impact.stats.map(stat => (
                        <div
                            key={stat.value}
                            className="bg-white p-8 rounded-md shadow-card text-center border-b-2 border-brand-red"
                        >
                            <p className="font-serif text-4xl md:text-5xl font-semibold text-brand-red">
                                {stat.value}
                            </p>
                            <p className="text-stone-700 mt-4">{stat.label}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {CYBER.impact.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={CYBER.coverage.eyebrow}
                title={CYBER.coverage.title}
            >
                <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl mb-8">
                    {CYBER.coverage.intro.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                    {CYBER.coverage.items.map(c => (
                        <div
                            key={c}
                            className="bg-white px-5 py-4 rounded-md shadow-card text-stone-900 flex items-center gap-3"
                        >
                            <span className="text-brand-red font-bold">✓</span>
                            {c}
                        </div>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={CYBER.exclusions.eyebrow}
                title={CYBER.exclusions.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-6">
                    {CYBER.exclusions.intro}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                    {CYBER.exclusions.items.map(e => (
                        <div
                            key={e}
                            className="bg-white px-5 py-4 rounded-md text-stone-700 flex items-center gap-3 shadow-card"
                        >
                            <span className="text-stone-400 font-bold">–</span>
                            {e}
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-sm text-stone-500">
                    {CYBER.exclusions.source}
                </p>
            </Section>

            <CallToAction />
        </>
    )
}

export default CyberPolice
