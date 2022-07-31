import { Button, Form, Input} from "antd";
import React from "react";
const layout = {
  labelCol: {
    span: 18,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  
};
/* eslint-enable no-template-curly-in-string */

const Form2 = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "fname"]}
        label="First Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={{ padding: ".8rem 7rem", borderRadius: "1rem" }} />
      </Form.Item>
      <Form.Item
        name={["user", "lname"]}
        label="Last Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
<Input style={{ padding: ".8rem 7rem", borderRadius: "1rem" }} />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required:"true",
            type: "email",
          },
        ]}
      >

        <Input style={{ padding: ".8rem 7rem", borderRadius: "1rem" }} />
      </Form.Item>
      
      <Form.Item name={["user", "ID"]} label="Your ID">
        <Input style={{ padding: ".8rem 7rem", borderRadius: "1rem" }}/>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            color: "white",
            borderRadius: "3rem",
            fontWeight: "500",
            fontSize: "2rem",
            backgroundColor: "black",
            padding:"1rem 3rem",
            marginTop:"2rem"
          }}
        >
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form2;
