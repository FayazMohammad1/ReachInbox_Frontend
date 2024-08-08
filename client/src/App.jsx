import React, { useEffect, useState } from "react";
import SignUpPage from "./pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OneboxPage from "./pages/OneboxPage";
import { ThemeProvider } from "./context/theme";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  /**
   * Switches to light theme.
   */
  const lightTheme = () => {
    setThemeMode("light");
  };

  /**
   * Switches to dark theme.
   */
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Changes the actual theme of the application
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/onebox" element={<OneboxPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
