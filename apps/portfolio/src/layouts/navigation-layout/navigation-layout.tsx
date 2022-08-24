import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { hexRgb } from '@portfolio/hex-rgb';
import { Link } from 'gatsby';

import React from 'react';
// import { hexToRgba } from '../../../../../libs/ui/src/lib/utilities/hex-to-rgba';
import { usePages } from '../../hooks/use-pages/use-pages';

/* eslint-disable-next-line */
export interface NavigationLayoutProps {}
const shadowColor = 100;
const backgroundColor = 0;
const StyledNavigationLayout = styled(Box)(
  ({ theme }) => `
    // color: pink;
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
    .Mui-selected {
      // background: yellow;
      color: ${theme.palette.primary.light} !important;
      background-image: radial-gradient(circle, ${hexRgb(
        theme.palette.background.default,
        { format: 'css', alpha: 0.75 }
      )},${hexRgb(theme.palette.background.default, {
    format: 'css',
    alpha: 0.375,
  })},  ${hexRgb(theme.palette.background.default, {
    format: 'css',
    alpha: 0,
  })});
    }
  `
);

export function NavigationLayout(props: NavigationLayoutProps) {
  const [value, setValue] = React.useState(0);
  const pageArray = usePages();
  // const { pathname } = useLocation();
  const theme = useTheme();
  const handleChange = (val: number) => {
    setValue(val);
  };

  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <StyledNavigationLayout>
      <BottomNavigation
        sx={{
          background: 'transparent',
        }}
        showLabels={matches}
        // value={value}
        onChange={(_event, newValue) => {
          handleChange(newValue);
        }}
      >
        {pageArray.map((action, idx) => {
          return (
            <BottomNavigationAction
              component={Link}
              // cover
              // direction={idx < value ? 'right' : 'left'}
              // bg={theme.palette.background.default}
              to={action.href}
              activeClassName={'Mui-selected'}
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
