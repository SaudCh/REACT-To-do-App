import React, { useState } from "react";

import Header from "./components/header.jsx";
import Tasks from "./components/Tasks.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
