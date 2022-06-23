import styled from "@emotion/styled"
import { Box, Container, Grid, Rating, Typography } from "@mui/material"
import {
  DetailCardDisplay,
  HeroDisplay,
  ParallaxBackground,
} from "@portfolio/ui"
import { graphql, PageProps } from "gatsby"
import { SkillsPageQuery } from "../../../graphql-types"
import { pages } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface SkillsProps extends PageProps<SkillsPageQuery> {}

const StyledSkills = styled.div`
  // color: pink;
`

export function Skills(props: SkillsProps) {
  const page = pages["skills"]
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
      <HeroDisplay title={page.name}></HeroDisplay>
      <ParallaxBackground predefined={page.background}>
        <Container>
          <Grid container spacing={3}>
            {categories.map(category => {
              // return <div>{category.fieldValue} </div>

              return (
                <Grid item xs={12} sm={6}>
                  {/* <Grid container spacing={3}> */}
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
                  {/* <Grid item sm={12} md={6}>
                      <Typography variant="h6">
                        {category.fieldValue}
                      </Typography>
                      {category.nodes.map(skill => {
                        return (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
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
                    </Grid> */}
                  {/* </Grid> */}
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </ParallaxBackground>
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
    }
  }
`

export default Skills
