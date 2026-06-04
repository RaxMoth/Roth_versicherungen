import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const NotFound: React.FC = () => (
    <>
        <PageHero
            eyebrow="404"
            title="Seite nicht gefunden."
            subtitle="Die von Ihnen aufgerufene Seite existiert nicht oder wurde verschoben."
        />
        <div className="py-24 px-6 text-center bg-brand-page">
            <Link
                to="/"
                className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm"
            >
                Zurück zur Startseite →
            </Link>
        </div>
    </>
)

export default NotFound
