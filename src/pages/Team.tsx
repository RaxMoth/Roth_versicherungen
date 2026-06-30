import { PageHero, Section, Member } from "@/components";
import { IMAGES, TEAM_PHOTOS } from "@/utils/company";
import { TEAM } from "@/content";
import { usePageMeta } from "@/hooks/usePageMeta";

const Team = () => {
    usePageMeta(TEAM.meta);
    const { members } = TEAM;

    return (
        <>
            <PageHero
                eyebrow={TEAM.hero.eyebrow}
                title={TEAM.hero.title}
                subtitle={TEAM.hero.subtitle}
                bgImage={IMAGES.team}
            />

            <Section eyebrow={TEAM.section.eyebrow} title={TEAM.section.title}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Member
                        name={members.carlo.name}
                        title={members.carlo.title}
                        imageSrc={TEAM_PHOTOS.carlo}
                        focusAreas={members.carlo.focusAreas}
                        full={true}
                    />
                    <Member
                        name={members.petra.name}
                        title={members.petra.title}
                        imageSrc={TEAM_PHOTOS.petra}
                        focusAreas={members.petra.focusAreas}
                        full={true}
                    />

                    <Member
                        name={members.williams.name}
                        title={members.williams.title}
                        imageSrc={TEAM_PHOTOS.williams}
                        focusAreas={members.williams.focusAreas}
                        full={true}
                    />
                    <Member
                        name={members.sabrina.name}
                        title={members.sabrina.title}
                        imageSrc={TEAM_PHOTOS.sabrina}
                        focusAreas={members.sabrina.focusAreas}
                        full={false}
                    />
                    <Member
                        name={members.caterina.name}
                        title={members.caterina.title}
                        imageSrc={TEAM_PHOTOS.kontakt}
                        focusAreas={members.caterina.focusAreas}
                        full={true}
                    />
                    <Member
                        name={members.dogs.name}
                        title={members.dogs.title}
                        imageSrc={TEAM_PHOTOS.dogs}
                        focusAreas={members.dogs.focusAreas}
                        full={true}
                    />
                </div>
            </Section>
        </>
    );
};

export default Team;
