import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="min-h-screen flex flex-col bg-brand-page">
            <a href="#main" className="skip-link">
                Zum Hauptinhalt springen
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
