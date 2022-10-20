import { IParseTokens } from "../../../types";
import { isNumber } from "../../helpers";

export const parsePercentage: IParseTokens = (_token, i, _expressionArr) => {
  const expressionArr = _expressionArr;
  const prevToken = expressionArr[i - 1];

  if (!isNumber(prevToken) && prevToken !== ")")
    throw new Error(
      "Number or Right Parenthesis expected to the left of Percentage"
    );
};
