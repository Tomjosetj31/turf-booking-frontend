import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../images/admin.jpg";
import axios from "axios";

const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "40px",
  backgroundColor: "#f2f2f2",
  minHeight: "100vh",
};

const AdminPage = () => {
  let token = localStorage.getItem("token");
  const [admin, setAdmin] = useState(null);

  const navigate = useNavigate();
  const handleViewAllBookings = () => {
    navigate("/adminviewbooking");
  };
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/user`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setAdmin(data.user.isAdmin));
  }, []);
  return (
    <>
      {admin ? (
        <div style={Styles}>
          <h1 style={{ color: "white" }}>Admin Page</h1>
          <Button
            style={{ marginTop: "40px" }}
            variant="contained"
            color="primary"
            onClick={handleViewAllBookings}
            sx={{ margin: "1rem" }}
          >
            View All Bookings
          </Button>
        </div>
      ) : (
        <div>
          <h1>you are not an admin</h1>
        </div>
      )}
    </>
  );
};

export default AdminPage;
