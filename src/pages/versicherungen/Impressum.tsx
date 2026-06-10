import { PageHero, Section } from '@/components'
import { COMPANY, IMAGES } from '@/utils/company'
import {
    VERSICHERUNGEN_LEGAL,
    DIHK,
    IMPRESSUM_STRINGS,
} from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Impressum = () => {
    usePageMeta({
        title: `Impressum – ${VERSICHERUNGEN_LEGAL.short}`,
        description: `Impressum der ${VERSICHERUNGEN_LEGAL.name}, ${COMPANY.address}.`,
    })
    const v = VERSICHERUNGEN_LEGAL
    const s = IMPRESSUM_STRINGS

    return (
        <>
            <PageHero
                eyebrow="Roth Versicherungen › Impressum"
                title="Impressum."
                subtitle={v.tagline}
                bgImage={IMAGES.impressum}
            />

            <Section title={s.sections.provider}>
                <p className="text-stone-700 leading-relaxed text-lg">
                    <strong className="font-serif text-stone-900 text-xl">
                        {v.name}
                    </strong>
                    <br />
                    {COMPANY.street}
                    <br />
                    {COMPANY.city}
                    <br />
                    Tel.: {COMPANY.phone}
                    <br />
                    Fax: {COMPANY.fax}
                    <br />
                    E-Mail:{' '}
                    <a
                        href={`mailto:${v.email}`}
                        className="text-brand-red"
                    >
                        {v.email}
                    </a>
                </p>
            </Section>

            <Section title={s.sections.management} bg="page">
                <p className="text-stone-900 text-lg">{v.management}</p>
            </Section>

            <Section title={s.sections.registry}>
                <ul className="space-y-3 text-stone-700 text-lg">
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.court}
                        </strong>{' '}
                        {v.registry}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.type}
                        </strong>{' '}
                        {v.type}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.vermittlerNr}
                        </strong>{' '}
                        {v.vermittlerNr}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.ustId}
                        </strong>{' '}
                        {v.ustId}
                    </li>
                </ul>
            </Section>

            <Section title={s.sections.authority} bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    Erlaubnis nach {v.erlaubnis}. Zuständige Aufsichtsbehörde:{' '}
                    {v.aufsicht}.
                </p>
                <p className="mt-4 text-stone-700 text-lg">
                    <strong className="text-stone-900">{DIHK.name}</strong>
                    <br />
                    {DIHK.street}
                    <br />
                    {DIHK.city}
                    <br />
                    Tel.: {DIHK.phone}
                    <br />
                    Register:{' '}
                    <a
                        href={`https://${DIHK.register}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red"
                    >
                        {DIHK.register}
                    </a>
                </p>
            </Section>

            <Section title={s.sections.association}>
                <p className="text-stone-700 text-lg">
                    Mitglied im {v.verband}.
                </p>
            </Section>

            <Section title={s.sections.editor} bg="page">
                <p className="text-stone-700 text-lg">
                    {v.responsibleEditor} {s.editorSuffix}
                </p>
            </Section>

            <Section title={s.sections.liability}>
                <div className="space-y-4 text-stone-700 leading-relaxed text-lg max-w-3xl">
                    {s.liabilityParagraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>
        </>
    )
}

export default Impressum
