import React from "react";
import { useContext, useState } from "react";
import { formContext } from "../../context/FormProvider.jsx";
import Styles from "./NoteForm.module.css";

// ? how should schema should look like
// ! can do groupname : [name,hex code ] can be option
// & but giving group : {key : value pair} is good option
// & has groupname : hex code
function NoteForm({setGroupData}) {
  const { showForm, toggleForm } = useContext(formContext);

  const [formChoice, setChoice] = useState({
    groupName: "",
    colorCode: "",
  });
  const handleSubmit = () => {
    const GROUP = JSON.parse(localStorage.getItem("group")) || [];

    const groupExist = GROUP.some((gp) => formChoice.groupName in gp);

    if (!groupExist) {
      GROUP.push({ [formChoice.groupName]: formChoice.colorCode });

      localStorage.setItem("group", JSON.stringify(GROUP));
      setGroupData(GROUP);
    }
    toggleForm();
  };
  const handleGroupName = (e) => {
    setChoice((prev) => ({
      ...prev,
      groupName: e.target.value,
    }));
  };
  const handleColorPick = (e) => {
    // console.log(e);
    // console.log(e.target.getAttribute('name'));
    setChoice((prev) => ({
      ...prev,
      colorCode: e.target.getAttribute("name"),
    }));
    console.log(formChoice);
  };
  return (
    <div>
      {showForm && (
        <div className={Styles.formWrapper}>
          <h1 style={{ padding: "20px", fontSize: "22px" }}>
            Create New Notes group
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "0px 35px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Group Name</p>
              <input
                onChange={handleGroupName}
                style={{
                  border: "2px solid #CCC",
                  borderRadius: "20px",
                  textIndent: "10px",
                  width: "300px",
                  height: "30px",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Choose colour</p>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#B38BFA",
                  }}
                  name="#B38BFA"
                  onClick={handleColorPick}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#FF79F2",
                  }}
                  name="#FF79F2"
                  onClick={handleColorPick}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#43E6FC",
                  }}
                  name="#43E6FC"
                  onClick={handleColorPick}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#F19576",
                  }}
                  name="#F19576"
                  onClick={handleColorPick}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#0047FF",
                  }}
                  name="#0047FF"
                  onClick={handleColorPick}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#6691FF",
                  }}
                  name="#6691FF"
                  onClick={handleColorPick}
                ></div>
              </div>
            </div>
          </div>

          <button
            style={{
              backgroundColor: "black",
              borderRadius: "8px",
              color: "white",
              padding: "5px 30px",
              position: "absolute",
              right: "10px",
              bottom: "10px",
            }}
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteForm;
