import { tokenizer } from "./tokenizer";

describe("simple expressions", () => {
  test("operators", () => {
    const operatorsArr = ["-", "+", "*", "×", "/"];
    const expectedArr: string[][] = [];
    operatorsArr.forEach((op) => expectedArr.push(tokenizer(`6 ${op} 2`)));
    expect(expectedArr).toEqual([
      ["6", "-", "2"],
      ["6", "+", "2"],
      ["6", "*", "2"],
      ["6", "×", "2"],
      ["6", "/", "2"],
    ]);
  });
  test("percentage", () => {
    const inputString = "12%";
    expect(tokenizer(inputString)).toEqual(["12", "%"]);
  });
  test("sqrt", () => {
    const inputString = "√64";
    expect(tokenizer(inputString)).toEqual(["√", "64"]);
  });
  test("float number", () => {
    const inputString1 = "1.234";
    const inputString2 = "1,23";
    expect(tokenizer(inputString1)).toEqual(["1.234"]);
    expect(tokenizer(inputString2)).toEqual(["1.23"]);
  });
  test("unexpected expression end error", () => {
    const inputString1 = "12+13-";
    const inputString2 = "-";
    expect(() => tokenizer(inputString1)).toThrow("Unexpected Expression End");
    expect(() => tokenizer(inputString2)).toThrow("Unexpected Expression End");
  });
});

describe("unary", () => {
  test("unary plus", () => {
    const inputString1 = "+√1";
    const inputString2 = "12++3";
    const inputString3 = "+4";
    expect(tokenizer(inputString1)).toEqual(["_uP", "√", "1"]);
    expect(tokenizer(inputString2)).toEqual(["12", "+", "_uP", "3"]);
    expect(tokenizer(inputString3)).toEqual(["_uP", "4"]);
  });
});

describe("token errors", () => {
  test("parse float", () => {
    const inputString1 = "1,";
    const inputString2 = "1,+";
    const inputString3 = "1,.";
    const inputString4 = "1.,";
    expect(() => tokenizer(inputString1)).toThrow(
      "Unexpected Expression End after Comma symbol"
    );
    expect(() => tokenizer(inputString2)).toThrow(
      `Unexpected character "+" after Comma symbol`
    );
    expect(() => tokenizer(inputString3)).toThrow(
      `Unexpected character "." after Comma symbol`
    );
    expect(() => tokenizer(inputString4)).toThrow(
      `Unexpected character "," after Comma symbol`
    );
  });
  test("parse percentage", () => {
    const inputString1 = "*%";
    expect(() => tokenizer(inputString1)).toThrow(
      "Number or Right Parenthesis expected to the left of Percentage"
    );
  });
  test("parse sqrt", () => {
    const inputString1 = "√";
    const inputString2 = "√+";
    expect(() => tokenizer(inputString1)).toThrow(
      "Unexpected Expression End after Square Root"
    );
    expect(() => tokenizer(inputString2)).toThrow(
      `Unexpected character "+" after Square Root`
    );
  });
  test("parse unary", () => {
    const inputString1 = "1---2";
    const inputString2 = "-+2";
    expect(() => tokenizer(inputString1)).toThrow(
      "Unexpected character - after Unary Operator"
    );
    expect(() => tokenizer(inputString2)).toThrow(
      "Unexpected character + after Unary Operator"
    );
  });
});

describe("parenthesis", () => {
  test("expression with parenthesis", () => {
    const inputString = "(12/3)+4(2)(3)-12";
    expect(tokenizer(inputString)).toEqual([
      "(",
      "12",
      "/",
      "3",
      ")",
      "+",
      "4",
      "*",
      "(",
      "2",
      ")",
      "*",
      "(",
      "3",
      ")",
      "-",
      "12",
    ]);
  });
  test("empty parenthesis", () => {
    expect(() => tokenizer("()")).toThrow(
      "Expected Expression inside of a Brackets"
    );
  });
  test("wrong parenthesis pair", () => {
    expect(() => tokenizer("2*(3+4")).toThrow("Incorrect Parenthesis");
  });
});
