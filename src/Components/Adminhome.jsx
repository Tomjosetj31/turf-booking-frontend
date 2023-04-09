import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../images/admin.jpg';

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

const AdminPage = () => {
  const navigate = useNavigate();
  const handleViewAllBookings = () => {
    navigate("/adminviewbooking");
  };
  return (
    <div style={Styles}>
      <h1 style={{ color: "white" }}>Admin Page</h1>
      <Button style={{marginTop:"40px"}}
        variant="contained"
        color="primary"
        onClick={handleViewAllBookings}
        sx={{ margin: "1rem" }}
      >
        View All Bookings
      </Button>
    </div>  
  );
};

export default AdminPage;
