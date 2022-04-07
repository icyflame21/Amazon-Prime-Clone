import React from "react";
import { Homepage } from "../Homepage";
import { Routes, Route } from "react-router-dom";

import Banner from "./../../Banner";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/Banner" element={<Banner />} />
    </Routes>
  );
};
