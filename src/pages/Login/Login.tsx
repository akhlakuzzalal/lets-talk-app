// src/Login.js
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { IonContent, IonPage, useIonRouter } from "@ionic/react";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

const Login = () => {
  const router = useIonRouter();
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Handle authentication logic here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    // Handle form submission errors here
  };

  return (
    <IonPage>
      {/* <IonHeader>Lets Talk</IonHeader> */}
      <IonContent>
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
          message="Invalid credentials"
          type="error"
          showIcon
          className="mb-4"
        /> */}

            {/* Login Form */}
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              {/* Email or Username Field */}
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
                  prefix={<UserOutlined className="site-form-item-icon" />}
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
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  size="large"
                  className="rounded-full"
                />
              </Form.Item>

              {/* Remember Me and Forgot Password */}
              {/* <Form.Item>
                <div className="flex items-center justify-between">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a href="/forgot-password" className="text-sm text-blue-600">
                    Forgot password?
                  </a>
                </div>
              </Form.Item> */}

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  className="rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  Log in
                </Button>
              </Form.Item>

              {/* Sign Up Link */}
              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Button
                    type="link"
                    size="small"
                    onClick={() => router.push("/register", "root", "replace")}
                  >
                    Sign Up
                  </Button>
                </span>
              </div>
            </Form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
