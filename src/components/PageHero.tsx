import React from 'react'

interface PageHeroProps {
    eyebrow?: string
    title: string
    subtitle?: string
    bgImage?: string
    height?: 'tall' | 'standard'
}

const PageHero: React.FC<PageHeroProps> = ({
    eyebrow,
    title,
    subtitle,
    bgImage,
    height = 'standard',
}) => {
    const pad = height === 'tall' ? 'py-32 md:py-48' : 'py-24 md:py-36'

    return (
        <section
            className={`relative ${pad} px-6 overflow-hidden bg-stone-900`}
            aria-labelledby="hero-title"
            style={
                bgImage
                    ? {
                          backgroundImage: `url(${bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                      }
                    : undefined
            }
        >
            <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
            <div className="relative max-w-4xl mx-auto text-center text-white">
                {eyebrow && (
                    <p className="uppercase tracking-[0.2em] text-[11px] md:text-xs text-white/80 font-semibold mb-5">
                        <span className="inline-block w-8 h-px bg-brand-red align-middle mr-3" />
                        {eyebrow}
                    </p>
                )}
                <h1
                    id="hero-title"
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1]"
                >
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-7 text-base md:text-lg text-white max-w-2xl mx-auto font-normal leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}

export default PageHero
