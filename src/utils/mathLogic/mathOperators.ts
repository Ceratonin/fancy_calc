import { IOperators } from "../types";

export const operators: IOperators = {
  "√": {
    precedence: 6,
    associativity: "Right",
  },
  _uM: {
    precedence: 5,
    associativity: "Right",
  },
  _uP: {
    precedence: 5,
    associativity: "Right",
  },
  "%": {
    precedence: 4,
    associativity: "Left",
  },
  "*": {
    precedence: 3,
    associativity: "Left",
  },
  "/": {
    precedence: 3,
    associativity: "Left",
  },
  "-": {
    precedence: 2,
    associativity: "Left",
  },
  "+": {
    precedence: 2,
    associativity: "Left",
  },
};