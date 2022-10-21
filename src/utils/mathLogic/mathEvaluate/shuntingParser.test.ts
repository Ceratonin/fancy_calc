import { shuntingParser } from "./shuntingParser";

describe("simple expressions", () => {
  test("operators", () => {
    const tokenArr1 = ["1", "+", "2", "-", "3"];
    const tokenArr2 = ["12", "-", "2", "*", "3"];
    const tokenArr3 = ["3", "+", "4", "*", "2", "/", "(", "1", "-", "5", ")"];
    expect(shuntingParser(tokenArr1)).toEqual(["1", "2", "+", "3", "-"]);
    expect(shuntingParser(tokenArr2)).toEqual(["12", "2", "3", "*", "-"]);
    expect(shuntingParser(tokenArr3)).toEqual([
      "3",
      "4",
      "2",
      "*",
      "1",
      "5",
      "-",
      "/",
      "+",
    ]);
  });

  test("sqrt", () => {
    const tokenArr1 = ["2", "+", "√", "4", "-", "3"];
    const tokenArr2 = ["2", "+", "√", "(", "4", "-", "3", ")"];
    expect(shuntingParser(tokenArr1)).toEqual(["2", "4", "√", "+", "3", "-"]);
    expect(shuntingParser(tokenArr2)).toEqual(["2", "4", "3", "-", "√", "+"]);
  });

  test("percentage", () => {
    const tokenArr1 = ["2", "+", "3", "%"];
    const tokenArr2 = ["(", "2", "+", "3", ")", "%"];
    expect(shuntingParser(tokenArr1)).toEqual(["2", "3", "%", "+"]);
    expect(shuntingParser(tokenArr2)).toEqual(["2", "3", "+", "%"]);
  });

  test("unary", () => {
    const tokenArr1 = ["_uM", "2"];
    const tokenArr2 = ["_uM", "(", "2", "+", "3", ")"];
    const tokenArr3 = ["_uM", "√", "4"];
    const tokenArr4 = ["4", "-", "_uM", "2"];
    expect(shuntingParser(tokenArr1)).toEqual(["2", "_uM"]);
    expect(shuntingParser(tokenArr2)).toEqual(["2", "3", "+", "_uM"]);
    expect(shuntingParser(tokenArr3)).toEqual(["4", "√", "_uM"]);
    expect(shuntingParser(tokenArr4)).toEqual(["4", "2", "_uM", "-"]);
  });
});

test("complex", () => {
  const tokenArr1 = [
    "12",
    "+",
    "32",
    "-",
    "10",
    "%",
    "*",
    "√",
    "(",
    "_uM",
    "16",
    "/",
    "_uM",
    "4",
    ")",
  ];
  const tokenArr2 = [
    "_uM",
    "40",
    "+",
    "1.5",
    "-",
    "_uP",
    "12",
    "*",
    "(",
    "2",
    ")",
    "-",
    "√",
    "(",
    "√",
    "16",
    ")",
  ];
  expect(shuntingParser(tokenArr1)).toEqual([
    "12",
    "32",
    "+",
    "10",
    "%",
    "16",
    "_uM",
    "4",
    "_uM",
    "/",
    "√",
    "*",
    "-",
  ]);
  expect(shuntingParser(tokenArr2)).toEqual([
    "40",
    "_uM",
    "1.5",
    "+",
    "12",
    "_uP",
    "2",
    "*",
    "-",
    "16",
    "√",
    "√",
    "-",
  ]);
});
