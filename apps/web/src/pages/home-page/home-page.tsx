import styled from '@emotion/styled';
import { Card, CardContent, CardHeader } from '@mui/material';
import { HeroDisplay } from '@portfolio/ui';

/* eslint-disable-next-line */
export interface HomePageProps {}

const StyledHomePage = styled.div`
  color: pink;
`;

export function HomePage(props: HomePageProps) {
  return (
    <StyledHomePage>
      <HeroDisplay />
      <Card>
        <CardHeader title="Sample"></CardHeader>
        <CardContent>Sample stuff</CardContent>
      </Card>
    </StyledHomePage>
  );
}

export default HomePage;
