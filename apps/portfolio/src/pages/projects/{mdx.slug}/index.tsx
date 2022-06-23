import styled from "@emotion/styled"
import { graphql, PageProps } from "gatsby"
import { ProjectPageQuery } from "../../../../graphql-types"

/* eslint-disable-next-line */
export interface ProjectPageProps extends PageProps<ProjectPageQuery> {}

const StyledProjectPage = styled.div`
  color: pink;
`

export function ProjectPage(props: ProjectPageProps) {
  console.log(props.data.mdx)

  return (
    <StyledProjectPage>
      <h1>Welcome to ProjectPage!</h1>
    </StyledProjectPage>
  )
}

export const pageQuery = graphql`
  query ProjectPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        tags
        title
      }
      tableOfContents
      timeToRead
      body
    }
  }
`

export default ProjectPage
