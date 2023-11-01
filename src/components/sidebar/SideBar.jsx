import React from "react";
import { useContext, useState } from "react";
import { formContext } from "../../context/formProvider";
import NoteForm from "../noteform/NoteForm";
import Styles from "./SideBar.module.css";
import { useEffect } from "react";
import { chatGroupContext } from "../../context/chatGroupProvider";

function SideBar() {
  const { showForm, toggleForm } = useContext(formContext);
  const { chatGroup, handleChatGroup } = useContext(chatGroupContext);
  const [groupData, setGroupData] = useState(
    JSON.parse(localStorage.getItem("group"))
  );
  // useEffect(() => {
  //   setGroupData(JSON.parse(localStorage.getItem("group")));
  // }, [groupData]);
  // console.log(groupData)
  const handleCreateForm = () => {
    toggleForm(!showForm);
  };

  const handleChatGroupUpdate = (key) => {
    // console.log(key);
    handleChatGroup(key);
  };

  return (
    <div style={{ height: "100vh", width: "25vw", backgroundColor: "#fff" }}>
      <h1 style={{ fontSize: "1.5rem", color: "black", margin: "1.5rem 1rem" }}>
        Pocket Notes
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "30px",
          marginLeft: "2rem",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
        <button
          style={{
            width: "15rem",
            height: "2rem",
            color: "white",
            backgroundColor: "black",
            borderRadius: "50px",
            fontSize: "1rem",
          }}
          onClick={handleCreateForm}
        >
          + Create Notes group
        </button>

        {groupData?.map((group) => {
          // const groupData = Object.entries(group);
          const key = Object.keys(group)[0];
          // console.log(key, group[key]);
          return (
            <div
              className={Styles.groupBox}
              onClick={() => handleChatGroupUpdate(key)}
            >
              <div
                className={Styles.groupIcon}
                style={{ backgroundColor: group[key] }}
              >
                {key.slice(0, 2)}
              </div>
              <span>{Object.keys(group)}</span>
            </div>
          );
        })}

        <NoteForm setGroupData={setGroupData} />
      </div>
    </div>
  );
}

export default SideBar;
