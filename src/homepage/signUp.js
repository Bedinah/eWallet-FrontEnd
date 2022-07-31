import React from "react";
import Form2 from "./form2";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div
        className="siningi"
        style={{
          fontSize: "1.4rem",
          
          background:
            "url(https://mlraan0pnurx.i.optimole.com/c32lz_w.u14v~5b478/w:1270/h:710/q:90/https://opengovasia.com/wp-content/uploads/2021/05/Article-3_11-May-2021_New-Zealand_ED_shutterstock_1438498106_1_1270x710.jpg)",
            width:"100%",
            height:"100vh"
        }}
      >
        <div style={{textAlign:"center", marginLeft:"60rem",paddingTop:"15rem"}}
        >
        <Form2></Form2>
        </div>

        <Link to={"/"}>
        <button style={{ padding: " 1rem 2rem" , marginLeft:"90rem",marginTop:"10rem",borderRadius:"1.5rem"}}>BACK</button>
      </Link>
      </div>

     
    </>
  );
};

export default SignUp;
