import React from "react";
import Header from "./companents/Header/header";
import Footer from "./companents/Footer/Footer";
import Main from "./companents/Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
