import React from "react";
import Home from "./Home/Home";
import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Research from "./Research/research";
import AboutMe from "./AboutMe/AboutMe";
import Sequence from "./Seq-Analyst/Sequence";

function MainComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="seq-analyst" element={<Sequence />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default MainComponent;
