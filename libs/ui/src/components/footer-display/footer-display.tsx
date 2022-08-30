import { Box, Divider, Link, styled, Typography } from '@mui/material';
import GradientText from '../gradient-text/gradient-text';
import SocialIconButton, {
  SocialProviders,
} from '../social-icon-button/social-icon-button';

/* eslint-disable-next-line */

type LinkType =
  | {
      display: string;
      link: string;
    }
  | React.ReactElement;

export interface FooterDisplayProps {
  links?: LinkType[];
  social?: {
    provider: SocialProviders;
    link: string;
  }[];
}

const StyledFooterDisplay = styled('footer')(
  ({ theme }) => `
    padding: ${theme.spacing(4)};
    display: flex;
    margin-bottom: ${theme.spacing(4)};
    justify-content: center;
  `
);

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: theme.spacing(1),
}));

/**
 * @category Display
 * @param props
 * @returns
 */

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
              fontSize: '1.2em !important',
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
          {links?.map((item, idx) => {
            if ('display' in item) {
              return (
                <Link
                  key={idx}
                  variant="body2"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                  href={item.link}
                  underline="hover"
                >
                  {item.display}
                </Link>
              );
            }

            return item;
          })}
        </StyledBox>
        <StyledBox>
          {social?.map((item, idx) => (
            <SocialIconButton
              key={idx}
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
    </StyledFooterDisplay>
  );
}
