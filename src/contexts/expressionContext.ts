import { createContext } from "react";
import { IExpressionContext } from "../utils/contextTypes";

const expressionContext = createContext({} as IExpressionContext);

export default expressionContext;
