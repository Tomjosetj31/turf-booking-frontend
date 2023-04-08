//Style for Todays Bookings
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

const Todaybooks = ({ bookingDate, slot, name, id }) => {
  const timeSlots = [
    "12:00 am - 1:00 am",
    "1:00 am - 2:00 am",
    "2:00 am - 3:00 am",
    "3:00 am - 4:00 am",
    "4:00 am - 5:00 am",
    "5:00 am - 6:00 am",
    "6:00 am - 7:00 am",
    "7:00 am - 8:00 am",
    "8:00 am - 9:00 am",
    "9:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 1:00 pm",
    "1:00 pm - 2:00 pm",
    "2:00 pm - 3:00 pm",
    "3:00 pm - 4:00 pm",
    "4:00 pm - 5:00 pm",
    "5:00 pm - 6:00 pm",
    "6:00 pm - 7:00 pm",
    "7:00 pm - 8:00 pm",
    "8:00 pm - 9:00 pm",
    "9:00 pm - 10:00 pm",
    "10:00 pm - 11:00 pm",
    "11:00 pm - 12:00 am",
  ];
  const date = new Date(bookingDate); // create a Date object from the datetime string
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

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
            <div style={{ color: "white", textAlign: "center" }}>
              Booked Date {formattedDate}
            </div>
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            <div style={{ color: "white", textAlign: "center" }}>
              {" "}
              Time slot: {timeSlots[slot - 1]}{" "}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Todaybooks;
