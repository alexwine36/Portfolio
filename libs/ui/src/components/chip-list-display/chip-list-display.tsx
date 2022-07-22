import { Chip, styled } from '@mui/material';
import { Link } from 'gatsby';
import { useId } from 'react';
/* eslint-disable-next-line */
export interface ChipListDisplayProps {
  tags?: {
    name: string;
    link?: string;
  }[];
}
const shadowColor = '255';
const StyledChipListDisplay = styled('ul')(
  ({ theme }) => `
    // color: pink;
    display: flex;
    list-style: none;
    padding: ${theme.spacing(0.5)};
    margin: ${theme.spacing(0)};
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 8px
    }
    &::-webkit-scrollbar-track {
      box-shadow: nset 0 0 6px grey;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {

      background-image: radial-gradient(

        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0)
      );
      backdrop-filter: blur(20px);
      boxShadow: ${theme.shadows[1].replace(
        /rgba\(0,0,0/gm,
        `rgba(${shadowColor},${shadowColor},${shadowColor}`
      )};
      // border: 1px solid ${theme.palette.divider};
      border-radius: 15px;
      height: 2px;
    }
  `
);

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export function ChipListDisplay(props: ChipListDisplayProps) {
  const { tags } = props;
  const id = useId();
  return (
    <StyledChipListDisplay>
      {tags?.map((tag, idx) => {
        const { name, link } = tag;
        return (
          <ListItem key={`${id}-${name}-${link}`}>
            <Chip
              label={name}
              {
                ...(link && {
                  to: link,
                  component: Link,
                  sx: {
                    cursor: 'pointer',
                  },
                })

                //   to={link}
                // label={name}
              }
            ></Chip>
          </ListItem>
        );
      })}
    </StyledChipListDisplay>
  );
}

export default ChipListDisplay;
