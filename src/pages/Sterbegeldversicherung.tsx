import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const costTable = [
    { item: 'Grabstein', simple: '600 €', expensive: '3.000 €' },
    { item: 'Sarg', simple: '300 €', expensive: '3.000 €' },
    { item: 'Kränze / Blumen', simple: '150 €', expensive: '800 €' },
    { item: 'Trauerredner', simple: '300 €', expensive: '300 €' },
    { item: 'Trauerfeier', simple: '—', expensive: '500 €' },
    { item: 'Karten', simple: '100 €', expensive: '300 €' },
    { item: 'Grabbepflanzung', simple: '110 €', expensive: '260 €' },
]

const facts = [
    'Je nach Anbieter sind Versicherungssummen bis zu 20.000 € absicherbar.',
    'Ebenfalls anbieterabhängig ist das versicherbare Eintrittsalter. Häufig ist ein Abschluss von 45 bis 75 Jahre möglich.',
    'Versicherung gegen Einmalbeitrag können oftmals auch noch mit 80 Jahren abgeschlossen werden.',
    'Die Dauer der Beitragszahlung kann variieren (z. B. 10 Jahre lang oder lebenslang).',
    'Es werden auch Tarife gegen Einmalbeitrag angeboten; Sie können z. B. eine abgelaufene Lebensversicherung anlegen.',
    'Durch die nicht garantierten Überschüsse erhöht sich die vereinbarte Leistung oder die Überschüsse werden herangezogen, um den Zahlbeitrag zu reduzieren.',
    'Einige Gesellschaften bieten über externe Dienstleister auch aktive Unterstützung im Trauerfall an. Sie bestimmen zu Lebzeiten die Details Ihrer Bestattung selbst und das Dienstleistungsunternehmen übernimmt später die Organisation. Dadurch werden Ihre Angehörigen zusätzlich entlastet.',
    'Der Versicherungsschutz wird meist ohne Gesundheitsprüfung angeboten. Dafür sind Wartezeiten zu berücksichtigen. D. h. tritt der Trauerfall innerhalb der Wartezeiten ein, wird ein geringerer Betrag ausgezahlt. Bei Unfalltod gibt es aber i. d. R. die volle Leistung. Bei einer Versicherung gegen Einmalbeitrag entfallen die Wartezeiten.',
]

