// src/Home.js
import { SearchOutlined } from "@ant-design/icons";
import { IonContent, IonHeader, IonPage, useIonRouter } from "@ionic/react";
import { Avatar, Badge, Input, List } from "antd";

const chatData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    lastMessage: "Hey! Are we still meeting tomorrow?",
    time: "09:30 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    lastMessage: "Sure, send me the details.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    lastMessage: "Can you review the document?",
    time: "Monday",
    unread: 1,
  },
  // Add more chat items as needed
];

const ListOfChats = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonHeader>
        <div className="bg-blue-600 text-white py-4 px-4 shadow-md flex items-center justify-between">
          <h2 className="text-xl font-semibold">Chats</h2>
          <Avatar icon={<SearchOutlined />} />
        </div>
      </IonHeader>

      <IonContent>
        <div className="flex flex-col h-[calc(100vh-65px)] bg-gray-100 px-3">
          <div className="p-4">
            <Input
              placeholder="Search chats"
              prefix={<SearchOutlined />}
              className="rounded-full bg-white"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <List
              itemLayout="horizontal"
              dataSource={chatData}
              renderItem={(item) => (
                <List.Item
                  className="px-4 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                  onClick={() => {
                    router.push(`/chat/${item.id}`, "forward");
                  }}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} size="large" />}
                    title={
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs text-gray-500">
                          {item.time}
                        </span>
                      </div>
                    }
                    description={
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          {item.lastMessage}
                        </span>
                        {item.unread > 0 && (
                          <Badge
                            count={item.unread}
                            overflowCount={99}
                            className="ml-2"
                          />
                        )}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListOfChats;
