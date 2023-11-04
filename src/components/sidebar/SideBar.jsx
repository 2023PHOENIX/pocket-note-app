import React from "react";
import { useContext, useState } from "react";
import { formContext } from "./../../context/FormProvider.jsx";
import NoteForm from "../noteform/NoteForm";
import Styles from "./SideBar.module.css";
import { useEffect } from "react";
import { chatGroupContext } from "./../../context/ChatGroupProvider.jsx";

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
    handleChatGroup(key);
    console.log(chatGroup);
  };

  return (
    <div className={Styles['sidebar-wrapper']}>
      <h1 className={Styles['sidebar-heading']}>
        Pocket Notes
      </h1>

      <div
        className={Styles.sidebar}
      >
        <button
          className={Styles['button-create-group']}
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
