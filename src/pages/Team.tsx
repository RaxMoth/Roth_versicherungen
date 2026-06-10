import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Member from '../components/Member'
import { TEAM, IMAGES, TEAM_PHOTOS } from '../utils/company'

const Team: React.FC = () => (
    <>
        <PageHero
            eyebrow="Unser Beratungsteam"
            title="Persönlich. Erfahren. Generationsübergreifend."
            subtitle="Lernen Sie die Menschen hinter Roth Versicherungen und Roth Finanz kennen."
            bgImage={IMAGES.team}
        />

        <Section eyebrow="Beraterteam" title="Wir sind für Sie da.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Member
                    name={TEAM.CARLO}
                    title={TEAM.CARLO_TITLE}
                    imageSrc={TEAM_PHOTOS.carlo}
                    focusAreas={[...TEAM.CARLO_FOCUS]}
                />
                <Member
                    name={TEAM.PETRA}
                    title={TEAM.PETRA_TITLE}
                    imageSrc={TEAM_PHOTOS.petra}
                    focusAreas={[...TEAM.PETRA_FOCUS]}
                />
                <Member
                    name={TEAM.WILLIAM}
                    title={TEAM.WILLIAM_TITLE}
                    imageSrc={TEAM_PHOTOS.williams}
                    qualifications={[...TEAM.WILLIAM_QUALIFIKATIONS]}
                    focusAreas={[...TEAM.WILLIAM_FOCUS]}
                />
                <Member
                    name={TEAM.SABRINA}
                    title={TEAM.SABRINA_TITLE}
                    imageSrc={TEAM_PHOTOS.sabrina}
                    focusAreas={[...TEAM.SABRINA_FOCUS]}
                />
                <Member
                    name={TEAM.DOGS}
                    title={TEAM.DOGS_TITLE}
                    imageSrc={TEAM_PHOTOS.dogs}
                    focusAreas={[...TEAM.DOGS_FOCUS]}
                />
            </div>
        </Section>
    </>
)

export default Team
