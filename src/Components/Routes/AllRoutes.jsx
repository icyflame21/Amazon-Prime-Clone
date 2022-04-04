import React from "react";
import { Homepage } from "../Homepage";
//import { Navbar1 } from "../Navbar1";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
