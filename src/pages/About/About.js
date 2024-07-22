import React from 'react';
import { Card, Typography } from 'antd';
import './About.css';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="about-container">
      <Card className="about-card">
        <Title level={2} className="about-title">Hakkımızda</Title>
        <Paragraph className="about-paragraph">
          Atez E-Commerce, müşteri memnuniyetini ön planda tutan ve geniş ürün yelpazesi ile kullanıcılarına üstün alışveriş deneyimi sunan bir e-ticaret platformudur. 
          Amacımız, en kaliteli ürünleri en uygun fiyatlarla sunarak, kullanıcılarımızın ihtiyaçlarını karşılamaktır. Geniş ürün kategorilerimiz ve güvenilir alışveriş sistemi ile sizlere en iyi hizmeti vermek için buradayız.
        </Paragraph>
        <Paragraph className="about-paragraph">
          Alışverişinizi kolay ve keyifli hale getirmek için sürekli yenilikler yapıyor ve müşteri geri bildirimlerini dikkate alıyoruz. 
          Atez E-Commerce olarak, güvenli ödeme seçenekleri, hızlı teslimat ve etkili müşteri hizmetleri ile sizlere daima en iyi alışveriş deneyimini sunmayı hedefliyoruz.
        </Paragraph>
      </Card>
    </div>
  );
};

export default About;
