import { PageHero, Section, CallToAction } from '@/components'
import { IMAGES } from '@/utils/company'
import { STERBEGELD } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Sterbegeldversicherung = () => {
    usePageMeta(STERBEGELD.meta)
    const { table } = STERBEGELD.costs

    return (
        <>
            <PageHero
                eyebrow={STERBEGELD.hero.eyebrow}
                title={STERBEGELD.hero.title}
                bgImage={IMAGES.sterbegeld}
            />

            <Section
                eyebrow={STERBEGELD.intro.eyebrow}
                title={STERBEGELD.intro.title}
            >
                <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                    {STERBEGELD.intro.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>
            </Section>

            <Section
                eyebrow={STERBEGELD.inheritance.eyebrow}
                title={STERBEGELD.inheritance.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                    {STERBEGELD.inheritance.body}
                </p>
            </Section>

            <Section
                eyebrow={STERBEGELD.costs.eyebrow}
                title={STERBEGELD.costs.title}
            >
                <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl mb-8">
                    {STERBEGELD.costs.paragraphs.map(p => (
                        <p key={p}>{p}</p>
                    ))}
                </div>

                <div className="overflow-x-auto bg-white rounded-md shadow-card">
                    <table className="w-full text-left">
                        <thead className="bg-stone-900 text-white">
                            <tr>
                                {table.headers.map((h, i) => (
                                    <th
                                        key={h}
                                        className={`px-6 py-4 font-semibold ${
                                            i > 0 ? 'text-right' : ''
                                        }`}
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table.rows.map(row => (
                                <tr
                                    key={row[0]}
                                    className="border-b border-stone-200"
                                >
                                    <td className="px-6 py-3 text-stone-900">
                                        {row[0]}
                                    </td>
                                    <td className="px-6 py-3 text-right text-stone-700">
                                        {row[1]}
                                    </td>
                                    <td className="px-6 py-3 text-right text-stone-700">
                                        {row[2]}
                                    </td>
                                </tr>
                            ))}
                            <tr className="border-b-2 border-stone-300 bg-stone-50">
                                <td className="px-6 py-3 font-semibold text-stone-900">
                                    {table.sumLabel}
                                </td>
                                {table.sumValues.map(v => (
                                    <td
                                        key={v}
                                        className="px-6 py-3 text-right font-semibold text-stone-900"
                                    >
                                        {v}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-stone-200">
                                <td className="px-6 py-3 text-stone-900">
                                    {table.feesLabel}
                                </td>
                                <td
                                    colSpan={2}
                                    className="px-6 py-3 text-right text-stone-700"
                                >
                                    {table.feesValue}
                                </td>
                            </tr>
                            <tr className="bg-brand-red text-white">
                                <td className="px-6 py-4 font-semibold">
                                    {table.totalLabel}
                                </td>
                                {table.totalValues.map(v => (
                                    <td
                                        key={v}
                                        className="px-6 py-4 text-right font-semibold"
                                    >
                                        {v}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            <Section
                eyebrow={STERBEGELD.facts.eyebrow}
                title={STERBEGELD.facts.title}
                bg="page"
            >
                <ul className="space-y-4 text-stone-700 text-lg max-w-4xl">
                    {STERBEGELD.facts.items.map(f => (
                        <li
                            key={f}
                            className="flex gap-4 border-b border-stone-200 pb-4"
                        >
                            <span className="text-brand-red font-bold mt-1">›</span>
                            <span className="leading-relaxed">{f}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <CallToAction />
        </>
    )
}

export default Sterbegeldversicherung
