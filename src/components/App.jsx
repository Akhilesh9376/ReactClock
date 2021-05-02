import React, { useState } from "react";

function App() {
    const now = new Date().toLocaleTimeString("en-GB");
    const [time, setTime] = useState(now);
function UpdateTime() {
setInterval(UpdateTime, 1000);
    const newTime = new Date().toLocaleTimeString("en-GB");
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      console.log("good morning");
    } else if (curHr < 17) {
      document.getElementById("btn").innerHTML = "Good AfterNoon";
      console.log("good afternoon");
    } else if (curHr < 20) {
      console.log("good evening");
    } else {
      console.log("Good Night");
    }
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button id="btn" onClick={UpdateTime}>
        Wishes:)
      </button>
    </div>
  );
}

export default App;
