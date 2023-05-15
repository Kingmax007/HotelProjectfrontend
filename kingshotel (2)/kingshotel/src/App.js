import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Booknow from './pages/Booknow';
import LoginComponenent from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/rooms/' element={<Rooms />} />
        <Route exact path='/rooms/:slug' element={<SingleRoom />} />
        <Route exact path="/booknow/:slug" element={<Booknow />} />
        <Route exact path="/login/" element={<LoginComponenent />} />
        <Route exact path="/signup/" element={<SignUp />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
