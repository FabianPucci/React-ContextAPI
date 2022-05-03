import React from "react";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
