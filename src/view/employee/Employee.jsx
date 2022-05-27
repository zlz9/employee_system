import React from "react";
import { useState, useEffect } from "react";
import { Table, Pagination } from "antd";
import { EmployeeApi } from "../../request/api";
import moment from "moment";
export default function Employee() {
  const [arr, setArr] = useState([]);
  // 发请求

  const getEmployeeApi = (page, pageSize, total) => {
    EmployeeApi({
      page: page,
      pageSize: pageSize,
      total: 6,
    })
      .then((result) => {
        let newArr = result.data.data;
        setArr(newArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getEmployeeApi();
    console.log("bianhua");
  }, []);
  const changePage = (page, pageSize) => {
    getEmployeeApi(page);
    console.log(page);
  };
  //每一列
  const columns = [
    {
      title: "姓名",
      dataIndex: "employeeName",
      key: "name",
    },

    {
      title: "上班时间",
      dataIndex: "startime",
      key: "startTime",
      render: (val) => {
        return val ? moment(val).format("YYYY-MM-DD HH:mm:ss") : "";
      },
    },
    {
      title: "下班时间",
      dataIndex: "endtime",
      key: "endTime",
      render: (val) => {
        return val ? (
          moment(val).format("YYYY-MM-DD HH:mm:ss")
        ) : (
          <div>还没下班</div>
        );
      },
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={arr.data}
        rowKey="arr.id"
        pagination={false}
      />
      <Pagination
        defaultCurrent={1}
        total={arr.total}
        className="Pagination"
        onChange={changePage}
      />
    </div>
  );
}
