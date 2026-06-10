import { PageHero, Section } from '@/components'
import { COMPANY, IMAGES } from '@/utils/company'
import {
    FINANZ_LEGAL,
    DIHK,
    IMPRESSUM_STRINGS,
} from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Impressum = () => {
    usePageMeta({
        title: `Impressum – ${FINANZ_LEGAL.short}`,
        description: `Impressum der ${FINANZ_LEGAL.name}, ${COMPANY.address}.`,
    })
    const f = FINANZ_LEGAL
    const s = IMPRESSUM_STRINGS

    return (
        <>
            <PageHero
                eyebrow="Roth Finanz › Impressum"
                title="Impressum."
                subtitle={f.tagline}
                bgImage={IMAGES.impressum}
            />

            <Section title={s.sections.provider}>
                <p className="text-stone-700 leading-relaxed text-lg">
                    <strong className="font-serif text-stone-900 text-xl">
                        {f.name}
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
                        href={`mailto:${f.email}`}
                        className="text-brand-red"
                    >
                        {f.email}
                    </a>
                </p>
            </Section>

            <Section title={s.sections.management} bg="page">
                <p className="text-stone-900 text-lg">{f.management}</p>
            </Section>

            <Section title={s.sections.registry}>
                <ul className="space-y-3 text-stone-700 text-lg">
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.court}
                        </strong>{' '}
                        {f.registry}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.type}
                        </strong>{' '}
                        {f.type}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.vermittlerNr}
                        </strong>{' '}
                        {f.vermittlerNr}
                    </li>
                    <li>
                        <strong className="text-stone-900">
                            {s.labels.ustId}
                        </strong>{' '}
                        {f.ustId}
                    </li>
                </ul>
            </Section>

            <Section title={s.sections.authorityFinanz} bg="page">
                <div className="space-y-5 text-stone-700 leading-relaxed text-lg max-w-3xl">
                    <div>
                        <p>
                            <strong className="text-stone-900">
                                Versicherungsvermittlung:
                            </strong>{' '}
                            Erlaubnis nach {f.erlaubnisVersicherung}.
                        </p>
                        <p className="text-base">
                            Aufsichtsbehörde: {f.aufsichtVersicherung}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong className="text-stone-900">
                                Immobilien- und Finanzvermittlung:
                            </strong>{' '}
                            Erlaubnis nach {f.erlaubnisFinanz}.
                        </p>
                        <p className="text-base">
                            Aufsichtsbehörde: {f.aufsichtFinanz}
                        </p>
                    </div>
                    <div className="pt-4 border-t border-stone-200">
                        <p>
                            <strong className="text-stone-900">
                                {DIHK.name}
                            </strong>
                            <br />
                            {DIHK.street}, {DIHK.city}
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
                    </div>
                </div>
            </Section>

            <Section title={s.sections.editor}>
                <p className="text-stone-700 text-lg">
                    {f.responsibleEditor} {s.editorSuffix}
                </p>
            </Section>

            <Section title={s.sections.odr} bg="page">
                <p className="text-stone-700 leading-relaxed text-lg max-w-3xl">
                    {s.odr.replace(
                        'ec.europa.eu/consumers/odr',
                        '',
                    )}
                    <a
                        href={s.odrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-red"
                    >
                        ec.europa.eu/consumers/odr
                    </a>
                </p>
            </Section>

            <Section title={s.sections.liability}>
                <div className="space-y-4 text-stone-700 leading-relaxed text-lg max-w-3xl">
                    <p>{s.liabilityParagraphs[0]}</p>
                    <p>{s.externalLinksParagraph}</p>
                    <p>{s.liabilityParagraphs[1]}</p>
                </div>
            </Section>
        </>
    )
}

export default Impressum
