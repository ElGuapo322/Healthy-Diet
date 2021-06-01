import "./NavBar.css";
import React, { useEffect, useState } from "react";
import formatDate from "../../helpers/GetDate";
import { Link } from "react-router-dom";
import useWindowSize from "../../helpers/GetSize";

formatDate(new Date());

export default function NavBar() {
  const size = useWindowSize();
  const [dropDown, setDropDown] = useState("off");

  const dropWindow = (e) => {
    if (dropDown === "off") {
      setDropDown("on");
    } else if (dropDown === "on") {
      setDropDown("off");
    }
  };

  return (
    <div className="nav-wrapper">
      {size.width > 600 ? (
        <div className="navbar">
          <Link to="/" className="nav-title">
            Healthy Diet
          </Link>
          <div className="nav-date">{formatDate(new Date())}</div>
          <div className="nav-links">
            <Link to="/Pages/MealsPage" className="nav-link">
              Полезные блюда
            </Link>
            <Link to="/Pages/DiaryPage" className="nav-link">
              Приемы пищи
            </Link>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <Link to="/" className="nav-title">
            Healthy Diet
          </Link>
          <div onClick={dropWindow} className="dropDown-menu-button">
            <div className="string"></div>
            <div className="string"></div>
            <div className="string"></div>
          </div>
        </div>
      )}
      {dropDown === "on" ? (
        <div className="dropDown-menu">
          <div className="nav-date">{formatDate(new Date())}</div>
          <div className="dropDown-links">
            <Link to="/Pages/MealsPage" className="nav-link">
              Полезные блюда
            </Link>
            <Link to="/Pages/DiaryPage" className="nav-link">
              Приемы пищи
            </Link>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
