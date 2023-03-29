import { Button, Tabs, Tab, Link } from "@mui/material";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import TimePicker from "react-time-picker";
import axios from "axios";
import backgroundImage from '../images/stadium.jpg';

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

const bstyles = {
backgroundColor: "red",
fontWeight: "bold",
color:"black",
display: "flex",
flexWrap: "wrap" 
};

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
    <div style={styles}>
      {token ? (
        <>
          <div style={{ marginLeft:"100px", display: "flex", flexDirection: "row", gap: "1rem"}}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"110px" }}>
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"110px",marginLeft:"130px" }}>
              <Button 
                style={bstyles}
                onClick={() => sendRequest()}>
                  12- 1 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  1 - 2 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  2 - 3 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  3 - 4 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  4 - 5 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  5 - 6 AM
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"110px" }}>  
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  6 - 7 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  7 - 8 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  8 - 9 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  9 -10 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  10-11 AM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  11-12 AM
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"110px" }}>
              <Button 
                style={bstyles}
                onClick={() => sendRequest()}>
                  12 -1 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  1 - 2 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  2 - 3 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  3 - 4 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  4 - 5 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  5 - 6 PM
              </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem",marginTop:"110px" }}>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  6 - 7 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  7 - 8 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  8 - 9 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  9 -10 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  10-11 PM
              </Button>
              <Button
                style={bstyles}
                onClick={() => sendRequest()}>
                  11-12 PM
              </Button>
            </div>
          </div>
            <Button
              style={{ backgroundColor: "black",fontWeight: "bold",color:"red",display: "flex", flexWrap: "wrap",marginLeft:"400px",gap: "1rem",marginTop:"50px" }}
              onClick={() => sendRequest()}
            >
              Create Booking
            </Button>
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