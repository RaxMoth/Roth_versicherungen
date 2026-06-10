import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { COMPANY } from '@/utils/company'
import { COMMON } from '@/content'
import { ROUTES } from '@/config/routes'

const CallToAction = () => {
    const { pathname } = useLocation()
    const heading = pathname.startsWith(ROUTES.FINANZ.INDEX)
        ? COMMON.cta.headingFinanz
        : COMMON.cta.headingVers

    return (
        <section
            className="bg-white border-y border-stone-200 py-16 px-6"
            aria-label="Kontaktaufnahme"
        >
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <p className="uppercase tracking-[0.2em] text-[11px] text-brand-red font-semibold mb-4">
                        <span className="inline-block w-8 h-px bg-brand-red align-middle mr-3" />
                        {COMMON.cta.eyebrow}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-stone-900 leading-tight">
                        {heading}
                    </h2>
                    <p className="mt-5 text-stone-700 leading-relaxed">
                        {COMMON.cta.body}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <a
                        href={COMPANY.phoneHref}
                        className="bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-7 py-4 rounded-sm flex items-center justify-between text-lg"
                        aria-label={`${COMMON.actions.callUs} ${COMPANY.phone}`}
                    >
                        <span>{COMPANY.phone}</span>
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <Link
                        to={ROUTES.KONTAKT}
                        className="border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition text-stone-900 font-semibold px-7 py-4 rounded-sm flex items-center justify-between text-lg"
                    >
                        <span>{COMMON.cta.sendMessage}</span>
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                    <p className="text-sm text-stone-600 mt-2">
                        {COMMON.cta.hours}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
