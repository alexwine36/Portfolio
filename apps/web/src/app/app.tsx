import styled from '@emotion/styled';
import { Container } from '@mui/material';
import HomePage from '../pages/home-page/home-page';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

export default App;
