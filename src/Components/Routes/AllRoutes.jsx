import React from "react";
import { Homepage } from "../Homepage";
import { CreateAccount } from "../CreateAccount";
import { Login } from "../Login";
import { Routes, Route } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signin" element={<CreateAccount />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};


