import React from 'react';
import { Row, Col, Card, Progress, Typography, List } from 'antd';
import { 
  ReadOutlined,       // For Graduation Cap (alternative)
  ExperimentOutlined, 
  EnvironmentOutlined, 
  CoffeeOutlined, 
  PlaySquareOutlined   // For Gamepad (alternative)
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const skills = [
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'TypeScript', percent: 80 },
    { name: 'Node.js', percent: 75 },
    { name: 'Python', percent: 70 },
    { name: 'CSS/Tailwind', percent: 88 }
  ];

  const quickFacts = [
    { icon: <ReadOutlined />, text: 'Computer Science Graduate' },
    { icon: <ExperimentOutlined />, text: '5+ Years Experience' },
    { icon: <EnvironmentOutlined />, text: 'Based in Islamabad Pakistan' },
    { icon: <CoffeeOutlined />, text: 'Coffee Enthusiast' },
    { icon: <PlaySquareOutlined />, text: 'Coding & Tech Lover' }
  ];

  return (
    <div className="about-page" style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>About Me</Title>
      
      <Card bordered={false} style={{ marginBottom: '32px' }}>
        <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
          My Story: I'm a passionate developer with over 5 years of experience creating web applications that solve real-world problems. 
          My journey began with curiosity about how websites work, and it has evolved into a deep love for crafting user experiences.
        </Paragraph>
        <Paragraph style={{ fontSize: '16px' }}>
          I specialize in modern web technologies and enjoy working on projects that challenge me to learn and grow. 
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
          or mentoring other developers.
        </Paragraph>
      </Card>

      {/* Quick Facts Section */}
      <Title level={3} style={{ marginBottom: '16px' }}>Quick Facts</Title>
      <Card bordered={false} style={{ marginBottom: '32px' }}>
        <List
          dataSource={quickFacts}
          renderItem={(item) => (
            <List.Item>
              <Text strong style={{ fontSize: '16px' }}>
                {item.icon} {item.text}
              </Text>
            </List.Item>
          )}
        />
      </Card>

      {/* Skills Section */}
      <Title level={3} style={{ marginBottom: '24px' }}>Skills</Title>
      <Row gutter={[16, 16]}>
        {skills.map((skill, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card bordered={false} hoverable>
              <div style={{ marginBottom: '8px' }}>
                <strong>{skill.name}</strong>
              </div>
              <Progress 
                percent={skill.percent} 
                strokeColor={
                  skill.percent > 85 ? '#52c41a' : 
                  skill.percent > 75 ? '#1890ff' : '#faad14'
                }
                showInfo={false}
              />
              <div style={{ textAlign: 'right', marginTop: '4px' }}>
                {skill.percent}%
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;