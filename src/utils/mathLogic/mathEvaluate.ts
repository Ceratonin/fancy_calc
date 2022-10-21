import { shuntingParser } from "./mathEvaluate/shuntingParser";
import { rpnSolver } from "./mathEvaluate/rpnSolver";
import { tokenizer } from "./mathEvaluate/tokenizer";

export const mathEvaluate = (expressionInp: string) => {
  const tokensArr = tokenizer(expressionInp);
  const rpn = shuntingParser(tokensArr);
  return rpnSolver(rpn);
};
