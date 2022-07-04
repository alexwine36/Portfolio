import { styled } from '@mui/material';
import { graphql, PageProps } from 'gatsby';

import { ChipListDisplay, MasonryGridComponent } from '@portfolio/ui';
import { ProjectsPageQuery } from '../../../graphql-types';
import ParallaxSectionDisplay from '../../components/parallax-section-display';
import ProjectCard from '../../components/project-card';
import { usePage } from '../../hooks/use-pages/use-pages';
import { generateTagLink } from '../../utilities/generate-tag-link';
/* eslint-disable-next-line */
export interface ProjectsPageProps extends PageProps<ProjectsPageQuery> {}

const StyledProjectsPage = styled('div')`
  // color: pink;
`;

export function ProjectsPage(props: ProjectsPageProps) {
  const { allMdx, tags } = props.data;
  const { nodes } = allMdx;
  const page = usePage('projects');

  // nodes = [...nodes, ...nodes, ...nodes]
  // const masonNodes = _.chunk(nodes, nodes.length / 3)
  return (
    <StyledProjectsPage>
      <ParallaxSectionDisplay page={page}>
        {/* <Grid container spacing={3}> */}

        <ChipListDisplay
          tags={tags.group.map((tag) => ({
            name: tag.fieldValue,
            link: generateTagLink(tag.fieldValue),
          }))}
        ></ChipListDisplay>
        <MasonryGridComponent>
          {nodes.map((node) => {
            return (
              // <Grid key={node.slug} item xs>
              <ProjectCard key={node.slug} node={node}></ProjectCard>
              // </Grid>
            );
          })}
        </MasonryGridComponent>

        {/* </Grid> */}
      </ParallaxSectionDisplay>
    </StyledProjectsPage>
  );
}

export const pageQuery = graphql`
  query ProjectsPage {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fields: { source: { eq: "projects" } }
        # frontmatter: { published: { eq: true } }
      }
    ) {
      ...ProjectExcerptFragment
    }
    tags: allMdx {
      # (filter: { frontmatter: { published: { eq: true } } })
      group(field: frontmatter___tags) {
        field
        fieldValue
      }
    }
  }
  fragment ProjectExcerptFragment on MdxConnection {
    totalCount
    nodes {
      frontmatter {
        tags
        title
        description
        hero {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
            )
          }
          duo: childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              formats: [AUTO, WEBP]
              transformOptions: {
                duotone: { highlight: "#49afe2", shadow: "#000000" }
                fit: COVER
              }
            )
          }
        }
      }
      excerpt
      tableOfContents
      slug
      timeToRead
    }
  }
`;

export default ProjectsPage;
