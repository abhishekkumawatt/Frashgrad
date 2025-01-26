import React from "react";

import Footer from "../components/common/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Home from "../components/pages/Home/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
};



export default Router;
