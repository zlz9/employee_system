import React from "react";
import { Space, Table, Button, Pagination, message } from "antd";
import { useState, useEffect } from "react";
import { EmpInfoApi, EmpDeleteApi } from "../../request/api";
import "./css/admin.css";
export default function Admin() {
  const [arr, setArr] = useState([]);
  const getEmpInfoApi = (page, pageSize, total) => {
    EmpInfoApi({
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
    getEmpInfoApi();
  }, []);
  const columns = [
    {
      title: "姓名",
      dataIndex: "empName",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "手机",
      dataIndex: "phone",
      key: "address",
    },

    {
      title: "操作",
      key: "action",
      render: (text) => {
        return (
          <Space size="middle">
            <Button
              type="primary"
              onClick={() => {
                console.log(text.id);
                EmpDeleteApi(text.id)
                  .then((result) => {
                    if (result.data.code === 200) {
                      message.success("删除成功");
                    }
                  })
                  .catch((err) => {
                    message.error("删除失败！请联系管理员");
                  });
                setTimeout(() => {
                  // 刷新后再次发送请求获取新数据
                  getEmpInfoApi();
                }, 800);
              }}
              danger
            >
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  const changePage = (page, pageSize) => {
    getEmpInfoApi(page);
    console.log(page);
  };
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
