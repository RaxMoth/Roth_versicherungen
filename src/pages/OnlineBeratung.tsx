import { Link } from 'react-router-dom'
import { PageHero, Section } from '@/components'
import { IMAGES } from '@/utils/company'
import { ONLINE } from '@/content'
import { ROUTES } from '@/config/routes'
import { usePageMeta } from '@/hooks/usePageMeta'

const OnlineBeratung = () => {
    usePageMeta(ONLINE.meta)

    return (
        <>
            <PageHero
                eyebrow={ONLINE.hero.eyebrow}
                title={ONLINE.hero.title}
                bgImage={IMAGES.online}
            />

            <Section
                eyebrow={ONLINE.intro.eyebrow}
                title={ONLINE.intro.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {ONLINE.intro.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={ONLINE.cta.eyebrow}
                title={ONLINE.cta.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg mb-8 max-w-3xl">
                    {ONLINE.cta.body}
                </p>
                <Link
                    to={ROUTES.KONTAKT}
                    className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm"
                >
                    {ONLINE.cta.button}
                </Link>
            </Section>
        </>
    )
}

export default OnlineBeratung
