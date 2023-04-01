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
  const date = new Date(bookingDate); // create a Date object from the datetime string
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const startTime = new Date(start_time); // create a Date object from the datetime string
  const formattedStartTime = `${startTime.getHours()}:${startTime.getMinutes()}:${startTime.getSeconds()}`; // format the time as hh:mm:ss

  const endTime = new Date(end_time); // create a Date object from the datetime string
  const formattedEndTime = `${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`; // format the time as hh:mm:ss

  return (
    //
    <>
      <Card
        sx={{
          width: "40%",
          marginLeft: "200px",
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
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {formattedDate}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {formattedStartTime}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {formattedEndTime}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Todaybooks;
