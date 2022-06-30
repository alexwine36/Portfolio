import { Container } from '@mui/material';
export const VideoDisplay = () => {
  const h265 = `/videos/build-it-arcade-626c0c9bce35c23c177a7f88ba3cad52-027100cb7de302045ba5d79a590b2233-h265.mp4`;
  const h264 = `/videos/build-it-arcade-626c0c9bce35c23c177a7f88ba3cad52-cd2d2d1c8620b4b9bf8529b5962aa8f4-h264.mp4`;

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
        <source src={h265} type="video/mp4; codecs=hevc" />
        {/* <source
          src={file.videoVP9.path}
          type="video/webm; codecs=vp9,opus"
        /> */}
        <source src={h264} type="video/mp4; codecs=avc1" />
      </video>
    </Container>
  );
};
