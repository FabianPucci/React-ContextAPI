import React from "react";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeProvider";
import HolaProvider from "./context/HolaProvider";

function App() {
  return (
    <ThemeProvider>
      <HolaProvider>
        <Navbar />
      </HolaProvider>
    </ThemeProvider>
  );
}

export default App;
