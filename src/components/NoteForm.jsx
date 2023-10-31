import React from "react";
import { useContext } from "react";
import { formContext } from "../context/formProvider";

function NoteForm() {
  const { showForm } = useContext(formContext);

  return (
    <div>
      {showForm && (
        <div
          style={{
            width: "500px",
            height: "200px",
            flexShrink: "0",
            zIndex: 7,
            borderRadius: "6px",
            background: "#FFF",
            position: "fixed",
            left: "35%",
            top: "30%",
          }}
        >
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
                style={{
                  border: "2px solid #CCC",
                  borderRadius: "20px",

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
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#FF79F2",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#43E6FC",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#F19576",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#0047FF",
                  }}
                ></div>
                <div
                  style={{
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#6691FF",
                  }}
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
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteForm;
