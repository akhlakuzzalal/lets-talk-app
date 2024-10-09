// src/Signup.js
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useIonRouter } from "@ionic/react";
import { Button, Checkbox, Form, Input, Typography } from "antd";

const { Title } = Typography;

const SignUp = () => {
  const router = useIonRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {/* Logo or App Name */}
        <div className="flex justify-center mb-6">
          <Title level={2} className="text-blue-600">
            Let's Talk
          </Title>
        </div>

        {/* Optional Alert for Errors */}
        {/* <Alert
          message="Signup Failed"
          description="Please check your input and try again."
          type="error"
          showIcon
          className="mb-4"
        /> */}

        {/* Signup Form */}
        <Form
          name="signup"
          initialValues={{ remember: true }}
          // onFinish={handleSignup} // Implement this handler
          // onFinishFailed={handleSignupFailed} // Implement this handler
          layout="vertical"
        >
          {/* Full Name Field */}
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full Name"
              size="large"
              className="rounded-full"
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
              size="large"
              className="rounded-full"
            />
          </Form.Item>

          {/* Password Field */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must be at least 6 characters!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              size="large"
              className="rounded-full"
            />
          </Form.Item>

          {/* Confirm Password Field */}
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
              size="large"
              className="rounded-full"
            />
          </Form.Item>

          {/* Terms and Conditions */}
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("You must agree to the terms and conditions")
                      ),
              },
            ]}
          >
            <Checkbox>
              I agree to the <a href="/terms">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="rounded-full bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </Button>
          </Form.Item>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Button
                type="link"
                size="small"
                onClick={() => router.push("/login", "root", "replace")}
              >
                Log In
              </Button>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
