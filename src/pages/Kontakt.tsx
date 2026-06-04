import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import { COMPANY, IMAGES } from '../utils/company'

interface FormState {
    name: string
    company: string
    email: string
    phone: string
    contactMethod: 'email' | 'phone'
    message: string
}

const initial: FormState = {
    name: '',
    company: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: '',
}

const Kontakt: React.FC = () => {
    const [form, setForm] = useState<FormState>(initial)
    const [submitted, setSubmitted] = useState(false)

    const update = (k: keyof FormState, v: string) =>
        setForm(prev => ({ ...prev, [k]: v }))

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <PageHero
                eyebrow="Kontakt & Anfahrt"
                title="So erreichen Sie uns."
                subtitle="Persönlich im Büro in Langen, telefonisch, per E-Mail oder online – wir freuen uns auf Ihre Nachricht."
                bgImage={IMAGES.kontakt}
            />

            <Section eyebrow="Kontaktdaten" title="Unsere Daten auf einen Blick.">
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
                                Telefon:{' '}
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
                                Öffnungszeiten
                            </p>
                            <p>{COMPANY.hours}</p>
                            <p className="text-sm text-stone-500 mt-1">
                                {COMPANY.hoursExtra}
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

            <Section eyebrow="Nachricht" title="Schreiben Sie uns." bg="page">
                {submitted ? (
                    <div className="bg-white p-10 rounded-md shadow-card border-t-2 border-brand-red max-w-2xl">
                        <p className="font-serif text-2xl text-stone-900">
                            Vielen Dank für Ihre Nachricht!
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
                        <label className="flex flex-col text-sm text-stone-700 uppercase tracking-wider font-semibold">
                            Name *
                            <input
                                required
                                type="text"
                                value={form.name}
                                onChange={e => update('name', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 uppercase tracking-wider font-semibold">
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
                        <label className="flex flex-col text-sm text-stone-700 uppercase tracking-wider font-semibold">
                            E-Mail *
                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={e => update('email', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <label className="flex flex-col text-sm text-stone-700 uppercase tracking-wider font-semibold">
                            Telefon
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={e => update('phone', e.target.value)}
                                className="mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm"
                            />
                        </label>
                        <div className="md:col-span-2 flex items-center gap-8 text-sm text-stone-700">
                            <span className="uppercase tracking-wider font-semibold">
                                Kontaktweg:
                            </span>
                            <label className="flex items-center gap-2 normal-case font-normal">
                                <input
                                    type="radio"
                                    name="contactMethod"
                                    checked={form.contactMethod === 'email'}
                                    onChange={() =>
                                        update('contactMethod', 'email')
                                    }
                                />
                                E-Mail
                            </label>
                            <label className="flex items-center gap-2 normal-case font-normal">
                                <input
                                    type="radio"
                                    name="contactMethod"
                                    checked={form.contactMethod === 'phone'}
                                    onChange={() =>
                                        update('contactMethod', 'phone')
                                    }
                                />
                                Telefon
                            </label>
                        </div>
                        <label className="flex flex-col text-sm text-stone-700 uppercase tracking-wider font-semibold md:col-span-2">
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
