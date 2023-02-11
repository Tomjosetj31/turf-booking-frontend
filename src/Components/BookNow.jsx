import { Button } from "@mui/material";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const BookNow = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
      <Button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          console.log(value);
        }}
      >
        Create Booking
      </Button>
    </div>
  );
};

export default BookNow;
