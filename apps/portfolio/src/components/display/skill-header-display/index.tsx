import { Box, Rating, styled, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface SkillHeaderDisplayProps {
  skill: Queries.TagPageQuery['skill'];
}

const StyledSkillDisplay = styled('div')(
  ({ theme }) => `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 50vh;
> span, p {
  font-size: 1.2em;
margin-right: ${theme.spacing(2)};
margin-left: ${theme.spacing(2)};
}
`
);

export function SkillHeaderDisplay(props: SkillHeaderDisplayProps) {
  const { skill } = props;
  return (
    <StyledSkillDisplay data-testid="header">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data-testid="container"
      >
        <Rating data-testid="rating" readOnly value={skill.rating}></Rating>
        <Typography data-testid="skill">{skill.skill}</Typography>
      </Box>

      <Typography
        data-testid="skill-time"
        variant="overline"
      >{`~${skill.date.replace(' ago', '')}`}</Typography>
    </StyledSkillDisplay>
  );
}

export default SkillHeaderDisplay;
