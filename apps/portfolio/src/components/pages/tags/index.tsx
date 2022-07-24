import { styled } from '@mui/material';
import { MasonryGridComponent, PageBackground } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import { usePage } from '../../../hooks/use-pages/use-pages';
import SkillHeaderDisplay from '../../display/skill-header-display';
import ParallaxSectionDisplay from '../../parallax-section-display';
import ProjectCard from '../../project-card';
/* eslint-disable-next-line */
export interface TagPageProps extends PageProps<Queries.TagPageQuery> {}

const StyledTagPage = styled('div')`
  // color: pink;
`;

export function TagPage(props: TagPageProps) {
  const { skill, projects } = props.data;
  const { nodes } = projects;
  const page = usePage('projects');
  return (
    <StyledTagPage data-testid="tag-page">
      <GatsbySeo title={skill?.skill} />
      <PageBackground data-testid="page-background">
        <SkillHeaderDisplay skill={skill} />

        <ParallaxSectionDisplay hideHeader page={page}>
          <MasonryGridComponent>
            {nodes.map((node) => {
              return (
                // <Grid key={node.slug} item xs>
                <ProjectCard key={node.slug} node={node}></ProjectCard>
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
    projects: allMdx(
      filter: { frontmatter: { tags: { eq: $tag }, published: { eq: true } } }
    ) {
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
