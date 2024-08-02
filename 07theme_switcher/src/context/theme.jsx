import { useContext, createContext } from "react";

export const themeContext = createContext({
    themeMode : "light",
    nightMode : ()=>{} ,
    lightMode : ()=>{},
})
export const themeProvider = themeContext.Provider;

export  const useTheme = () => useContext(themeContext);
