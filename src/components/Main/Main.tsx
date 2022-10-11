import { useEffect, useMemo, useState } from "react";
import Expression from "../Expression/Expression";
import Panel from "../Panel/Panel";
import Display from "../Display/Display";
import expressionContext from "../../contexts/expressionContext";
import StringParser from "../../utils/mathLogic/StringParser";

const Main = () => {
  const [expressionInp, setExpressionInp] = useState("");
  const [correctExpression, setCorrectExpression] = useState("")

  const calculation = (value: string) => {
    setCorrectExpression(StringParser(value).join(""));
    // eslint-disable-next-line no-eval
    return eval(value);
  };

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      if (event.key === "Enter") {
        setExpressionInp(calculation(expressionInp));
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [expressionInp]);

  const expressionMemo = useMemo(() => {
    return {
      expressionInp,
      setExpressionInp,
    };
  }, [expressionInp, setExpressionInp]);

  return (
    <expressionContext.Provider value={expressionMemo}>
      <div className="main-wrapper">
        <div className="main-background">
          <div className="main">
            <Expression correctExpression={correctExpression} />
            <Display/>
            <hr />
            <Panel />
          </div>
        </div>
      </div>
      ‰{" "}
    </expressionContext.Provider>
  );
};

export default Main;
