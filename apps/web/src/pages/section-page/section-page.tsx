import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import {
  DetailCardDisplay,
  DetailListDisplay,
  ParallaxBackground,
  SectionDisplay,
} from '@portfolio/ui';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSectionHook, {
  SectionHook,
} from '../../hooks/use-section-hook/use-section-hook';

/* eslint-disable-next-line */
export interface SectionPageProps {}

const StyledSectionPage = styled.div`
  // color: pink;
`;

export function SectionPage(props: SectionPageProps) {
  const { sectionId } = useParams<{
    sectionId: SectionHook;
  }>();
  const navigate = useNavigate();
  const { section } = useSectionHook(sectionId || 'work');
  if (!sectionId) {
    navigate('/');
    return <div>Sample</div>;
  }

  return (
    <StyledSectionPage>
      <React.Fragment>
        <ParallaxBackground predefined={section.background || 'planet'}>
          <>
            <SectionDisplay
              key={section.id}
              id={section.id}
              title={section.name}
            >
              <Grid container spacing={3}>
                {section.items?.map((item, key) => (
                  <Grid item xs={section.gridSize || 12} key={key}>
                    <DetailCardDisplay
                      pretitle={item.pretitle}
                      title={item.title || ''}
                      subtitle={item.subtitle}
                    >
                      <DetailListDisplay
                        chips={section.chips}
                        bullets={item.bullets || []}
                      />
                    </DetailCardDisplay>
                  </Grid>
                ))}
              </Grid>
            </SectionDisplay>
          </>
        </ParallaxBackground>
      </React.Fragment>
    </StyledSectionPage>
  );
}

export default SectionPage;
