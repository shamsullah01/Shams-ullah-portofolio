import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { SmileOutlined, CodeOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      {/* Main Header */}
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
        Welcome to My Portfolio
      </Title>
      
      <Paragraph style={{ textAlign: 'center', fontSize: '16px', marginBottom: '40px' }}>
        I'm a developer passionate about creating amazing web applications.
      </Paragraph>

      {/* Feature Cards */}
      <Row gutter={[16, 16]} justify="center">
        {/* About Card - Dark Blue */}
        <Col xs={24} sm={12} md={8}>
          <Link to="/about" className="card-link">
            <Card
              className="about-card"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: 'none',
                height: '100%'
              }}
              title={
                <span>
                  <SmileOutlined style={{ marginRight: '8px' }} />
                  About Me
                </span>
              }
              bordered={false}
              hoverable
            >
              <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
                Learn more about my background and skills.
              </Paragraph>
            </Card>
          </Link>
        </Col>

        {/* Projects Card - Dark Yellow */}
        <Col xs={24} sm={12} md={8}>
          <Link to="/projects" className="card-link">
            <Card
              className="projects-card"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: 'none',
                height: '100%'
              }}
              title={
                <span>
                  <CodeOutlined style={{ marginRight: '8px' }} />
                  Projects
                </span>
              }
              bordered={false}
              hoverable
            >
              <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
                Check out my latest work and projects.
              </Paragraph>
            </Card>
          </Link>
        </Col>

        {/* Contact Card - Green */}
        <Col xs={24} sm={12} md={8}>
          <Link to="/contact" className="card-link">
            <Card
              className="contact-card"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: 'none',
                height: '100%'
              }}
              title={
                <span>
                  <MailOutlined style={{ marginRight: '8px' }} />
                  Contact
                </span>
              }
              bordered={false}
              hoverable
            >
              <Paragraph style={{ fontSize: '16px', marginBottom: 0 }}>
                Get in touch for collaborations or opportunities.
              </Paragraph>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;