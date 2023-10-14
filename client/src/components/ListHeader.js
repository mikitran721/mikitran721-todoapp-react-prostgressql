import React from "react";

const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log("Sign out");
  };
  return (
    <div className="list-header">
      <h2>{listName}</h2>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
