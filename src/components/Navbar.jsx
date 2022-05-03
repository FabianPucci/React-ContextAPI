import React from "react";
import { ThemeContext } from "../context/ThemeProvider";

const NavBar = () => {
  const { theme, handleStyle } = React.useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>navbar</h1>
      <label>Color de Fondo</label>
      <input
        type="color"
        onChange={(e) => handleStyle({ ...theme, background: e.target.value })}
      />
      <label htmlFor="">Color del texto</label>
      <input
        type="color"
        onChange={(e) => handleStyle({ ...theme, color: e.target.value })}
      />
    </div>
  );
};

export default NavBar;
