import React from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { holaContext } from "../context/HolaProvider";

const NavBar = () => {
  const { theme, handleStyle } = React.useContext(ThemeContext);
  const { hola } = React.useContext(holaContext);

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>NavBar</h1>
      <p>{hola}</p>
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
