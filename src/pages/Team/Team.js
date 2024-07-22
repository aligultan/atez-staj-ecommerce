import React from 'react';
import { Card, Typography } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './Team.css';

const { Title } = Typography;

const Team = () => {
  return (
    <div className="team-container">
      <Title className="team-title">Ekibimiz</Title>
      <div className="team-cards">
        <Card className="team-card">
          <Title level={3} className="card-title">Backend</Title>
          <div className="team-member">
            <p className="member-name">Ali Gültan</p>
            <a href="https://github.com/aligultan" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="icon" /> github.com/aligultan
            </a>
            <a href="https://www.linkedin.com/in/aligultan" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="icon" /> linkedin.com/in/aligultan
            </a>
          </div>
          <div className="team-member">
            <p className="member-name">Şule İlkbahar</p>
            <a href="https://github.com/sulee-ilkbaharr" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="icon" /> github.com/suleilkbahar
            </a>
            <a href="https://www.linkedin.com/in/%C5%9Fule-ilkbahar/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="icon" /> linkedin.com/in/suleilkbahar
            </a>
          </div>
        </Card>
        <Card className="team-card">
          <Title level={3} className="card-title">Frontend</Title>
          <div className="team-member">
            <p className="member-name">Akif Yahya Dirican</p>
            <a href="https://github.com/AkifDirican" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="icon" /> github.com/akifyahya
            </a>
            <a href="https://www.linkedin.com/in/akifyahya" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="icon" /> linkedin.com/in/akifyahya
            </a>
          </div>
          <div className="team-member">
            <p className="member-name">Nilay Yaman</p>
            <a href="https://github.com/nilaycodess" target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="icon" /> github.com/nilayyaman
            </a>
            <a href="https://www.linkedin.com/in/nilay-yaman-14141825a/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="icon" /> linkedin.com/in/nilayyaman
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
