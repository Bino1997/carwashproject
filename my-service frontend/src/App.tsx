
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './user/components/Home';
import Navbar from './user/components/Navbar';
import Login from './user/components/Login';
import Signup from './user/components/Signup';
import CardDeck from './user/Booking details/booking';
import BookingHistory from './user/BookingHistory/UserHistory';
import BookingList from './Admin/bookingHistory';

import AdminLogin from './Admin/adminlogin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/booking" element={<CardDeck/>} />
            <Route path="/Bookhistory" element={<BookingHistory/>} />
            <Route path="/UserBookinglist" element={<BookingList/>} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
           


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
