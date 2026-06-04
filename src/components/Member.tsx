import React from 'react'

interface MemberProps {
    name: string
    title: string
    imageSrc: string
    qualifications?: string[]
    focusAreas?: string[]
}

const Member: React.FC<MemberProps> = ({
    name,
    title,
    imageSrc,
    qualifications,
    focusAreas,
}) => (
    <article className="bg-white shadow-card hover:shadow-card-hover transition overflow-hidden group rounded-md">
        <div className="aspect-[4/5] overflow-hidden bg-stone-100">
            <img
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={imageSrc}
                alt={name}
                loading="lazy"
            />
        </div>
        <div className="p-6 border-t-2 border-brand-red">
            <h3 className="font-serif text-2xl text-stone-900">{name}</h3>
            <p className="text-sm uppercase tracking-wider text-stone-500 mt-1">
                {title}
            </p>

            {qualifications && qualifications.length > 0 && (
                <div className="mt-5">
                    <h4 className="text-xs uppercase tracking-wider text-brand-red font-semibold mb-2">
                        Qualifikationen
                    </h4>
                    <ul className="space-y-1 text-sm text-stone-700">
                        {qualifications.map((q, i) => (
                            <li key={i}>• {q}</li>
                        ))}
                    </ul>
                </div>
            )}

            {focusAreas && focusAreas.length > 0 && (
                <div className="mt-5">
                    <h4 className="text-xs uppercase tracking-wider text-brand-red font-semibold mb-2">
                        Schwerpunkt
                    </h4>
                    <ul className="space-y-1 text-sm text-stone-700">
                        {focusAreas.map((a, i) => (
                            <li key={i}>• {a}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </article>
)

export default Member
