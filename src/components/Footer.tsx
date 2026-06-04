import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Roth_versicherungen_logo.png'
import { COMPANY } from '../utils/company'

const Footer: React.FC = () => (
    <footer className="bg-stone-900 text-white" aria-label="Seitenfuß">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="space-y-4">
                    <div className="bg-white inline-flex p-3 rounded">
                        <img
                            src={logoImage}
                            alt="Roth Versicherungen Logo"
                            className="h-12 w-auto"
                        />
                    </div>
                    <p className="text-sm text-stone-200">{COMPANY.tagline}</p>
                    <div className="text-sm space-y-1 pt-3 leading-relaxed">
                        <p className="font-semibold text-white">
                            {COMPANY.name}
                        </p>
                        <p className="font-semibold text-white">
                            {COMPANY.finanzName}
                        </p>
                        <address className="pt-3 not-italic text-stone-200">
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
                            <br />
                            <a
                                href={`mailto:${COMPANY.email}`}
                                className="text-white hover:text-red-400 underline-offset-2 hover:underline"
                            >
                                {COMPANY.email}
                            </a>
                        </address>
                    </div>
                </div>

                <nav aria-label="Allgemeine Links">
                    <h3 className="font-serif text-lg text-white mb-4">
                        Allgemeines
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-5"
                        style={{ background: '#C8281A' }}
                    />
                    <ul className="space-y-3 text-sm list-none">
                        {[
                            ['/online-beratung', 'Online Beratung'],
                            ['/service-app', 'Service App'],
                            ['/kontakt-anfahrt', 'Kontakt & Anfahrt'],
                            ['/team', 'Unser Team'],
                            ['/datenschutz', 'Datenschutz'],
                            ['/impressum', 'Impressum'],
                            ['/erstinformation', 'Erstinformation'],
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
                </nav>

                <div>
                    <h3 className="font-serif text-lg text-white mb-4">
                        Öffnungszeiten
                    </h3>
                    <div
                        className="w-10 h-[2px] mb-5"
                        style={{ background: '#C8281A' }}
                    />
                    <dl className="space-y-3 text-sm">
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
                    <p className="text-xs text-stone-300 mt-4 leading-relaxed">
                        {COMPANY.hoursExtra}
                    </p>
                </div>
            </div>

            <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-300">
                <p>
                    © {new Date().getFullYear()} {COMPANY.name} – Alle Rechte
                    vorbehalten.
                </p>
                <p>Versicherungsmakler nach § 34d Abs. 1 GewO</p>
            </div>
        </div>
    </footer>
)

export default Footer
