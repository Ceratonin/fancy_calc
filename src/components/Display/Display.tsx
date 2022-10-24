import { ChangeEvent, KeyboardEvent, useContext } from "react";
import expressionContext from "../../contexts/expressionContext";

const Display = () => {
  const { expressionInp, setExpressionInp } = useContext(expressionContext);

  const keyCheck = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key, code } = e;
    const regexp = /[(-9√%]/g;

    if (
      ((e.metaKey || e.ctrlKey) &&
        (code === "KeyC" || code === "KeyV" || code === "KeyX")) ||
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
      onKeyDown={keyCheck}
      onChange={handleChange}
      value={expressionInp}
    />
  );
};

export default Display;
