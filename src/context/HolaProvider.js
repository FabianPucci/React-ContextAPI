import React, { createContext } from "react";

export const holaContext = createContext();

const hola = "hola desde Global";

const HolaProvider = (props) => {
  return (
    <holaContext.Provider value={{ hola }}>
      {props.children}
    </holaContext.Provider>
  );
};

export default HolaProvider;
