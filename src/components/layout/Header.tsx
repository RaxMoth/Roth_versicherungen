import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import logoImage from '@/assets/Roth_versicherungen_logo.png'
import finanzLogo from '@/assets/roth-finanz-content.png'
import { COMPANY } from '@/utils/company'
import { ROUTES } from '@/config/routes'
import { COMMON } from '@/content'

type DropdownKey = 'V' | 'F' | 'A'

interface NavLink {
    to: string
    title: string
}

const sections: Record<
    DropdownKey,
    { label: string; links: NavLink[]; isActive: (path: string) => boolean }
> = {
    V: {
        label: COMMON.nav.rothVersicherungen,
        isActive: p => p.startsWith('/roth-versicherungen'),
        links: [
            { to: ROUTES.VERSICHERUNGEN.INDEX, title: 'Übersicht' },
            { to: ROUTES.VERSICHERUNGEN.FIRMENKUNDEN, title: 'Firmenkunden' },
            { to: ROUTES.VERSICHERUNGEN.CYBER, title: 'Cyber-Police' },
            { to: ROUTES.VERSICHERUNGEN.PRIVATKUNDEN, title: 'Privatkunden' },
            {
                to: ROUTES.VERSICHERUNGEN.TIER,
                title: 'Tierkrankenversicherung',
            },
            { to: ROUTES.VERSICHERUNGEN.HINWEISE, title: 'Wichtige Hinweise' },
            { to: ROUTES.VERSICHERUNGEN.JOBS, title: 'Jobs' },
            { to: ROUTES.VERSICHERUNGEN.ERSTINFO, title: 'Erstinformation' },
            { to: ROUTES.VERSICHERUNGEN.DATENSCHUTZ, title: 'Datenschutz' },
            { to: ROUTES.VERSICHERUNGEN.IMPRESSUM, title: 'Impressum' },
        ],
    },
    F: {
        label: COMMON.nav.rothFinanz,
        isActive: p => p.startsWith('/roth-finanz'),
        links: [
            { to: ROUTES.FINANZ.INDEX, title: 'Übersicht' },
            { to: ROUTES.FINANZ.ALTERSVERSORGUNG, title: 'Altersversorgung' },
            { to: ROUTES.FINANZ.STERBEGELD, title: 'Sterbegeldversicherung' },
            { to: ROUTES.FINANZ.ERSTINFO, title: 'Erstinformation' },
            { to: ROUTES.FINANZ.DATENSCHUTZ, title: 'Datenschutz' },
            { to: ROUTES.FINANZ.IMPRESSUM, title: 'Impressum' },
        ],
    },
    A: {
        label: COMMON.nav.allgemein,
        isActive: p =>
            [ROUTES.TEAM, ROUTES.KONTAKT, ROUTES.ONLINE, ROUTES.SERVICE_APP].some(
                r => p.startsWith(r),
            ),
        links: [
            { to: ROUTES.TEAM, title: 'Unser Team' },
            { to: ROUTES.KONTAKT, title: 'Kontakt & Anfahrt' },
            { to: ROUTES.ONLINE, title: 'Online Beratung' },
            { to: ROUTES.SERVICE_APP, title: 'Service App' },
        ],
    },
}

const KEYS = Object.keys(sections) as DropdownKey[]

