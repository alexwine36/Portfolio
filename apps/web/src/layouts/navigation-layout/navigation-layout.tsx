import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useActionsHook } from '../../hooks/use-section-hook/use-section-hook';

/* eslint-disable-next-line */
export interface NavigationLayoutProps {}
const shadowColor = 100;
const backgroundColor = 0;
const StyledNavigationLayout = styled(Box)(
  ({ theme }) => `
// color: pink;
// & > button > span {
//   color: ${theme.palette.text.primary};
// }
z-index: 2000;
position: fixed;
bottom: 0;
left: 0;
right: 0;

background: transparent;
background-image: radial-gradient(rgba(${backgroundColor}, ${backgroundColor}, ${backgroundColor}, 0.25), rgba(${backgroundColor}, ${backgroundColor}, ${backgroundColor}, 0.05));
backdrop-filter: blur(25px);
box-shadow: ${theme.shadows[1].replace(
    /rgba\(0,0,0/gm,
    `rgba(${shadowColor},${shadowColor},${shadowColor}`
  )};
border: 1px solid ${theme.palette.divider};
`
);

export function NavigationLayout(props: NavigationLayoutProps) {
  const { actions } = useActionsHook(true);
  const [value, setValue] = React.useState(0);
  const { pathname } = useLocation();
  console.log(location);

  const handleChange = (val: number) => {
    setValue(val);
  };
  React.useEffect(() => {
    const path = pathname.replace('/Portfolio/', '');
    console.log(path);

    const val = actions.findIndex((action) => `/${action.href}` === path);
    console.log(val);
    if (val === -1) {
      setValue(0);
    } else {
      setValue(val);
    }
  }, [pathname]);

  return (
    <StyledNavigationLayout>
      <BottomNavigation
        sx={{
          background: 'transparent',
        }}
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          handleChange(newValue);
        }}
      >
        {actions.map((action) => {
          return (
            <BottomNavigationAction
              component={Link}
              to={action.href}
              key={action.href}
              label={action.name}
              icon={action.icon}
            />
            // <Button component={Link} to={action.href}>
            //   {action.name}
            // </Button>
          );
        })}
      </BottomNavigation>
    </StyledNavigationLayout>
  );
}

export default NavigationLayout;
