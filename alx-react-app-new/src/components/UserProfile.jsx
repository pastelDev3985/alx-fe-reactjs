import React from "react";

export default function UserProfile() {
  const UserProfile = (props) => {
    return (
      <div
        style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}
      >
        <h2
          style={{
            color: "#ffdab9",
          }}
        >
          {props.name}{" "}
        </h2>
        <p>
          {" "}
          Age: <span style={{ fontWeight: "bold" }}> {props.age}</span>
        </p>
        <p>Bio: {props.bio} </p>
      </div>
    );
  };

  return;
}
