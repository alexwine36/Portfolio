import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material"
import { ChipListDisplay } from "@portfolio/ui"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import pluralize from "pluralize"
import { ProjectsPageQuery } from "../../../graphql-types"

type ProjectPreview = ProjectsPageQuery["allMdx"]["nodes"][0]

/* eslint-disable-next-line */
export interface ProjectCardProps {
  node: ProjectPreview
}

// const StyledProjectCard = styled("div")`
//   // color: pink;
// `

export function ProjectCard(props: ProjectCardProps) {
  const { node } = props
  const { slug, timeToRead, frontmatter, excerpt } = node
  const { title, tags, hero } = frontmatter
  const theme = useTheme()
  const link = `/projects/${slug}`
  return (
    <CardActionArea
      component={AniLink}
      cover
      direction="up"
      bg={theme.palette.background.default}
      to={link}
    >
      <Card>
        <CardHeader
          subheaderTypographyProps={{
            variant: "overline",
          }}
          title={title}
          subheader={`${pluralize("minute", timeToRead, true)}`}
        />
        {hero && (
          <CardMedia
            component={"img"}
            srcSet={hero.childImageSharp.fixed.srcSet}
            // height={hero.childImageSharp.fixed.presentationHeight}
            src={hero.childImageSharp.fixed.src}
          ></CardMedia>
        )}
        <ChipListDisplay tags={tags} />

        <CardContent>
          <Typography>{excerpt}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={AniLink}
            cover
            direction="up"
            bg={theme.palette.background.default}
            to={link}
          >
            Keep Reading
          </Button>
        </CardActions>
      </Card>
    </CardActionArea>
  )
}

export default ProjectCard
