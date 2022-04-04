import React from "react";
import { Homepage } from "../Homepage";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};


