import React from "react";

export default function UserProfile() {
  const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name} </h2>
        <p> Age: {props.age}</p>
        <p>Bio: {props.bio} </p>
      </div>
    );
  };

  return <div></div>;
}
