import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";

const MyBookings = () => {
  let token = localStorage.getItem("token");
  const [mybooks, setmybooks] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/user/bookings`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setmybooks(data.bookings.bookings));
  }, []);
  return (
    <div>
      {mybooks &&
        mybooks.map((mybooks, index) => (
          <Todaybooks
            bookingDate={mybooks.bookingDate}
            start_time={mybooks.start_time}
            end_time={mybooks.end_time}
            name={mybooks.user.name}
          />
        ))}
    </div>
  );
};

export default MyBookings;
