import { PageHero, Section, ContactForm } from '@/components'
import { COMPANY, IMAGES } from '@/utils/company'
import { KONTAKT } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const Kontakt = () => {
    usePageMeta(KONTAKT.meta)

    return (
        <>
            <PageHero
                eyebrow={KONTAKT.hero.eyebrow}
                title={KONTAKT.hero.title}
                bgImage={IMAGES.kontakt}
            />

            <Section
                eyebrow={KONTAKT.contact.eyebrow}
                title={KONTAKT.contact.title}
            >
                <p className="text-stone-700 leading-relaxed text-lg max-w-4xl mb-10">
                    {KONTAKT.contact.intro}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    <ContactDetails />
                    <Map />
                </div>
            </Section>

            <Section
                eyebrow={KONTAKT.form.eyebrow}
                title={KONTAKT.form.title}
                bg="page"
            >
                <p className="text-stone-700 leading-relaxed text-lg mb-8 max-w-3xl">
                    {KONTAKT.form.intro}
                </p>
                <ContactForm />
            </Section>
        </>
    )
}

const ContactDetails = () => (
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
                {KONTAKT.contact.hoursLabel}
            </p>
            <p>{KONTAKT.contact.hours}</p>
            <p className="text-sm text-stone-500 mt-1">
                {KONTAKT.contact.hoursExtra}
            </p>
        </div>
    </div>
)

const Map = () => (
    <div className="overflow-hidden rounded-md shadow-card">
        <iframe
            title={KONTAKT.contact.mapTitle}
            src="https://maps.google.com/maps?q=Bahnstra%C3%9Fe%2095%2C%2063225%20Langen&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-96 border-0"
            loading="lazy"
        />
    </div>
)

export default Kontakt
