import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from '@mui/material';
import { ChipListDisplay } from '@portfolio/ui';
import { GatsbyImage } from 'gatsby-plugin-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import pluralize from 'pluralize';
import { getDescription } from '../../utilities/get-description';

type ProjectPreview = Queries.ProjectsPageQuery['allMdx']['nodes'][0];

/* eslint-disable-next-line */
export interface ProjectCardProps {
  node: ProjectPreview;
  small?: boolean;
}

// const StyledProjectCard = styled("div")`
//   // color: pink;
// `

export function ProjectCard(props: ProjectCardProps) {
  const { node, small } = props;
  const { slug, timeToRead, frontmatter } = node;
  const { title, tags, hero } = frontmatter;

  // console.log(excerpt);
  const excerpt = getDescription(node);

  const theme = useTheme();
  const link = `/projects/${slug}`;
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
          data-testid="card-header"
          subheaderTypographyProps={{
            variant: 'overline',
          }}
          title={title}
          subheader={`${pluralize('minute', timeToRead, true)}`}
        />
        <GatsbyImage
          {...(small && {
            style: {
              maxHeight: 250,
            },
          })}
          alt={`${title} image`}
          image={hero?.childImageSharp.gatsbyImageData}
        ></GatsbyImage>

        <ChipListDisplay
          tags={tags?.map((t) => ({
            name: t,
          }))}
        />

        <CardContent>
          <Typography data-testid="card-excerpt">{excerpt}</Typography>
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
  );
}

export default ProjectCard;
