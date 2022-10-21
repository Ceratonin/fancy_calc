import { operators } from "../mathOperators";
import {
  isNumber,
  isOperator,
  isPercentage,
  isSqrt,
  isUnary,
} from "../helpers";

export const shuntingParser = (tokensArr: string[]) => {
  const outputQueue: string[] = [];
  const operatorStack: string[] = [];

  for (let i = 0; i < tokensArr.length; i += 1) {
    const token = tokensArr[i];
    if (isNumber(token)) outputQueue.push(token);

    if (
      isOperator(token) ||
      isPercentage(token) ||
      isUnary(token) ||
      isSqrt(token)
    ) {
      const o1 = token;
      let o2 = operatorStack[operatorStack.length - 1];

      while (
        o2 &&
        o2 !== "(" &&
        (operators[o2].precedence > operators[o1].precedence ||
          (operators[o2].precedence === operators[o1].precedence &&
            operators[o1].associativity === "Left"))
      ) {
        outputQueue.push(operatorStack.pop()!);
        o2 = operatorStack[operatorStack.length - 1];
      }

      operatorStack.push(o1);
    }

    if (token === "(") operatorStack.push(token);

    if (token === ")") {
      while (operatorStack[operatorStack.length - 1] !== "(") {
        outputQueue.push(operatorStack.pop()!);
      }

      operatorStack.pop();
    }
  }

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop()!);
  }

  return outputQueue;
};
