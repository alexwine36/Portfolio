import styled from '@emotion/styled';
import { Card, CardContent, CardHeader, Container, Grid } from '@mui/material';
import { useRhubarbResume } from '@portfolio/resume-hooks';
import {
  DetailCardDisplay,
  DetailListDisplay,
  HeroDisplay,
  PageBackground,
  ParallaxBackground,
  SectionDisplay,
  SpeedDialNavigation,
} from '@portfolio/ui';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  // color: pink;
`;

export function HomePage(props: HomePageProps) {
  const bullets = [
    'Created an end-to-end analytics solution using Python and business intelligence tools, improving the efficiency and productivity of the team.',
    'Created pipelines for merging data from data resources i.e. sales tools (CRM/SFA), spreadsheets, and ERP software, resulting in increased business insights and better-informed decisions.',
    'Developed applications to automate repetitive tasks and streamline processes increasing productivity and reducing errors.',
    'Used CI/CD tools to automate the process of delivering new services to users.',
    'Created automated pipeline for sending customer surveys using Pulumi and Node under a Yarn monorepo.',
    'Through automation and reporting increased house closings by at least 10% every year.',
    'Planned and executed the transition from local server to google drive cloud server, achieving increased speed for employee file access and increased bandwidth onsite.',
    'Managed department spending per annum through strategic procurement of equipment and services.',
  ];

  const { resume } = useRhubarbResume();
  console.log(resume);

  return (
    <PageBackground>
      <SpeedDialNavigation actions={[]} />
      <HeroDisplay />
      <>
        <Container>
          <SectionDisplay title="Experience"></SectionDisplay>
        </Container>

        {/* <GeneratePlanetBackground /> */}
        <ParallaxBackground planet>
          <Container>
            <Grid container spacing={3}>
              {/* <Container
sx={{
  marginY: 5,
}}
> */}

              {resume.workExperience.map((exp) => {
                return (
                  <Grid item xs={12}>
                    <DetailCardDisplay
                      pretitle={` | ${exp.role}`}
                      title={exp.company.name}
                      subtitle={exp.dateDisplay}
                    >
                      <DetailListDisplay bullets={exp.bullets} />
                    </DetailCardDisplay>
                  </Grid>
                );
              })}
              {/* <Grid item>
    <DetailCardDisplay
      pretitle=" | Abrazo Homes"
      title="Business Intelligence Analyst"
      subtitle="08/18 - Present"
    >
      <DetailListDisplay bullets={bullets} />
    </DetailCardDisplay>
  </Grid>
  <Grid item>
    <DetailCardDisplay
      pretitle=" | Abrazo Homes"
      title="Business Intelligence Analyst"
      subtitle="08/18 - Present"
    >
      <DetailListDisplay bullets={bullets} />
    </DetailCardDisplay>
  </Grid>
  <Grid item>
    <DetailCardDisplay
      pretitle=" | Abrazo Homes"
      title="Business Intelligence Analyst"
      subtitle="08/18 - Present"
    >
      <DetailListDisplay bullets={bullets} />
    </DetailCardDisplay>
  </Grid> */}
              {/* </Container> */}

              {/* <Grid item xs>
  <DetailCardDisplay
    pretitle=" | Abrazo Homes"
    title="Business Intelligence Analyst"
    subtitle="08/18 - Present"
  >
    <DetailListDisplay bullets={bullets} />
  </DetailCardDisplay>
</Grid> */}
            </Grid>
          </Container>
        </ParallaxBackground>
      </>

      <Card>
        <CardHeader title="Sample"></CardHeader>
        <CardContent>Sample stuff</CardContent>
      </Card>
    </PageBackground>
  );
}

export default HomePage;
