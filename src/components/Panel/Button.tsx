import { IButton } from "../../utils/types";

const Button = ({ name, literal }: IButton) => {
  return name === "equals" ? (
    <div className="button button_equals">
      <div className="button__text button__text_equals">{literal}</div>
    </div>
  ) : (
    <div className="button">
      <div className="button__text">{literal}</div>
    </div>
  );
};

export default Button;
