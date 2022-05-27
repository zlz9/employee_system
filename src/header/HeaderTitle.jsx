import React from "react";
import "./HeaderTitle.css";
import logo from "../assets/img/实训2.jpg";
export default function HeaderTitle() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <h1>员工考勤系统</h1>
    </div>
  );
}
