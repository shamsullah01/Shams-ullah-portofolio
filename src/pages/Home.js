import React from 'react';
import { Card, Row, Col } from 'antd';
import { SmileOutlined, CodeOutlined, RocketOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm a developer passionate about creating amazing web applications.</p>
      
      <Row gutter={16} style={{ marginTop: '2rem' }}>
        <Col span={8}>
          <Card title={<><SmileOutlined /> About Me</>}>
            Learn more about my background and skills.
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><CodeOutlined /> Projects</>}>
            Check out my latest work and projects.
          </Card>
        </Col>
        <Col span={8}>
          <Card title={<><RocketOutlined /> Contact</>}>
            Get in touch for collaborations or opportunities.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;