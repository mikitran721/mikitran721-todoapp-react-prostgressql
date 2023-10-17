import React from "react";
import { GiIsland } from "react-icons/gi";
import Modal from "./Modal";

const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("Sign out");
  };
  return (
    <div className="list-header">
      <h2>
        <GiIsland style={{ paddingRight: "5px", color: "blue" }} />
        {listName}
      </h2>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      <Modal mode={"create"} />
    </div>
  );
};

export default ListHeader;
