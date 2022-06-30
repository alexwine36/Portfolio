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

const StyledChipListDisplay = styled('ul')(
  ({ theme }) => `
// color: pink;
display: flex;
list-style: none;
padding: ${theme.spacing(0.5)};
margin: ${theme.spacing(0)};
overflow-x: scroll;
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
