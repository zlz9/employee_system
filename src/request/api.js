import requests from "./request";
export const RegisterApi = (params) => requests.post("/register", params);
export const LoginApi = (params) => requests.post("/login", params);
export const EmployeeApi = (params) => requests.get("/employee", { params });
export const PunchCardApi = (params) => requests.post("/punchcard", params);
export const DepartmentApi = () => requests.get("/department");
export const AfterworkApi = (params) => requests.post("/afterwork", params);
export const InductionApi = (params) => requests.post("/induction", params);
export const EmpInfoApi = (params) =>
  requests.get("/emp/infomation", { params });
export const EmpDeleteApi = (id) => requests.post(`/emp/delete?id=${id}`);
