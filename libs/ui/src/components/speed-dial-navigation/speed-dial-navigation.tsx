// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { SpeedDial, styled } from '@mui/material';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import React from 'react';
/* eslint-disable-next-line */
export interface SpeedDialNavigationProps {
  actions: {
    icon: React.ReactElement;
    name: string;
    href: string;
  }[];
}

const StyledSpeedDialNavigation = styled(SpeedDial)(({ theme }) => ({
  position: 'fixed',
  // backgroundColor: theme.palette.secondary.main,

  // '& > .MuiFab-root': {
  //   backgroundColor: theme.palette.secondary.main,
  // },
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  // '& > button > span > .MuiSpeedDialIcon-icon': {
  //   transform: 'rotate(90deg)',
  // },
}));

const StyledSpeedDialIcon = styled(SpeedDialIcon)(({ theme }) => ({
  // '.MuiSpeedDialIcon-icon': {
  //   transform: 'rotate(90deg)',
  // },
  // '.MuiSpeedDialIcon-iconOpen': {
  //   transform: 'rotate(0 deg)',
  // },
}));
/**
 * @category Display
 * @param props
 * @returns
 */
export function SpeedDialNavigation(props: SpeedDialNavigationProps) {
  const { actions } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <StyledSpeedDialNavigation
      // sx={{
      //   '& > .MuiFab-root': {
      //     backgroundColor: 'red',
      //   },
      // }}

      FabProps={{
        color: 'secondary',
      }}
      ariaLabel="Resume Navigation"
      // hidden={hidden}
      direction="left"
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      icon={
        <StyledSpeedDialIcon
          icon={
            <ArrowForwardIosIcon
              sx={{
                transform: `rotate(${open ? '180' : '90'}deg)`,
              }}
            />
          }
        />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          FabProps={{
            href: action.href,
          }}
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </StyledSpeedDialNavigation>
  );
}

export default SpeedDialNavigation;
