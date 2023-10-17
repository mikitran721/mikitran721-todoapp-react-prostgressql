import React, { useState } from "react";

const Modal = ({ mode, setShowModal }) => {
  const editMode = mode === "edit" ? true : false;

  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  // function handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(data);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>

        <form>
          <input
            required
            maxLength={30}
            placeholder="Your tasks goes here"
            name="title"
            value={data.title}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="range">Drag to colect your current progress</label>
          <input
            id="range"
            type="range"
            required
            min={0}
            max={100}
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <input className={mode} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
