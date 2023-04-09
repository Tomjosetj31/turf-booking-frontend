import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";
import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import backgroundImage from "../images/stadium.jpg";

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

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

const pstyle = {
  background:
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "30px",
};

const bgstyles = {
  backgroundColor: "red",
  fontWeight: "bold",
  color: "white",
  display: "flex",
  flexWrap: "wrap",
};

const bstyles = {
  backgroundColor: "white",
  fontWeight: "bold",
  color: "#00008B",
  display: "flex",
  flexWrap: "wrap",
};

const MyBooking = () => {
  let token = localStorage.getItem("token");
  let now = new Date();
  const [todaybooks, settodaybooks] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks
  const [data, setData] = useState();
  const [showPage, setShowPage] = useState(false);
  const [selectedDate, setSelectedDate] = useState(now);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingsByDate, setBookingsByDate] = useState(null);
  const [todayBook, setTodayBook] = useState(null);
  const [status, setStatus] = useState();

  const updateData = {
    bookingDate: selectedDate,
    slot: selectedSlot,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  const updateBooking = async () => {
    try {
      const res = await axios
        .put(
          `http://localhost:5000/update/${todayBook._id}`,
          updateData,
          options
        )
        .catch((err) => console.log(err));

      const response = await res.data;
      console.log(response);
      setShowPage(false);
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

  const sendDeleteRequest = async (id) => {
    const res = await axios
      .delete(`http://localhost:5000/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    setData(data);
    return data;
  };

  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/user/bookings`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const renderMessage = () => {
    switch (status) {
      case "success":
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        return <p style={pstyle}>Bookings updated successfully</p>;
      case "error":
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        return (
          <p style={pstyle}>Unable to update booking ! Please try again</p>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    sendRequest().then((data) => settodaybooks(data.bookings.bookings));
    getAllBookingsByDate(selectedDate).then((data) => {
      const slots = data?.bookings.map((obj) => obj.slot);
      setBookingsByDate(slots);
    });
  }, [data, selectedDate, status]);
  return (
    <>
      {!showPage ? (
        <div style={{ backgroundColor: "#f2f2f2" }}>
          {todaybooks
            ? todaybooks.map((todaybooks, index) => (
                <>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Todaybooks
                      key={todaybooks._id}
                      bookingDate={todaybooks.bookingDate}
                      slot={todaybooks.slot}
                      name={todaybooks.user.name}
                      id={todaybooks._id}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ height: 80 }}></div>
                      <Button
                        style={{
                          paddingRight: "12px",
                          margin: 20,
                          backgroundColor: "black",
                          fontWeight: "bold",
                          color: "red",
                        }}
                        onClick={() => {
                          setTodayBook(todaybooks);
                          setSelectedDate(new Date(todaybooks.bookingDate));
                          setShowPage(true);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{
                          paddingRight: "12px",
                          margin: 20,
                          backgroundColor: "red",
                          fontWeight: "bold",
                          color: "black",
                        }}
                        onClick={() => {
                          sendDeleteRequest(todaybooks._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              ))
            : null}
        </div>
      ) : (
        <div style={styles}>
          <>
            <div
              style={{
                marginLeft: "50px",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
              }}>
              <div
                style={{display: "flex",flexDirection: "column",gap: "1rem",marginTop: "110px",}}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                  }}/>
              </div>
              <div style={{display: "flex",flexDirection: "column",gap: "1rem",marginTop: "100px",marginLeft: "100px"}}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "15px",
                  }}>
                  {timeSlots.map((timeSlot) =>
                    bookingsByDate &&
                    !bookingsByDate.includes(timeSlot.slot) ? (
                      <Button
                        style={bstyles}
                        key={timeSlot.slot}
                        onClick={() => {
                          setSelectedSlot(timeSlot.slot);
                        }}
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
              <Button
                style={{
                  backgroundColor: "#00008B",
                  fontWeight: "bold",
                  color: "white",
                  display: "flex",
                  flexWrap: "wrap",
                  marginLeft: "000px",
                  gap: "1rem",
                  marginTop: "50px",
                }}
                disabled={!selectedSlot}
                onClick={() => updateBooking()}>
                Update Booking
              </Button>
              {renderMessage()}
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};
export default MyBooking;
