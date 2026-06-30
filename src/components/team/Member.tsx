import { TEAM } from "@/content";

interface MemberProps {
    name: string;
    title: string;
    imageSrc: string;
    qualifications?: readonly string[];
    focusAreas?: readonly string[];
    full?: boolean;
}

const Member = ({
    name,
    title,
    imageSrc,
    qualifications,
    focusAreas,
    full,
}: MemberProps) => (
    <article className="bg-white shadow-card hover:shadow-card-hover transition overflow-hidden group rounded-md">
        <div className="aspect-[4/5] overflow-hidden bg-stone-100">
            <img
                className={`w-full ${full ? "h-full" : ""} object-cover object-center group-hover:scale-105 transition-transform duration-700`}
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
                <MemberList
                    label={TEAM.memberLabels.qualifications}
                    items={qualifications}
                />
            )}
            {focusAreas && focusAreas.length > 0 && (
                <MemberList
                    label={TEAM.memberLabels.focus}
                    items={focusAreas}
                />
            )}
        </div>
    </article>
);

interface MemberListProps {
    label: string;
    items: readonly string[];
}

const MemberList = ({ label, items }: MemberListProps) => (
    <div className="mt-5">
        <h4 className="text-xs uppercase tracking-wider text-brand-red font-semibold mb-2">
            {label}
        </h4>
        <ul className="space-y-1 text-sm text-stone-700">
            {items.map((item) => (
                <li key={item}>• {item}</li>
            ))}
        </ul>
    </div>
);

export default Member;
