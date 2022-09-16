import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from "./components/Header";
import ThemeToggler from "./components/ThemeToggler";
import Footer from "./components/Footer";

export default function App() {

  const themeHook = useState("light");

  return(
    <ThemeContext.Provider value = {themeHook}>
        <Header/>
        <ThemeToggler/>
        <Footer/>
    </ThemeContext.Provider>
  );
}