import { isNumber, isOperator, isPercentage, isSqrt } from "../helpers";
import { parseFloat } from "./parseTokens/parseFloat";
import {
  checkParenthesis,
  parseLeftParenthesis,
  parseRightParenthesis,
} from "./parseTokens/parseParenthesis";
import { parsePercentage } from "./parseTokens/parsePercentage";
import { parseSqrt } from "./parseTokens/parseSqrt";
import { parseUnary } from "./parseTokens/parseUnary";

export const tokenizer = (expressionInp: string) => {
  const expressionRegExp = /\s*([+-]{1}|[0-9]+|\S)\s*/g;
  const expressionArr = expressionInp
    .split(expressionRegExp)
    .filter((token) => token !== "");

  for (let i = 0; i < expressionArr.length; i += 1) {
    const token = expressionArr[i];

    if (isNumber(token)) parseFloat(token, i, expressionArr);

    if (/[+-]/.test(token)) parseUnary(token, i, expressionArr);

    if (token === "(") parseLeftParenthesis(token, i, expressionArr);

    if (token === ")") parseRightParenthesis(token, i, expressionArr);

    if (isSqrt(token)) parseSqrt(token, i, expressionArr);

    if (isPercentage(token)) parsePercentage(token, i, expressionArr);
  }

  if (checkParenthesis() !== 0) throw new Error("Incorrect Parenthesis");

  if (expressionArr.length === 0) throw new Error("Expression Expected");

  if (isOperator(expressionArr[expressionArr.length - 1]))
    throw new Error("Unexpected Expression End");
  return expressionArr;
};
