import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/about">About</Link>,
      key: 'about',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/projects">Projects</Link>,
      key: 'projects',
      icon: <ProjectOutlined />,
    },
    {
      label: <Link to="/contact">Contact</Link>,
      key: 'contact',
      icon: <MailOutlined />,
    },
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['home']}
      items={items}
      style={{ lineHeight: '64px' }}
    />
  );
};

export default Navbar;