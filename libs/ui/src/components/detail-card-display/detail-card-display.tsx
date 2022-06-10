// import styled from '@emotion/styled';
import { Card, CardContent, styled } from '@mui/material';
import TextHeaderDisplay from '../text-header-display/text-header-display';

/* eslint-disable-next-line */
export interface DetailCardDisplayProps {
  title: string;
  pretitle?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const StyledDetailCardDisplay = styled(Card)(
  ({ theme }) => `
// color: pink;
background-image: linear-gradient(
  to bottom right,
  rgba(255, 255, 255, 0.2),
  rgba(255, 255, 255, 0)
);
backdrop-filter: 'blur(10px)';
box-shadow: 10px 10px 10px rgba(30, 30, 30, 0.5);
border: 1px solid ${theme.palette.divider};
`
);

export function DetailCardDisplay(props: DetailCardDisplayProps) {
  const { children, title, pretitle, subtitle } = props;
  return (
    <StyledDetailCardDisplay>
      <CardContent>
        <TextHeaderDisplay
          variant="h6"
          color="#efefef"
          // gradientColor="info"
          title={title}
          pretitle={pretitle}
          subtitle={subtitle}
        />
        {/* <DetailListDisplay
            bullets={['Sample', 'Sample thing', ['More samples']]}
          /> */}
        {children}
      </CardContent>
    </StyledDetailCardDisplay>
  );
}

export default DetailCardDisplay;
