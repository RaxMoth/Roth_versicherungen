import { Link } from 'react-router-dom'
import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { VERSICHERUNGEN } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const RothVersicherungen = () => {
    usePageMeta(VERSICHERUNGEN.meta)

    return (
        <>
            <PageHero
                eyebrow={VERSICHERUNGEN.hero.eyebrow}
                title={VERSICHERUNGEN.hero.title}
                bgImage={IMAGES.versicherungen}
            />

            <Section
                eyebrow={VERSICHERUNGEN.tradition.eyebrow}
                title={VERSICHERUNGEN.tradition.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {VERSICHERUNGEN.tradition.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={VERSICHERUNGEN.archive.eyebrow}
                title={VERSICHERUNGEN.archive.title}
                bg="page"
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <img
                        src={IMAGES.versicherungen}
                        alt={VERSICHERUNGEN.archive.images[0].alt}
                        className="w-full h-[360px] object-cover rounded-md shadow-card"
                        loading="lazy"
                    />
                    <img
                        src={IMAGES.versicherungenContent}
                        alt={VERSICHERUNGEN.archive.images[1].alt}
                        className="w-full h-[360px] object-cover rounded-md shadow-card"
                        loading="lazy"
                    />
                </div>
            </Section>

            <Section
                eyebrow={VERSICHERUNGEN.services.eyebrow}
                title={VERSICHERUNGEN.services.title}
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {VERSICHERUNGEN.services.items.map(item => (
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
                <p className="mt-10 text-stone-700 text-lg leading-relaxed italic max-w-3xl">
                    {VERSICHERUNGEN.services.outro}
                </p>
            </Section>

            <CallToAction />
        </>
    )
}

export default RothVersicherungen
