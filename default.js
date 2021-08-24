export const fontConfig = {
  default: {
    regular: {
      fontFamily: "Roboto",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Roboto",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Roboto",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Roboto",
      fontWeight: "100",
    },
  },
};

export const appTheme = {
  fonts: configureFonts(fontConfig),
  colors: {
    primary: COLOR.primary,
    accent: COLOR.primary,
    background: COLOR.white,
    error: COLOR.error,
    text: COLOR.text_primary,
    backdrop: "rgba(0,0,0,0.6)",
  },
};
