/**
 * 统一管理路由
 * login
 * App
 * register
 */
import APP from "../APP";
import Login from "../view/login/Login";
import Register from "../view/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Attendence from "../view/attendance/Attendence";
import Employee from "../view/employee/Employee";
import Admin from "../view/Admin/Admin";
import AfterWork from "../view/attendance/AfterWork";
import EmployeeRegister from "../view/Admin/EmployeeRegister";
const BaseRouter = () => (
  <Router>
    <Routes>
      <Route path="/index" element={<APP />}>
        <Route path="attendance" element={<Attendence />}></Route>
        {/* 员工考勤一览 */}
        <Route path="employee" element={<Employee />}></Route>
        <Route path="admin" element={<Admin />}></Route>
        {/* 员工注册 */}
        <Route path="employeeregister" element={<EmployeeRegister />}></Route>
        {/* 员工管理 */}
        {/* 下班打卡 */}
        <Route path="afterwork" element={<AfterWork />}></Route>
      </Route>
      {/* 登录注册 */}
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  </Router>
);
export default BaseRouter;
