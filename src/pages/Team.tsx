import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import Member from '../components/Member'
import Carlo from '../assets/Carlo_Roth.jpeg'
import Petra from '../assets/Petra.png'
import sabrina from '../assets/sabrina.jpeg'
import williams from '../assets/williams.jpeg'
import dogs from '../assets/Dogs.jpeg'
import { TEAM, IMAGES } from '../utils/company'

const Team: React.FC = () => (
    <>
        <PageHero
            eyebrow="Unser Team"
            title="Persönlich. Erfahren. Generationsübergreifend."
            subtitle="Lernen Sie die Menschen hinter Roth Versicherungen und Roth Finanz kennen."
            bgImage={IMAGES.team}
        />

        <Section eyebrow="Beraterteam" title="Wir sind für Sie da.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Member
                    name={TEAM.CARLO}
                    title={TEAM.CARLO_TITLE}
                    imageSrc={Carlo}
                    focusAreas={[...TEAM.CARLO_FOCUS]}
                />
                <Member
                    name={TEAM.PETRA}
                    title={TEAM.PETRA_TITLE}
                    imageSrc={Petra}
                    focusAreas={[...TEAM.PETRA_FOCUS]}
                />
                <Member
                    name={TEAM.WILLIAM}
                    title={TEAM.WILLIAM_TITLE}
                    imageSrc={williams}
                    qualifications={[...TEAM.WILLIAM_QUALIFIKATIONS]}
                    focusAreas={[...TEAM.WILLIAM_FOCUS]}
                />
                <Member
                    name={TEAM.SABRINA}
                    title={TEAM.SABRINA_TITLE}
                    imageSrc={sabrina}
                    focusAreas={[...TEAM.SABRINA_FOCUS]}
                />
                <Member
                    name={TEAM.DOGS}
                    title={TEAM.DOGS_TITLE}
                    imageSrc={dogs}
                    focusAreas={[...TEAM.DOGS_FOCUS]}
                />
            </div>
        </Section>
    </>
)

export default Team
