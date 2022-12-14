import { IParseTokens } from "../../../types";
import { isNumber, isPercentage } from "../../helpers";

export const parseSqrt: IParseTokens = (_token, i, _expressionArr) => {
  const expressionArr = _expressionArr;
  const prevToken = expressionArr[i - 1];
  const nextToken = expressionArr[i + 1];

  if (isNumber(prevToken) || isPercentage(prevToken))
    expressionArr.splice(i, 0, "*");

  if (!isNumber(nextToken) && nextToken !== "(" && nextToken !== undefined)
    throw new Error(`Unexpected character "${nextToken}" after Square Root`);

  if (nextToken === undefined || nextToken === null)
    throw new Error(`Unexpected Expression End after Square Root`);
};
