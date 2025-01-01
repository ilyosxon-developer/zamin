import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './base/navbar/index';
import About from "./home/biz-haqimizda";
import Home from "./home/header";
import Kurslar from "./home/kurslar/index";
import Login from "./home/login";
import Signup from "./home/sign-up";
import Container from '@mui/material/Container';
import Footer from './base/footer/index'; 
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/sign-up'];

  return (
    <>
      <Container>
      {!hideFooterPaths.includes(location.pathname) && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
              <Route path='/kurslar' element={<Kurslar />} />
              <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Container>
      {!hideFooterPaths.includes(location.pathname) && <Footer/>}
    </>
  );
}

export default App; 