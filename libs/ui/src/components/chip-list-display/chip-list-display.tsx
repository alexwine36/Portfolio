import { Chip, styled } from '@mui/material';

/* eslint-disable-next-line */
export interface ChipListDisplayProps {
  tags: string[];
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
  return (
    <StyledChipListDisplay>
      {tags.map((tag, idx) => (
        <ListItem key={idx}>
          <Chip label={tag}></Chip>
        </ListItem>
      ))}
    </StyledChipListDisplay>
  );
}

export default ChipListDisplay;
