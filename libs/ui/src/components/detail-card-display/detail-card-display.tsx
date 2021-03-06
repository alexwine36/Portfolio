// import styled from '@emotion/styled';
import { Box, Card, CardContent, Grid, styled } from '@mui/material';
import InfoTextDisplay from '../info-text-display/info-text-display';

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
    // height: 100%;
  `
);

/**
 * @category Display
 * @param props
 * @returns
 */
export function DetailCardDisplay(props: DetailCardDisplayProps) {
  const { children, title, pretitle, subtitle } = props;
  return (
    <StyledDetailCardDisplay>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item sm={3} xs={12}>
            {/* <TextHeaderDisplay
              variant="h6"
              color="#efefef"
              // gradientColor="info"
              title={title}
              pretitle={pretitle}
              subtitle={subtitle}
            /> */}
            <InfoTextDisplay
              title={title}
              subtitle={subtitle}
            ></InfoTextDisplay>
          </Grid>
          <Grid item sm>
            <InfoTextDisplay title={pretitle}></InfoTextDisplay>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
        {/* <DetailListDisplay
            bullets={['Sample', 'Sample thing', ['More samples']]}
          /> */}
      </CardContent>
    </StyledDetailCardDisplay>
  );
}

export default DetailCardDisplay;
