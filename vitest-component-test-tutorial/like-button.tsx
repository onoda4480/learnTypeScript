import { useState } from "react";

export function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button onClick={handleClick} type="button">
      {count}
    </button>
  );
}