import { IParseTokens } from "../../../types";
import { isOperator, isPercentage } from "../../helpers";

export const parseUnary: IParseTokens = (_token, i, _expressionArr) => {
  let unary = _token;
  const expressionArr = _expressionArr;
  const prevToken = expressionArr[i - 1];
  const nextToken = expressionArr[i + 1];

  if (!prevToken || /[√(*/+-]/.test(prevToken)) {
    if (_token === "+") unary = "_uP";
    else unary = "_uM";

    expressionArr[i] = unary;

    if (isOperator(nextToken) || isPercentage(nextToken))
      throw new Error(`Unexpected character ${nextToken} after Unary Operator`);
  }
};
