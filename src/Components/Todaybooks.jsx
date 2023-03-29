//Style for Todays Bookings
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const Todaybooks = ({ bookingDate, start_time, end_time, name, id }) => {
  return (
    //
    <>
      <Card
        sx={{
          width: "40%",
          marginLeft:"200px",
          mt: 3,
          padding: 2,
          bgcolor: "#2471a3 ",
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
        key={id}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#5d5bc3" }} aria-label="recipe">
              {name}
            </Avatar>
          }
          title={name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight= "bold">
            {bookingDate}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight= "bold">
            {start_time}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight= "bold">
            {end_time}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Todaybooks;
