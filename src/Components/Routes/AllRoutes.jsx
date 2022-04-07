import React from "react";
import { Homepage } from "../Homepage";
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from "../CreateAccount";
import { Login } from "../Login";
import Banner from "./../../Banner";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route Path />

      <Route path="/Banner" element={<Banner />} />

      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signin" element={<CreateAccount />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
