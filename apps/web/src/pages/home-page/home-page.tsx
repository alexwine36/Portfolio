import styled from '@emotion/styled';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useRhubarbResume } from '@portfolio/resume-hooks';
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
} from '@portfolio/ui';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  // color: pink;
`;

export function HomePage(props: HomePageProps) {
  const { resume } = useRhubarbResume();
  console.log(resume);

  const { workExperience, educationExperience } = resume;

  const sections: {
    name: string;
    id: string;
    icon?: React.ReactElement;
    background?: PredefinedBackgrounds;
    items?: {
      pretitle?: string;
      subtitle?: string;
      title?: string;
      bullets?: Bullets[];
    }[];
  }[] = [
    {
      name: 'Experience',
      id: 'workExperience',
      icon: <WorkIcon />,
      items: workExperience.map((exp) => {
        return {
          pretitle: exp.role,
          subtitle: exp.company.name,
          title: exp.dateDisplay,
          bullets: exp.bullets,
        };
      }),
    },
    {
      name: 'Education',
      id: 'education',
      icon: <SchoolIcon />,
      background: 'waves',
      items: educationExperience.map((exp) => {
        return {
          title: exp.institute,
          subtitle: exp.dateDisplay,
          bullets: exp.bullets,
        };
      }),
    },
  ];

  const actions = sections.map((section) => {
    const { icon, name, id } = section;

    return {
      icon: icon || <WorkIcon />,
      name,
      href: `#${id}`,
    };
  });

  return (
    <PageBackground>
      <SpeedDialNavigation actions={actions} />
      <HeroDisplay />
      <>
        {/* <GeneratePlanetBackground /> */}

        <>
          {sections.map((section) => (
            <ParallaxBackground
              key={section.id}
              predefined={section.background || 'planet'}
            >
              <SectionDisplay
                key={section.id}
                id={section.id}
                title={section.name}
              >
                <Grid container spacing={3}>
                  {section.items?.map((item, key) => (
                    <Grid item xs={12} key={key}>
                      <DetailCardDisplay
                        pretitle={item.pretitle}
                        title={item.title || ''}
                        subtitle={item.subtitle}
                      >
                        <DetailListDisplay bullets={item.bullets || []} />
                      </DetailCardDisplay>
                    </Grid>
                  ))}
                </Grid>
              </SectionDisplay>
            </ParallaxBackground>
          ))}
        </>
      </>

      <Card>
        <CardHeader title="Sample"></CardHeader>
        <CardContent>Sample stuff</CardContent>
      </Card>
    </PageBackground>
  );
}

export default HomePage;
