import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    BlueGroDesto: {
      main: "#302F6B",
    },
    YellowGroDesto: {
      main: "#E7961C",
    },
    BlueGradient: {
      main: "rgb(31,49,117)",
      mainGradient:
        "linear-gradient(180deg, rgba(31,49,117,1) 0%, rgba(22,36,87,1) 100%)",
    },
    YellowGradient: {
      main: "rgb(247,181,0)",
      mainGradient:
        "linear-gradient(185deg, rgba(247,181,0,1) 0%, rgba(247,141,0,1) 100%)",
    },

    ColorHover: {
      main: "#E5EAFF",
    },
    ColorTextNav: {
      main: "#707070",
    },
  },
});
