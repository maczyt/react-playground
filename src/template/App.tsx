import { useEffect, useState } from "react";
import { Button } from "antd";
import confetti from "canvas-confetti";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    confetti();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  );
}

export default App;
