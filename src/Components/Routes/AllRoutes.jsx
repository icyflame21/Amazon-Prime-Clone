import React from "react";
import { Homepage } from "../Homepage";
import { CreateAccount } from "../CreateAccount";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<CreateAccount />} />
    </Routes>
  );
};


