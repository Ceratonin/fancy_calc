export interface IButton {
  name: string;
  literal: string;
}

export interface IExpression {
  expressionInfo: string;
}

export interface IOperators {
  [key: string]: {
    precedence: number;
    associativity: string;
  };
}

export interface IParseTokens {
  (_token: string, i: number, expressionArr: string[]): void;
}
