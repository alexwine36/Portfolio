import styled from "@emotion/styled"
import { Box, Container, Grid, Rating, Typography } from "@mui/material"
import { graphql, PageProps } from "gatsby"
import { SkillsPageQuery } from "../../../graphql-types"

/* eslint-disable-next-line */
export interface SkillsProps extends PageProps<SkillsPageQuery> {}

const StyledSkills = styled.div`
  // color: pink;
`

export function Skills(props: SkillsProps) {
  const categories = props.data.allSkillsYaml.group
    .map(cat => {
      const avg = cat.sum / cat.totalCount
      return {
        ...cat,
        avg,
      }
    })
    .sort((a, b) => b.sum - a.sum)

  console.log(categories)

  return (
    <StyledSkills>
      <Container>
        <Grid container spacing={3}>
          {categories.map(category => {
            // return <div>{category.fieldValue} </div>

            return (
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item sm={12} md={6}>
                    <Typography variant="h6">{category.fieldValue}</Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    {/* <Typography variant="h6">{category.fieldValue}</Typography> */}
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
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Container>

      <h1>Welcome to Skills!</h1>
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
