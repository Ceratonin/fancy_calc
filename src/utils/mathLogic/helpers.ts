export const isNumber = (token: string) => {
  if (/[0-9]/.test(token)) return token;
};

export const isOperator = (token: string) => {
  if (/[-+*/]/.test(token)) return token;
};

export const isUnary = (token: string) => {
  if (/_uP|_uM/.test(token)) return token;
};

export const isPercentage = (token: string) => {
  if (token === "%") return token;
};

export const isSqrt = (token: string) => {
  if (token === "√") return token;
};

export const isAcceptedToken = (token: string) => {
  if (
    isNumber(token) ||
    isOperator(token) ||
    isUnary(token) ||
    isPercentage(token) ||
    isSqrt(token) ||
    token === "(" ||
    token === ")"
  )
    return token;
};
