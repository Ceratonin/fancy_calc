import { useState, ChangeEvent, KeyboardEvent, useEffect } from "react";

const Display = () => {
  const [val, setVal] = useState("");

  const letterCheck = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const regexp = /[(-9√]/g;

    if (
      ((e.metaKey || e.ctrlKey) &&
        (key === "v" || key === "c" || key === "x")) ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "ArrowUp" ||
      key === "ArrowDown" ||
      key === "Backspace" ||
      key === "Delete" ||
      key === " "
    )
      return;

    if (!regexp.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const calculation = (value: string) => {
    // eslint-disable-next-line no-eval
    return eval(value);
  };

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      if (event.key === "Enter") {
        setVal(calculation(val));
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [val]);

  return (
    <input
      type="text"
      className="display"
      onKeyDown={letterCheck}
      onChange={handleChange}
      value={val}
    />
  );
};

export default Display;
