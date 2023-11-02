import React from "react";
import SideBar from "../components/sidebar/SideBar";
import PocketNotes from "../components/pocketNotes/PocketNotes";
import { useContext } from "react";
import { formContext } from "../context/formProvider";
import { chatGroupContext } from "../context/chatGroupProvider";
import Chats from "../components/Chats/Chats";
function Home() {
  const { showForm } = useContext(formContext);

  const { chatGroup } = useContext(chatGroupContext);
  return (
    <div style={{ display: "flex" }} className={showForm ? "overlay" : ""}>
      <SideBar />
      {chatGroup === "" && <PocketNotes />}
      {chatGroup !== "" && <Chats />}
    </div>
  );
}

export default Home;
