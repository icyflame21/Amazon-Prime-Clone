import React from "react";
import { Homepage } from "../Homepage";
import { Routes, Route } from "react-router-dom";
import BootStrapCarousal from "../Slideshow/BootStrapCarousal";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/bootstrapCarousal" element={<BootStrapCarousal />} />
    </Routes>
  );
};
