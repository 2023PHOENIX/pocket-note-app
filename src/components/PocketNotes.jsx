import React from "react";
import PocketImage from "../assets/pocket-image.png";
import LockIcon from "../assets/lock-icon.svg";
function PocketNotes(props) {
  return (
    <div
      style={{
        backgroundColor: "#F7ECDC",
        height: "100vh",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: "100px",
        gap: "40px",
        position: "relative",
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
