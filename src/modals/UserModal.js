import React from 'react';
import { Modal } from 'antd';
import { Upload, message, Form, Input, InputNumber, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AddUser, UpdateUser } from '../actions/userActions';

const uploadProps = {
  name: 'file',
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  }
};
const UserModal = ({ setIsModalVisible, isVisible, newUser, user }) => {
  const dispatchUpdateAction = useDispatch();
  const dispatchAddAction = useDispatch();
  const handleOk = () => {
    if (newUser) {
      dispatchAddAction(AddUser(user))
    } else {
      dispatchUpdateAction(UpdateUser(user));
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isVisible} title={newUser ? 'Add User' : 'Edit User'} onOk={handleOk} onCancel={handleCancel}>
      <Form {...layout} name="nest-messages" onFinish={handleOk} validateMessages={validateMessages}>

        <Form.Item
          name={['user', 'id']}
          label="id"
          rules={[
            {
              type: 'number',
              min: 0,
            },
          ]}
        >
          <InputNumber defaultValue={user ? user.id : null} />
        </Form.Item>

        <Form.Item
          name={['user', 'firt_name']}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={user ? user.first_name : null} />
        </Form.Item>


        <Form.Item
          name={['user', 'last_name']}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input defaultValue={user ? user.last_name : null} />
        </Form.Item>

        <Form.Item
          name={['user', 'avatar']}
          label="Profile Image"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>


        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[
            {
              type: 'email',
              required: true
            },
          ]}
        >
          <Input defaultValue={user ? user.email : null} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UserModal;