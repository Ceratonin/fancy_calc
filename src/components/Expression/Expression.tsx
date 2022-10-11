const Expression = ({ expressionInfo }: any) => {
  console.log(expressionInfo)
  return <div className={`expression ${expressionInfo === "Wrong Expression" ? "error" : ""}`}>{expressionInfo}</div>;
};

export default Expression;
