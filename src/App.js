import React, { useMemo, useState } from "react";
import "./App.css";
import Child from "./child";

function App() {
  const [i, setI] = useState(0);

  const memoChild = useMemo(() => {
    return <Child />;
  }, []); //passing i would re-render

  const clickHandle = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Memo Explained</h1>
        <h2>Update</h2>
        <div>i = {i}</div>
        <button onClick={clickHandle}>Increment I</button>

        <h2>Test Render</h2>
        <h3>
          Regular render: <Child />
        </h3>
        <h3>
          Momoized render:
          {memoChild}
        </h3>
      </header>
    </div>
  );
}

export default App;
