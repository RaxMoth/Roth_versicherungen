import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const covers = [
    'Kosten für IT-Forensik',
    'Rechtsberatung',
    'Informationskosten',
    'Kreditüberwachungsdienstleistungen',
    'Kosten für Krisenmanagement',
    'Kosten für PR-Beratung',
    'Betriebsunterbrechungsschäden',
    'Vertragsstrafen (PCI)',
    'Lösegeldzahlungen',
    'Wiederherstellungskosten',
    'Sicherheitsverbesserungen',
]

const exclusions = [
    'Verletzungen von Kartell- und Wettbewerbsrecht, sowie Patentrecht',
    'Schäden durch vorsätzliches Handeln',
    'Auswirkungen von Krieg oder Terror',
    'Schäden aus einer behördlichen Vollstreckung',
    'Geldbußen oder Geldstrafen',
    'Schäden im Innenverhältnis zwischen Versicherungsnehmer und mitversicherter Person',
    'Garantiezusagen',
]

const CyberPolice: React.FC = () => (
    <>
        <PageHero
            eyebrow="Firmenkunden › Cyber-Police"
            title="Sicher geschützt gegen Internetkriminalität und IT-Risiken."
            bgImage={IMAGES.cyber}
        />

        <Section eyebrow="Cyber-Risiken" title="Cybercrime ist Alltag.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Cybercrime, also durchs Internet oder Netzwerke begangene
                    Straftaten, sind längst fester, bedauerlicher Bestandteil
                    unserer Gesellschaft im Internet geworden. Das
                    Bundeskriminalamt veröffentlichte in seinem Bericht zur
                    Bundeslage 2021{' '}
                    <strong className="text-stone-900">146.363 Straftaten</strong>. Die
                    Steigerung gegenüber dem Vorjahr beträgt mehr als 12 %.
                    Und das sind nur die Fälle, die auch zur Anzeige gebracht
                    wurden! Die Spielarten der Cyberkriminalität sind
                    inzwischen sehr vielseitig und reichen vom Datendiebstahl
                    bis hin zur digitalen Erpressung.
                </p>
                <p>
                    Die Medien berichten regelmäßig von Fällen, bei denen
                    große Konzerne gehackt wurden – aber auch kleine und
                    mittelständische Firmen sind beliebte Ziele für Angriffe,
                    da Datenmaterial hier im Regelfall schlechter oder gar
                    nicht geschützt ist.
                </p>
            </div>
        </Section>

        <Section eyebrow="Opfer und Mitverursacher" title="Was kostet ein Angriff?" bg="page">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-8 rounded-md shadow-card text-center border-b-2 border-brand-red">
                    <p className="font-serif text-4xl md:text-5xl font-semibold text-brand-red">
                        1,8 Mio €
                    </p>
                    <p className="text-stone-700 mt-4">
                        durchschnittlicher Schaden bei einem erfolgreichen
                        Hacker-Angriff auf ein Großunternehmen
                    </p>
                </div>
                <div className="bg-white p-8 rounded-md shadow-card text-center border-b-2 border-brand-red">
                    <p className="font-serif text-4xl md:text-5xl font-semibold text-brand-red">
                        70.000 €
                    </p>
                    <p className="text-stone-700 mt-4">
                        durchschnittlicher Schaden bei kleinen und
                        mittelständischen Unternehmen
                    </p>
                </div>
            </div>
            <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Kann man sich die Schadenhöhe ggf. noch vorstellen, die
                    einem selbst drohen kann, sind die
                    Schadenersatzforderungen, die geschädigte Dritte stellen
                    können, doch immer wieder überraschend. Man hat ja gar
                    nicht aktiv mitgewirkt, weshalb sollte man also zahlen
                    müssen?
                </p>
                <p>
                    Die Rechtsprechung vertritt in dieser Sache aber einen
                    klaren Standpunkt: Wer z. B. durch unzureichende Sicherung
                    seines Datenbestandes die Schädigung eines Dritten
                    begünstigt, ist Mitschuldiger (siehe u. a. auch
                    IT-Sicherheitsgesetz, EU Datenschutz-Grundverordnung,
                    § 202a ff StGB)!
                </p>
                <p>
                    Möchten Sie Ihr Unternehmen rundherum vor den finanziellen
                    Folgen von Cyber-Risiken schützen, müssen sowohl Eigen-
                    wie auch Fremdschaden abgesichert werden. Die
                    Versicherungswirtschaft hat entsprechend reagiert und
                    passende Tarife entwickelt.
                </p>
            </div>
        </Section>

        <Section eyebrow="Deckung" title="Was ist versichert und welche Kosten werden übernommen?">
            <div className="space-y-5 text-stone-700 text-lg leading-relaxed max-w-4xl mb-8">
                <p>
                    Versichert sind – je nach Umfang des Vertrages – die
                    gerechtfertigten Haftpflichtansprüche, die aus dem
                    Missbrauch der Daten entstanden, die in Ihrem Betrieb
                    gespeichert waren. Steht die Verpflichtung zum
                    Schadenersatz fest, leistet die Versicherung
                    Entschädigungszahlungen stets bis zur Höhe des
                    entstandenen Schadens, maximal jedoch bis zur Höhe der
                    vertraglich vereinbarten Deckungssummen.
                </p>
                <p>
                    Der Leistungsumfang einer „Cyber-Risk-Versicherung"
                    erstreckt sich primär auf die Kosten, die Ihrem Haus nach
                    einer Attacke entstehen und auf Vermögensschäden, die
                    durch „Ihre Beteiligung" Dritten zugefügt werden.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
                {covers.map(c => (
                    <div
                        key={c}
                        className="bg-white px-5 py-4 rounded-md shadow-card text-stone-900 flex items-center gap-3"
                    >
                        <span className="text-brand-red font-bold">✓</span>
                        {c}
                    </div>
                ))}
            </div>
        </Section>

        <Section eyebrow="Grenzen" title="Welche Schäden sind oft nicht versichert?" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-6">
                Auch beim Deckungsumfang einer „Cyber-Risk-Versicherung" kann
                es Ausnahmen geben. Regelmäßig sind dies z. B.:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
                {exclusions.map(e => (
                    <div
                        key={e}
                        className="bg-white px-5 py-4 rounded-md text-stone-700 flex items-center gap-3 shadow-card"
                    >
                        <span className="text-stone-400 font-bold">–</span>
                        {e}
                    </div>
                ))}
            </div>
            <p className="mt-8 text-sm text-stone-500">Quelle: VEMA</p>
        </Section>

        <CallToAction />
    </>
)

export default CyberPolice
