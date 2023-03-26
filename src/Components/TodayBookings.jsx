import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";
import { Button } from "@mui/material";

const TodayBookings = () => {
  let token = localStorage.getItem("token");
  const [todaybooks, settodaybooks] = useState();
  const [data, setData] = useState();

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
  useEffect(() => {
    sendRequest().then((data) => settodaybooks(data.bookings.bookings));
  }, [data]);
  return (
    <div>
      {todaybooks ? (
        todaybooks.map((todaybooks, index) => (
          <>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Todaybooks
                key={todaybooks._id}
                bookingDate={todaybooks.bookingDate}
                start_time={todaybooks.start_time}
                end_time={todaybooks.end_time}
                name={todaybooks.user.name}
                id={todaybooks._id}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ height: 80 }}></div>
                <Button
                  style={{
                    paddingRight: 30,
                    margin: 20,
                    backgroundColor: "red",
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
      ) : (
        <h1>No bookings</h1>
      )}
    </div>
  );
};

export default TodayBookings;
