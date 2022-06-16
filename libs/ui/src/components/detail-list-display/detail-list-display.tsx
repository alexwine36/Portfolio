import { Chip, styled, Typography } from '@mui/material';

export type Bullets = string | string[];

/* eslint-disable-next-line */
export interface DetailListDisplayProps {
  bullets: Bullets[];
  chips?: boolean;
}

const StyledDetailListDisplay = styled('ul')`
  // color: pink;
  margin: 0;
`;

const ChipListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const StyledListItem = styled('li')`
  display: list-item;
  text-align: match-parent;
`;

export function DetailListDisplay(props: DetailListDisplayProps) {
  const { bullets, chips } = props;
  return (
    <>
      {/* <List>
        <ListItem>Sample</ListItem>
      </List> */}
      <StyledDetailListDisplay
        sx={{
          ...(chips && {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            p: 0.5,
            m: 0,
          }),
        }}
      >
        {bullets.map((bullet, idx) => {
          if (typeof bullet === 'string') {
            if (chips) {
              return (
                <ChipListItem>
                  <Chip label={bullet}></Chip>
                </ChipListItem>
              );
            }
            return (
              <StyledListItem key={idx}>
                <Typography>{bullet}</Typography>
              </StyledListItem>
            );
          }
          return <DetailListDisplay key={idx} bullets={bullet} />;
        })}
        {/* <li>Sample</li>
        <li>Sample</li>
        <ul>
          <li>Sample</li>
        </ul> */}
      </StyledDetailListDisplay>
    </>
    // <StyledDetailListDisplay>
    //   <h1>Welcome to DetailListDisplay!</h1>
    // </StyledDetailListDisplay>
  );
}

export default DetailListDisplay;
