import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../homepage/home";
import LogIn from "../homepage/logIn";
import SignUp from "../homepage/signUp";

const Index = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/logIn" element={<LogIn />}></Route>
      <Route exact path="/signUp" element={<SignUp />}></Route>
    </Routes>
  );
};

export default Index;
