import styled from "@emotion/styled"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material"
import { graphql, PageProps } from "gatsby"
import pluralize from "pluralize"
import { HeroDisplay, SectionContainer } from "../../../../../libs/ui/src"
import { ProjectsPageQuery } from "../../../graphql-types"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface ProjectsPageProps extends PageProps<ProjectsPageQuery> {}

const StyledProjectsPage = styled.div`
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
            const { frontmatter, timeToRead, excerpt } = node
            const { title, tags } = frontmatter
            return (
              <Grid item xs>
                <Card>
                  <CardHeader
                    subheaderTypographyProps={{
                      variant: "overline",
                    }}
                    title={title}
                    subheader={`${pluralize("minute", timeToRead, true)}`}
                  />
                  <CardContent>
                    <Typography>{excerpt}</Typography>
                  </CardContent>
                  <CardActions>
                    {tags?.map(tag => (
                      <Button>{tag}</Button>
                    ))}
                  </CardActions>
                </Card>
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
