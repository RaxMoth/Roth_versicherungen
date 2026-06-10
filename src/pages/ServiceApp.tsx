import { PageHero, Section } from '@/components'
import { IMAGES } from '@/utils/company'
import { SERVICEAPP } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const ServiceApp = () => {
    usePageMeta(SERVICEAPP.meta)

    return (
        <>
            <PageHero
                eyebrow={SERVICEAPP.hero.eyebrow}
                title={SERVICEAPP.hero.title}
                subtitle={SERVICEAPP.hero.subtitle}
                bgImage={IMAGES.serviceapp}
            />

            <Section
                eyebrow={SERVICEAPP.features.eyebrow}
                title={SERVICEAPP.features.title}
            >
                <div className="grid md:grid-cols-2 gap-6">
                    {SERVICEAPP.features.items.map(f => (
                        <div
                            key={f.title}
                            className="bg-white p-6 rounded-md shadow-card border-l-2 border-brand-red"
                        >
                            <h3 className="font-serif text-xl text-stone-900 mb-3">
                                {f.title}
                            </h3>
                            <p className="text-stone-700 leading-relaxed text-[15px]">
                                {f.text}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={SERVICEAPP.install.eyebrow}
                title={SERVICEAPP.install.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg mb-6 max-w-3xl">
                    {SERVICEAPP.install.body}
                </p>
                <div className="bg-white p-8 rounded-md shadow-card border-l-2 border-brand-red inline-block">
                    <p className="text-stone-900 text-lg leading-relaxed">
                        <strong>Benutzername:</strong>{' '}
                        {SERVICEAPP.install.username}
                        <br />
                        <strong>Code:</strong> {SERVICEAPP.install.code}
                    </p>
                </div>
                <div className="mt-8 flex gap-4 flex-wrap">
                    <a
                        href={SERVICEAPP.install.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-stone-900 text-white px-6 py-4 rounded-sm hover:bg-stone-800 transition font-semibold"
                    >
                        App Store
                    </a>
                    <a
                        href={SERVICEAPP.install.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-stone-900 text-white px-6 py-4 rounded-sm hover:bg-stone-800 transition font-semibold"
                    >
                        Google Play
                    </a>
                </div>
            </Section>
        </>
    )
}

export default ServiceApp
