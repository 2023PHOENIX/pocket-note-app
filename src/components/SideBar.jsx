import React from "react";
import { useContext } from "react";
import { formContext } from "../context/formProvider";
import NoteForm from "./NoteForm";

function SideBar() {
  const { showForm, toggleForm } = useContext(formContext);

  const handleCreateForm = () => {
    toggleForm(!showForm);
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

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              backgroundColor: "blue",
              borderRadius: "50%",
              height: "45px",
              width: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            CU
          </div>

          <span>Cuvette Notes</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              backgroundColor: "#B38BFA",
              borderRadius: "50%",
              height: "45px",
              width: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            MG
          </div>

          <span>My Personal Group</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              backgroundColor: "#FFC0C0",
              borderRadius: "50%",
              height: "45px",
              width: "45px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            JS
          </div>

          <span>JavaScript grp</span>
        </div>
      </div>
      <NoteForm />
    </div>
  );
}

export default SideBar;
