import React, { useEffect } from "react";
import ListHeader from "./components/ListHeader";

const App = () => {
  const userEmail = "test1@gmail.com";

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8800/todos/${userEmail}`);
      const json = await response.json();
      console.log(">>data from todos: ", json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />
    </div>
  );
};

export default App;
