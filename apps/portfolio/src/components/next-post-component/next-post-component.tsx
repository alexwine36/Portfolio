import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  styled,
  Typography,
} from '@mui/material';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import pluralize from 'pluralize';
import { getDescription } from '../../utilities/get-description';

/* eslint-disable-next-line */
export interface NextPostComponentProps {
  slug: string;
}

const StyledNextPostComponent = styled(Card)`
  // color: pink;
  display: flex;
`;

const StyledNextMedia = styled(GatsbyImage)(
  ({ theme }) => `
  // color: pink;
  // display: flex;
  // flex-shrink: 3;
  width: 50%;
`
);

export function NextPostComponent(props: NextPostComponentProps) {
  const { slug } = props;
  const { projects } = useStaticQuery<Queries.NextPostsQuery>(graphql`
    query NextPosts {
      projects: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          fields: { source: { eq: "projects" } }
          # frontmatter: { published: { eq: true } }
        }
      ) {
        ...ProjectExcerptFragment
      }
    }
  `);

  const post = projects.nodes.find((proj) => proj.slug === slug);
  const { frontmatter, timeToRead } = post;
  const { title, hero } = frontmatter;
  const excerpt = getDescription(post);
  return (
    <StyledNextPostComponent>
      <StyledNextMedia
        style={
          {
            // width: '50%',
          }
        }
        alt={`${title} hero image`}
        image={hero.childImageSharp.gatsbyImageData}
      ></StyledNextMedia>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="overline">
            {pluralize('minute', timeToRead, true)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {excerpt}
            {/* <MDXRenderer>{excerpt}</MDXRenderer> */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/projects/${slug}`}>
            Keep reading
          </Button>
        </CardActions>
      </Box>
    </StyledNextPostComponent>
  );
}

export default NextPostComponent;
