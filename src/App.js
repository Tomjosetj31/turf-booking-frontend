import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
//import Support from "./Components/Support";
import BookNow from "./Components/BookNow";
import Header from "./Components/Header";
import Login from "./Components/Login";
import BookingDetails from "./Components/BookingDetails";
import { useSelector } from "react-redux";
import MyBooking from "./Components/MyBooking";
import Aboutus from "./Components/RightNavLinks/Aboutus";
import Support from "./Components/RightNavLinks/Support";
import Myprofile from "./Components/RightNavLinks/Myprofile"
import Updateprofile from "./Components/RightNavLinks/Updateprofile"

function App() {
  const isLoggedIn =useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book/add" element={<BookNow />} />
        <Route path="/todaybookings" element={<MyBooking  />} />
        <Route path="/bookingdetails/:id" element={<BookingDetails />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/updateprofile" element={<Updateprofile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </main>
    </React.Fragment>
};
export default App;