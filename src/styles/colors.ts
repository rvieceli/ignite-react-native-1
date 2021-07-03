enum ThemeEnum {
  LIGHT = "light",
  DARK_ROSA = "darkRosa",
  DARK_VERDE = "darkVerde",
  DARK_BLU = "darkBlu",
  DARK_VIOLA = "darkViola",
  DARK_GRIGIO = "darkGrigio",
}

interface Theme {
  white: string;
  button: string;
  text: string;
  textTitle: string;
  disabled: string;
  input: string;
  inputText: string;
  background: string;
  backgroundContrast: string;
  backgroundDisabled: string;
  backgroundDone: string;
}

type Themes = Partial<Record<ThemeEnum, Theme>>;

const colors: Themes = {
  light: {
    white: "#FFFFFF",
    button: "#3FAD27",
    text: "#3D3D4D",
    textTitle: "#3D3D4D",
    disabled: "#A09CB1",
    input: "#F5F4F8",
    inputText: "#000",
    background: "#273FAD",
    backgroundContrast: "#FFFFFF",
    backgroundDisabled: "rgba(25, 61, 223, 0.1)",
    backgroundDone: "#273FAD",
  },
  darkRosa: {
    white: "#FFFFFF",
    button: "#988BC7",
    input: "#34313D",
    inputText: "#fff",
    text: "#FF79C6",
    textTitle: "#FF79C6",
    disabled: "rgba(225,225,230, 0.6)",
    backgroundDisabled: "rgba(255, 121, 198, .1)",
    background: "#483C67",
    backgroundContrast: "#191622",
    backgroundDone: "#FF79C6",
  },
  darkVerde: {
    white: "#FFFFFF",
    button: "#988BC7",
    input: "#34313D",
    inputText: "#fff",
    text: "#67E480",
    textTitle: "#67E480",
    disabled: "rgba(225,225,230, 0.6)",
    backgroundDisabled: "rgba(68, 71, 90, 0.1)",
    background: "#483C67",
    backgroundContrast: "#191622",
    backgroundDone: "#67E480",
  },
  darkBlu: {
    white: "#FFFFFF",
    button: "#565BFF",
    input: "#212136",
    inputText: "#fff",
    text: "#565BFF",
    textTitle: "#565BFF",
    disabled: "rgba(225,225,230, 0.6)",
    backgroundDisabled: "rgba(33, 33, 54, 0.8)",
    background: "#191932",
    backgroundContrast: "#10101E",
    backgroundDone: "#565BFF",
  },
  darkViola: {
    white: "#FFFFFF",
    button: "#9347CA",
    input: "#413A6F",
    inputText: "#fff",
    text: "#E1E1E6",
    textTitle: "#E1E1E6",
    disabled: "rgba(225,225,230, 0.6)",
    backgroundDisabled: "rgba(33, 33, 54, 0.8)",
    background: "#282B5A",
    backgroundContrast: "#191D3A",
    backgroundDone: "#9347CA",
  },
  darkGrigio: {
    white: "#FFFFFF",
    button: "#181818",
    input: "#303030",
    inputText: "#fff",
    textTitle: "#BF4AD4",
    text: "#E1E1E6",
    disabled: "rgba(225,225,230, 0.6)",
    backgroundDisabled: "rgba(34, 34, 34, 0.6)",
    background: "#3E3E3E",
    backgroundContrast: "#262626",
    backgroundDone: "#12A952",
  },
};

export { colors, ThemeEnum };
export type { Theme };
