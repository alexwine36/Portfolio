import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChipListDisplay } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import pluralize from 'pluralize';
import Sticky from 'react-stickynode';
import { ProjectPageQuery } from '../../../../graphql-types';
import ParallaxSectionDisplay from '../../../components/parallax-section-display';
import { generateTagLink } from '../../../utilities/generate-tag-link';
/* eslint-disable-next-line */
export interface ProjectPageProps extends PageProps<ProjectPageQuery> {}

const StyledProjectPage = styled('div')`
  // color: pink;
`;

const HeroImage = styled('div')<{ image: string }>(
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
);

export function ProjectPage(props: ProjectPageProps) {
  console.log(props.data.mdx);
  const { mdx } = props.data;
  const { frontmatter, body, timeToRead, tableOfContents } = mdx;
  const { title, tags, hero } = frontmatter;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const shadowColor = '255';
  return (
    <StyledProjectPage>
      <HeroImage image={hero && hero.childImageSharp.fixed.src}>
        <Box>
          <Typography variant="h1">{title}</Typography>
          <Typography
            sx={{
              marginLeft: 2,
            }}
            variant="overline"
          >
            {pluralize('minute', timeToRead, true)}
          </Typography>
        </Box>
      </HeroImage>
      <ParallaxSectionDisplay
        page={{
          background: 'meteor',
          name: '',
        }}
        hideHeader
      >
        <Container>
          <ChipListDisplay
            tags={tags.map((t) => ({
              name: t,
              link: generateTagLink(t),
            }))}
          />

          <Grid
            container
            spacing={3}
            sx={{
              ...(matches && {
                flexDirection: 'column-reverse',
              }),
            }}
          >
            <Grid item xs>
              <Card>
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <MDXRenderer>{body}</MDXRenderer>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={2} zeroMinWidth>
              <Sticky enabled={true} top={matches ? 25 : 50}>
                <ButtonGroup
                  sx={{
                    overflow: 'unset',
                    position: 'sticky',
                    top: 0,
                    backgroundImage: `radial-gradient(

                      rgba(255, 255, 255, 0.15),
                      rgba(255, 255, 255, 0)
                    )`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: `${theme.shadows[1].replace(
                      /rgba\(0,0,0/gm,
                      `rgba(${shadowColor},${shadowColor},${shadowColor}`
                    )}`,
                    // border: `1px solid ${theme.palette.divider}`,

                    textAlign: 'center',
                  }}
                  orientation={matches ? 'horizontal' : 'vertical'}
                  variant="text"
                  color="info"
                >
                  {tableOfContents.items?.map((item) => (
                    <Button href={item.url}>{item.title}</Button>
                  ))}
                </ButtonGroup>
              </Sticky>
            </Grid>
          </Grid>

          {/* <Typography variant="h1" component="h1">
          {title}
        </Typography> */}
        </Container>
      </ParallaxSectionDisplay>
    </StyledProjectPage>
  );
}

export const pageQuery = graphql`
  query ProjectPage($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        tags
        title
        hero {
          childImageSharp {
            fixed(jpegProgressive: true, width: 1500) {
              srcSet
              src
            }
          }
        }
      }
      tableOfContents
      timeToRead
      body
    }
  }
`;

export default ProjectPage;
