import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./ui/Theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Mobile Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>The Revolution</div>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
