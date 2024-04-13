import { useState } from "react";

function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => setIsClicked(true)} style={styles}>
      {isClicked ? "Ouch!" : "Click Me"}
    </button>
  );
}
export default Button;
