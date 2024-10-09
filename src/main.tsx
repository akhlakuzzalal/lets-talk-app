import { ConfigProvider } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          borderRadius: 2,
          colorBgContainer: "#ffffff",
        },
        components: {
          List: {
            headerBg: "#000000",
            borderRadius: 4,
            padding: 8,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
