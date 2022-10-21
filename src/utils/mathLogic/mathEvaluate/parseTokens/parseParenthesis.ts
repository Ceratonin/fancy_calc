import { IParseTokens } from "../../../types";
import { isNumber, isSqrt } from "../../helpers";

let parenthesisSum = 0;

export const parseLeftParenthesis: IParseTokens = (
  _token,
  i,
  _expressionArr
) => {
  const expressionArr = _expressionArr;
  const prevToken = expressionArr[i - 1];
  const nextToken = expressionArr[i + 1];

  if (isNumber(prevToken) || prevToken === ")") {
    expressionArr.splice(i, 0, "*");
  } else parenthesisSum += 1;

  if (nextToken === ")")
    throw new Error("Expected Expression inside of a Brackets");
};

export const parseRightParenthesis: IParseTokens = (
  _token,
  i,
  _expressionArr
) => {
  const expressionArr = _expressionArr;
  const nextToken = expressionArr[i + 1];

  if (isNumber(nextToken) || isSqrt(nextToken)) {
    expressionArr.splice(i + 1, 0, "*");
  }
  parenthesisSum -= 1;
};

export const checkParenthesis = () => {
  const parSum = parenthesisSum;
  parenthesisSum = 0;
  return parSum;
};
