import { Box, Divider, Link, styled, Typography } from '@mui/material';
import GradientText from '../gradient-text/gradient-text';
import SocialIconButton, {
  SocialProviders,
} from '../social-icon-button/social-icon-button';

/* eslint-disable-next-line */
export interface FooterDisplayProps {
  links?: {
    display: string;
    link: string;
  }[];
  social?: {
    provider: SocialProviders;
    link: string;
  }[];
}

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
}));

export function FooterDisplay(props: FooterDisplayProps) {
  const { links, social } = props;
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
        <StyledBox
          sx={{
            '& > a': {
              margin: 2,
            },
          }}
        >
          {links?.map((item, idx) => (
            <Link
              target="_blank"
              rel="noopener"
              // sx={{
              //   color: 'inherit',
              // }}
              color="inherit"
              href={item.link}
              underline="hover"
            >
              {item.display}
            </Link>
          ))}
        </StyledBox>
        <StyledBox>
          {social?.map((item, idx) => (
            <SocialIconButton
              link={item.link}
              provider={item.provider}
            ></SocialIconButton>
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
