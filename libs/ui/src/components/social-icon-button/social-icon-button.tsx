import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Link, styled } from '@mui/material';
import { RiGitlabFill } from '@react-icons/all-files/ri/RiGitlabFill';
import { RiStackOverflowFill } from '@react-icons/all-files/ri/RiStackOverflowFill';

export type SocialProviders =
  | 'linkedin'
  | 'github'
  | 'gitlab'
  | 'stackoverflow'
  | 'admin';

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
      return RiGitlabFill;
    case 'stackoverflow':
      return RiStackOverflowFill;
    case 'admin':
      return AdminPanelSettingsIcon;
    default:
      return LinkedInIcon;
  }
};
/**
 * @category Display
 * @param props
 * @returns
 */
export function SocialIconButton(props: SocialIconButtonProps) {
  const { provider, link } = props;
  const Icon = SelectIcon(provider);

  return (
    <IconButton LinkComponent={Link} href={link || ''} aria-label={provider}>
      <Icon />
    </IconButton>
  );
}

export default SocialIconButton;
