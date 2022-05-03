import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const themes = {
    color: "#674EA7",
    background: "#D3FFCE",
  };

  const [theme, setTheme] = useState(themes);

  React.useEffect(() => {
    if (localStorage.getItem("localTheme")) {
      const localTheme = JSON.parse(localStorage.getItem("localTheme"));
      setTheme(localTheme);
    }
  }, []);

  const handleStyle = (valor) => {
    setTheme(valor);
    localStorage.setItem("localTheme", JSON.stringify(valor));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleStyle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
