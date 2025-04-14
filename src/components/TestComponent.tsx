// src/components/TestComponent.tsx
import { useState } from "react";

interface Props {
  title: string;
}

const TestComponent = ({ title }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </div>
  );
};

export default TestComponent;
