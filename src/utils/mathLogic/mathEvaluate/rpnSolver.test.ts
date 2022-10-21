import { rpnSolver } from "./rpnSolver";

describe("simple expressions", () => {
  test("operators", () => {
    const rpn1 = ["1", "2", "+", "3", "-"];
    const rpn2 = ["12", "2", "3", "*", "-"];
    const rpn3 = ["3", "4", "2", "*", "1", "5", "-", "/", "+"];
    const rpn4 = ["43.8", "12.2", "*"];
    const rpn5 = ["10", "0", "/"];
    expect(rpnSolver(rpn1)).toBe("0");
    expect(rpnSolver(rpn2)).toBe("6");
    expect(rpnSolver(rpn3)).toBe("1");
    expect(rpnSolver(rpn4)).toBe("534,36");
    expect(rpnSolver(rpn5)).toBe("Infinity");
  });
  test("sqrt", () => {
    const rpn1 = ["64", "√"];
    const rpn2 = ["16", "√", "_uM"];
    const rpn3 = ["12", "6", "-", "√"];
    expect(rpnSolver(rpn1)).toBe("8");
    expect(rpnSolver(rpn2)).toBe("-4");
    expect(rpnSolver(rpn3)).toBe("2,44949");
  });
  test("percentage", () => {
    const rpn1 = ["50", "%"];
    const rpn2 = ["50", "10", "%", "-"];
    const rpn3 = ["50", "10", "%", "+"];
    const rpn4 = ["50", "10", "%", "*"];
    const rpn5 = ["60", "10", "-", "10", "%", "-"];
    expect(rpnSolver(rpn1)).toBe("0,5");
    expect(rpnSolver(rpn2)).toBe("45");
    expect(rpnSolver(rpn3)).toBe("55");
    expect(rpnSolver(rpn4)).toBe("5");
    expect(rpnSolver(rpn5)).toBe("45");
  });
});

test("complex expressions", () => {
  const rpn1 = [
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
  ];
  const rpn2 = [
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
  ];
  expect(rpnSolver(rpn1)).toBe("43,8");
  expect(rpnSolver(rpn2)).toBe("-64,5");
});