const Sterbegeldversicherung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Roth Finanz › Sterbegeldversicherung"
            title="Sterbegeldversicherung – selbstbestimmt vorsorgen."
            bgImage={IMAGES.sterbegeld}
        />

        <Section eyebrow="Einführung" title="Warum vorsorgen?">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Der Tod eines Angehörigen ist für die Hinterbliebenen
                    traurig genug. Oft kommt dazu aber noch die finanzielle
                    Belastung durch die Bestattungskosten. Um Ihre Angehörigen
                    davor zu schützen, sollten Sie rechtzeitig vorsorgen. Denn
                    nur allzu oft tritt der Trauerfall völlig unerwartet ein,
                    ohne dass ausreichend Rücklagen dafür gebildet wurden.
                </p>
                <p>
                    Früher war es einfacher: Über 10 Jahre war das Sterbegeld
                    Teil der Leistungen der gesetzlichen Krankenversicherung
                    (GKV). Aber bereits seit 1998 wurde die Sterbegeldleistung
                    schrittweise reduziert und ist seit 2004 sogar ersatzlos
                    gestrichen.
                </p>
            </div>
        </Section>

        <Section
            eyebrow="Steuervorteil"
            title="Mit Sterbegeld erbschaftssteuerfrei vererben."
            bg="page"
        >
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Die Leistung einer Sterbegeldversicherung wird{' '}
                <strong className="text-stone-900">
                    erbschafts- und einkommensteuerfrei
                </strong>{' '}
                an die Hinterbliebenen ausgezahlt. Selbst wenn Ihre Rücklagen
                für Ihre Wunschbestattung ausreichen, bietet eine
                Sterbegeldversicherung wegen des Steuervorteils eine
                interessante Möglichkeit, Geld zu vererben. Sie können auf
                diese Weise z. B. einen Betrag an Ihre Kinder weitergeben,
                mit dem die eventuell anfallende Erbschaftssteuer auf
                Immobilien beglichen werden kann. Nicht selten müssen Kinder
                das Elternhaus verkaufen, da nicht genug Mittel für die
                Erbschaftssteuer zur Verfügung stehen.
            </p>
        </Section>

        <Section eyebrow="Kostenbeispiele" title="Mit welchen Kosten ist zu rechnen?">
            <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl mb-8">
                <p>
                    Hauptaufgabe der Sterbegeldversicherung ist die
                    Begleichung der Kosten für eine würdevolle Bestattung.
                    Aber auch die anschließende dauerhafte Grabpflege will
                    berücksichtigt werden. Insgesamt belaufen sich die Kosten
                    einer Bestattung im üblichen Rahmen auf eine Größenordnung
                    zwischen{' '}
                    <strong className="text-stone-900">5.000 und 10.000 €</strong>,
                    die sich aus unterschiedlichen Leistungen zusammensetzen.
                </p>
                <p>
                    Die Kosten einer Seebestattung belaufen sich auf
                    mindestens 2.000 €. Bei einer Baumbestattung sollten Sie
                    mit 3.350 € für einen Baum mit Familiennutzung rechnen.
                    Bitte beachten Sie, dass in jedem Fall die Kosten für
                    Bestatter, Kremation, Urne und Trauerfeier noch dazu
                    kommen.
                </p>
                <p>
                    Je nach gewünschter Ausführung sind nach oben kaum Grenzen
                    gesetzt. Wählen Sie daher eine ausreichend hohe
                    Versicherungssumme und berücksichtigen Sie auch die
                    Inflation bei Ihrer Absicherung.
                </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-md shadow-card">
                <table className="w-full text-left">
                    <thead className="bg-stone-900 text-white">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Position</th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Einfache Bestattung
                            </th>
                            <th className="px-6 py-4 font-semibold text-right">
                                Aufwändige Bestattung
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {costTable.map(row => (
                            <tr
                                key={row.item}
                                className="border-b border-stone-200"
                            >
                                <td className="px-6 py-3 text-stone-900">
                                    {row.item}
                                </td>
                                <td className="px-6 py-3 text-right text-stone-700">
                                    {row.simple}
                                </td>
                                <td className="px-6 py-3 text-right text-stone-700">
                                    {row.expensive}
                                </td>
                            </tr>
                        ))}
                        <tr className="border-b-2 border-stone-300 bg-stone-50">
                            <td className="px-6 py-3 font-semibold text-stone-900">
                                Summe
                            </td>
                            <td className="px-6 py-3 text-right font-semibold text-stone-900">
                                1.560 €
                            </td>
                            <td className="px-6 py-3 text-right font-semibold text-stone-900">
                                8.160 €
                            </td>
                        </tr>
                        <tr className="border-b border-stone-200">
                            <td className="px-6 py-3 text-stone-900">
                                Friedhofs- und Bestattungsgebühren
                            </td>
                            <td
                                colSpan={2}
                                className="px-6 py-3 text-right text-stone-700"
                            >
                                500 € bis 3.500 €
                            </td>
                        </tr>
                        <tr className="bg-brand-red text-white">
                            <td className="px-6 py-4 font-semibold">
                                Gesamtsumme
                            </td>
                            <td className="px-6 py-4 text-right font-semibold">
                                2.060 € – 5.060 €
                            </td>
                            <td className="px-6 py-4 text-right font-semibold">
                                8.660 € – 11.660 €
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Section>

        <Section eyebrow="Was Sie wissen sollten" title="Wichtige Details auf einen Blick." bg="page">
            <ul className="space-y-4 text-stone-700 text-lg max-w-4xl">
                {facts.map(f => (
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

export default Sterbegeldversicherung
