import {
  Box,
  Card,
  CardContent,
  Container,
  styled,
  Typography,
} from "@mui/material"
import { ChipListDisplay } from "@portfolio/ui"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import pluralize from "pluralize"
import { ProjectPageQuery } from "../../../../graphql-types"
import ParallaxSectionDisplay from "../../../components/parallax-section-display"

/* eslint-disable-next-line */
export interface ProjectPageProps extends PageProps<ProjectPageQuery> {}

const StyledProjectPage = styled("div")`
  // color: pink;
`

const HeroImage = styled("div")<{ image: string }>(
  ({ theme, image }) => `
background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${image});
background-position: center;
background-size: cover;
height: 320px;
display: flex;
align-items: end;
padding: ${theme.spacing(3)};
margin-bottom: ${theme.spacing(3)};
`
)

export function ProjectPage(props: ProjectPageProps) {
  console.log(props.data.mdx)
  const { mdx } = props.data
  const { frontmatter, body, timeToRead } = mdx
  const { title, tags, hero } = frontmatter
  return (
    <StyledProjectPage>
      <HeroImage image={hero.childImageSharp.fluid.src}>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography
            sx={{
              marginLeft: 2,
            }}
            variant="overline"
          >
            {pluralize("minute", timeToRead, true)}
          </Typography>
        </Box>
      </HeroImage>
      <ParallaxSectionDisplay
        page={{
          background: "meteor",
          name: "",
        }}
        hideHeader
      >
        <Container>
          <ChipListDisplay tags={tags} />
          <Card>
            <CardContent>
              <MDXRenderer>{body}</MDXRenderer>
            </CardContent>
          </Card>

          {/* <Typography variant="h1" component="h1">
          {title}
        </Typography> */}
        </Container>
      </ParallaxSectionDisplay>
    </StyledProjectPage>
  )
}

export const pageQuery = graphql`
  query ProjectPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        tags
        title
        hero {
          childImageSharp {
            fluid {
              src
              srcSet
              presentationHeight
            }
          }
        }
      }
      tableOfContents
      timeToRead
      body
    }
  }
`

export default ProjectPage
