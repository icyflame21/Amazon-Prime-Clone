import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../HomepageBeforeLogin";
import { HomepageAfter } from "../HomepageAfterLogin"
import { Movies } from "../movies"
import { CreateAccount } from "../CreateAccount";
import { Login } from "../Login";
import {PaymentPage} from "../PaymentPage";
import Banner from "./../../Banner";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route Path />
      <Route path="/Banner" element={<Banner />} />
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signin" element={<CreateAccount />} />
      <Route exact path="/payment_page" element={<PaymentPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/homepage" element={<HomepageAfter />} />
      <Route exact path="/movies" element={<Movies/>} />
    </Routes>
  );
};
