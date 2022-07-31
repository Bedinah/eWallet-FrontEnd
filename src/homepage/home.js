import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <>
    <div className="homep">
      <div className="buttons">
      <Link to={"/signUp"}>
        <button className="bott-on">CREATE ACCOUNT</button>
      </Link>

      <Link to={"/logIn"}>
        <button className="bott-on">LOG IN</button>
      </Link>


      </div>



      
      <div className="tittle">
        <i>
          <h1>SEND MONEY</h1>
          <h1>TO YOUR FAMILY AND FRIENDS</h1>
          <h1>ANYTIME ANYWHERE</h1>
        </i>
      </div>
      </div>
    </>
  );
};

export default Home;
