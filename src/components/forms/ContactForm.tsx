import { useState, type FormEvent, type ChangeEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { KONTAKT } from '@/content'

export interface ContactFormState {
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

const INITIAL: ContactFormState = {
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

interface ContactFormProps {
    onSubmit?: (data: ContactFormState) => void | Promise<void>
}

const inputCls =
    'mt-2 border border-stone-300 px-4 py-3 text-base font-normal text-stone-900 focus:border-brand-red focus:outline-none rounded-sm'

/**
 * Self-contained contact form. Manages its own state.
 * Pass `onSubmit` to plug in a backend integration.
 */
const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const [form, setForm] = useState<ContactFormState>(INITIAL)
    const [submitted, setSubmitted] = useState(false)

    const update = <K extends keyof ContactFormState>(
        key: K,
        value: ContactFormState[K],
    ) => setForm(prev => ({ ...prev, [key]: value }))

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await onSubmit?.(form)
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="bg-white p-10 rounded-md shadow-card border-t-2 border-brand-red max-w-2xl">
                <p className="font-serif text-2xl text-stone-900">
                    {KONTAKT.form.success.title}
                </p>
                <p className="mt-3 text-stone-700">
                    {KONTAKT.form.success.body}
                </p>
            </div>
        )
    }

    const { labels } = KONTAKT.form

    return (
        <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5 bg-white p-8 rounded-md shadow-card border-t-2 border-brand-red"
            noValidate
        >
            <TextField
                label={labels.name}
                required
                value={form.name}
                onChange={e => update('name', e.target.value)}
            />
            <TextField
                label={labels.company}
                value={form.company}
                onChange={e => update('company', e.target.value)}
            />
            <TextField
                label={labels.address}
                full
                value={form.address}
                onChange={e => update('address', e.target.value)}
            />
            <TextField
                label={labels.email}
                required
                type="email"
                value={form.email}
                onChange={e => update('email', e.target.value)}
            />
            <TextField
                label={labels.phone}
                required
                type="tel"
                value={form.phone}
                onChange={e => update('phone', e.target.value)}
            />

            <fieldset className="md:col-span-2 space-y-2 text-sm text-stone-700">
                <legend className="font-semibold mb-2">
                    {labels.preferredContact}
                </legend>
                <Radio
                    name="contactMethod"
                    checked={form.contactMethod === 'email'}
                    onChange={() => update('contactMethod', 'email')}
                    label={labels.emailOption}
                />
                <Radio
                    name="contactMethod"
                    checked={form.contactMethod === 'phone'}
                    onChange={() => update('contactMethod', 'phone')}
                    label={labels.phoneOption}
                />
            </fieldset>

            <label className="flex flex-col text-sm text-stone-700 font-semibold md:col-span-2">
                {labels.message}
                <textarea
                    required
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    rows={6}
                    className={inputCls}
                />
            </label>

            <TextField
                label={labels.appointment}
                full
                placeholder={labels.appointmentPlaceholder}
                value={form.appointment}
                onChange={e => update('appointment', e.target.value)}
            />

            <label className="flex items-start gap-3 text-sm text-stone-700 md:col-span-2 font-normal leading-relaxed">
                <input
                    required
                    type="checkbox"
                    className="mt-1"
                    checked={form.consent}
                    onChange={e => update('consent', e.target.checked)}
                />
                <span>{labels.consent}</span>
            </label>

            <p className="md:col-span-2 text-xs text-stone-500">
                {labels.requiredHint}
            </p>

            <div className="md:col-span-2">
                <button
                    type="submit"
                    className="bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm inline-flex items-center gap-2"
                >
                    {labels.submit}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </form>
    )
}

interface TextFieldProps {
    label: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    type?: string
    full?: boolean
    placeholder?: string
}

const TextField = ({
    label,
    value,
    onChange,
    required,
    type = 'text',
    full,
    placeholder,
}: TextFieldProps) => (
    <label
        className={`flex flex-col text-sm text-stone-700 font-semibold ${
            full ? 'md:col-span-2' : ''
        }`}
    >
        {label}
        <input
            type={type}
            value={value}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            className={inputCls}
        />
    </label>
)

interface RadioProps {
    name: string
    checked: boolean
    onChange: () => void
    label: string
}

const Radio = ({ name, checked, onChange, label }: RadioProps) => (
    <label className="flex items-center gap-2 font-normal">
        <input
            type="radio"
            name={name}
            checked={checked}
            onChange={onChange}
        />
        {label}
    </label>
)

export default ContactForm
