import { useEffect, useMemo, useState } from "react";
import Expression from "../Expression/Expression";
import Panel from "../Panel/Panel";
import Display from "../Display/Display";
import expressionContext from "../../contexts/expressionContext";
import { cleanTokenizer } from "../../utils/mathLogic/cleanTokenizer";
import { mathEvaluate } from "../../utils/mathLogic/mathEvaluate/mathEvaluate";

const Main = () => {
  const [expressionInp, setExpressionInp] = useState("");
  const [expressionInfo, setExpressionInfo] = useState("");

  const calculation = () => {
    try {
      setExpressionInfo(cleanTokenizer(expressionInp));
      return mathEvaluate(expressionInp);
    } catch (err) {
      setExpressionInfo(`${err}`);
    }
  };

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      if (event.key === "Enter" && calculation())
        setExpressionInp(calculation()!);
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
            <Expression expressionInfo={expressionInfo} />
            <Display />
            <hr />
            <Panel />
          </div>
        </div>
      </div>
    </expressionContext.Provider>
  );
};

export default Main;
