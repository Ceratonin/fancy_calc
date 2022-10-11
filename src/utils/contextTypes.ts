import React from "react";

export interface IExpressionContext {
  expressionInp: string;
  setExpressionInp: React.Dispatch<React.SetStateAction<string>>
}