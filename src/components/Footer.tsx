import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Roth_versicherungen_logo.png'
import { COMPANY } from '../utils/company'

const Footer: React.FC = () => (
    <footer className="bg-stone-900 text-white" aria-label="Seitenfuß">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-4 gap-10">
                {/* Identity column */}
                <div className="space-y-4">
                    <div className="bg-white inline-flex p-3 rounded">
                        <img
                            src={logoImage}
                            alt="Roth Versicherungen Logo"
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

                {/* Roth Versicherungen column */}
                <nav aria-label="Roth Versicherungen Links">
                    <h3 className="font-serif text-lg text-white mb-3">
                        Roth Versicherungen
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-4"
                        style={{ background: '#C8281A' }}
                    />
                    <p className="text-xs text-stone-300 mb-3">
                        {COMPANY.name}
                    </p>
                    <ul className="space-y-2 text-sm list-none">
                        {[
                            ['/roth-versicherungen/firmenkunden', 'Firmenkunden'],
                            ['/roth-versicherungen/privatkunden', 'Privatkunden'],
                            [
                                '/roth-versicherungen/wichtige-hinweise',
                                'Wichtige Hinweise',
                            ],
                            ['/roth-versicherungen/jobs', 'Jobs'],
                            [
                                '/roth-versicherungen/erstinformation',
                                'Erstinformation',
                            ],
                            [
                                '/roth-versicherungen/datenschutz',
                                'Datenschutz',
                            ],
                            ['/roth-versicherungen/impressum', 'Impressum'],
                        ].map(([to, label]) => (
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
                        <a
                            href={`mailto:${COMPANY.email}`}
                            className="hover:text-white"
                        >
                            {COMPANY.email}
                        </a>
                    </p>
                </nav>

                {/* Roth Finanz column */}
                <nav aria-label="Roth Finanz Links">
                    <h3 className="font-serif text-lg text-white mb-3">
                        Roth Finanz
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-4"
                        style={{ background: '#C8281A' }}
                    />
                    <p className="text-xs text-stone-300 mb-3">
                        {COMPANY.finanzName}
                    </p>
                    <ul className="space-y-2 text-sm list-none">
                        {[
                            [
                                '/roth-finanz/altersversorgung',
                                'Altersversorgung',
                            ],
                            [
                                '/roth-finanz/sterbegeldversicherung',
                                'Sterbegeldversicherung',
                            ],
                            [
                                '/roth-finanz/erstinformation',
                                'Erstinformation',
                            ],
                            ['/roth-finanz/datenschutz', 'Datenschutz'],
                            ['/roth-finanz/impressum', 'Impressum'],
                        ].map(([to, label]) => (
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
                        <a
                            href={`mailto:${COMPANY.emailFinanz}`}
                            className="hover:text-white"
                        >
                            {COMPANY.emailFinanz}
                        </a>
                    </p>
                </nav>

                {/* Allgemein + hours column */}
                <div>
                    <h3 className="font-serif text-lg text-white mb-3">
                        Allgemein
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-4"
                        style={{ background: '#C8281A' }}
                    />
                    <ul className="space-y-2 text-sm list-none">
                        {[
                            ['/team', 'Unser Team'],
                            ['/kontakt-anfahrt', 'Kontakt & Anfahrt'],
                            ['/online-beratung', 'Online Beratung'],
                            ['/service-app', 'Service App'],
                        ].map(([to, label]) => (
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
                        Öffnungszeiten
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-4"
                        style={{ background: '#C8281A' }}
                    />
                    <dl className="space-y-2 text-sm">
                        <div>
                            <dt className="font-semibold text-white">
                                Montag – Freitag
                            </dt>
                            <dd className="text-stone-200">9:00 – 17:00 Uhr</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">
                                Samstag & Sonntag
                            </dt>
                            <dd className="text-stone-200">Geschlossen</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-300">
                <p>
                    © {new Date().getFullYear()} {COMPANY.name} ·{' '}
                    {COMPANY.finanzName} – Alle Rechte vorbehalten.
                </p>
                <p>Versicherungsmakler nach § 34d Abs. 1 GewO</p>
            </div>
        </div>
    </footer>
)

export default Footer
