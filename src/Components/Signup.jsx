import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/Login.png';

const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop:"40px",
  backgroundColor: "#f2f2f2",
  minHeight: "100vh",
}

const Signup = () => {
  return (
    <div style={Styles}>
      <h1 style={{ color: "white" }}>Account created successfully ! Please Login again.</h1>
    </div>  
  );
};

export default Signup;
