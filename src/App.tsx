import { useState } from "react";
import "./App.css";
import CreateNewButton from "./CreateNewButton.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 60 }}>
      <CreateNewButton />
    </div>
  );
}

export default App;
