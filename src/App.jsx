import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Welcome to my React app!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button onClick={() => setMessage("You clicked the button!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
