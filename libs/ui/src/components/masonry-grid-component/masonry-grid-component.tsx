import { Box, styled, useTheme } from '@mui/material';
import _ from 'lodash';
import Masonry from 'react-masonry-css';

type StyledMasonryProps = { spacing?: number };

export interface MasonryGridComponentProps {
  children: React.ReactElement[];
  masonryProps?: StyledMasonryProps;
  gridSize?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    default?: number;
  };
}

const defaultSpacing = 3;

const StyledMasonryGridComponent = styled(Masonry)<StyledMasonryProps>(
  ({ theme, spacing }) => `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;


    .my-masonry-grid_column {
      // padding-left: 30px;
      padding-left: ${theme.spacing(spacing || defaultSpacing)};
      background-clip: padding-box;
      // max-width: 750px;
    }


    .my-masonry-grid_column > * {
      margin-bottom: ${theme.spacing(spacing || defaultSpacing)};
    }
  `
);

export function MasonryGridComponent(props: MasonryGridComponentProps) {
  const { children, masonryProps, gridSize } = props;
  const theme = useTheme();

  const { values } = theme.breakpoints;
  const { xs, sm, md, lg } = values;
  const newGrid = gridSize
    ? _.mapKeys(gridSize, (_value, key) => {
        const k = key as keyof typeof values;
        if (k in values) {
          return values[k];
        }
        return key;
      })
    : {};

  const breakpointColumnsObj = {
    default: children.length < 4 ? children.length : 3,
    [md]: 2,
    [sm]: 1,
    [xs]: 1,
    ...newGrid,
  };

  if (children.length === 1) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          'div, a': {
            maxWidth: 750,
          },
        }}
      >
        {children}
      </Box>
    );
  }

  return (
    <StyledMasonryGridComponent
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      {...masonryProps}
    >
      {children}
    </StyledMasonryGridComponent>
  );
}

export default MasonryGridComponent;
