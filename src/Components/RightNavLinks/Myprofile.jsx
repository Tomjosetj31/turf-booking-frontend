import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../images/cr7.png";
import { TextField } from "@mui/material";

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
const Myprofile = () => {
  let token = localStorage.getItem("token");
  const [profile, setProfile] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks
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
            style={{ color: "white", textAlign: "center", paddingTop: "20px" }}
          >
            MY Profile
          </h1>
        </div>
        <div style={{ marginTop: "80px", marginLeft: "300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
            <h1 style={Tstyle}>Name</h1>
            <TextField
              value={profile?.name}
              inputProps={{
                style: {
                  color: "#FFFF00",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "7rem",
            }}
          >
            <h1 style={Tstyle}>Age</h1>
            <TextField
              value={profile?.age}
              inputProps={{
                style: {
                  color: "#FFFF00",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <h1 style={Tstyle}>Phone</h1>
            <TextField
              value={profile?.phone}
              inputProps={{
                style: {
                  color: "#FFFF00",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <h1 style={Tstyle}>Email</h1>
            <TextField
              value={profile?.email}
              inputProps={{
                style: {
                  color: "#FFFF00",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Myprofile;
