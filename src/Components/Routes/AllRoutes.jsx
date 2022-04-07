import React from "react";
import { Homepage } from "../Homepage";
import { CreateAccount } from "../CreateAccount";
import { Login } from "../Login";
import { Routes, Route } from "react-router-dom";

import Banner from "./../../Banner";

export const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Homepage />} />

      <Route path="/Banner" element={<Banner />} />
=======
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/signin" element={<CreateAccount />} />
      <Route exact path="/login" element={<Login />} />
>>>>>>> 5c345601aebd3ac25057e562497a01e7887cc72a
    </Routes>
  );
};
