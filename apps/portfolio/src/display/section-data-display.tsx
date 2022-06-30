import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { DetailCardDisplay } from '@portfolio/ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
/* eslint-disable-next-line */
export interface SectionDataDisplayProps {
  items: {
    pretitle?: string;
    title?: string;
    subtitle?: string;
    content: string;
  }[];
  gridSize?: number;
}

const StyledSectionDataDisplay = styled.div`
  color: pink;
`;

export function SectionDataDisplay(props: SectionDataDisplayProps) {
  const { items, gridSize } = props;
  return (
    <StyledSectionDataDisplay>
      <Grid container spacing={3}>
        {items.map((item, idx) => {
          const { title, pretitle, subtitle, content } = item;
          return (
            <Grid item xs={gridSize || 12} key={idx}>
              <DetailCardDisplay
                pretitle={pretitle}
                title={title || ''}
                subtitle={subtitle}
              >
                <MDXRenderer>{content}</MDXRenderer>
              </DetailCardDisplay>
            </Grid>
          );
        })}
      </Grid>
    </StyledSectionDataDisplay>
  );
}

export default SectionDataDisplay;
