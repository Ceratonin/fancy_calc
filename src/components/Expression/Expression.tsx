import { IExpression } from "../../utils/types";

const Expression = ({ expressionInfo }: IExpression) => {
  return <div className={`expression ${expressionInfo === "Wrong Expression" ? "error" : ""}`}>{expressionInfo}</div>;
};

export default Expression;
