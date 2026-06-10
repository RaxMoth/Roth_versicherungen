import { Link } from 'react-router-dom'
import logoImage from '@/assets/Roth_versicherungen_logo.png'
import { COMPANY } from '@/utils/company'
import { ROUTES } from '@/config/routes'
import { COMMON } from '@/content'

const linksVersicherungen: [string, string][] = [
    [ROUTES.VERSICHERUNGEN.FIRMENKUNDEN, 'Firmenkunden'],
    [ROUTES.VERSICHERUNGEN.PRIVATKUNDEN, 'Privatkunden'],
    [ROUTES.VERSICHERUNGEN.HINWEISE, 'Wichtige Hinweise'],
    [ROUTES.VERSICHERUNGEN.JOBS, 'Jobs'],
    [ROUTES.VERSICHERUNGEN.ERSTINFO, 'Erstinformation'],
    [ROUTES.VERSICHERUNGEN.DATENSCHUTZ, 'Datenschutz'],
    [ROUTES.VERSICHERUNGEN.IMPRESSUM, 'Impressum'],
]

const linksFinanz: [string, string][] = [
    [ROUTES.FINANZ.ALTERSVERSORGUNG, 'Altersversorgung'],
    [ROUTES.FINANZ.STERBEGELD, 'Sterbegeldversicherung'],
    [ROUTES.FINANZ.ERSTINFO, 'Erstinformation'],
    [ROUTES.FINANZ.DATENSCHUTZ, 'Datenschutz'],
    [ROUTES.FINANZ.IMPRESSUM, 'Impressum'],
]

const linksAllgemein: [string, string][] = [
    [ROUTES.TEAM, 'Unser Team'],
    [ROUTES.KONTAKT, 'Kontakt & Anfahrt'],
    [ROUTES.ONLINE, 'Online Beratung'],
    [ROUTES.SERVICE_APP, 'Service App'],
    [ROUTES.SITEMAP, 'Sitemap'],
]

const Footer = () => (
    <footer className="bg-stone-900 text-white" aria-label={COMMON.nav.footer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-4 gap-10">
                <FooterIdentity />
                <FooterNavColumn
                    heading={COMMON.footer.title.rothVersicherungen}
                    subtitle={COMPANY.name}
                    links={linksVersicherungen}
                    email={COMPANY.email}
                />
                <FooterNavColumn
                    heading={COMMON.footer.title.rothFinanz}
                    subtitle={COMPANY.finanzName}
                    links={linksFinanz}
                    email={COMPANY.emailFinanz}
                />
                <FooterRightColumn links={linksAllgemein} />
            </div>

            <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-300">
                <p>
                    © {new Date().getFullYear()} {COMPANY.name} ·{' '}
                    {COMPANY.finanzName} {COMMON.footer.copyrightSuffix}
                </p>
                <p>{COMMON.footer.license}</p>
            </div>
        </div>
    </footer>
)

const FooterIdentity = () => (
    <div className="space-y-4">
        <div className="bg-white inline-flex p-3 rounded">
            <img
                src={logoImage}
                alt={COMMON.footer.logoAlt}
                className="h-12 w-auto"
            />
        </div>
        <p className="text-sm text-stone-200">{COMPANY.tagline}</p>
        <address className="not-italic text-sm text-stone-200 leading-relaxed pt-2">
            {COMPANY.street}
            <br />
            {COMPANY.city}
            <br />
            Tel.:{' '}
            <a
                href={COMPANY.phoneHref}
                className="text-white hover:text-red-400 underline-offset-2 hover:underline"
            >
                {COMPANY.phone}
            </a>
            <br />
            Fax: {COMPANY.fax}
        </address>
    </div>
)

interface FooterNavProps {
    heading: string
    subtitle: string
    links: [string, string][]
    email: string
}

const FooterNavColumn = ({ heading, subtitle, links, email }: FooterNavProps) => (
    <nav aria-label={heading}>
        <h3 className="font-serif text-lg text-white mb-3">{heading}</h3>
        <div
            className="w-10 h-[2px] mb-4"
            style={{ background: '#C8281A' }}
        />
        <p className="text-xs text-stone-300 mb-3">{subtitle}</p>
        <ul className="space-y-2 text-sm list-none">
            {links.map(([to, label]) => (
                <li key={to}>
                    <Link
                        to={to}
                        className="text-stone-200 hover:text-white hover:underline underline-offset-2 transition"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
        <p className="mt-3 text-xs text-stone-400">
            <a href={`mailto:${email}`} className="hover:text-white">
                {email}
            </a>
        </p>
    </nav>
)

const FooterRightColumn = ({ links }: { links: [string, string][] }) => (
    <div>
        <h3 className="font-serif text-lg text-white mb-3">
            {COMMON.footer.title.allgemein}
        </h3>
        <div className="w-10 h-[2px] mb-4" style={{ background: '#C8281A' }} />
        <ul className="space-y-2 text-sm list-none">
            {links.map(([to, label]) => (
                <li key={to}>
                    <Link
                        to={to}
                        className="text-stone-200 hover:text-white hover:underline underline-offset-2 transition"
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>

        <h3 className="font-serif text-lg text-white mt-7 mb-3">
            {COMMON.footer.title.hours}
        </h3>
        <div className="w-10 h-[2px] mb-4" style={{ background: '#C8281A' }} />
        <dl className="space-y-2 text-sm">
            <div>
                <dt className="font-semibold text-white">
                    {COMMON.footer.hoursTable.weekdays}
                </dt>
                <dd className="text-stone-200">
                    {COMMON.footer.hoursTable.weekdaysValue}
                </dd>
            </div>
            <div>
                <dt className="font-semibold text-white">
                    {COMMON.footer.hoursTable.weekend}
                </dt>
                <dd className="text-stone-200">
                    {COMMON.footer.hoursTable.weekendValue}
                </dd>
            </div>
        </dl>
    </div>
)

export default Footer
