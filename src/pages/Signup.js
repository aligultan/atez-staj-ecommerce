import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Typography, message } from "antd";
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const signup = async (values) => {
    try {
      await axios.post('http://127.0.0.1:3001/users/signup', {
        username: values.username,
        password: values.password,
        name: values.name,
        surname: values.surname,
        email: values.email,
        userType: 'user',
      });
      message.success('Kayıt Başarılı');
      navigate('/login');
    } catch (error) {
      message.error('Kayıt Başarısız');
    }
  };

  return (
    <div className="appBg">
      <div className="header">
        <h1 className="blur-text">Atez E-Commerce</h1>
      </div>
      <Form className="signupForm" onFinish={signup}>
        <Typography.Title level={2} className="title">Kayıt Ol</Typography.Title>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen kullanıcı adınızı girin",
            },
          ]}
        >
          <Input placeholder="Kullanıcı Adı" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Lütfen şifrenizi girin",
            },
          ]}
        >
          <Input.Password placeholder="Şifre" />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Lütfen adınızı girin",
            },
          ]}
        >
          <Input placeholder="Ad" />
        </Form.Item>
        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Lütfen soyadınızı girin",
            },
          ]}
        >
          <Input placeholder="Soyad" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Lütfen geçerli bir e-posta adresi girin",
            },
          ]}
        >
          <Input placeholder="E-posta" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Kayıt Ol
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
