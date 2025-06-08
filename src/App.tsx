import { useState } from "react";
import "./App.css";
import MAGrid from "./MAGrid.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 60 }}>
      <MAGrid />
    </div>
  );
}

export default App;
