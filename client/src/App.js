import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

const App = () => {
  const userEmail = "test1@gmail.com";
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8800/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  // sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
