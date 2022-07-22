import { styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface InfoTextDisplayProps {
  title?: string;
  subtitle?: string;
}

const StyledInfoTextDisplay = styled('div')(
  ({ theme }) => `
    // color: pink;
    display: flex;
    flex-direction: column;
    padding-bottom: ${theme.spacing(2)};
  `
);
/**
 * @category Display
 * @param props
 * @returns
 */
export function InfoTextDisplay(props: InfoTextDisplayProps) {
  const { title, subtitle } = props;
  return (
    <StyledInfoTextDisplay>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="overline">{subtitle}</Typography>
    </StyledInfoTextDisplay>
  );
}

export default InfoTextDisplay;
