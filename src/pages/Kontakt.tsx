import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { COMPANY, IMAGES } from '../utils/company'

interface FormState {
    name: string
    company: string
    address: string
    email: string
    phone: string
    contactMethod: 'email' | 'phone'
    message: string
    appointment: string
    consent: boolean
}

const initial: FormState = {
    name: '',
    company: '',
    address: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: '',
    appointment: '',
    consent: false,
}

const Kontakt: React.FC = () => {
    const [form, setForm] = useState<FormState>(initial)
    const [submitted, setSubmitted] = useState(false)

    const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
        setForm(prev => ({ ...prev, [k]: v }))

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <PageHero
                eyebrow="Kontakt & Anfahrt"
                title="Sie erreichen uns auf vielen Wegen."
                bgImage={IMAGES.kontakt}
            />

            <Section
                eyebrow="Beratungsservice"
                title="Profitieren Sie ab der ersten Kontaktaufnahme."
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-10">
                    Profitieren Sie ab der ersten Kontaktaufnahme von unserem
                    professionellen Beratungsservice. Wir nehmen uns Zeit für
                    Sie und freuen uns auf Ihre ganz speziellen Aufgaben.
                    Bitte nennen Sie uns stichwortartig Ihre Beratungswünsche
                    oder Fragen in dem vorbereiteten Kontaktformular. Hier
                    können Sie auch mögliche Terminwünsche vermerken. Wir
                    melden uns umgehend bei Ihnen.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-5 text-stone-700">
                        <p className="font-serif text-xl text-stone-900">
                            {COMPANY.name}
                            <br />
                            {COMPANY.finanzName}
                        </p>
                        <p>
                            {COMPANY.street}
                            <br />
                            {COMPANY.city}
                        </p>
                        <div className="space-y-1">
                            <p>
                                Fon:{' '}
                                <a
                                    href={COMPANY.phoneHref}
                                    className="text-brand-red font-semibold"
                                >
                                    {COMPANY.phone}
                                </a>
                            </p>
                            <p>Fax: {COMPANY.fax}</p>
                            <p>
                                E-Mail:{' '}
                                <a
                                    href={`mailto:${COMPANY.email}`}
                                    className="text-brand-red"
                                >
                                    {COMPANY.email}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={`mailto:${COMPANY.emailFinanz}`}
                                    className="text-brand-red"
                                >
                                    {COMPANY.emailFinanz}
                                </a>
                            </p>
                        </div>
                        <div className="pt-4 border-t border-stone-200">
                            <p className="uppercase tracking-wider text-xs text-brand-red font-semibold mb-2">
                                Unsere Geschäftszeiten
                            </p>
                            <p>Montag – Freitag: 9:00 – 17:00 Uhr</p>
                            <p className="text-sm text-stone-500 mt-1">
                                Besprechungstermine außerhalb der
                                Geschäftszeiten sind jederzeit nach Absprache
                                möglich.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-md shadow-card">
                        <iframe
                            title="Anfahrt zu Roth Versicherungen"
                            src="https://maps.google.com/maps?q=Bahnstra%C3%9Fe%2095%2C%2063225%20Langen&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-96 border-0"
                            loading="lazy"
                        />
                    </div>
                </div>
            </Section>

            <Section
                eyebrow="Kontaktformular"
                title="Fragen, Terminvereinbarung oder Schadensmeldung?"
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg mb-8 max-w-3xl">
                    Sie haben Fragen zu unseren Versicherungsdienstleistungen
                    oder möchten einen Termin für einen Policen-Check
                    vereinbaren? Sie möchten einen Schaden melden? Nehmen Sie
                    Kontakt zu uns auf!
                </p>

                {submitted ? (
                    <div className="bg-white p-10 rounded-md shadow-card border-t-2 border-brand-red max-w-2xl">
                        <p className="font-serif text-2xl text-stone-900">
                            Ihre Formularnachricht wurde erfolgreich
                            versendet.
                        </p>
                        <p className="mt-3 text-stone-700">
                            Wir melden uns in Kürze bei Ihnen.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={onSubmit}
                        className="grid md:grid-cols-2 gap-5 bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red"
                    >
                        <label className="flex flex-col text-sm text-stone-700 font-semibold">
                            Name *
                            <input
                                required
                                type="text"
                                value={form.name}
                                onChange={e => update('name', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold">
                            Firma
                            <input
                                type="text"
                                value={form.company}
                                onChange={e =>
                                    update('company', e.target.value)
                                }
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold md:col-span-2">
                            Adresse
                            <input
                                type="text"
                                value={form.address}
                                onChange={e =>
                                    update('address', e.target.value)
                                }
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold">
                            E-Mail-Adresse *
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={e => update('email', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold">
                            Telefon *
                            <input
                                required
                                type="tel"
                                value={form.phone}
                                onChange={e => update('phone', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <div className="md:col-span-2 space-y-2 text-sm text-stone-700">
                            <label className="flex items-center gap-2 font-normal">
                                <input
                                    type="radio"
                                    name="contactMethod"
                                    checked={form.contactMethod === 'email'}
                                    onChange={() =>
                                        update('contactMethod', 'email')
                                    }
                                />
                                Bitte kontaktieren Sie mich per E-Mail
                            </label>
                            <label className="flex items-center gap-2 font-normal">
                                <input
                                    type="radio"
                                    name="contactMethod"
                                    checked={form.contactMethod === 'phone'}
                                    onChange={() =>
                                        update('contactMethod', 'phone')
                                    }
                                />
                                Bitte kontaktieren Sie mich telefonisch
                            </label>
                        </div>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold md:col-span-2">
                            Nachricht *
                            <textarea
                                required
                                value={form.message}
                                onChange={e =>
                                    update('message', e.target.value)
                                }
                                rows={6}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 font-semibold md:col-span-2">
                            Terminwunsch
                            <input
                                type="text"
                                placeholder="z. B. nächste Woche vormittags"
                                value={form.appointment}
                                onChange={e =>
                                    update('appointment', e.target.value)
                                }
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex items-start gap-3 text-sm text-stone-700 md:col-span-2 font-normal leading-relaxed">
                            <input
                                required
                                type="checkbox"
                                className="mt-1"
                                checked={form.consent}
                                onChange={e =>
                                    update('consent', e.target.checked)
                                }
                            />
                            <span>
                                Hiermit erkläre ich mich einverstanden, dass
                                meine in das Kontaktformular eingegebenen
                                Daten elektronisch gespeichert und zum Zweck
                                der Kontaktaufnahme verarbeitet und genutzt
                                werden. Mir ist bekannt, dass ich meine
                                Einwilligung jederzeit widerrufen kann.
                            </span>
                        </label>
                        <p className="md:col-span-2 text-xs text-stone-500">
                            Hinweis: Felder, die mit * bezeichnet sind, sind
                            Pflichtfelder.
                        </p>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm inline-flex items-center gap-2"
                            >
                                Nachricht senden
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                )}
            </Section>
        </>
    )
}

export default Kontakt
