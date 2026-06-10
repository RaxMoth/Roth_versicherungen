import type { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    title?: string
    eyebrow?: string
    className?: string
    bg?: 'white' | 'page' | 'dark'
}

const bgMap: Record<string, string> = {
    white: 'bg-white',
    page: 'bg-brand-page',
    dark: 'bg-stone-900 text-white',
}

const Section = ({
    children,
    title,
    eyebrow,
    className = '',
    bg = 'white',
}: SectionProps) => (
    <section className={`py-16 md:py-20 px-6 ${bgMap[bg]} ${className}`}>
        <div className="max-w-6xl mx-auto">
            {(eyebrow || title) && (
                <div className="mb-10 max-w-3xl">
                    {eyebrow && (
                        <p className="uppercase tracking-[0.2em] text-[11px] text-brand-red font-semibold mb-4">
                            <span className="inline-block w-8 h-px bg-brand-red align-middle mr-3" />
                            {eyebrow}
                        </p>
                    )}
                    {title && (
                        <h2
                            className={`font-serif text-3xl md:text-4xl font-semibold leading-tight ${
                                bg === 'dark' ? 'text-white' : 'text-stone-900'
                            }`}
                        >
                            {title}
                        </h2>
                    )}
                </div>
            )}
            {children}
        </div>
    </section>
)

export default Section
