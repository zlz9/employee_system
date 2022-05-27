import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import { useState } from "react";
import "./css/afterwork.css";
import { useNavigate } from "react-router-dom";
import afterwork from "./img/afterwork.jpg";
import { AfterworkApi } from "../../request/api";
export default function AfterWork() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    AfterworkApi(values)
      .then((result) => {
        if (result.data.code === 200) {
          message.success("快回家陪陪家人吧");
          setTimeout(() => {
            navigate("/index/employee");
          }, 800);
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
        className="afterwork"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name="employeeName"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="部门">
          <Select>
            <Select.Option value="1" key={1}>
              财务
            </Select.Option>
            <Select.Option value="2" key={2}>
              物管
            </Select.Option>
            <Select.Option value="3" key={3}>
              HR
            </Select.Option>
            <Select.Option value="4" key={4}>
              客服
            </Select.Option>
            <Select.Option value="5" key={5}>
              市场
            </Select.Option>
            <Select.Option value="6" key={6}>
              培训部
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="我要下班">
          <Button type="primary" htmlType="submit">
            下班！！！
          </Button>
        </Form.Item>
      </Form>
      <img src={afterwork} alt="" className="aftetwork_pic" />
    </div>
  );
}
