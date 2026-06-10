import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components'
import { SITEMAP_CONTENT } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Sitemap = () => {
    usePageMeta(SITEMAP_CONTENT.meta)

    return (
        <>
            <PageHero
                eyebrow={SITEMAP_CONTENT.hero.eyebrow}
                title={SITEMAP_CONTENT.hero.title}
            />

            <Section>
                <div className="grid md:grid-cols-3 gap-10">
                    {SITEMAP_CONTENT.sections.map(section => (
                        <nav
                            key={section.heading}
                            aria-label={section.heading}
                        >
                            <h2 className="font-serif text-2xl text-stone-900 mb-4">
                                {section.heading}
                            </h2>
                            <div className="w-10 h-[2px] bg-brand-red mb-5" />
                            <ul className="space-y-2 list-none">
                                {section.entries.map(entry => (
                                    <li key={entry.to}>
                                        <Link
                                            to={entry.to}
                                            className="text-stone-700 hover:text-brand-red transition underline-offset-2 hover:underline"
                                        >
                                            {entry.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}
                </div>
            </Section>
        </>
    )
}

export default Sitemap
