import { Box, Divider, Link, styled, Typography } from '@mui/material';
import GradientText from '../gradient-text/gradient-text';
import SocialIconButton, {
  SocialIconButtonProps,
} from '../social-icon-button/social-icon-button';

/* eslint-disable-next-line */
export interface FooterDisplayProps {}

const StyledFooterDisplay = styled('footer')(
  ({ theme }) => `
padding: ${theme.spacing(4)};
  display: flex;

  justify-content: center;
`
);

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: theme.spacing(1),
  '& > a': {
    margin: `${theme.spacing(1)} ${theme.spacing(2)} !important`,
  },
}));

const links = ['http://example.dample', 'pample', 'sample'];

const social: SocialIconButtonProps[] = [
  {
    provider: 'gitlab',
  },
  {
    provider: 'github',
  },
  {
    provider: 'linkedin',
  },
];

export function FooterDisplay(props: FooterDisplayProps) {
  return (
    <StyledFooterDisplay>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <StyledBox>
          <Typography
            variant="h3"
            sx={{
              fontSize: '1.2em',
            }}
          >
            Alex Wine |{' '}
            <GradientText primary as="span">
              Portfolio
            </GradientText>
          </Typography>
        </StyledBox>
        <StyledBox>
          {links.map((link, idx) => (
            <Link
              target="_blank"
              rel="noopener"
              // sx={{
              //   color: 'inherit',
              // }}
              color="inherit"
              href={link}
              underline="hover"
            >
              {/* {link}    */}
              sanodke
            </Link>
          ))}
        </StyledBox>
        <StyledBox>
          {social.map((link, idx) => (
            <SocialIconButton provider={link.provider}></SocialIconButton>
          ))}
        </StyledBox>

        <StyledBox
          sx={{
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <Divider />
          <Typography
            sx={{
              paddingTop: 1,
            }}
            variant="caption"
          >
            Made with{' '}
            <span role="img" aria-label="love">
              ♥️
            </span>{' '}
            in New Mexico
          </Typography>
        </StyledBox>
      </Box>

      {/* <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          sx={{
            justifyContent: 'center',
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          sx={{
            justifyContent: 'center',
          }}
        >

        </Grid>
      </Grid> */}
    </StyledFooterDisplay>
  );
}
