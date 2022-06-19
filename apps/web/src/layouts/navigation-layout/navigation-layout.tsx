import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useActionsHook } from '../../hooks/use-section-hook/use-section-hook';

/* eslint-disable-next-line */
export interface NavigationLayoutProps {}

const StyledNavigationLayout = styled.div`
  color: pink;
`;

export function NavigationLayout(props: NavigationLayoutProps) {
  const { actions } = useActionsHook();
  return (
    <StyledNavigationLayout>
      {actions.map((action) => {
        return (
          <Button component={Link} to={action.href}>
            {action.name}
          </Button>
        );
      })}
    </StyledNavigationLayout>
  );
}

export default NavigationLayout;
