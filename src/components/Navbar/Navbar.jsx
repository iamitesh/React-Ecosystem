import React from 'react';
import {  Link } from "react-router-dom";
import './Navbar.css'
const Navbar= () =>{
  return (
  <div className='navbar'>
    <li className='list-item'>
      <Link to="/">Todo</Link>
    </li>
    <li className='list-item'>
      <Link to="/Stopwatch">Stopwatch</Link>
    </li>
    <li>
      <Link to="/PostList">Post List</Link>
    </li>
    <li>
      <Link to="/DigitalClock">Digital Clock</Link>
    </li>
    <li>
      <Link to="/MovieSearch">Movie Search</Link>
    </li>
    <li>
      <Link to="/FileUploader">File Uploader</Link>
    </li>
    <li>
      <Link to="/ChatApp">Chat App</Link>
    </li>
  </div>
  );
}
export default Navbar;