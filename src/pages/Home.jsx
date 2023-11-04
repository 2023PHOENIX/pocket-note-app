import React from "react";
import SideBar from "../components/sidebar/SideBar";
import PocketNotes from "../components/pocketNotes/PocketNotes";
import { useContext } from "react";
import { formContext } from "../context/FormProvider.jsx";
import { chatGroupContext } from "../context/ChatGroupProvider.jsx";
import Chats from "../components/Chats/Chats";
import { useEffect } from "react";
import { screenContext } from "../context/ScreenSizeProvider";
function Home() {
  const { showForm } = useContext(formContext);

  const { chatGroup } = useContext(chatGroupContext);
  const { isMobile, updateWidth } = useContext(screenContext);

  useEffect(() => {
    const handleResize = () => {
      updateWidth();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  return (
    <div style={{ display: "flex" }} className={showForm ? "overlay" : ""}>
      {isMobile && chatGroup !== "" ? <></> : <SideBar />}

      {chatGroup === "" && <PocketNotes />}

      {chatGroup !== "" && <Chats />}
    </div>
  );
}

export default Home;
