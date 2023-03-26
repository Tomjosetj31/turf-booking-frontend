import React, { useEffect, useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"; //Used to bring soccer Icon
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
//import {NavLink} from 'react-router-dom'; //used to include navigation links
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Header = () => {
  let token = localStorage.getItem("token");
  const [value, setValue] = useState();
  const [authenticated, setAuthenticated] = useState(false);
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
      }}
    >
      <Toolbar>
        <Typography>
          <SportsSoccerIcon />
        </Typography>
        <Typography variant="h4"> Chimbees's Turf </Typography>
        <Typography>
          <FitnessCenterIcon />
        </Typography>
        {authenticated && (
          <Box dispaly="flex" marginLeft={"auto"} marginRight={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/mybookings" label="My Bookings" />
              <Tab
                LinkComponent={Link}
                to="/todaybookings"
                label="Today's Booking"
              />
              <Tab LinkComponent={Link} to="book/add" label="Book Now" />
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
              color="warning"
            >
              Log Out
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
