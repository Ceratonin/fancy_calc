export const sqrtEval = (number: number) => {
  let temp = 0;
  let x = number / 2;

  while (x !== temp) {
    temp = x;
    x = (temp + number / temp) / 2;
  }

  return x;
};
