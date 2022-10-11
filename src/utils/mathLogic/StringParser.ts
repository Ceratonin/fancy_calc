const StringParser = (expressionInp: string) => {
  const expressionRegExp = /\s*([+-]{1}|[0-9]+|\S)\s*/g;
  const expressionArr: Array<string> = [];

  const matchesArr = [...expressionInp.matchAll(expressionRegExp)];
  matchesArr.forEach(() => {
    const m = expressionRegExp.exec(expressionInp);
    if (m && m[1].match(/[a-zA-Z]/)) throw new Error("Wrong expression")
    if (m) expressionArr.push(m[1]);
  });

  console.log("expressionArr", expressionArr);
  console.log("expressionInp", expressionInp);

  return expressionArr
};

export default StringParser;
