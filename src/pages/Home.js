import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Shop } from './Shop/Shop';
import './Home.css';

const { Sider, Content } = Layout;

const Home = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = React.useState('dark');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Layout style={{ minHeight: '100vh' }} theme={theme}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        onMouseEnter={() => {
          document.getElementById('sider-menu').style.width = '200px';
        }}
        onMouseLeave={() => {
          document.getElementById('sider-menu').style.width = '80px';
        }}
        style={{ width: '80px' }}
        id="sider-menu"
        theme={theme}
      >
        <div className="logo">Atez E-Commerce</div>
        <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={() => navigate('/profile')}>
            Profil
          </Menu.Item>
          <Menu.Item key="2" icon={<MenuOutlined />} onClick={() => navigate('/menu')}>
            Menü
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />} onClick={() => navigate('/cart')}>
            Sepet
          </Menu.Item>
          <Menu.Item key="4" icon={<InfoCircleOutlined />} onClick={() => navigate('/about')}>
            Hakkımızda
          </Menu.Item>
          <Menu.Item key="5" icon={<ContactsOutlined />} onClick={() => navigate('/contact')}>
            İletişim
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />} onClick={() => navigate('/team')}>
            Ekibimiz
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />} onClick={() => navigate('/settings')}>
            Ayarlar
          </Menu.Item>
          <Menu.Item key="8" disabled>
            Tema
            <Switch 
              checkedChildren="Dark" 
              unCheckedChildren="Light" 
              onChange={toggleTheme} 
              style={{ marginLeft: '10px' }} 
              checked={theme === 'dark'}
            />
          </Menu.Item>
        </Menu>
        <Menu theme={theme} mode="inline" style={{ marginTop: 'auto' }}>
          <Menu.Item key="9" icon={<LogoutOutlined />} onClick={handleLogout}>
            Çıkış Yap
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <div className="header-menu">
          <Menu mode="horizontal" theme={theme} style={{ justifyContent: 'center', fontSize: '18px' }}>
            <Menu.Item key="1" onClick={() => navigate('/')}>
              Shop
            </Menu.Item>
            <Menu.Item key="2" onClick={() => navigate('/contact')}>
              Contact
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />} onClick={() => navigate('/cart')}>
              Sepet
            </Menu.Item>
          </Menu>
        </div>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Shop />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
