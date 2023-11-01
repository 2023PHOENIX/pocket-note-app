import { createContext } from "react";
import { useState } from "react";

export const chatGroupContext = createContext();

const ChatGroupProvider = ({ children }) => {
  const [chatGroup, setchatGroup] = useState("");

  const handleChatGroup = (group) => {
    setchatGroup(group);
  };

  return (
    <chatGroupContext.Provider value={{ chatGroup, handleChatGroup }}>
      {children}
    </chatGroupContext.Provider>
  );
};

export default ChatGroupProvider;
