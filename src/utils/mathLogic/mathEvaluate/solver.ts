import { isOperator, isPercentage, isSqrt, isUnary } from "../helpers";
import { sqrtEval } from "../sqrtEval";
import { shuntingParser } from "./shuntingParser";

export const solver = (expressionInp: string) => {
  const numberStack: number[] = [];
  let result = 0;
  const outputQueue: string[] = shuntingParser(expressionInp);

  for (let i = 0; i < outputQueue.length; i += 1) {
    const token = outputQueue[i];
    if (isOperator(token)) {
      const num2 = numberStack.pop();
      const num1 = numberStack.pop();

      if (num1 !== undefined && num2 !== undefined)
        switch (token) {
          case "+":
            result = num1 + num2;
            break;

          case "-":
            result = num1 - num2;
            break;

          case "*":
            result = num1 * num2;
            break;

          case "/":
            result = num1 / num2;
            break;

          default:
            return;
        }

      numberStack.push(result);
    } else if (isUnary(token)) {
      const num = numberStack.pop();

      if (num !== undefined)
        if (token === "_uP") result = num * 1;
        else result = num * -1;

      numberStack.push(result);
    } else if (isPercentage(token)) {
      if (isOperator(outputQueue[i + 1])) {
        const num2 = numberStack.pop();
        const num1 = numberStack.pop();

        const op = outputQueue.splice(i + 1, 1)[0];

        if (num1 && num2)
          switch (op) {
            case "+":
              result = num1 + (num1 / 100) * num2;
              break;

            case "-":
              result = num1 - (num1 / 100) * num2;
              break;

            case "*":
              result = (num1 * num2) / 100;
              break;

            case "/":
              result = (num1 / num2) * 100;
              break;

            default:
              return;
          }
      }

      numberStack.push(result);
    } else if (isSqrt(token)) {
      const num = numberStack.pop();

      result = sqrtEval(num!);

      numberStack.push(result);
    } else numberStack.push(+token);
  }

  const fixedResult = Number(numberStack[0].toFixed(5));
  return fixedResult.toString();
};
