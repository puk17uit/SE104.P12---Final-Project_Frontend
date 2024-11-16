// src/components/Login.tsx
import React from 'react';
import { Layout, Form, Input, Button, Typography, Space } from 'antd';
import { UserOutlined, LockOutlined, BellOutlined, MessageOutlined, SearchOutlined } from '@ant-design/icons';
import './Login.css';

const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const Login: React.FC = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Layout className="app-layout">
      {/* Header */}
      <Header className="header">
        <div className="header-content">
          {/* Logo Image */}
          <img src="/logo.png" alt="Logo" className="logo-image" />

          {/* Icons and Centered Search Bar */}
          <div className="icons-and-search">
            <img 
                src="/1.png" 
                alt="message-icon" 
                className="header-icon1" 
              />
              <img 
                src="/2.png" 
                alt="notification-icon" 
                className="header-icon2" 
              />

            <Search
              placeholder="Tìm kiếm"
              allowClear
              enterButton={<SearchOutlined />}
              onSearch={onSearch}
              className="search-input"
            />
          </div>

          {/* Login Button */}
          <div className="button-container">
            <Button type="primary">Đăng nhập</Button>
          </div>
        </div>
      </Header>

      {/* Login Form */}
      <Content className="content">
        <div className="login-container">
          <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>ĐĂNG NHẬP</Title>
          <Form
            name="login_form"
            layout="vertical"
            onFinish={(values: any) => console.log(values)}
          >
            <Form.Item
              name="username"
              label="Tên đăng nhập"
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Nhập mật khẩu" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                ĐĂNG NHẬP
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
