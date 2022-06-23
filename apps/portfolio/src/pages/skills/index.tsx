import styled from "@emotion/styled"
import { Box, Rating, Typography } from "@mui/material"
import { DetailCardDisplay, MasonryGridComponent } from "@portfolio/ui"
import { graphql, PageProps } from "gatsby"
import { SkillsPageQuery } from "../../../graphql-types"
import ParallaxSectionDisplay from "../../components/parallax-section-display"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface SkillsProps extends PageProps<SkillsPageQuery> {}

const StyledSkills = styled.div`
  // color: pink;
`

export function Skills(props: SkillsProps) {
  const page = pages["skills"]

  // Function to return select options for projects

  // const select = props.data.allSkillsYaml.nodes.map(d => `"${d.skill}"`)
  // console.log(select.join(", "))

  const categories = props.data.allSkillsYaml.group
    .map(cat => {
      const avg = cat.sum / cat.totalCount
      const { nodes } = cat

      return {
        ...cat,
        nodes: nodes.sort((a, b) => b.rating - a.rating),
        avg,
      }
    })
    .sort((a, b) => b.sum - a.sum)

  console.log(categories)

  return (
    <StyledSkills>
      <ParallaxSectionDisplay page={page}>
        <MasonryGridComponent
          masonryProps={{
            spacing: 3,
          }}
          gridSize={{
            default: 2,
          }}
        >
          {categories.map(category => {
            // return <div>{category.fieldValue} </div>

            return (
              // <Grid key={category.fieldValue} item xs={12} sm={6}>

              <DetailCardDisplay title={category.fieldValue}>
                <Box
                  sx={{
                    paddingLeft: 3,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {category.nodes.map(skill => {
                    return (
                      <Box
                        key={skill.skill}
                        sx={{
                          display: "flex",
                          // alignItems: "center",
                          flexDirection: "row",
                          // width: "100%",
                        }}
                      >
                        <Rating readOnly value={skill.rating}></Rating>
                        <Typography
                          sx={{
                            paddingX: 2,
                          }}
                        >
                          {skill.skill}
                        </Typography>
                      </Box>
                    )
                  })}
                </Box>
              </DetailCardDisplay>
            )
          })}
        </MasonryGridComponent>
      </ParallaxSectionDisplay>
    </StyledSkills>
  )
}

export const pageQuery = graphql`
  query SkillsPage {
    allSkillsYaml {
      group(field: category) {
        fieldValue
        totalCount
        sum(field: rating)
        nodes {
          date(fromNow: true)
          rating
          skill
        }
      }
      # nodes {
      #   skill
      # }
    }
  }
`

export default Skills
