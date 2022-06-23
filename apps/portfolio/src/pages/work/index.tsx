import styled from "@emotion/styled"
import {
  HeroDisplay,
  ParallaxBackground,
  SectionContainer,
} from "@portfolio/ui"
import { graphql, PageProps } from "gatsby"

import { WorkQueryQuery } from "../../../graphql-types"
import SectionDataDisplay, {
  SectionDataDisplayProps,
} from "../../display/section-data-display"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface WorkPageProps extends PageProps<WorkQueryQuery> {}

const StyledWorkPage = styled.div`
  // color: pink;
`

export const WorkPage = (props: WorkPageProps) => {
  const data = props.data.allMdx.edges
  const page = pages["work"]
  const parsedData: SectionDataDisplayProps = {
    items: data.map(d => {
      const { frontmatter, body } = d.node

      const displayDate = `${frontmatter.startDate} - ${
        frontmatter.endDate || "Present"
      }`
      return {
        title: frontmatter.company,
        pretitle: frontmatter.position,
        content: body,
        subtitle: displayDate,
      }
    }),
  }
  return (
    <StyledWorkPage>
      <HeroDisplay title={page.name}></HeroDisplay>

      <ParallaxBackground predefined={"planet"}>
        <SectionContainer>
          <SectionDataDisplay {...parsedData} />
        </SectionContainer>
      </ParallaxBackground>
    </StyledWorkPage>
  )
}

export const pageQuery = graphql`
  query WorkQuery {
    allMdx(
      filter: { fields: { source: { eq: "work" } } }
      sort: { fields: frontmatter___endDate, order: DESC }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            startDate(formatString: "MMM YYYY")
            company
            position
            endDate(formatString: "MMM YYYY")
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

export default WorkPage
