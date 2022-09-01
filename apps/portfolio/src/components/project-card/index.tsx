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
import { Link, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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
  const { slug, timeToRead, frontmatter, fields } = node;
  const { title, tags, hero, fromNow } = frontmatter;
  const { year } = fields;

  // console.log(excerpt);
  const excerpt = getDescription(node);

  const theme = useTheme();
  const link = `/projects/${slug}`;
  return (
    <CardActionArea
      component={Link}
      // cover
      // direction="up"
      // bg={theme.palette.background.default}
      to={link}
    >
      <Card>
        <CardHeader
          data-testid="card-header"
          subheaderTypographyProps={{
            variant: 'overline',
          }}
          title={title}
          // subheader={`${pluralize('minute', timeToRead, true)}`}
          subheader={fromNow}
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
            onClick={() => {
              navigate(link);
            }}
          >
            Keep Reading
          </Button>
        </CardActions>
      </Card>
    </CardActionArea>
  );
}

export default ProjectCard;
