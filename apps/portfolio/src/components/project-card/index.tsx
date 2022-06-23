import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  styled,
  Typography,
} from "@mui/material"
import { Link } from "gatsby"
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

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

export function ProjectCard(props: ProjectCardProps) {
  const { node } = props
  const { slug, timeToRead, frontmatter, excerpt } = node
  const { title, tags, hero } = frontmatter
  return (
    <CardActionArea component={Link} to={`projects/${slug}`}>
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
            srcSet={hero.childImageSharp.fluid.srcSet}
            // height={hero.childImageSharp.fluid.presentationHeight}
            src={hero.childImageSharp.fluid.src}
          ></CardMedia>
        )}
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            // flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
            overflowX: "scroll",
          }}
          component="ul"
        >
          {tags.map((tag, idx) => (
            <ListItem key={idx}>
              <Chip label={tag}></Chip>
            </ListItem>
          ))}
        </Box>

        <CardContent>
          <Typography>{excerpt}</Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/projects/${slug}`}>
            Keep Reading
          </Button>
        </CardActions>
      </Card>
    </CardActionArea>
  )
}

export default ProjectCard
