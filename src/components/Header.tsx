import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, Clock, ChevronDown } from 'lucide-react'
import logoImage from '../assets/Roth_versicherungen_logo.png'
import { COMPANY } from '../utils/company'

type DropdownKey = 'A' | 'B' | 'C'

const dropdownTitles: Record<DropdownKey, string> = {
    A: 'Roth Versicherungen',
    B: 'Roth Finanz',
    C: 'Allgemeines',
}

const dropdownLinks: Record<DropdownKey, { to: string; title: string }[]> = {
    A: [
        { to: '/roth-versicherungen', title: 'Übersicht' },
        { to: '/roth-versicherungen/firmenkunden', title: 'Firmenkunden' },
        {
            to: '/roth-versicherungen/firmenkunden/cyber-police',
            title: 'Cyber-Police',
        },
        { to: '/roth-versicherungen/privatkunden', title: 'Privatkunden' },
        {
            to: '/roth-versicherungen/privatkunden/tierkrankenversicherung',
            title: 'Tierkrankenversicherung',
        },
        {
            to: '/roth-versicherungen/wichtige-hinweise',
            title: 'Wichtige Hinweise',
        },
        { to: '/roth-versicherungen/jobs', title: 'Jobs' },
        { to: '/erstinformation', title: 'Erstinformation' },
    ],
    B: [
        { to: '/roth-finanz', title: 'Übersicht' },
        { to: '/roth-finanz/altersversorgung', title: 'Altersversorgung' },
        {
            to: '/roth-finanz/sterbegeldversicherung',
            title: 'Sterbegeldversicherung',
        },
    ],
    C: [
        { to: '/team', title: 'Unser Team' },
        { to: '/kontakt-anfahrt', title: 'Kontakt & Anfahrt' },
        { to: '/online-beratung', title: 'Online Beratung' },
        { to: '/service-app', title: 'Service App' },
        { to: '/datenschutz', title: 'Datenschutz' },
        { to: '/impressum', title: 'Impressum' },
    ],
}

const Header: React.FC = () => {
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

    return (
        <header
            ref={navRef}
            className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm"
        >
            {/* Top contact strip */}
            <div className="bg-stone-900 text-white text-xs md:text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center gap-4 flex-wrap">
                    <p className="text-stone-200 hidden sm:block">
                        Ihr Versicherungs­makler in Langen seit{' '}
                        <span className="text-white font-semibold">1907</span>
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
                            <span>Mo–Fr 9:00–17:00 Uhr</span>
                        </span>
                    </div>
                </div>
            </div>

            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:flex md:justify-between md:items-center"
                aria-label="Hauptnavigation"
            >
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center"
                        onClick={() => setOpenKey(null)}
                        aria-label="Roth Versicherungen Startseite"
                    >
                        <img
                            src={logoImage}
                            alt=""
                            className="h-12 md:h-14 w-auto"
                        />
                        <span className="sr-only">Roth Versicherungen</span>
                    </Link>

                    <button
                        type="button"
                        className="md:hidden text-stone-900 p-2 -mr-2"
                        aria-label={
                            mobileOpen ? 'Menü schließen' : 'Menü öffnen'
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
                            to="/"
                            onClick={() => setOpenKey(null)}
                            className={`block px-4 py-3 text-[15px] font-medium transition rounded-sm ${
                                pathname === '/'
                                    ? 'text-brand-red'
                                    : 'text-stone-900 hover:text-brand-red'
                            }`}
                            aria-current={pathname === '/' ? 'page' : undefined}
                        >
                            Willkommen
                        </Link>
                    </li>
                    {(['A', 'B', 'C'] as DropdownKey[]).map(point => (
                        <li className="relative" key={point}>
                            <button
                                type="button"
                                onClick={() => toggle(point)}
                                aria-haspopup="true"
                                aria-expanded={openKey === point}
                                className={`w-full md:w-auto text-left px-4 py-3 text-[15px] font-medium transition rounded-sm inline-flex items-center gap-1 ${
                                    openKey === point
                                        ? 'text-brand-red'
                                        : 'text-stone-900 hover:text-brand-red'
                                }`}
                            >
                                {dropdownTitles[point]}
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${
                                        openKey === point ? 'rotate-180' : ''
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                            {openKey === point && (
                                <ul
                                    className="md:absolute md:right-0 md:w-72 mt-1 bg-white shadow-card border-t-2 border-brand-red z-20 list-none rounded-b-md overflow-hidden"
                                    role="menu"
                                >
                                    {dropdownLinks[point].map(link => (
                                        <li key={link.title} role="none">
                                            <Link
                                                to={link.to}
                                                role="menuitem"
                                                className="block px-5 py-3 text-[14px] text-stone-900 hover:bg-brand-page hover:text-brand-red border-b border-brand-line last:border-b-0"
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li className="md:ml-3">
                        <Link
                            to="/kontakt-anfahrt"
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

export default Header
