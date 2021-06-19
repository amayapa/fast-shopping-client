import { Button } from "./button";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const Theme = {
  darkMode: {
    colors: {
      bgPrimary: "#333333",
      bgSecondary: "#292929",
      text: "#e9e9e9",
      borderColor: "#e9e9e9",
      shadows: "2px 2px 1px #b6b6b6",
      disabledShadow: "2px 2px 2px #000000",
      hover: "#b2b2b2",
      disable: "#000",
      icons: "#000",
    },
  },
  lightMode: {
    colors: {
      bgPrimary: "#ffffff",
      bgSecondary: "#eeeeee",
      text: "#333333",
      borderColor: "#2d2d2d",
      shadows: "2px 2px 2px #000000",
      disabledShadow: "2px 2px 2px #b6b6b6",
      hover: "#d3d3d3",
      disable: "#d3d3d3",
      icons: "#333333",
    },
  },
  rounded: {
    borderRadius: "12px",
  },
  cornered: {
    borderRadius: 0,
  },
};

const footerHg = "100px";
const navBarHg = "100px";
const pngShadow = "drop-shadow(2px 2px 3px rgb(0, 0, 0))";

export { Theme, Button, footerHg, navBarHg, pngShadow, device };
