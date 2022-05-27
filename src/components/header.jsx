import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const [btn, setBtn] = useState(true);
  const toggleAddTask = () => {
    console.log("Toggle");
    const addTask = document.querySelector("#addTask");
    addTask.classList.toggle("opacity");
    setBtn(!btn);
    localStorage.lastname = "Smith";
  };

  return (
    <header>
      <h1>Task Tracker</h1>
      <button
        type="button"
        className={`btn ${btn ? "btn-success" : "btn-danger"} btn-sm`}
        style={{ height: "40px" }}
        onClick={() => toggleAddTask()}
      >
        {btn ? "Add" : "close"}
      </button>
    </header>
  );
}

Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = {
  title: PropTypes.string,
};
