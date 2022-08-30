import { createTheme } from "@mui/material/styles";
import "@fontsource/lato";

const theme = createTheme({
  login_Button: {
    color: "white",
    backgroundColor: "#0099F1",
    width: "80%",
    fontFamily: "Lato",
    fontSize: 18,
    textTransform: "none",
    borderRadius: 2,
    marginTop: 20,
  },
  palette: {},
  typography: {
    login_blue_heading: {
      fontFamily: "Lato",
      fontSize: 17,
      fontWeight: 700,
      color: "#0099F1",
      //   lineHeight: "43.2px",
    },
    login_gray_heading: {
      fontFamily: "Lato",
      fontSize: 10,
      fontWeight: 500,
      color: "#4B4D52",
      //   lineHeight: "43.2px",
    },
    lower_blue: {
      fontFamily: "Lato",
      fontSize: 14,
      fontWeight: 600,
      color: "#005D9E",
    },
  },
});

export default theme;
