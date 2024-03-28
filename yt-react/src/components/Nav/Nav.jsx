import React from "react";
import "./NavStyle.css";

function Nav() {
  return (
    <section id="nav">
      <div className="-brand">
        <div className="-ham">
          <img src="https://via.placeholder.com/24x24" alt=""></img>
        </div>
        <div className="-logo">
          <img src="https://via.placeholder.com/90x20" alt=""></img>
        </div>
      </div>
      <div className="-center">
        <div className="-search">
          <div className="-search-box">
            <input type="text" className="-search-input" />
          </div>
          <div className="-btn">Q</div>
        </div>
        <div className="-voice"></div>
      </div>
      <div className="-end">
        <div className="-end-item">
          <img src="https://via.placeholder.com/24x24" alt=""></img>
        </div>
        <div className="-end-item">
          <img src="https://via.placeholder.com/24x24" alt=""></img>
        </div>
        <div className="-end-item" style={{ width: 32, height: 32, overflow: "hidden"}}>
          <img src="https://via.placeholder.com/32x32" alt=""></img>
        </div>
      </div>
    </section>
  );
}

export default Nav;
