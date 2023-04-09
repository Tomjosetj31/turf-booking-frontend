import React, { useEffect, useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, IconButton, Drawer } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; //Used to bring soccer Icon
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Profile from './RightNavLinks/profile'

const Header = () => {
  let token = localStorage.getItem("token");
  const [value, setValue] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setDrawer(true);
  };
  const handleDrawerClose = () => {
    setDrawer(false);
  };
  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    //Displays soccer icon | T
    <AppBar
      position="sticky"
      sx={{
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(86,68,182,1) 50%, rgba(0,212,255,1) 100%);//cssgradient",
      }}>
      <Toolbar>
        <Typography>
          <SportsSoccerIcon />
        </Typography>
        <Typography variant="h4">. CLub 35 Turf </Typography>
        {authenticated && (
          <Box dispaly="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}>
              {/*
              <Tab LinkComponent={Link} to="/mybookings" label="My Bookings" />
              */}
              <Tab LinkComponent={Link} to="/todaybookings" label="My Bookings" />
              <Tab LinkComponent={Link} to="book/add" label="Book Now" />
              <IconButton onClick={handleDrawerOpen}>
                <AccountCircleSharpIcon/>
              </IconButton>
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft={"auto"}>
          {!authenticated && (
            <Button
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Login
            </Button>
          )}
          {authenticated && (
            <Button
              onClick={() => {
                setAuthenticated(false);
                localStorage.removeItem("token");
              }}
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning">
              Log Out
            </Button>
          )}
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawer} onClose={handleDrawerClose} sx={{ width: 700 }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '55px',backgroundColor: '#020580' }}>
          <SettingsIcon/>
        </Typography >
          <Profile />
          {/* <Tab sx={{ backgroundColor: 'blue',fontWeight: "bold",color:"black", height: '60px', marginTop:'10px'}} LinkComponent={Link} to="/myprofile" label=" My Profile " /> 
          <Tab sx={{ backgroundColor: '#0606d6',fontWeight: "bold",color:"black", height: '60px', marginTop:'10px'}} LinkComponent={Link} to="/updateprofile" label=" Update Profile " />
          <Tab sx={{ backgroundColor: 'blue',fontWeight: "bold",color:"black", height: '60px', marginTop:'10px'}} LinkComponent={Link} to="/support" label=" Support " />
          <Tab sx={{ backgroundColor: '#0606d6',fontWeight: "bold",color:"black", height: '60px', marginTop:'10px'}} LinkComponent={Link} to="/aboutus" label=" About Us " />*/}
      </Drawer>
    </AppBar>
  );
};
export default Header;