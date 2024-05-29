import React, { useEffect } from "react";
import { useState, useRef } from "react";
function UseRef() {
    const [userInput, setUserInput] = useState("");
    // const [count, setCount] = useState();
    const count = useRef(0);
  
    useEffect(() => {
      // setCount(count + 1);
      count.current = count.current + 1;
    });
  return (
    
     <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>the number of times comp render:{count.current} </p>
</>
    
  );
}

export default UseRef;
