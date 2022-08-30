import styled from "styled-components";
import Background from "../assets/images/Background.png";
import PW_Icon from "../assets/images/Pw_Icon.svg";
import User_Icon from "../assets/images/User_Icon.svg";
import Logo1 from "../assets/images/LndMark_logo.svg";
import { Typography } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import theme from "../Theme";
import Signup_Icon from "../assets/images/Signup_Icon.svg";
import Help_Icon from "../assets/images/Help_Icon.svg";

const BackgroundDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  position: absolute;
  background-attachment: fixed;
  background-size: cover;
  justify-content: space-around;
  align-items: center;
`;
const MainColDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 70%;
  align-items: center;
  justify-content: center;
`;
const LowerRowDiv = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 5%;
  width: 95%;
`;
const Logo = styled.img`
  width: 80%;
  margin-bottom: 20px;
`;
const LowerButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;
const LowerIcon = styled.img`
  height: 35%;
  width: 35%;
`;

const TextFieldContainerRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  margin-top: 20px;
`;
const TextfieldIcon = styled.img`
  background-color: #005d9e;
  height: 50%;
`;
const TextfieldIconContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #005d9e;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
`;

const ClickText = styled(Link)`
  font-family: "Lato";
  font-weight: 400;
  font-size: 10px;
  color: #005d9e;
`;
const InputField = styled(OutlinedInput)`
  background-color: white;
`;
const SignInScreen = () => {
  return (
    <BackgroundDiv>
      <MainColDiv>
        <Logo src={Logo1} />
        <Typography variant="login_blue_heading">
          Login to your account
        </Typography>
        <Typography variant="login_gray_heading">
          Enter your username and password to login.
        </Typography>
        <TextFieldContainerRowDiv>
          <TextfieldIconContainerDiv>
            <TextfieldIcon src={User_Icon} />
          </TextfieldIconContainerDiv>
          <InputField size="small" placeholder="Username" />
        </TextFieldContainerRowDiv>
        <TextFieldContainerRowDiv>
          <TextfieldIconContainerDiv>
            <TextfieldIcon src={PW_Icon} />
          </TextfieldIconContainerDiv>
          <InputField size="small" placeholder="Password" />
        </TextFieldContainerRowDiv>
        <Button sx={{ marginBottom: "10px" }} style={theme.login_Button}>
          Sign in
        </Button>
        <ClickText href="#" underline="none">
          {"Forgot your password?"}
        </ClickText>
      </MainColDiv>
      <LowerRowDiv>
        <LowerButtonContainerDiv>
          <LowerIcon src={Signup_Icon} />
          <Typography variant="lower_blue">Sign up</Typography>
        </LowerButtonContainerDiv>
        <LowerButtonContainerDiv>
          <LowerIcon src={Help_Icon} />
          <Typography variant="lower_blue">Help</Typography>
        </LowerButtonContainerDiv>
      </LowerRowDiv>
    </BackgroundDiv>
  );
};
export default SignInScreen;
