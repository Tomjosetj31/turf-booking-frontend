import { Button } from "@mui/material";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import TimePicker from "react-time-picker";
import axios from "axios";

const BookNow = () => {
  let token = localStorage.getItem("token");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const data = {
    bookingDate: startTime,
    start_time: startTime,
    end_time: endTime,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:5000/add`, data, options)
      .catch((err) => console.log(err));

    const response = await res.data;
    console.log(response);
    return response;
  };
  return (
    <>
      {token ? (
        <>
          <DateTimePicker
            onChange={(date) => {
              setStartTime(date);
            }}
            value={startTime}
          />
          <TimePicker
            onChange={(selectedTime) => {
              setEndTime(selectedTime);
            }}
            value={endTime}
          />
          <Button
            style={{ backgroundColor: "blue" }}
            onClick={() => sendRequest()}
          >
            Create Booking
          </Button>
        </>
      ) : (
        <h1>Please Login to book</h1>
      )}
    </>
  );
};

export default BookNow;
