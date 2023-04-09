import { Tabs, Tab, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import backgroundImage from "../images/stadium.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

const bstyles = {
  backgroundColor: "white",
  fontWeight: "bold",
  color: "#00008B",
  display: "flex",
  flexWrap: "wrap",
};

const bgstyles = {
  backgroundColor: "red",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  flexWrap: "wrap",
};

const pstyle = {
  background:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "30px",
};

const BookNow = () => {
  let token = localStorage.getItem("token");
  let now = new Date();
  const [selectedDate, setSelectedDate] = useState(now);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [status, setStatus] = useState();
  const [bookingsByDate, setBookingsByDate] = useState(null);

  const timeSlots = [
    {
      label: "12 AM - 1 AM",
      slot: 1,
    },
    {
      label: "1 AM - 2 AM",
      slot: 2,
    },
    {
      label: "2 AM - 3 AM",
      slot: 3,
    },
    {
      label: "3 AM - 4 AM",
      slot: 4,
    },
    {
      label: "4 AM - 5 AM",
      slot: 5,
    },
    {
      label: "5 AM - 6 AM",
      slot: 6,
    },
    {
      label: "6 AM - 7 AM",
      slot: 7,
    },
    {
      label: "7 AM - 8 AM",
      slot: 8,
    },
    {
      label: "8 AM - 9 AM",
      slot: 9,
    },
    {
      label: "9 AM - 10 AM",
      slot: 10,
    },
    {
      label: "10 AM - 11 AM",
      slot: 11,
    },
    {
      label: "11 AM - 12 PM",
      slot: 12,
    },
    {
      label: "12 PM - 1 PM",
      slot: 13,
    },
    {
      label: "1 PM - 2 PM",
      slot: 14,
    },
    {
      label: "2 PM - 3 PM",
      slot: 15,
    },
    {
      label: "3 PM - 4 PM",
      slot: 16,
    },
    {
      label: "4 PM - 5 PM",
      slot: 17,
    },
    {
      label: "5 PM - 6 PM",
      slot: 18,
    },
    {
      label: "6 PM - 7 PM",
      slot: 19,
    },
    {
      label: "7 PM - 8 PM",
      slot: 20,
    },
    {
      label: "8 PM - 9 PM",
      slot: 21,
    },
    {
      label: "9 PM - 10 PM",
      slot: 22,
    },
    {
      label: "10 PM - 11 PM",
      slot: 23,
    },
    {
      label: "11 PM - 12 AM",
      slot: 24,
    },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const isTimeSlotSelected = () => {
    if (!selectedSlot) {
      return false;
    }

    return true;
  };

  const data = {
    bookingDate: selectedDate,
    slot: selectedSlot,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  const sendRequest = async () => {
    try {
      const res = await axios
        .post(`http://localhost:5000/add`, data, options)
        .catch((err) => console.log(err));

      const response = await res.data;
      console.log(response);
      setStatus("success");
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const getAllBookingsByDate = async (date) => {
    let bookingDate = date.toISOString().split("T")[0];
    try {
      const res = await axios
        .get(`http://localhost:5000/user/bookings/${bookingDate}`, options)
        .catch((err) => console.log(err));

      const response = await res.data;
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const renderMessage = () => {
    switch (status) {
      case "success":
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        return <p style={pstyle}>Bookings created successfully</p>;
      case "error":
        setTimeout(() => {
          setStatus(null);
        }, 8000);
        return <p style={pstyle}>Slot booked! Please login again</p>;
      default:
        return null;
    }
  };
  useEffect(() => {
    getAllBookingsByDate(selectedDate).then((data) => {
      const slots = data?.bookings.map((obj) => obj.slot);
      setBookingsByDate(slots);
    });
  }, [selectedDate, status]);
  return (
    <div style={styles}>
      {token ? (
        <>
          <div
            style={{
              marginLeft: "50px",
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
              <DatePicker selected={selectedDate} onChange={handleDateChange} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "100px",
                marginLeft: "100px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "15px",
                }}
              >
                {timeSlots.map((timeSlot) =>
                  bookingsByDate && !bookingsByDate.includes(timeSlot.slot) ? (
                    <Button
                      style={bstyles}
                      key={timeSlot.slot}
                      onClick={() => handleTimeSlotClick(timeSlot.slot)}
                    >
                      {timeSlot.label}
                    </Button>
                  ) : (
                    <Button
                      style={bgstyles}
                      key={timeSlot.slot}
                      // onClick={() => handleTimeSlotClick(timeSlot.slot)}
                    >
                      Booked
                    </Button>
                  )
                )}
              </div>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "#00008B",
              fontWeight: "bold",
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "400px",
              gap: "1rem",
              marginTop: "50px",
            }}
            disabled={!selectedSlot}
            onClick={() => sendRequest()}
          >
            Create Booking
          </Button>
          {renderMessage()}
        </>
      ) : (
        <div>
          <h1 style="color: green">Please Login to book</h1>
          <Tabs>
            <Tab LinkComponent={Link} to="book/add" label="Book Now" />
          </Tabs>
        </div>
      )}
    </div>
  );
};
export default BookNow;
