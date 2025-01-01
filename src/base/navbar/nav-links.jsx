import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

export default function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Biz haqimizda", path: "/about" },
    { name: "Kurslar", path: "/kurslar" },
    { name: "Kirish", path: "/login" },
    { name: "Ro'yxatdan o'tish", path: "/sign-up" },
  ];

  
  useEffect(() => {
    const currentIndex = menuItems.findIndex((item) => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, menuItems]);

  
  useEffect(() => {
    const activeItem = document.querySelector(".menu-item.active");
    if (activeItem && indicatorRef.current) {
      const rect = activeItem.getBoundingClientRect();
      const navRect = activeItem.closest("nav").getBoundingClientRect();
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.left = `${rect.left - navRect.left}px`;
      indicatorRef.current.style.bottom = `0px`; // Yozuv ostida joylashadi
    }
  }, [activeIndex]);

  return (
    <nav className="navbar m-0 p-0 ">
      <div className="navbar-container">
        
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
            >
              <Link className="col-sm-12 " to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="indicator" ref={indicatorRef}></div>
      </div>
    </nav>
  );
};


