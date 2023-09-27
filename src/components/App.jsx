import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [hour, setHour] = useState();
  setInterval(() => {
    setHour(time);
  }, 2000);
  return (
    <div className="container">
      <h1>{hour}</h1>
    </div>
  );
}

export default App;
