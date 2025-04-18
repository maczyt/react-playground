import { useState } from "react";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button>Click Me</Button>
      </div>
    </>
  );
}

export default App;
