import { styled } from '@mui/material';
import { Script } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

/* eslint-disable-next-line */
export interface VRViewerProps {}

const StyledVRViewer = styled('div')`
  // color: pink;
  // height: 70vh;
  // width: 600px;
  // height: 400px;
`;

const StyledVRContainer = styled('div')(
  ({ theme }) => `
height: 70vh;
margin: ${theme.spacing(3)};
`
);

export function VRViewer(props: VRViewerProps) {
  React.useEffect(() => {
    if ((window as any).pannellum) {
      init();
    }
  });

  const init = () => {
    const pannellum = (window as any).pannellum;
    pannellum.viewer('panorama', {
      // orientationOnByDefault: true,
      // Start Degrees
      // yaw: -90,
      // autoRotateInactivityDelay: 500,
      autoRotate: -5,
      autoLoad: true,

      type: 'multires',
      multiRes: {
        basePath: `/panos/Lot413`,
        path: '/%l/%s%y_%x',
        fallbackPath: '/fallback/%s',
        extension: 'jpg',
        tileResolution: 512,
        maxLevel: 3,
        cubeResolution: 1704,
      },
    });
  };
  return (
    <StyledVRContainer>
      <Script
        strategy="idle"
        onLoad={() => {
          console.log('LOADED');
          init();
        }}
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
      ></Script>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
        />
      </Helmet>
      <StyledVRViewer id="panorama"></StyledVRViewer>
    </StyledVRContainer>
  );
}

export default VRViewer;
