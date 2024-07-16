import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import config from './config';
const { Title } = Typography;

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching the users data:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text, record) => <>{record.firstName} {record.lastName}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: image => <img src={image} alt="user" width={50} />,
    },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) => (
        <Link to={`/user/${record.id}`}>Details</Link>
      ),
    },
  ];

  // If loading, show a spinner
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}><Spin size="large" /></div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>User List</Title>
      <Table 
        dataSource={users} 
        columns={columns} 
        rowKey="id" 
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
}

export default Users;
