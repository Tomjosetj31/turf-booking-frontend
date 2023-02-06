import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";

const TodayBookings = () => {
  const [todaybook, settodaybook] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/bookings")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => settodaybook(data.bookings));
  }, []);
  return (
    <div>
      {todaybook &&
        todaybook.map((todaybook, index) => (
          <Todaybooks
            bookingDate={todaybook.bookingDate}
            start_time={todaybook.start_time}
            end_time={todaybook.end_time}
            name={todaybook.user.name}
          />
        ))}
    </div>
  );
};
export default TodayBookings;
