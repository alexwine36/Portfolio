import { styled, Typography } from '@mui/material';

type Bullets = string | string[];

/* eslint-disable-next-line */
export interface DetailListDisplayProps {
  bullets: Bullets[];
}

const StyledDetailListDisplay = styled('ul')`
  // color: pink;
  margin: 0;
`;

const StyledListItem = styled('li')`
  display: list-item;
  text-align: match-parent;
`;

export function DetailListDisplay(props: DetailListDisplayProps) {
  const { bullets } = props;
  return (
    <>
      {/* <List>
        <ListItem>Sample</ListItem>
      </List> */}
      <StyledDetailListDisplay>
        {bullets.map((bullet, idx) => {
          if (typeof bullet === 'string') {
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