const Header = () => {
    const [openKey, setOpenKey] = useState<DropdownKey | null>(null)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { pathname } = useLocation()
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setOpenKey(null)
        setMobileOpen(false)
    }, [pathname])

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenKey(null)
            }
        }
        const onEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpenKey(null)
                setMobileOpen(false)
            }
        }
        document.addEventListener('mousedown', onClickOutside)
        document.addEventListener('keydown', onEscape)
        return () => {
            document.removeEventListener('mousedown', onClickOutside)
            document.removeEventListener('keydown', onEscape)
        }
    }, [])

    const toggle = (k: DropdownKey) =>
        setOpenKey(prev => (prev === k ? null : k))

    const isFinanz = pathname.startsWith(ROUTES.FINANZ.INDEX)

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm"
        >
            <ContactStrip />

            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:flex md:justify-between md:items-center"
                aria-label={COMMON.nav.primary}
            >
                <div className="flex justify-between items-center">
                    <Link
                        to={ROUTES.HOME}
                        className="flex items-center"
                        onClick={() => setOpenKey(null)}
                        aria-label={COMMON.nav.homeLogo}
                    >
                        <img
                            src={isFinanz ? finanzLogo : logoImage}
                            alt=""
                            className="h-12 md:h-14 w-auto"
                        />
                        <span className="sr-only">
                            {isFinanz ? 'Roth Finanz' : 'Roth Versicherungen'}
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="md:hidden text-stone-900 p-2 -mr-2"
                        aria-label={
                            mobileOpen
                                ? COMMON.nav.closeMenu
                                : COMMON.nav.openMenu
                        }
                        aria-expanded={mobileOpen}
                        aria-controls="primary-menu"
                        onClick={() => setMobileOpen(o => !o)}
                    >
                        {mobileOpen ? (
                            <X className="h-7 w-7" />
                        ) : (
                            <Menu className="h-7 w-7" />
                        )}
                    </button>
                </div>

                <ul
                    id="primary-menu"
                    className={`${
                        mobileOpen ? 'block' : 'hidden'
                    } md:flex md:items-center md:gap-1 list-none mt-3 md:mt-0`}
                >
                    <li>
                        <Link
                            to={ROUTES.HOME}
                            onClick={() => setOpenKey(null)}
                            className={`block px-4 py-3 text-[15px] font-medium transition rounded-sm ${
                                pathname === ROUTES.HOME
                                    ? 'text-brand-red'
                                    : 'text-stone-900 hover:text-brand-red'
                            }`}
                            aria-current={
                                pathname === ROUTES.HOME ? 'page' : undefined
                            }
                        >
                            {COMMON.nav.welcome}
                        </Link>
                    </li>
                    {KEYS.map(key => {
                        const section = sections[key]
                        const isOpen = openKey === key
                        const isActive = section.isActive(pathname)
                        return (
                            <li className="relative" key={key}>
                                <button
                                    type="button"
                                    onClick={() => toggle(key)}
                                    aria-haspopup="true"
                                    aria-expanded={isOpen}
                                    className={`w-full md:w-auto text-left px-4 py-3 text-[15px] font-medium transition rounded-sm inline-flex items-center gap-1 ${
                                        isOpen || isActive
                                            ? 'text-brand-red'
                                            : 'text-stone-900 hover:text-brand-red'
                                    }`}
                                >
                                    {section.label}
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                        aria-hidden="true"
                                    />
                                </button>
                                {isOpen && (
                                    <ul
                                        className="md:absolute md:right-0 md:w-72 mt-1 bg-white shadow-card border-t-2 border-brand-red z-20 list-none rounded-b-md overflow-hidden"
                                        role="menu"
                                    >
                                        {section.links.map(link => (
                                            <li key={link.title} role="none">
                                                <Link
                                                    to={link.to}
                                                    role="menuitem"
                                                    className={`block px-5 py-3 text-[14px] border-b border-brand-line last:border-b-0 ${
                                                        pathname === link.to
                                                            ? 'bg-brand-page text-brand-red font-semibold'
                                                            : 'text-stone-900 hover:bg-brand-page hover:text-brand-red'
                                                    }`}
                                                >
                                                    {link.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    })}
                    <li className="md:ml-3">
                        <Link
                            to={ROUTES.KONTAKT}
                            onClick={() => setOpenKey(null)}
                            className="block md:inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-5 py-3 text-[14px] rounded-sm text-center"
                        >
                            Termin vereinbaren
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const ContactStrip = () => (
    <div className="bg-stone-900 text-white text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center gap-4 flex-wrap">
            <p className="text-stone-200 hidden sm:block">
                Versicherungen{' '}
                <span className="text-white font-semibold">seit 1907</span> ·
                Finanz{' '}
                <span className="text-white font-semibold">seit 1970</span> ·
                in Langen
            </p>
            <div className="flex items-center gap-5">
                <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-2 hover:text-red-400 transition"
                    aria-label={`Anruf an ${COMPANY.phone}`}
                >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{COMPANY.phone}</span>
                </a>
                <a
                    href={`mailto:${COMPANY.email}`}
                    className="hidden md:flex items-center gap-2 hover:text-red-400 transition"
                    aria-label={`E-Mail an ${COMPANY.email}`}
                >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{COMPANY.email}</span>
                </a>
                <span className="hidden lg:flex items-center gap-2 text-stone-300">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{COMMON.header.hoursShort}</span>
                </span>
            </div>
        </div>
    </div>
)

export default Header
