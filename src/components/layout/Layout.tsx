import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { COMMON } from '@/content'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="min-h-screen flex flex-col bg-brand-page">
            <a href="#main" className="skip-link">
                {COMMON.nav.skipToContent}
            </a>
            <Header />
            <main id="main" className="flex-1 pt-[5.5rem] md:pt-[6.5rem]">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
