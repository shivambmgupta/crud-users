import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { AdminLogin } from '../../actions/adminActions';
import { connect } from 'react-redux';

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};

class Login extends Component {
  onFinish = (values) => {
    const { password } = values;
    if (password === "Admin@1") {
      this.props.dispatchLoginAction(values);
      this.props.history.push('/home')
    }
    else
      alert("Invalid Password. Please retry!")
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgb(0,0,0)',
        color: '#363636'
      }}>
        <div style={{
          width: '30%',
          height: '20vh',
          boxShadow: '0px 0px 10px #FFF',
          padding: '20px',
          backgroundColor: 'rgb(255, 255, 255)',
        }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="username"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginAction: (payload) => { dispatch(AdminLogin(payload)) }
  }
}

export default connect(null, mapDispatchToProps)(Login);