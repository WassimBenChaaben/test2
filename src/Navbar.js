import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { HomeOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;

function Navbar() {
  return (
    <Layout>
      <Header style={{ background: '#001529', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="logo" style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
          DummyUsers
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default Navbar;
