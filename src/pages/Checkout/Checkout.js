import React, { useContext } from 'react';
import { Form, Input, Button, DatePicker, message } from 'antd';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    message.success('Satın alma başarılı!');
    clearCart();
    navigate('/home');
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Lütfen tüm bilgileri doğru şekilde doldurun.');
  };

  const handleCancel = () => {
    navigate('/cart');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Ödeme Bilgileri</h1>
        <Form
          name="checkout"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Kart Sahibinin Adı Soyadı"
            name="cardName"
            rules={[{ required: true, message: 'Lütfen kart sahibinin adını girin' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Kart Numarası"
            name="cardNumber"
            rules={[
              { required: true, message: 'Lütfen kart numarasını girin' },
              { pattern: /^\d{16}$/, message: 'Kart numarası 16 haneli olmalıdır' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Son Kullanma Tarihi"
            name="expiryDate"
            rules={[{ required: true, message: 'Lütfen son kullanma tarihini girin' }]}
          >
            <DatePicker picker="month" />
          </Form.Item>

          <Form.Item
            label="CVC"
            name="cvc"
            rules={[
              { required: true, message: 'Lütfen CVC kodunu girin' },
              { pattern: /^\d{3}$/, message: 'CVC kodu 3 haneli olmalıdır' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Satın Al
            </Button>
            <Button type="default" onClick={handleCancel} style={{ marginLeft: '10px' }}>
              İptal
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
