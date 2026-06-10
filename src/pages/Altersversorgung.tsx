import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { ALTERSVERSORGUNG } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Altersversorgung = () => {
    usePageMeta(ALTERSVERSORGUNG.meta)

    return (
        <>
            <PageHero
                eyebrow={ALTERSVERSORGUNG.hero.eyebrow}
                title={ALTERSVERSORGUNG.hero.title}
                bgImage={IMAGES.altersversorgung}
            />

            <Section
                eyebrow={ALTERSVERSORGUNG.intro.eyebrow}
                title={ALTERSVERSORGUNG.intro.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {ALTERSVERSORGUNG.intro.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={ALTERSVERSORGUNG.services.eyebrow}
                title={ALTERSVERSORGUNG.services.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {ALTERSVERSORGUNG.services.items.map(item => (
                        <div
                            key={item.title}
                            className="bg-white p-8 rounded-md shadow-card border-l-2 border-brand-red"
                        >
                            <h3 className="font-serif text-xl text-stone-900 mb-3">
                                {item.title}
                            </h3>
                            {item.text && (
                                <p className="text-stone-700 leading-relaxed">
                                    {item.text}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            <CallToAction />
        </>
    )
}

export default Altersversorgung
