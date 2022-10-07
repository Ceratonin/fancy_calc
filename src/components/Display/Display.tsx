import { useState, ChangeEvent } from "react";

const Display = () => {
  const [val, setVal] = useState("");

  const handleSubmit = (e: any) => {
    if (!/[0-9*+-/,.]/.test(e.key)) {
      e.preventDefault();
    } else {
      setVal(e.target.value);
    }
  };

  return <input type="text" className="display" onKeyPress={handleSubmit} />;
};

export default Display;
