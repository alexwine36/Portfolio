import styled from '@emotion/styled';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Container } from '@mui/system';
import {
  DetailCardDisplay,
  DetailListDisplay,
  HeroDisplay,
  SectionDisplay,
} from '@portfolio/ui';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  color: pink;
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

  return (
    <StyledHomePage>
      <HeroDisplay />
      <Container
        sx={{
          marginY: 5,
        }}
      >
        <SectionDisplay title="Experience">
          <Grid container>
            <Grid item>
              <DetailCardDisplay
                pretitle=" | Abrazo Homes"
                title="Business Intelligence Analyst"
                subtitle="08/18 - Present"
              >
                <DetailListDisplay bullets={bullets} />
              </DetailCardDisplay>
            </Grid>
          </Grid>
        </SectionDisplay>
      </Container>

      <Card>
        <CardHeader title="Sample"></CardHeader>
        <CardContent>Sample stuff</CardContent>
      </Card>
    </StyledHomePage>
  );
}

export default HomePage;
