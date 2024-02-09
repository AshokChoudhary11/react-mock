import React, { useState } from "react";

const TextArea = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Text"
      />
      <h1>{inputValue}</h1>
    </div>
  );
};

export default TextArea;
