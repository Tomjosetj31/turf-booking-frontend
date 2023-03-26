import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";

const TodayBookings = () => {
  let token = localStorage.getItem("token");
  const [todaybooks, settodaybooks] = useState();
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
    sendRequest().then((data) => settodaybooks(data.bookings.bookings));
  }, []);
  return (
    <div>
      {todaybooks ? (
        todaybooks.map((todaybooks, index) => (
          <>
            <Todaybooks
              bookingDate={todaybooks.bookingDate}
              start_time={todaybooks.start_time}
              end_time={todaybooks.end_time}
              name={todaybooks.user.name}
            />
            <button>Delete</button>
          </>
        ))
      ) : (
        <h1>No bookings</h1>
      )}
    </div>
  );
};

export default TodayBookings;
