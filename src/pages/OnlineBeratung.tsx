import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { IMAGES } from '../utils/company'

const OnlineBeratung: React.FC = () => (
    <>
        <PageHero
            eyebrow="Online Beratung"
            title="Wir beraten Sie dort, wo Sie sind."
            bgImage={IMAGES.online}
        />

        <Section eyebrow="Flexibel" title="Sie entscheiden, wann und wo.">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed max-w-4xl">
                <p>
                    Wir sind für Sie da und beraten Sie dort, wo Sie uns
                    brauchen. Bei uns im Büro, aber auch gerne bei Ihnen vor
                    Ort oder einfach und unkompliziert online.{' '}
                    <strong className="text-stone-900">Sie entscheiden.</strong>
                </p>
                <p>
                    Einfach auf den Link klicken und Ihren Wunschtermin
                    eingeben oder wenn Sie bereits eine Meeting-ID erhalten
                    haben, diese eingeben.
                </p>
            </div>
        </Section>

        <Section eyebrow="Jetzt starten" title="Termin vereinbaren." bg="page">
            <p className="text-stone-700 leading-relaxed text-lg mb-8 max-w-3xl">
                Geben Sie einen Wunschtermin ein oder nutzen Sie eine bereits
                von uns erhaltene Meeting-ID.
            </p>
            <Link
                to="/kontakt-anfahrt"
                className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm"
            >
                Online Beratung anfragen →
            </Link>
        </Section>
    </>
)

export default OnlineBeratung
