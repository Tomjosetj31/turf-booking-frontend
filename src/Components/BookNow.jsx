import { Tabs, Tab, Link } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datetime-picker";
import axios from "axios";
import backgroundImage from "../images/stadium.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

const bstyles = {
  backgroundColor: "red",
  fontWeight: "bold",
  color: "black",
  display: "flex",
  flexWrap: "wrap",
};

const BookNow = () => {
  let token = localStorage.getItem("token");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);

  const timeSlots = [
    {
      label: "12:00 AM - 1:00 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 00:00:00`)
      ),
    },
    {
      label: "1:00 AM - 2:00 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 01:00:00`)
      ),
    },
    {
      label: "2:00 AM - 3:00 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 02:00:00`)
      ),
    },
    // Add more time slots as needed
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotClick = (value) => {
    setSelectedTimeSlot(value);
    setSelectedEndTime(new Date(value.getTime() + 60 * 60 * 1000));
  };

  const isTimeSlotSelected = (value) => {
    if (!selectedTimeSlot) {
      return false;
    }

    return selectedTimeSlot.getTime() === value.getTime();
  };

  const data = {
    bookingDate: selectedDate,
    start_time: selectedTimeSlot,
    end_time: selectedEndTime,
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
    <div style={styles}>
      {token ? (
        <>
          <div
            style={{
              marginLeft: "100px",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "110px",
              }}
            >
              <DatePicker value={selectedDate} onChange={handleDateChange} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "110px",
                marginLeft: "130px",
              }}
            >
              {timeSlots.map((timeSlot) => (
                <button
                  style={bstyles}
                  key={timeSlot.value}
                  disabled={isTimeSlotSelected(timeSlot.value)}
                  onClick={() => handleTimeSlotClick(timeSlot.value)}
                >
                  {timeSlot.label}
                </button>
              ))}
            </div>
          </div>
          <button
            style={{
              backgroundColor: "black",
              fontWeight: "bold",
              color: "red",
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "400px",
              gap: "1rem",
              marginTop: "50px",
            }}
            disabled={!selectedTimeSlot}
            onClick={() => sendRequest()}
          >
            Create Booking
          </button>
        </>
      ) : (
        <div>
          <h1 style="color: #2825c9; font-size: 24px; font-weight: bold; text-align: center;">
            Please Login to book
          </h1>
          <Tabs>
            <Tab LinkComponent={Link} to="book/add" label="Book Now" />
          </Tabs>
        </div>
      )}
    </div>
  );
};
export default BookNow;
