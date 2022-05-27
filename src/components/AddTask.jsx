import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);
  const AddTask = (text, date, remainder) => {
    if (text === "" && day === "") {
      console.log(localStorage.lastname);
      console.log("Data is empty");
    } else {
      //console.log(date, text, remainder);
      setText("");
      setDay("");
      setRemainder(false);
      onAdd({ text, day, remainder });
    }
  };
  return (
    <div id="addTask" className="addTask">
      <form className="form">
        <div class="form-group">
          <label for="task">Task</label>
          <input
            type="text"
            class="form-control"
            id="task"
            aria-describedby="emailHelp"
            placeholder="Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="dateTime">Date & Time</label>
          <input
            type="text"
            class="form-control"
            id="dateTime"
            placeholder="Date & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            checked={remainder}
            id="remainder"
            onChange={(e) => setRemainder(e.currentTarget.checked)}
          />
          <label class="form-check-label" for="remainder">
            Set a Remainder
          </label>
        </div>
        <center>
          <button
            type="button"
            onClick={() => AddTask(text, day, remainder)}
            class="btn btn-primary col-6"
          >
            Add a task
          </button>
        </center>
      </form>
    </div>
  );
}
