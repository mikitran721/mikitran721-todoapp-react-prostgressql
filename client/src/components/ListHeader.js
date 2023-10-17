import React, { useState } from "react";
import { GiIsland } from "react-icons/gi";
import Modal from "./Modal";

const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] = useState(false);
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
        <button className="create" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      {showModal && <Modal mode={"create"} setShowModal={setShowModal} />}
    </div>
  );
};

export default ListHeader;
