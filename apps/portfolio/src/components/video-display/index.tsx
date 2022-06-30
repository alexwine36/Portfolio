import { Container } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { ArcadeVideoQuery } from '../../../graphql-types';
export const VideoDisplay = () => {
  const { file } = useStaticQuery<ArcadeVideoQuery>(graphql`
    query ArcadeVideo {
      file(relativePath: { eq: "arcade/build-it-arcade-edit.mp4" }) {
        id
        videoH264 {
          path
        }
        videoH265 {
          path
        }
        # videoVP9 {
        #   path
        # }
      }
    }
  `);
  return (
    <Container>
      <video
        style={{
          width: '100%',
        }}
        // autoPlay={true}
        playsInline
        preload="auto"
        // poster={videoScreenshots[0].publicURL}
        controls
      >
        <source src={file.videoH265.path} type="video/mp4; codecs=hevc" />
        {/* <source
          src={file.videoVP9.path}
          type="video/webm; codecs=vp9,opus"
        /> */}
        <source src={file.videoH264.path} type="video/mp4; codecs=avc1" />
      </video>
    </Container>
  );
};
