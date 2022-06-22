import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from "@mui/material"
import { Link } from "gatsby"
import { pageArray } from "../../utilities/pages"

/* eslint-disable-next-line */
export interface NavigationLayoutProps {}
const shadowColor = 100
const backgroundColor = 0
const StyledNavigationLayout = styled(Box)(
  ({ theme }) => `
// color: pink;
z-index: 2000;
position: fixed;
bottom: 0;
left: 0;
right: 0;

background: transparent;
background-image: radial-gradient(rgba(${backgroundColor}, ${backgroundColor}, ${backgroundColor}, 0.25), rgba(${backgroundColor}, ${backgroundColor}, ${backgroundColor}, 0.05));
backdrop-filter: blur(25px);
box-shadow: ${theme.shadows[1].replace(
    /rgba\(0,0,0/gm,
    `rgba(${shadowColor},${shadowColor},${shadowColor}`
  )};
border: 1px solid ${theme.palette.divider};
`
)

export function NavigationLayout(props: NavigationLayoutProps) {
  // const [value, setValue] = React.useState(0);
  // const { pathname } = useLocation();

  const handleChange = (val: number) => {
    console.log(val)

    // setValue(val);
  }
  return (
    <StyledNavigationLayout>
      <BottomNavigation
        sx={{
          background: "transparent",
        }}
        showLabels
        // value={value}
        onChange={(_event, newValue) => {
          handleChange(newValue)
        }}
      >
        {pageArray.map(action => {
          return (
            <BottomNavigationAction
              component={Link}
              to={action.href}
              key={action.href}
              label={action.name}
              icon={action.icon}
            />
            // <Button component={Link} to={action.href}>
            //   {action.name}
            // </Button>
          )
        })}
      </BottomNavigation>
    </StyledNavigationLayout>
  )
}

export default NavigationLayout
