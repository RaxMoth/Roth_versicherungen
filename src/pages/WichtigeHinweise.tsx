import { PageHero, Section } from '@/components'
import { IMAGES } from '@/utils/company'
import { HINWEISE } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const WichtigeHinweise = () => {
    usePageMeta(HINWEISE.meta)

    return (
        <>
            <PageHero
                eyebrow={HINWEISE.hero.eyebrow}
                title={HINWEISE.hero.title}
                subtitle={HINWEISE.hero.subtitle}
                bgImage={IMAGES.hinweise}
            />

            {HINWEISE.blocks.map((b, idx) => (
                <Section
                    key={b.title}
                    title={b.title}
                    bg={idx % 2 === 0 ? 'white' : 'page'}
                >
                    <ul className="space-y-4 text-stone-700 leading-relaxed max-w-4xl">
                        {b.items.map(it => (
                            <li
                                key={it}
                                className="flex gap-4 border-b border-stone-200 pb-4 last:border-b-0"
                            >
                                <span className="text-brand-red font-bold mt-1">
                                    •
                                </span>
                                <span>{it}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            ))}
        </>
    )
}

export default WichtigeHinweise
