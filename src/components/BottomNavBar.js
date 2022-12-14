import { BottomNavigation, BottomNavigationAction } from "@mui/material";
// import {
//   HouseTwoToneIcon,
//   PublicTwoToneIcon,
//   StarIcon,
//   MoreHorizIcon,
// } from "@mui/icons-material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PublicTwoToneIcon from "@mui/icons-material/PublicTwoTone";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import WelcomeScreen from "../pages/WelcomeScreen";
import DiscoverScreen from "../pages/DiscoverScreen";
import MoreScreen from "../pages/MoreScreen";
import ExperienceScreen from "../pages/ExperiencesScreen";

const NavigationBottomAction = styled(BottomNavigationAction)(`
  color: #9DA7C0;
`);

const NavigationBottom = styled(BottomNavigation)`
  display: "flex";
  height: 100px;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  box-shadow: 0px -9px 13px -7px rgba(0, 0, 0, 0.31);
`;
const HomeIcon = styled(HomeRoundedIcon)`
  font-size: 35px;
  padding-bottom: 1px;
`;
const GlobeIcon = styled(PublicTwoToneIcon)`
  font-size: 35px;
  padding-bottom: 1px;
`;
const StarIcon = styled(StarRoundedIcon)`
  font-size: 35px;
  padding-bottom: 1px;
`;
const MoreIcon = styled(MoreHorizIcon)`
  font-size: 35px;
  padding-bottom: 1px;
`;
const FloatingButton = styled(Fab)`
  height: 88px;
  width: 90px;
  border-width: 50px;
  border: 10px solid #eceef2;
  background-color: #005d9e;
  box-shadow: none;
  color: white;
  margin-bottom: 50px;
`;

const BottomNavBar = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      {value == 0 ? (
        <WelcomeScreen />
      ) : value == 1 ? (
        <DiscoverScreen />
      ) : value == 3 ? (
        <ExperienceScreen />
      ) : value == 4 ? (
        <MoreScreen />
      ) : null}

      <NavigationBottom
        showLabels={true}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // console.log(newValue);
        }}
      >
        <NavigationBottomAction label="Welcome" icon={<HomeIcon />} />
        <NavigationBottomAction label="Discover" icon={<GlobeIcon />} />
        <Fab
          style={{
            height: "88px",
            width: "90px",
            borderWidth: "50px",
            border: "10px solid #eceef2",
            backgroundColor: "#005d9e",
            boxShadow: "none",
            marginBottom: "100px",
            color: "white",
          }}
          aria-label="add"
        >
          <AddIcon style={{ height: "60px", width: "55px" }} />
        </Fab>
        <NavigationBottomAction label="Experience" icon={<StarIcon />} />
        <NavigationBottomAction label="More" icon={<MoreIcon />} />
      </NavigationBottom>
    </>
  );
};
export default BottomNavBar;
