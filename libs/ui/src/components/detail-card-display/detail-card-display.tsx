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

const shadowColor = '255';
const StyledDetailCardDisplay = styled(Card)(
  ({ theme }) => `

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
