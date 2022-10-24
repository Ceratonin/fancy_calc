import { useEffect, useMemo, useState } from "react";
import Expression from "../Expression/Expression";
import Panel from "../Panel/Panel";
import Display from "../Display/Display";
import expressionContext from "../../contexts/expressionContext";
import { cleanTokenizer } from "../../utils/mathLogic/cleanTokenizer";
import { mathEvaluate } from "../../utils/mathLogic/mathEvaluate";

const Main = () => {
  const [expressionInp, setExpressionInp] = useState("");
  const [expressionInfo, setExpressionInfo] = useState("");

  const calculation = () => {
    try {
      setExpressionInfo(cleanTokenizer(expressionInp));
      return mathEvaluate(expressionInp);
    } catch (err) {
      if (err instanceof Error) setExpressionInfo(err.message);
    }
  };

  useEffect(() => {
    const keyDownHandler = (e: any) => {
      if (e.key === "Escape") setExpressionInp("");

      if ((e.key === "Enter" || e.key === "=") && calculation())
        setExpressionInp(calculation()!);

      if (e.target.tagName === "INPUT") return;

      if (/^[(-9√%]/.test(e.key)) setExpressionInp(expressionInp + e.key);
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
