import { Grid, styled } from "@mui/material"
import { graphql, PageProps } from "gatsby"
import { ProjectsPageQuery } from "../../../graphql-types"
import ParallaxSectionDisplay from "../../components/parallax-section-display"
import ProjectCard from "../../components/project-card"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface ProjectsPageProps extends PageProps<ProjectsPageQuery> {}

const StyledProjectsPage = styled("div")`
  // color: pink;
`

export function ProjectsPage(props: ProjectsPageProps) {
  const { nodes } = props.data.allMdx
  const page = pages["projects"]
  return (
    <StyledProjectsPage>
      <ParallaxSectionDisplay page={page}>
        <Grid container spacing={3}>
          {nodes.map(node => {
            return (
              <Grid key={node.slug} item xs>
                <ProjectCard node={node}></ProjectCard>
              </Grid>
            )
          })}
        </Grid>
      </ParallaxSectionDisplay>
    </StyledProjectsPage>
  )
}

export const pageQuery = graphql`
  query ProjectsPage {
    allMdx(filter: { fields: { source: { eq: "projects" } } }) {
      totalCount
      nodes {
        frontmatter {
          tags
          title
        }
        excerpt
        slug
        timeToRead
      }
    }
  }
`

export default ProjectsPage
