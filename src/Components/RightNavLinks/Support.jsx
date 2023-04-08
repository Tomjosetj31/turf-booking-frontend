import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import backgroundImage from '../../images/Support.jpg';
import { TextField } from "@mui/material";

const pstyle = {
  background:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "235px",
};

const Tstyle = {
  color: "white",
  marginRight: "2rem",
};
const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};
const Updatepassword = () => {
  let token = localStorage.getItem("token");
  const [profile, setProfile] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks
  const [status, setStatus] = useState();

  const updateRequest = async (password) => {
    console.log("sendRequest");
    try{
      const res = await axios
        .put(`http://localhost:5000/updatepassword`,{
          password
        }, {
          headers: { authorization: `Bearer ${token}` },
        })
        .catch((err) => console.log(err));
      const data = await res.data;
      console.log(data);
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };
  const renderMessage = () => {
    switch (status) {
      case "success":
        setTimeout(() => {
          setStatus(null);
        }, 6000);
        return <p style={pstyle}>Password Updated</p>;
      case "error":
        setTimeout(() => {
          setStatus(null);
        }, 6000);
        return (
          <p style={pstyle}>Unable to update password! Please try again</p>
        );
      default:
        return null;
    }
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
          <h1
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: "47px",
            }}
          >
            Update Password
          </h1>
        </div>
        <div style={{ marginTop: "80px", marginLeft: "300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
            <h1 style={Tstyle}>Password</h1>
            <TextField
              label="New Password"
              onChange={(event) => setProfile({...profile, password: event.target.value})}
              inputProps={{
                style: { color: "red", fontSize: "16px", fontWeight: "bold" },
              }}
            />
          </div>
        </div>
        <Button
          style={{
            paddingRight: "12px",
            marginLeft: "420px",
            marginTop: "3px",
            backgroundColor: "green",
            fontWeight: "bold",
            color: "white",
          }}
          onClick={() => updateRequest(profile.password)}
        >
          Update
        </Button>
        {renderMessage()}
      </div>
    </>
  );
};
export default Updatepassword;
