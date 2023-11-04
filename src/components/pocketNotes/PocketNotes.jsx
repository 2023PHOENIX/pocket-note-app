import React from "react";
import PocketImage from "../../assets/pocket-image.png";
import LockIcon from "../../assets/lock-icon.svg";
import PocketStyles from "./pocketnotes.module.css"
function PocketNotes() {
    return (
        <div
        className={PocketStyles['wrapper-home']}
        >
            <div>
                <img
                    className={PocketStyles['wrapper-img']}
                    src={PocketImage}
                    alt="pocket notes"
                />
            </div>
            <h1>Pocket Notes</h1>
            <div style={{lineHeight: "32px"}}>
                Send and receive messages without keeping your phone online.
                <br></br>
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </div>
            <span className={PocketStyles['wrapper-footer']}>
        <img src={LockIcon}/> end-to-end encrypted
      </span>
        </div>
    );
}

export default PocketNotes;
