import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import "./css/attendence.css";
import daka from "./img/打卡.jpg";
import { PunchCardApi } from "../../request/api";
import { useNavigate } from "react-router-dom";
export default function Attendence() {
  // 暂时找不到解决办法
  // useEffect(() => {
  //   DepartmentApi()
  //     .then((result) => {
  //       if (result.data.code === 200) {
  //         let newArr = result.data.data;
  //         setArr(newArr);
  //         console.log(newArr);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const { Option } = Select;
  const navigate = useNavigate();
  const onFinish = (values) => {
    PunchCardApi(values)
      .then((result) => {
        if (result.data.code === 200) {
          message.success("打卡成功");
          navigate("/index/employee");
        }
      })
      .catch((err) => {
        message.error("打卡失败，请联系管理员");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        className="attendence"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1>打卡</h1>
        <Form.Item
          className="username"
          name="employeeName"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input placeholder="请输用户名" />
        </Form.Item>

        <Form.Item name="departmentId" className="selectDepartment">
          <Select
            defaultValue="财务"
            style={{
              width: 270,
            }}
            allowClear
          >
            <Option value="1" key={1}>
              财务
            </Option>
            <Option value="2" key={2}>
              物管
            </Option>
            <Option value="3" key={3}>
              HR
            </Option>
            <Option value="4" key={4}>
              客服
            </Option>
            <Option value="5" key={5}>
              市场
            </Option>
            <Option value="6" key={6}>
              培训部
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" block className="btn">
            我要打卡
          </Button>
        </Form.Item>
      </Form>
      <img src={daka} alt="daka" className="daka" />
    </div>
  );
}
