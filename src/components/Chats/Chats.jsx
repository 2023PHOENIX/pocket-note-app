import React, { useContext, useEffect, useRef, useState } from "react";
import { chatGroupContext } from "../../context/ChatGroupProvider.jsx";
import EnterButton from "../../assets/enter-icon.svg";
import ChatStyles from "./chats.module.css";
import BackButton from "../../assets/back.svg";
import { screenContext } from "../../context/ScreenSizeProvider.jsx";

function Chats() {
  const [inputChat, setInputChat] = useState(null);
  const { chatGroup, handleChatGroup } = useContext(chatGroupContext);

  const [chatData, setChatData] = useState(null);

  const [groupColor, setGroupColor] = useState(null);

  const { isMobile } = useContext(screenContext);
  // console.log(chatData);
  //! chatRef =>  to scroll to the bottom of page
  const chatContainerRef = useRef();

  useEffect(() => {
    const groupStore = JSON.parse(localStorage.getItem("group"));

    const objGroup = groupStore.find((g) => {
      return g.hasOwnProperty(chatGroup);
    });

    setGroupColor(objGroup[chatGroup]);
  }, [chatGroup]);
  useEffect(() => {
    const { currentGroupChats } = getCurrentGroupData();
    setChatData(currentGroupChats);
  }, [chatGroup]);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  });

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
    if (inputChat.trim() === "") return;

    setInputChat("");
    const { currentGroupChats, ChatDB, chatGroupKey } = getCurrentGroupData();

    // ? send the meta data also like DATE TIME
    const date = new Date();
    const currentDateString =
      date.getDate() +
      " " +
      date
        .toLocaleString("en-US", {
          month: "long",
        })
        .slice(0, 3) +
      " " +
      date.getFullYear();
    const time =
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
 
    currentGroupChats.push({
      chatData: inputChat,
      metaData: {
        date: currentDateString,
        time: time,
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
        {isMobile && (
          <img onClick={() => handleChatGroup("")} src={BackButton} />
        )}
        <span style={{ backgroundColor: groupColor }}>
          {chatGroup.slice(0, 2)}
        </span>
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
                <div className={ChatStyles.chatText}>{data.chatData}</div>
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
