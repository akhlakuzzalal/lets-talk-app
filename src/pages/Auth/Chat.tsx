import { SendOutlined, StepBackwardOutlined } from "@ant-design/icons";
import { IonContent, IonHeader, IonPage, useIonRouter } from "@ionic/react";
import { Avatar, Button, Input } from "antd";
import { FC, useState } from "react";

const Chat: FC = () => {
  const router = useIonRouter();
  const [receivedMessages, setReceivedMessages] = useState([
    "I’m good, how about you?",
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  return (
    <IonPage>
      <IonHeader>
        <div className="bg-blue-600 text-white py-3 px-4 shadow-md flex items-center ">
          <Button
            type="link"
            className="text-white"
            icon={<StepBackwardOutlined />}
            onClick={() => router.goBack()}
          />
          <div className="flex items-center">
            <Avatar
              size={40}
              src="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <div className="ml-3">
              <h3 className="text-lg">John Doe</h3>
              <span className="text-sm text-gray-200">Online</span>
            </div>
          </div>
        </div>
      </IonHeader>
      <IonContent>
        <div className="flex flex-col justify-end h-[calc(100vh-77px)] bg-gray-100">
          <div className="p-4 space-y-3">
            <div className="flex items-start">
              <Avatar
                size={40}
                src="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <div className="ml-3 bg-white p-3 rounded-lg shadow-sm max-w-xs text-black">
                <p>Hey! How are you doing today?</p>
              </div>
            </div>

            {receivedMessages.map((message, index) => (
              <div key={index} className="flex justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-xs">
                  <p>{message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white px-4 py-3 flex items-center">
            <Input
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              className="flex-1 mr-2 rounded-full"
              placeholder="Type a message"
            />
            <Button
              type="primary"
              shape="circle"
              icon={<SendOutlined />}
              onClick={() => {
                setReceivedMessages([...receivedMessages, currentMessage]);
                setCurrentMessage("");
              }}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Chat;
