export const sqrtEval = (number: number) => {
  let temp = 0;
  let x = number / 2;

  if (number < 0) throw new Error("Negative number in Square Root")

  while (x !== temp) {
    temp = x;
    x = (temp + number / temp) / 2;
  }

  return x;
};
