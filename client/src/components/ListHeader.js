import React, { useState } from "react";
import { GiIsland } from "react-icons/gi";
import Modal from "./Modal";
import { useCookies } from "react-cookie";

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookies, removeCookies] = useCookies(null);

  const signOut = () => {
    removeCookies("Email");
    removeCookies("AuthToken");
    window.location.reload();
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
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
