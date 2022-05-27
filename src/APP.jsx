import React, { useState } from "react";
import "antd/dist/antd.min.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  EditOutlined,
  CarryOutOutlined,
  PayCircleOutlined,
  AccountBookFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown } from "antd";
import "../src/style/app.css";
import HeaderTitle from "./header/HeaderTitle";
import { Link, useNavigate, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
export default function APP() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link to="/">退出登录</Link>,
        },
      ]}
    />
  );
  const handleRouter = (e) => {
    navigate("/index" + e.key);
  };
  return (
    <div>
      <HeaderTitle />
      <Layout className="box">
        <Dropdown overlay={menu} placement="bottom" arrow className="drop">
          <Button>用户</Button>
        </Dropdown>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            onClick={handleRouter}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            items={[
              {
                key: "/employee",
                icon: <UserOutlined />,
                label: "员工考勤一览",
              },
              {
                key: "/attendance",
                icon: <PayCircleOutlined />,
                label: "我要上班",
              },
              {
                key: "/afterwork",
                icon: <CarryOutOutlined />,
                label: "我要下班",
              },
              {
                key: "",
                icon: <EditOutlined />,
                label: "员工管理中心",
                children: [
                  {
                    key: "/employeeregister",
                    icon: <AccountBookFilled />,
                    label: "员工注册",
                  },
                  {
                    key: "/admin",
                    icon: <VideoCameraOutlined />,
                    label: "员工管理",
                  },
                ],
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
