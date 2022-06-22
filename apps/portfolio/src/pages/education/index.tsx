import styled from "@emotion/styled"
import { Container } from "@mui/material"
import { HeroDisplay, ParallaxBackground } from "@portfolio/ui"
import { graphql, PageProps } from "gatsby"
import { EducationQueryQuery } from "../../../graphql-types"
import SectionDataDisplay, {
  SectionDataDisplayProps,
} from "../../display/section-data-display"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface EducationPageProps extends PageProps<EducationQueryQuery> {}

const StyledEducationPage = styled.div``

export function EducationPage(props: EducationPageProps) {
  const data = props.data.allMdx.edges
  const page = pages["education"]
  const parsedData: SectionDataDisplayProps = {
    items: data.map(d => {
      const { frontmatter, body } = d.node

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || "Present"
      }`
      return {
        title: frontmatter.school,
        pretitle: frontmatter.study,
        content: body,
        subtitle: displayDate,
      }
    }),
  }

  return (
    <StyledEducationPage>
      <HeroDisplay title={page.name}></HeroDisplay>
      <ParallaxBackground predefined={page.background}>
        <Container>
          <SectionDataDisplay {...parsedData} />
        </Container>
      </ParallaxBackground>
    </StyledEducationPage>
  )
}

export const pageQuery = graphql`
  query EducationQuery {
    allMdx(
      filter: { fields: { source: { eq: "education" } } }
      sort: { fields: frontmatter___endDate, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            startDate(formatString: "YYYY")
            school
            study
            endDate(formatString: "YYYY")
          }
          fields {
            source
          }
          body
          excerpt
        }
      }
    }
  }
`

export default EducationPage
