import React, { useContext, useEffect, useRef, useState } from "react";
import { chatGroupContext } from "../../context/ChatGroupProvider.jsx";
import EnterButton from "../../assets/enter-icon.svg";
import ChatStyles from "./chats.module.css";

function Chats() {
  const [inputChat, setInputChat] = useState(null);
  const { chatGroup } = useContext(chatGroupContext);

  const [chatData, setChatData] = useState(null);
  console.log(chatData);
  //! chatRef =>  to scroll to the bottom of page
  const chatContainerRef = useRef();

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    const { currentGroupChats } = getCurrentGroupData();
    setChatData(currentGroupChats);
  }, [chatGroup]);

  const handleInputChange = (e) => {
    setInputChat(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const getCurrentGroupData = () => {
    const chatGroupKey = chatGroup.replace(" ", "_");
    const ChatDB = JSON.parse(localStorage.getItem("chats")) || {};
    const currentGroupChats = ChatDB[chatGroupKey] || [];
    return { currentGroupChats, chatGroupKey, ChatDB };
  };

  // * handling submit from the user text. and updating on the chat window.
  const handleSubmit = () => {
    setInputChat("");
    const { currentGroupChats, ChatDB, chatGroupKey } = getCurrentGroupData();

    // ? send the meta data also like DATE TIME
    const date = new Date();
    const currentDateString = date.getDate() + " " +
      date.toLocaleString("en-US", {
        month: "long",
      }).slice(0, 3) + " " + date.getFullYear();
    const time = date.getHours() + ":" + date.getMinutes() + ":" +
      date.getSeconds();

    currentGroupChats.push({
      "chatData": inputChat,
      "metaData": {
        "date": currentDateString,
        "time": time,
      },
    });

    ChatDB[chatGroupKey] = currentGroupChats;
    localStorage.setItem("chats", JSON.stringify(ChatDB));
    setChatData(ChatDB[chatGroupKey]);
    console.log(JSON.parse(localStorage.getItem("chats")));
  };
  return (
    <div className={ChatStyles.wrapper}>
      <heading className={ChatStyles.heading}>
        <span>{chatGroup.slice(0, 2)}</span>
        {chatGroup}
      </heading>
      <div className={ChatStyles.main}>
        <div className={ChatStyles.messagesWrapper} ref={chatContainerRef}>
          {chatData?.map((data) => {
            return (
              <div className={ChatStyles.message}>
                <div className={ChatStyles.dateTime}>
                  <div>{data.metaData.time}</div>
                  <div>{data.metaData.date}</div>
                </div>
                <div className={ChatStyles.chatText}>
                  {data.chatData}
                </div>
              </div>
            );
          })}
        </div>
        <div className={ChatStyles.inputWrapper}>
          <textarea
            type="text"
            className={ChatStyles.input}
            placeholder="Enter your text here"
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            value={inputChat}
          />
          <button className={ChatStyles.buttonEnter} onClick={handleSubmit}>
            <img src={EnterButton} />
          </button>
        </div>
      </div>

      {/* <div>Input Area</div> */}
    </div>
  );
}

export default Chats;
