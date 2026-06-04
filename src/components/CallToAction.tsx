import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { COMPANY } from '../utils/company'

const CallToAction: React.FC = () => (
    <section
        className="bg-white border-y border-stone-200 py-16 px-6"
        aria-label="Kontaktaufnahme"
    >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
                <p className="uppercase tracking-[0.2em] text-[11px] text-brand-red font-semibold mb-4">
                    <span className="inline-block w-8 h-px bg-brand-red align-middle mr-3" />
                    Sprechen Sie uns an
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-tight">
                    Persönliche Beratung – seit 1907.
                </h2>
                <p className="mt-5 text-stone-700 leading-relaxed">
                    Ob im Büro in Langen, bei Ihnen vor Ort oder online – wir
                    nehmen uns Zeit für Ihr Anliegen. Rufen Sie uns an oder
                    schreiben Sie uns eine Nachricht.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <a
                    href={COMPANY.phoneHref}
                    className="bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm flex items-center justify-between text-lg"
                    aria-label={`Anrufen unter ${COMPANY.phone}`}
                >
                    <span>{COMPANY.phone}</span>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
                <Link
                    to="/kontakt-anfahrt"
                    className="border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition text-stone-900 font-semibold px-7 py-4 rounded-sm flex items-center justify-between text-lg"
                >
                    <span>Nachricht schreiben</span>
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <p className="text-sm text-stone-600 mt-2">
                    Bürozeiten: Montag bis Freitag, 9:00 – 17:00 Uhr
                </p>
            </div>
        </div>
    </section>
)

export default CallToAction
