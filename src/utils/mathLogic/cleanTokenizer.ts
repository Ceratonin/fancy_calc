export const cleanTokenizer = (expressionInp: string) => {
  const expressionRegExp = /\s*([+-]{1}|[0-9]+|\S)\s*/g;
  const expressionArr = expressionInp
    .split(expressionRegExp)
    .filter((token) => token !== "")
    .join("");

  return expressionArr;
};
