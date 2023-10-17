import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import TickIcon from "../components/TickIcon";
import Modal from "./Modal";

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar />
      </div>
      <div className="button-container">
        <button onClick={() => setShowModal(true)} className="edit">
          EDIT
        </button>
        <button className="delete">DELETE</button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
};

export default ListItem;
