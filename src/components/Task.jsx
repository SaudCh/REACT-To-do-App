import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function task({ task, onDelete, onRemainder }) {
  return (
    <div
      className={`task ${task.remainder ? "reaminder" : ""}`}
      onDoubleClick={() => onRemainder(task.id)}
    >
      <div>
        <h3 className="task-title">{task.text}</h3>
        <p>{task.day}</p>
      </div>
      <div>
        <FontAwesomeIcon
          className="text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
          icon={faTimes}
        />
      </div>
    </div>
  );
}
