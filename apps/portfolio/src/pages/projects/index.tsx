import { Grid, styled } from "@mui/material"
import { graphql, PageProps } from "gatsby"
import { HeroDisplay, SectionContainer } from "../../../../../libs/ui/src"
import { ProjectsPageQuery } from "../../../graphql-types"
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
      <HeroDisplay title={page.name}></HeroDisplay>
      <SectionContainer>
        <Grid container spacing={3}>
          {nodes.map(node => {
            return (
              <Grid key={node.slug} item xs>
                <ProjectCard node={node}></ProjectCard>
              </Grid>
            )
          })}
        </Grid>
      </SectionContainer>
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
