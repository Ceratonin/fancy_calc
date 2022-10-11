import {
  useState,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useContext,
} from "react";
import expressionContext from "../../contexts/expressionContext";

const Display = () => {
  const { expressionInp, setExpressionInp } = useContext(expressionContext);

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
    setExpressionInp(e.target.value);
  };

  return (
    <input
      type="text"
      className="display"
      onKeyDown={letterCheck}
      onChange={handleChange}
      value={expressionInp}
    />
  );
};

export default Display;
