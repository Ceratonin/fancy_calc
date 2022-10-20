import { IParseTokens } from "../../../types";
import { isNumber } from "../../helpers";

let currPos = 0;

export const parseFloat: IParseTokens = (_token, i, _expressionArr) => {
  let token = _token;
  currPos = i;
  const expressionArr = _expressionArr;
  let number = "";

  const getCurrToken = () => expressionArr[currPos];

  const consumeCurrToken = () => {
    const currToken = getCurrToken();
    currPos += 1;
    return currToken;
  };

  if (token !== ".") {
    number = consumeCurrToken();

    token = getCurrToken();
  }

  if (token === ".") {
    number += consumeCurrToken();

    token = getCurrToken();
    if (isNumber(token)) {
      number += consumeCurrToken();
      expressionArr.splice(currPos - 3, 3, number);
    } else if (!token)
      throw new Error(`Unexpected Expression End after Dot symbol`);
    else throw new Error(`Unexpected character ${token} after Dot symbol`);
  }
};
