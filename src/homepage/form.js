import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const Forme = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input style={{ padding: ".8rem 7rem", borderRadius: "1rem" }}   />
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
        <Input   style={{ padding: ".8rem 7rem", borderRadius: "1rem" }}  />
      </Form.Item >

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"  style={{
            color: "white",
            borderRadius: "3rem",
            fontWeight: "500",
            fontSize: "2rem",
            backgroundColor: "black",
            padding:"1rem 2.5rem",
            marginTop:"2rem"
          }}>
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Forme;