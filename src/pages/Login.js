import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { GoogleOutlined, AppleFilled, MailOutlined, LockOutlined } from "@ant-design/icons";
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      const response = await axios.post('http://127.0.0.1:3001/users/login', {
        email: values.myEmail,
        password: values.myPassword,
      });

      if (response.data.token) {
        message.success('Giriş Başarılı');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      } else {
        message.error('Geçersiz kullanıcı adı veya şifre');
      }
    } catch (error) {
      message.error('Geçersiz kullanıcı adı veya şifre');
    }
  };

  return (
    <div className="appBg">
      <div className="header">
        <h1 className="blur-text">Atez E-Commerce</h1>
      </div>
      <Form className="loginForm" onFinish={login}>
        <Typography.Title level={2} className="title">Hoşgeldiniz!</Typography.Title>
        <Form.Item
          name="myEmail"
          rules={[
            {
              required: true,
              type: "email",
              message: "Lütfen geçerli e-posta adresinizi girin",
            },
          ]}
        >
          <Input 
            prefix={<MailOutlined className="site-form-item-icon" />} 
            placeholder="E-posta adresinizi girin" 
          />
        </Form.Item>
        <Form.Item
          name="myPassword"
          rules={[
            {
              required: true,
              message: "Lütfen şifrenizi girin",
            },
          ]}
        >
          <Input.Password 
            prefix={<LockOutlined className="site-form-item-icon" />} 
            placeholder="Şifrenizi girin" 
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Kullanıcı Girişi
        </Button>
        <Button 
          type="primary" 
          block 
          style={{ marginTop: '10px' }} 
          onClick={() => navigate('/signup')}
        >
          Kayıt Ol
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined className="socialIcon" onClick={login} />
          <AppleFilled className="socialIcon" onClick={login} />
        </div>
      </Form>
    </div>
  );
};

export default Login;
