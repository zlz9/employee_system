import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import { useState } from "react";
import { InductionApi } from "../../request/api";
import { useNavigate } from "react-router-dom";
export default function EmployeeRegister() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    InductionApi(values)
      .then((result) => {
        if (result.data.code === 200) {
          message.success("注册成功！");
          setTimeout(() => {
            navigate("/index/admin");
          }, 1000);
        }
      })
      .catch((err) => {
        message.error("注册失败，请联系管理员！");
      });
    console.log("success", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
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
      >
        <Form.Item
          label="姓名"
          name="empName"
          rules={[
            {
              required: true,
              message: "请输入用户名!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="住址"
          name="address"
          rules={[
            {
              required: true,
              message: "请输入住址!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="联系方式"
          name="phone"
          rules={[
            {
              required: true,
              message: "请输入联系方式!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="部门" name="department">
          <Select>
            <Select.Option value="1" key={1}>
              财务
            </Select.Option>
            <Select.Option value="2" key={2}>
              物管
            </Select.Option>
            <Select.Option value="3" key={3}>
              客服
            </Select.Option>
            <Select.Option value="4" key={4}>
              市场
            </Select.Option>
            <Select.Option value="5" key={5}>
              培训部
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="入职时间">
          <DatePicker placeholder="默认系统时间" />
        </Form.Item>
        <Form.Item label="年龄" name="age">
          <InputNumber min={16} max={50} defaultValue={17} />
        </Form.Item>

        <Form.Item label="注册">
          <Button type="primary" htmlType="submit">
            注册员工
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
