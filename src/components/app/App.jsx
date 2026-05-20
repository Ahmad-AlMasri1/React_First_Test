import React , { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './App.css';
import router from '../../router';
import { Router, RouterProvider } from 'react-router-dom';
function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
