import { IExpression } from "../../utils/types";

const Expression = ({ expressionInfo }: IExpression) => {
  return <div className="expression">{expressionInfo}</div>;
};

export default Expression;
