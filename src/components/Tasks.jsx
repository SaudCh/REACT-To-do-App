import React, { useState } from "react";
import task from "./Task.jsx";
import Task from "./Task.jsx";
import AddTask from "./AddTask.jsx";

//import { Form } from "react-bootstrap";
//import "../index.css";

function Tasks() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "25 Sept at 2:30pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Going school",
      day: "26 Sept at 2:00pm",
      remainder: false,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "27 Sept at 1:30pm",
      remainder: true,
    },
    {
      id: 4,
      text: "Paying Bills",
      day: "28 Sept at 2:30pm",
      remainder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const toggleRemainder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              remainder: !task.remainder,
            }
          : task
      )
    );
  };
  const addTaskFunction = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };
  return (
    <section className="taskContainer">
      <AddTask onAdd={addTaskFunction} />
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onRemainder={toggleRemainder}
          />
        ))
      ) : (
        <h5>'No Task to Show'</h5>
      )}
    </section>
  );
}

export default Tasks;
