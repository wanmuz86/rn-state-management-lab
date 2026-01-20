import React, { createContext, useContext, useState } from "react";
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // In the Context, we store mode state : light or dark
  const [mode, setMode] = useState("light");

  // method on the state - toggleTheme = to switch from dark to light
  const toggleTheme = () => {
    // prev -> refers to the previous value in the state
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  // constant ussed to declare the current style
  const theme = mode === "light" ? lightTheme : darkTheme;

  // Creating the provider
  // {children} => refers to the Component/ Element tree that has access to the context
  // state, metods and constant
  // we expose what we want throough value properties
  return (
    <ThemeContext.Provider value={{ mode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook

/// THe consumer will access the context through the custom hook created here
export function useTheme() {
  return useContext(ThemeContext);
}
