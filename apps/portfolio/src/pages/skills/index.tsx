import styled from '@emotion/styled';
import { Box, Rating, Typography, useTheme } from '@mui/material';
import { DetailCardDisplay, MasonryGridComponent } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import AnimationLink from '../../components/animation-link';
import ParallaxSectionDisplay from '../../components/parallax-section-display';
import { usePage } from '../../hooks/use-pages/use-pages';
import { generateTagLink } from '../../utilities/generate-tag-link';
/* eslint-disable-next-line */
export interface SkillsProps extends PageProps<Queries.SkillsPageQuery> {}

const StyledSkills = styled.div`
  // color: pink;
`;

export function Skills(props: SkillsProps) {
  const page = usePage('skills');
  const theme = useTheme();
  // Function to return select options for projects

  // const select = props.data.allSkillsYaml.nodes.map(d => `"${d.skill}"`)
  // console.log(select.join(", "))

  const categories = props.data.allSkillsYaml.group
    .map((cat) => {
      const avg = cat.sum / cat.totalCount;
      const { nodes } = cat;

      return {
        ...cat,
        nodes: [...nodes].sort((a, b) => b.rating - a.rating),
        avg,
      };
    })
    .sort((a, b) => b.sum - a.sum);
  const tags = props.data.tags.group.map((d) => d.fieldValue);

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
          {categories.map((category) => {
            // return <div>{category.fieldValue} </div>
            // console.log(category);

            return (
              // <Grid key={category.fieldValue} item xs={12} sm={6}>

              <DetailCardDisplay
                key={category.fieldValue}
                title={category.fieldValue}
              >
                <Box
                  sx={{
                    paddingLeft: 3,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {category.nodes.map((skill) => {
                    return (
                      <Box
                        key={skill.skill}
                        sx={{
                          display: 'flex',
                          // alignItems: "center",
                          flexDirection: 'row',
                          // width: "100%",
                        }}
                      >
                        <Rating readOnly value={skill.rating}></Rating>
                        <Typography
                          sx={{
                            paddingX: 2,
                            color: theme.palette.text.primary,
                          }}
                          {...(tags.includes(skill.skill) && {
                            component: AnimationLink,
                            cover: true,
                            bg: theme.palette.background.default,
                            direction: 'down',
                            to: generateTagLink(skill.skill),
                          })}
                        >
                          {skill.skill}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </DetailCardDisplay>
            );
          })}
        </MasonryGridComponent>
      </ParallaxSectionDisplay>
    </StyledSkills>
  );
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
    tags: allMdx(filter: { frontmatter: { published: { eq: true } } }) {
      group(field: frontmatter___tags) {
        field
        fieldValue
      }
    }
  }
`;

export default Skills;
