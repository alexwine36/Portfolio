import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Link, styled } from '@mui/material';
import GitLabIcon from '../../assets/git-lab-icon/git-lab-icon';
type SocialProviders = 'linkedin' | 'github' | 'gitlab';
/* eslint-disable-next-line */
export interface SocialIconButtonProps {
  provider: SocialProviders;
  link?: string;
}

const StyledSocialIconButton = styled(IconButton)(
  ({ theme }) => `
// color: pink;
`
);

const SelectIcon = (provider: SocialProviders) => {
  switch (provider) {
    case 'linkedin':
      return LinkedInIcon;
    case 'github':
      return GitHubIcon;
    case 'gitlab':
      return GitLabIcon;
    default:
      return LinkedInIcon;
  }
};

export function SocialIconButton(props: SocialIconButtonProps) {
  const { provider, link } = props;
  const Icon = SelectIcon(provider);

  return (
    <IconButton LinkComponent={Link} href={link || ''}>
      <Icon />
    </IconButton>
  );
}

export default SocialIconButton;
