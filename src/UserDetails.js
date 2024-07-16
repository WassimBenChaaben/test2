// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Spin, Row, Col, Avatar, Button } from 'antd';
import { getUserById } from './api/userApi'; // Import the API function

const { Title, Text } = Typography;

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await getUserById(userId);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching the user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {user ? (
        <Card
          cover={<Avatar src={user.image} size={128} shape="square" style={{ margin: '0 auto' }} />}
          style={{ maxWidth: 600, margin: '0 auto', boxShadow: 'none' }}
        >
          <Title level={2} style={{ textAlign: 'center' }}>
            {user.firstName} {user.lastName}
          </Title>
          <Row gutter={16}>
            <Col span={12}>
              <Text strong>Email:</Text> <Text>{user.email}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Username:</Text> <Text>{user.username}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Phone:</Text> <Text>{user.phone}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Birthdate:</Text> <Text>{user.birthDate}</Text>
            </Col>
            <Col span={24}>
              <Text strong>ID:</Text> <Text>{user.id}</Text>
            </Col>
          </Row>
          <Button type="primary" style={{ display: 'block', marginTop: '20px' }} onClick={() => window.history.back()}>
            Back to Users
          </Button>
        </Card>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <Title level={4}>User not found.</Title>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
