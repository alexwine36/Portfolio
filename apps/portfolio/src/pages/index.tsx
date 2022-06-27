import styled from "@emotion/styled"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import { Grid } from "@mui/material"
import { useRhubarbResume } from "@portfolio/resume-hooks"
import {
  Bullets,
  DetailCardDisplay,
  DetailListDisplay,
  HeroDisplay,
  PageBackground,
  ParallaxBackground,
  PredefinedBackgrounds,
  SectionDisplay,
  SpeedDialNavigation,
} from "@portfolio/ui"
import React from "react"
import HeroBannerImplementation from "../components/hero-banner-implementation/hero-banner-implementation"

const StyledApp = styled.div``

export function Index() {
  const { resume } = useRhubarbResume()
  console.log(resume)

  const { workExperience, educationExperience, skillCategories } = resume

  const sections: {
    name: string
    id: string
    icon?: React.ReactElement
    background?: PredefinedBackgrounds
    gridSize?: number
    chips?: boolean
    items?: {
      pretitle?: string
      subtitle?: string
      title?: string
      bullets?: Bullets[]
    }[]
  }[] = [
    {
      name: "Experience",
      id: "workExperience",
      icon: <WorkIcon />,
      items: workExperience.map(exp => {
        return {
          pretitle: exp.role,
          title: exp.company.name,
          subtitle: exp.dateDisplay,
          bullets: exp.bullets,
        }
      }),
    },
    {
      name: "Skills",
      id: "skills",
      gridSize: 6,
      chips: true,
      icon: <FactCheckIcon />,
      background: "meteor",
      items: skillCategories.map(cat => {
        return {
          title: cat.name,
          bullets: cat.bullets,
        }
      }),
    },
    {
      name: "Education",
      id: "education",
      icon: <SchoolIcon />,
      background: "soundwave",
      items: educationExperience.map(exp => {
        return {
          title: exp.institute,
          subtitle: exp.dateDisplay,
          bullets: exp.bullets,
        }
      }),
    },
  ]

  const actions = sections.map(section => {
    const { icon, name, id } = section

    return {
      icon: icon || <WorkIcon />,
      name,
      href: `#${id}`,
    }
  })
  return (
    <PageBackground>
      <HeroBannerImplementation />
      <SpeedDialNavigation actions={actions} />
      <HeroDisplay />
      <>
        {/* <GeneratePlanetBackground /> */}

        <>
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <ParallaxBackground predefined={section.background || "planet"}>
                <>
                  {!!index && <StyledApp />}
                  <SectionDisplay
                    key={section.id}
                    id={section.id}
                    title={section.name}
                  >
                    <Grid container spacing={3}>
                      {section.items?.map((item, key) => (
                        <Grid item xs={section.gridSize || 12} key={key}>
                          <DetailCardDisplay
                            pretitle={item.pretitle}
                            title={item.title || ""}
                            subtitle={item.subtitle}
                          >
                            <DetailListDisplay
                              chips={section.chips}
                              bullets={item.bullets || []}
                            />
                          </DetailCardDisplay>
                        </Grid>
                      ))}
                    </Grid>
                  </SectionDisplay>
                  {!!index && <StyledApp />}
                </>
              </ParallaxBackground>
            </React.Fragment>
          ))}
        </>
      </>
    </PageBackground>
  )
}

export default Index
