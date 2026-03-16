import { useEffect, useState } from "react";

const UseEffectWithCleanup = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    //cleanup function to clear the time
    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <div>
      <h3>Use Effect With Cleanup Example</h3>
      <p>This Component rendered this {count} many times.</p>
    </div>
  );
};

export default UseEffectWithCleanup;
