import { Link } from 'react-router-dom'
import { PageHero } from '@/components'
import { ROUTES } from '@/config/routes'
import { COMMON } from '@/content'
import { usePageMeta } from '@/hooks/usePageMeta'

const NotFound = () => {
    usePageMeta({ title: '404 – Seite nicht gefunden' })

    return (
        <>
            <PageHero
                eyebrow={COMMON.notFound.eyebrow}
                title={COMMON.notFound.title}
                subtitle={COMMON.notFound.subtitle}
            />
            <div className="py-24 px-6 text-center bg-brand-page">
                <Link
                    to={ROUTES.HOME}
                    className="inline-block bg-brand-red hover:bg-brand-red-dark transition text-white font-semibold px-8 py-4 rounded-sm"
                >
                    {COMMON.actions.backToHome}
                </Link>
            </div>
        </>
    )
}

export default NotFound
