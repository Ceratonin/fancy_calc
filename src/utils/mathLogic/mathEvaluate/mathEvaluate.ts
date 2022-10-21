import { shuntingParser } from "./shuntingParser";
import { rpnSolver } from "./rpnSolver";
import { tokenizer } from "./tokenizer";

export const mathEvaluate = (expressionInp: string) => {
  const tokensArr = tokenizer(expressionInp);
  const rpn = shuntingParser(tokensArr);
  return rpnSolver(rpn);
};
