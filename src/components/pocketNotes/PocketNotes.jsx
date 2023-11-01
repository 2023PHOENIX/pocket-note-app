import React from "react";
import PocketImage from "../../assets/pocket-image.png";
import LockIcon from "../../assets/lock-icon.svg";
import { chatGroupContext } from "../../context/chatGroupProvider";
function PocketNotes(props) {
  
  
  return (
    <div
      style={{
        backgroundColor: "#F7ECDC",
        height: "100vh",
        width: "75vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "80px",
        gap: "40px",
        position: "relative",
        fontSize: "1.2rem",
      }}
    >
      <div>
        <img
          style={{ width: "37.5rem", height: "16rem" }}
          src={PocketImage}
          alt="pocket notes"
        />
      </div>
      <h1>Pocket Notes</h1>
      <div style={{ lineHeight: "32px" }}>
        Send and receive messages without keeping your phone online.
        <br></br>
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </div>
      <span style={{ bottom: "20px", position: "absolute" }}>
        <img src={LockIcon} /> end-to-end encrypted
      </span>
    </div>
  );
}

export default PocketNotes;
