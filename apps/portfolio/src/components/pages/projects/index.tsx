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
import { ChipListDisplay, MasonryGridComponent } from '@portfolio/ui';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import pluralize from 'pluralize';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Sticky from 'react-stickynode';
import {
  ProjectExcerptFragmentFragment,
  ProjectPageQuery,
} from '../../../../graphql-types';
import { usePage } from '../../../hooks/use-pages/use-pages';
import { generateTagLink } from '../../../utilities/generate-tag-link';
import NextPostComponent from '../../next-post-component/next-post-component';
import ParallaxSectionDisplay from '../../parallax-section-display';
import ProjectCard from '../../project-card';
/* eslint-disable-next-line */
export interface ProjectPageProps extends PageProps<ProjectPageQuery> {}

const StyledProjectPage = styled('div')`
  // color: pink;
`;

const HeroImage = styled('div')(
  ({ theme }) => `

height: 50vh;
display: flex;
align-items: end;
padding: ${theme.spacing(3)};
margin-bottom: ${theme.spacing(3)};
position: relative;
`
);

const BackgroundImage = styled(GatsbyImage)(
  ({ theme }) => `
  position: absolute !important;
  z-index: -10;
  width: 100%;
  height: 100%;
  left: 0;


`
);

export function ProjectPage(props: ProjectPageProps) {
  // console.log(props.data.mdx);
  // console.log(props.data.related);
  const [next, setNext] = useState<
    ProjectExcerptFragmentFragment['nodes'][0] | undefined
  >();
  const [previous, setPrevious] = useState<
    ProjectExcerptFragmentFragment['nodes'][0] | undefined
  >();
  const page = usePage('projects');
  const { mdx, related, series } = props.data;
  const { frontmatter, body, timeToRead, tableOfContents } = mdx;
  const { title, tags, hero, date } = frontmatter;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const shadowColor = '255';
  console.log(series);

  useEffect(() => {
    if (series) {
      series.nodes.forEach((e) => {
        console.log(date, e.frontmatter.date);

        if (date < e.frontmatter.date) {
          console.log(date, e);

          setNext(e);
        }
        if (date > e.frontmatter.date) {
          console.log(date, e);

          setPrevious(e);
        }
      });
    }
  }, [mdx, series, date]);
  console.log('NEXT', next);
  console.log('PREV', previous);
  return (
    <StyledProjectPage>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <HeroImage>
        <BackgroundImage
          alt="Hero Image"
          image={hero.childImageSharp.gatsbyImageData}
        ></BackgroundImage>
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
      <ParallaxSectionDisplay page={page} hideHeader>
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
                <CardContent></CardContent>
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
                    <Button key={item.url} href={item.url}>
                      {item.title}
                    </Button>
                  ))}
                </ButtonGroup>
              </Sticky>
            </Grid>
            <Grid item xs={12} container spacing={3}>
              {previous && (
                <NextPostComponent slug={previous?.slug}></NextPostComponent>
              )}
              {next && (
                <NextPostComponent slug={next?.slug}></NextPostComponent>
              )}
            </Grid>
          </Grid>

          {/* <Typography variant="h1" component="h1">
          {title}
        </Typography> */}
          <Box
            sx={{
              marginTop: 4,
            }}
          >
            <MasonryGridComponent>
              {related.nodes.map((node) => {
                return (
                  // <Grid key={node.slug} item xs>
                  <ProjectCard small key={node.slug} node={node}></ProjectCard>
                  // </Grid>
                );
              })}
            </MasonryGridComponent>
          </Box>
        </Container>
      </ParallaxSectionDisplay>
    </StyledProjectPage>
  );
}

export const pageQuery = graphql`
  query ProjectPage($slug: String, $tags: [String], $series: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        tags
        title
        date
        hero {
          childImageSharp {
            gatsbyImageData(
              transformOptions: {
                duotone: { highlight: "#49afe2", shadow: "#000000" }
                fit: COVER
              }
              placeholder: BLURRED
              # layout: CONSTRAINED

              formats: [AUTO, WEBP]
            )
          }
        }
      }
      tableOfContents
      timeToRead
      body
    }
    series: allMdx(
      filter: { frontmatter: { series: { eq: $series } }, slug: { ne: $slug } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...ProjectExcerptFragment
    }
    related: allMdx(
      filter: { frontmatter: { tags: { in: $tags } }, slug: { ne: $slug } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      ...ProjectExcerptFragment
    }
  }
`;

export default ProjectPage;
