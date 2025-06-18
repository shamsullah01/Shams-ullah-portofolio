import React, { useState } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Button, 
  Form, 
  Input, 
  InputNumber, 
  Modal, 
  Typography, 
  Upload, 
  message 
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Projects = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'Project 1', 
      description: 'Description of project 1', 
      year: 2024,
      imageUrl: ''
    },
    { 
      id: 2, 
      title: 'Project 2', 
      description: 'Description of project 2', 
      year: 2023,
      imageUrl: ''
    }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [form] = Form.useForm();
  const [imagePreview, setImagePreview] = useState('');

  const showModal = (project = null) => {
    setEditingProject(project);
    if (project) {
      form.setFieldsValue(project);
      setImagePreview(project.imageUrl);
    } else {
      form.resetFields();
      setImagePreview('');
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProject(null);
    form.resetFields();
    setImagePreview('');
  };

  const onFinish = (values) => {
    if (editingProject) {
      setProjects(projects.map(p => 
        p.id === editingProject.id ? { ...p, ...values, imageUrl: imagePreview } : p
      ));
      message.success('Project updated successfully');
    } else {
      const newProject = {
        id: Date.now(),
        ...values,
        imageUrl: imagePreview || 'https://via.placeholder.com/300x200?text=No+Image'
      };
      setProjects([...projects, newProject]);
      message.success('Project added successfully');
    }
    handleCancel();
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
    message.success('Project deleted successfully');
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      // Get the uploaded image URL (in a real app, this would come from your server)
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setImagePreview(imageUrl);
    }
  };

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className="projects-page" style={{ padding: '24px' }}>
      <Title level={1} style={{ textAlign: 'center', marginBottom: '24px' }}>My Projects</Title>
      
      <Button 
        type="primary" 
        icon={<PlusOutlined />} 
        onClick={() => showModal()}
        style={{ marginBottom: '24px' }}
      >
        Add New Project
      </Button>

      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col key={project.id} xs={24} sm={12} md={8} lg={6}>
            <Card 
              cover={
                <div style={{ height: '160px', overflow: 'hidden', background: '#f0f0f0' }}>
                  {project.imageUrl ? (
                    <img 
                      alt={project.title} 
                      src={project.imageUrl} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                      }}
                    />
                  ) : (
                    <div style={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#999'
                    }}>
                      No Image
                    </div>
                  )}
                </div>
              }
              actions={[
                <EditOutlined key="edit" onClick={() => showModal(project)} />,
                <DeleteOutlined key="delete" onClick={() => deleteProject(project.id)} />
              ]}
            >
              <Card.Meta
                title={project.title}
                description={
                  <>
                    <Text type="secondary">{project.year}</Text>
                    <p style={{ marginTop: '8px' }}>{project.description}</p>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Form Modal */}
      <Modal 
        title={editingProject ? "Edit Project" : "Add New Project"} 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Project Title"
                rules={[{ required: true, message: 'Please input project title!' }]}
              >
                <Input placeholder="Enter project title" />
              </Form.Item>

              <Form.Item
                name="year"
                label="Year"
                rules={[{ required: true, message: 'Please input project year!' }]}
              >
                <InputNumber 
                  style={{ width: '100%' }} 
                  min={2000} 
                  max={new Date().getFullYear()} 
                  placeholder="Enter project year" 
                />
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                rules={[{ required: true, message: 'Please input project description!' }]}
              >
                <TextArea rows={4} placeholder="Enter project description" />
              </Form.Item>

              <Form.Item
                name="imageUrl"
                label="Image URL"
                extra="Paste an image URL or upload an image below"
              >
                <Input 
                  placeholder="https://example.com/image.jpg" 
                  onChange={(e) => setImagePreview(e.target.value)}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <div style={{ 
                height: '300px', 
                border: '1px dashed #d9d9d9',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=Invalid+Image';
                    }}
                  />
                ) : (
                  <Text type="secondary">Image Preview</Text>
                )}
              </div>

              <Upload
                name="image"
                customRequest={dummyRequest}
                listType="picture"
                showUploadList={false}
                onChange={handleImageChange}
                beforeUpload={(file) => {
                  const isImage = file.type.startsWith('image/');
                  if (!isImage) {
                    message.error('You can only upload image files!');
                  }
                  return isImage;
                }}
                style={{ marginTop: '16px' }}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: '24px' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: '8px' }}>
              {editingProject ? 'Update' : 'Add'} Project
            </Button>
            <Button onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>
        Portfolio ©{new Date().getFullYear()} Created by You
      </div>
    </div>
  );
};

export default Projects;