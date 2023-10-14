import { createContext } from "react";

export const themes = {
    dark : "black-theme",
    light: "white-theme",
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {},
});