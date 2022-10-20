import { createContext } from "react";
import { IExpressionContext } from "./contextTypes";

const expressionContext = createContext({} as IExpressionContext);

export default expressionContext;
