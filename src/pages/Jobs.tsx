import { PageHero, Section } from '@/components'
import { COMPANY, IMAGES } from '@/utils/company'
import { JOBS } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Jobs = () => {
    usePageMeta(JOBS.meta)

    return (
        <>
            <PageHero
                eyebrow={JOBS.hero.eyebrow}
                title={JOBS.hero.title}
                subtitle={JOBS.hero.subtitle}
                bgImage={IMAGES.jobs}
            />

            <Section eyebrow={JOBS.profile.eyebrow} title={JOBS.profile.title}>
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-6">
                    {JOBS.profile.intro}
                </p>
                <ul className="space-y-3 text-stone-700 text-lg max-w-3xl mb-8">
                    {JOBS.profile.qualifications.map(q => (
                        <li
                            key={q}
                            className="flex gap-3 border-b border-stone-200 pb-3"
                        >
                            <span className="text-brand-red font-bold mt-1">✓</span>
                            <span>{q}</span>
                        </li>
                    ))}
                </ul>
                <p className="text-stone-700 italic leading-relaxed text-base max-w-4xl mb-10 border-l-2 border-stone-300 pl-5">
                    {JOBS.profile.disclaimer}
                </p>
                <ul className="space-y-3 text-stone-700 text-lg max-w-3xl">
                    {JOBS.profile.requirements.map(r => (
                        <li
                            key={r}
                            className="flex gap-3 border-b border-stone-200 pb-3"
                        >
                            <span className="text-brand-red font-bold mt-1">›</span>
                            <span>{r}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section
                eyebrow={JOBS.tasks.eyebrow}
                title={JOBS.tasks.title}
                bg="page"
            >
                <ul className="space-y-3 text-stone-700 text-lg max-w-3xl">
                    {JOBS.tasks.items.map(t => (
                        <li
                            key={t}
                            className="flex gap-3 border-b border-stone-300 pb-3"
                        >
                            <span className="text-brand-red font-bold mt-1">›</span>
                            <span>{t}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <Section eyebrow={JOBS.offer.eyebrow} title={JOBS.offer.title}>
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {JOBS.offer.body}
                </p>
            </Section>

            <Section
                eyebrow={JOBS.apply.eyebrow}
                title={JOBS.apply.title}
                bg="page"
            >
                <div className="space-y-5 text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {JOBS.apply.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
                <div className="mt-8 bg-white p-8 rounded-md shadow-card inline-block border-l-2 border-brand-red">
                    <p className="text-stone-900 leading-relaxed">
                        <a
                            href={`mailto:${COMPANY.email}`}
                            className="text-brand-red font-semibold text-xl"
                        >
                            {COMPANY.email}
                        </a>
                        <br />
                        <span className="text-stone-700">{JOBS.apply.or}</span>
                        <br />
                        <strong className="font-serif text-lg">
                            {JOBS.apply.recipient}
                        </strong>
                        <br />
                        {COMPANY.street}
                        <br />
                        {COMPANY.city}
                    </p>
                </div>
            </Section>
        </>
    )
}

export default Jobs
