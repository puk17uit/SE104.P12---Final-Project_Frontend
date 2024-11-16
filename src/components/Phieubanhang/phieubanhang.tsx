import React, { useState } from 'react';
import { Layout, Menu, Tabs, Table, Tag, Button, Input, Space, Dropdown, Checkbox } from 'antd';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  BarChartOutlined,
  SettingOutlined,
  ShopOutlined,
  SearchOutlined,
  ExportOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import './phieubanhang.css';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const SalesOrders: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // Dữ liệu bảng
  const dataSource = [
    {
      key: '1',
      code: '#DA3172101',
      createdAt: '9 phút trước',
      customer: 'Vân Mây',
      status: 'Đã thanh toán',
      amount: '192,000 VND',
    },
    {
      key: '2',
      code: '#DA3172401',
      createdAt: '28/10/2024 09:58 AM',
      customer: 'Vân Mây',
      status: 'Chờ xử lý',
      amount: '192,000 VND',
    },
  ];

  // Xử lý chọn checkbox
  const handleCheckboxChange = (key: React.Key, checked: boolean) => {
    if (checked) {
      setSelectedRowKeys([...selectedRowKeys, key]);
    } else {
      setSelectedRowKeys(selectedRowKeys.filter((rowKey) => rowKey !== key));
    }
  };

  // Cấu hình cột bảng
  const columns = [
    {
      title: '', // Cột tam giác (đưa ra ngoài cùng)
      dataIndex: 'arrow',
      key: 'arrow',
      render: () => (
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid #000',
            transform: 'rotate()',
            marginRight: 8,
          }}
        />
      ),
      width: '5%',
    },
    {
      title: '', // Cột checkbox (đặt sau tam giác)
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: (_: any, record: any) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)} // Kiểm tra trạng thái checkbox
          onChange={(e) => handleCheckboxChange(record.key, e.target.checked)}
        />
      ),
      width: '5%',
    },
    {
      title: 'Mã',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Khách hàng',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Thanh toán',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Đã thanh toán' ? 'green' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: 'Thành tiền',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      {/* Sidebar */}
      <Sider width={250} className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Tổng quan
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            Đơn hàng
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            Dịch vụ
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Khách hàng
          </Menu.Item>
          <Menu.Item key="5" icon={<BarChartOutlined />}>
            Báo cáo
          </Menu.Item>
          <Menu.Item key="6" icon={<ShopOutlined />}>
            Cửa hàng trực tuyến
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>
            Cài đặt
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Content */}
      <Layout>
        {/* Header */}
        <Header className="header">
          <Space className="header-actions">
            <img src="/1.png" alt="message-icon" className="header-icon1" />
            <img src="/2.png" alt="notification-icon" className="header-icon2" />
            <Search
              placeholder="Tìm kiếm"
              allowClear
              enterButton={<SearchOutlined />}
              className="header-search"
            />
            <div className="user-info">_ttynn_</div>
          </Space>
        </Header>

        {/* Main Content */}
        <Content className="content">
          {/* Title Section */}
          <div className="title-section">
            <h1 className="content-title">Danh sách phiếu bán hàng</h1>
            <div className="button-group">
              <Button icon={<ExportOutlined />} className="export-button">
                Xuất dữ liệu
              </Button>
              <Button type="primary" icon={<PlusCircleOutlined />} className="create-order-button">
                Tạo đơn hàng
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            <Tabs defaultActiveKey="1" className="tabs">
              <Tabs.TabPane tab="Tất cả" key="1">
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                />
              </Tabs.TabPane>

              <Tabs.TabPane tab="Đơn hàng mới" key="2">
                {/* Content for new orders */}
              </Tabs.TabPane>

              <Tabs.TabPane tab="Chưa giao hàng" key="3">
                {/* Content for pending delivery */}
              </Tabs.TabPane>

              <Tabs.TabPane tab="Chưa thanh toán" key="4">
                {/* Content for unpaid */}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SalesOrders;
