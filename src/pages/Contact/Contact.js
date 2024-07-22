import React from 'react';
import { Card, Typography, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Title level={2} className="contact-title">Bize Ulaşın</Title>
        <Paragraph className="contact-description">
          Herhangi bir sorunuz varsa veya daha fazla bilgiye ihtiyacınız varsa lütfen bizimle iletişime geçmekten çekinmeyin. Herhangi bir sorunuzda size yardımcı olmak için buradayız.
        </Paragraph>
        <Button type="primary" className="live-chat-button">Canlı Sohbet</Button>
      </div>
      <div className="contact-cards">
        <Card className="contact-card">
          <MailOutlined className="contact-icon" />
          <Title level={4}>Email</Title>
          <Paragraph>hr@atez.com.tr</Paragraph>
          <Button type="link">Ulaş</Button>
        </Card>
        <Card className="contact-card">
          <PhoneOutlined className="contact-icon" />
          <Title level={4}>Telefon</Title>
          <Paragraph>0542 295 56 95</Paragraph>
          <Button type="link">Ara</Button>
        </Card>
        <Card className="contact-card">
          <EnvironmentOutlined className="contact-icon" />
          <Title level={4}>Ofis</Title>
          <Paragraph>Huzur, Azerbaycan Cd. B Blok No: 4b İç Kapı No: 29, 34485 Sarıyer/İstanbul</Paragraph>
          <Button type="link">Lokasyon</Button>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
