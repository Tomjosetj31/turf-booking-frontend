import { Tabs, Tab, Link } from "@mui/material";
import React, { useState } from "react";
import { Button } from '@mui/material';
import DatePicker from "react-datetime-picker";
import axios from "axios";
import backgroundImage from "../images/stadium.jpg";

const pstyle = { 
  background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
  color: 'white', 
  fontWeight: 'bold',
  textAlign:'center',
  marginTop: "30px"
}

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
  const [status,setStatus] = useState();
  const timeSlots = [
    {
      label: "12 AM - 1 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 00:00:00`)
      ),
    },
    {
      label: "1 AM - 2 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 01:00:00`)
      ),
    },
    {
      label: "2 AM - 3 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 02:00:00`)
      ),
    },
    {
      label: "3 AM - 4 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 03:00:00`)
      ),
    },{
      label: "4 AM - 5 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 04:00:00`)
      ),
    },
    {
      label: "5 AM - 6 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 05:00:00`)
      ),
    },{
      label: "6 AM - 7 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 06:00:00`)
      ),
    },{
      label: "7 AM - 8 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 07:00:00`)
      ),
    },
    {
      label: "8 AM - 9 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 08:00:00`)
      ),
    },
    {
      label: "9 AM - 10 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 09:00:00`)
      ),
    },
    {
      label: "10 AM - 11 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 10:00:00`)
      ),
    },
    {
      label: "11 AM - 12 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 11:00:00`)
      ),
    },
    {
      label: "12 PM - 1 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 12:00:00`)
      ),
    },
    {
      label: "1 PM - 2 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 13:00:00`)
      ),
    },
    {
      label: "2 PM - 3 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 14:00:00`)
      ),
    },
    {
      label: "3 PM - 4 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 15:00:00`)
      ),
    },{
      label: "4 PM - 5 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 16:00:00`)
      ),
    },
    {
      label: "5 PM - 6 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 17:00:00`)
      ),
    },{
      label: "6 PM - 7 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 18:00:00`)
      ),
    },{
      label: "7 PM - 8 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 19:00:00`)
      ),
    },
    {
      label: "8 PM - 9 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 20:00:00`)
      ),
    },
    {
      label: "9 PM - 10 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 21:00:00`)
      ),
    },
    {
      label: "10 PM - 11 PM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 22:00:00`)
      ),
    },
    {
      label: "11 PM - 12 AM",
      value: new Date(
        Date.parse(`${selectedDate.toLocaleDateString()} 23:00:00`)
      ),
    }
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
    try{
    const res = await axios
      .post(`http://localhost:5000/add`, data, options)
      .catch((err) => console.log(err));

    const response = await res.data;
    console.log(response);
    setStatus('success');
    }catch(error){
      console.log(error);
      setStatus('error');
    }
  };
  const renderMessage = () => {
    switch(status){
      case 'success':
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        return <p style={pstyle}>
          Bookings created successfully
        </p>
      case 'error':
        setTimeout(() => {
          setStatus(null);
        }, 4000);
        return <p style={pstyle}>Unable to book ! Please relogin adn try again</p>
      default:
        return null;
    }
  };
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
              <DatePicker value={selectedDate} onChange={handleDateChange} />
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px" }}>
                {timeSlots.map((timeSlot) => (
                  <Button
                    style={bstyles}
                    key={timeSlot.value}
                    disabled={isTimeSlotSelected(timeSlot.value)}
                    onClick={() => handleTimeSlotClick(timeSlot.value)}
                  >
                    {timeSlot.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <Button
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
          </Button>
          {renderMessage()}
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
