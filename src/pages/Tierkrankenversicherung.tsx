import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import CallToAction from '../components/CallToAction'
import { IMAGES } from '../utils/company'

const Tierkrankenversicherung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Privatkunden › Tierkrankenversicherung"
            title="Tierkrankenversicherung – sorgenfrei versichert."
            subtitle="Damit man sich im Ernstfall nur um die Gesundheit des besten Freundes sorgen muss, nicht um mögliche Kosten."
            bgImage={IMAGES.tier}
        />

        <Section eyebrow="Einführung" title="Tierbehandlungen können teuer werden.">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Damit man sich im Ernstfall nur um die Gesundheit des besten
                Freundes sorgen muss, nicht um mögliche Kosten.
                Tierbehandlungen sowie OP-Kosten können schnell sehr teuer
                werden. Hierbei spielt es oft keine Rolle, ob es sich um ein
                kleines Tier wie eine Katze oder einen Hund handelt, oder um
                ein großes Tier wie ein Pferd. Wir finden die passende
                Versicherung für ihren Begleiter.
            </p>
        </Section>

        <Section eyebrow="Zielgruppe" title="Für wen ist die Versicherung?" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Eine Tierkrankenversicherung eignet sich für jeden Halter
                eines versicherbaren Tiers, der daran interessiert ist, die
                anfallenden Behandlungskosten für sein Tier planbar und zu
                einer überschaubaren Belastung zu machen.
            </p>
        </Section>

        <Section eyebrow="Leistungen" title="Was ist versichert?">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Je nach gewähltem Versicherungsunternehmen und Tarif übernimmt
                eine Tierkrankenversicherung anfallende Kosten für medizinisch
                notwendige Behandlungen und Operationen (inkl. Vor- und
                Nachbehandlung). Die Leistung erfolgt auf Basis der
                Gebührenordnung für Tierärzte (GOT). Bis zum Wievielfachen
                des dort gelisteten Satzes geleistet wird, variiert von Tarif
                zu Tarif. Einzelne Tarife sehen auch Leistungen z. B. für
                Impfungen, Kastration, Sterilisation vor. Dies kann in Form
                eines Festzuschusses erfolgen. Auch eine generelle Obergrenze
                für die jährlich übernommenen Kosten kann in manchem Tarif
                vorgesehen sein. Diese trifft auch auf mögliche
                Selbstbeteiligungen zu.
            </p>
        </Section>

        <Section eyebrow="Ausschlüsse" title="Welche Gefahren und Schäden sind versicherbar?" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Vom Versicherungsschutz ausgeschlossen sind in der Regel
                Eingriffe, die ästhetischen Charakter haben. Auch chemische
                Kastration o. ä. sind meist vom Versicherungsschutz
                ausgeschlossen. Einzelne Anbieter übernehmen auch für einen
                festen Katalog bestimmter Krankheiten keine Kosten.
            </p>
        </Section>

        <Section eyebrow="Prämie" title="Wie ermittelt sich die Prämie?">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Die Prämie einer Tierkrankenversicherung richtet sich in
                aller Regel nach der Rasse des Tiers (z. B. Pferd, Hund,
                Katze), seinem Alter und dem gewünschten Versicherungsumfang
                (z. B. nur OP-Kosten).
            </p>
        </Section>

        <Section eyebrow="Schadenregulierung" title="Welche Zahlungen werden im Schadenfall geleistet?" bg="page">
            <p className="text-stone-700 leading-relaxed text-lg max-w-4xl">
                Die Tierkrankenversicherung übernimmt die versicherten Kosten
                und erstattet Ihnen diese nach Einreichen der Tierarztrechnung
                auf Ihr Bankkonto.
            </p>
        </Section>

        <Section eyebrow="Leistungsbeispiele" title="So teuer können Behandlungen werden.">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-2xl text-stone-900 mb-2">
                        Kreuzbandriss
                    </p>
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        1.600 €
                    </p>
                    <p className="text-stone-700 mt-3 leading-relaxed">
                        Eine der häufigsten Ursachen für operative Eingriffe
                        bei Hunden ist der Kreuzbandriss. Oft genügt bereits
                        ausgelasseneres Toben auf unebenem Untergrund und es
                        ist passiert. Für die OP und anschließende Behandlung
                        müssen in der Regel Kosten in Höhe von 1.600 Euro
                        eingeplant werden.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-md shadow-card border-b-2 border-brand-red">
                    <p className="font-serif text-2xl text-stone-900 mb-2">
                        Spielzeug gefressen
                    </p>
                    <p className="font-serif text-4xl font-semibold text-brand-red">
                        1.100 €
                    </p>
                    <p className="text-stone-700 mt-3 leading-relaxed">
                        Auch bei Katzen – egal ob Freigänger oder Stubentiger
                        – können schnell unerwartete Behandlungskosten
                        anfallen. Frisst die Katze etwas Falsches (z. B. Teile
                        eines Spielzeugs), kann dies einen Darmverschluss zur
                        Folge haben. Für OP und Behandlung sollten mit 1.100
                        Euro gerechnet werden.
                    </p>
                </div>
            </div>
        </Section>

        <Section eyebrow="Ergänzungen" title="Weitere wichtige Absicherungen." bg="page">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red">
                    <h3 className="font-serif text-2xl text-stone-900 mb-3">
                        Tierhalterhaftpflicht
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Bei Hunden, Pferden und Katzen handelt es sich im
                        Allgemeinen um Luxustiere, die keinen Betriebszweck
                        erfüllen. Da die Privathaftpflicht aufgrund des
                        höheren Gefahrenpotenzials keinen Schutz für Hunde
                        und Pferde bieten kann, sollten Sie für diese
                        Tierrassen unbedingt an eine
                        Tierhalterhaftpflichtversicherung denken. Nur über
                        diese sind Sie vor Schadenersatzforderungen Dritter
                        geschützt, die Ihr Tier verursachen könnte.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red">
                    <h3 className="font-serif text-2xl text-stone-900 mb-3">
                        Rechtsschutz
                    </h3>
                    <p className="text-stone-700 leading-relaxed">
                        Wird Ihr Tier durch einen Dritten verletzt, möchten
                        Sie sicherlich zumindest die Behandlungskosten
                        erstattet bekommen. Diese können, je nach Rasse des
                        Tiers, höher ausfallen als der Anschaffungspreis. Da
                        in manchem Juristenkopf noch die Altregelungen des
                        § 90a BGB verhaftet sind, nach denen Tiere lediglich
                        als Sachen mit besonderen Rechten angesehen wurden,
                        kann es hinsichtlich des Schadenersatzzuspruches
                        durchaus Probleme geben.
                    </p>
                </div>
            </div>
            <p className="mt-8 text-sm text-stone-500">Quelle: VEMA</p>
        </Section>

        <CallToAction />
    </>
)

export default Tierkrankenversicherung
