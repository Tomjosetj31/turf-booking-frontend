import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import backgroundImage from '../../images/aboutus.jpg';
import { TextField } from "@mui/material";

const Tstyle = {
  color: "#4B0082",
  marginRight: "2rem"
}
const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};
const Updateprofile = () => {
  let token = localStorage.getItem("token");
  const [profile, setProfile] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks

  const updateRequest = async () => {
    console.log("sendRequest");
    const res = await axios
      .put(`http://localhost:5000/update`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const sendRequest = async () => {
    console.log("sendRequest");
    const res = await axios
      .get(`http://localhost:5000/user`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    console.log("useEffect");
    sendRequest().then((data) => setProfile(data.user));
  }, []);
  return (
  <>
    <div style={Styles}>
      <div>
        <h1 style={{ color: "#000080", textAlign: "center", paddingTop:"20px" }}>Update Profile</h1>
      </div>
      <div style={{marginTop:"80px",marginLeft:"300px"}}>
        <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>        
          <h1 style={Tstyle}>Name</h1>        
          <TextField value={profile?.name} 
          inputProps={{ style: { color: 'red',fontSize: '16px', fontWeight: 'bold' } } }/>        
        </div>        
        <div style={{ display: "flex",marginTop:"20px", alignItems: "center", gap: "7rem" }}>       
          <h1 style={Tstyle}>Age</h1>       
          <TextField value={profile?.age} 
          inputProps={{ style: { color: 'red',fontSize: '16px', fontWeight: 'bold' } } }/>       
        </div>        
        <div style={{ display: "flex",marginTop:"20px", alignItems: "center", gap: "5rem" }}>        
          <h1 style={Tstyle}>Phone</h1>        
          <TextField value={profile?.phone}
          inputProps={{ style: { color: 'red',fontSize: '16px', fontWeight: 'bold' } } }/>       
        </div>        
        <div style={{ display: "flex",marginTop:"20px", alignItems: "center", gap: "5rem" }}>        
          <h1 style={Tstyle}>Email</h1>        
          <TextField value={profile?.email} 
          inputProps={{ style: { color: 'red',fontSize: '16px', fontWeight: 'bold' } } }/>       
        </div>
      </div>
      <Button
          style={{
            paddingRight:"12px",
            marginLeft: "450px",
            marginTop:"50px",
            backgroundColor: "red",
            fontWeight: "bold",
            color:"black",
          }}
            onClick={() => updateRequest()}
        >
          Update
      </Button>
    </div>
  </>
);
};
export default Updateprofile;