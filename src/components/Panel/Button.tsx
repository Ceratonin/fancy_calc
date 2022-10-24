import { useContext } from "react";
import expressionContext from "../../contexts/expressionContext";
import { IButton } from "../../utils/types";

const Button = ({ name, literal }: IButton) => {
  const { expressionInp, setExpressionInp } = useContext(expressionContext);

  const handleClick = () => {
    switch (name) {
      case "clear":
        setExpressionInp("");
        break;

      case "equals":
        document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
        break;

      default:
        setExpressionInp(expressionInp + literal);
    }
  };

  return name === "equals" ? (
    <div
      className="button button_equals"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <span className="button__text button__text_equals">{literal}</span>
    </div>
  ) : (
    <div className="button" onClick={handleClick} onKeyDown={handleClick}>
      <span className="button__text">{literal}</span>
    </div>
  );
};

export default Button;
