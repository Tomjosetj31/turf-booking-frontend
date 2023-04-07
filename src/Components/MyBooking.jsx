import React, { useEffect, useState } from "react";
import axios from "axios";
import Todaybooks from "./Todaybooks";
import { Button } from "@mui/material";

const MyBooking = () => {
  let token = localStorage.getItem("token");
  const [todaybooks, settodaybooks] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks
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
                    /*onClick={() => {
                    sendDeleteRequest(todaybooks._id);
                  }}*/
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
  );
};
export default MyBooking;
