import { Rating, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MasonryGridComponent, PageBackground } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { TagPageQuery } from '../../../../graphql-types';
import { usePage } from '../../../hooks/use-pages/use-pages';

import ParallaxSectionDisplay from '../../parallax-section-display';
import ProjectCard from '../../project-card';
/* eslint-disable-next-line */
export interface TagPageProps extends PageProps<TagPageQuery> {}

const StyledTagPage = styled('div')`
  // color: pink;
`;

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

export function TagPage(props: TagPageProps) {
  const { skill, projects } = props.data;
  const { nodes } = projects;
  const page = usePage('projects');
  return (
    <StyledTagPage>
      <Helmet>
        <title>{skill.skill}</title>
      </Helmet>
      <PageBackground>
        <StyledSkillDisplay>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Rating readOnly value={skill.rating}></Rating>
            <Typography>{skill.skill}</Typography>
          </Box>

          <Typography variant="overline">{`~${skill.date.replace(
            ' ago',
            ''
          )}`}</Typography>
        </StyledSkillDisplay>

        <ParallaxSectionDisplay hideHeader page={page}>
          <MasonryGridComponent>
            {nodes.map((node) => {
              return (
                // <Grid key={node.slug} item xs>
                <ProjectCard node={node}></ProjectCard>
                // </Grid>
              );
            })}
          </MasonryGridComponent>
        </ParallaxSectionDisplay>
      </PageBackground>
    </StyledTagPage>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    projects: allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
      ...ProjectExcerptFragment
    }
    skill: skillsYaml(skill: { eq: $tag }) {
      date(fromNow: true)
      rating
      skill
    }
  }
`;

export default TagPage;
