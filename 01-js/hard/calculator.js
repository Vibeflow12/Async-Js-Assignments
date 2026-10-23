/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation✅

    - add: takes a number and adds it to the result ✅
    - subtract: takes a number and subtracts it from the result ✅
    - multiply: takes a number and multiply it to the result ✅
    - divide: takes a number and divide it to the result ✅

    - clear: makes the `result` variable to 0 ✅

    - getResult: returns the value of `result` variable ✅

    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7` ✅

      Points to Note:
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly ✅
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

  constructor() {
    this.result = 0
  }

  add(n) {
    this.result = this.result +n
    return this.result;
  }

  subtract(n) {
    this.result = this.result - n;
    return this.result ;
  }

  multiply(n) {
    this.result= this.result * n;
    return this.result
  }

  divide(n) {
    if (n === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result= this.result / n;
    return this.result
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result
  }

  calculate(expression) {
    if (typeof expression !== "string" || expression.trim() === "")
    {
      throw new Error("Invalid expression");
    }
    const input = expression.replace(/\s+/g, "");
    if (!/^[\d+\-*/().]+$/.test(input)) {
      throw new Error("Invalid characters in expression");
    }
    let index = 0;
    function parseExpression() {
      let value = parseTerm();
      while (index < input.length) {
        const operator = input[index];
        if (operator !== "+" && operator !== "-") {
          break;
        }
        index++;
        const nextValue = parseTerm();
        if (operator === "+") {
          value += nextValue;
        } else {
          value -= nextValue;
        }
      } return value;
    }
    function parseTerm() {
      let value = parseFactor();
      while (index < input.length) {
        const operator = input[index];
        if (operator !== "*" && operator !== "/") {
          break;
        }
        index++;
        const nextValue = parseFactor();
        if (operator === "*") {
          value *= nextValue;
        } else {
          if (nextValue === 0) {
            throw new Error("Cannot divide by zero");
          }
          value /= nextValue;
        }
      } return value;
    }
    function parseFactor() {
      if (input[index] === "+") {
        index++; return parseFactor();
      }
      if (input[index] === "-") {
        index++; return -parseFactor();
      }
      if (input[index] === "(") {
        index++;
        const value = parseExpression();
        if (input[index] !== ")") {
          throw new Error("Mismatched parentheses");
        } index++;
        return value;
      }
      const start = index;
      while (index < input.length && /[\d.]/.test(input[index])) {
        index++;
      }
      if (start === index) {
        throw new Error("Invalid expression");
      }
      const value = Number(input.slice(start, index));
      if (!Number.isFinite(value)) {
        throw new Error("Invalid number");
      }
      return value;
    }
    const value = parseExpression();
    if (index !== input.length || !Number.isFinite(value))
    {
      throw new Error("Invalid expression");
    }
    this.result = value;
    return this.result;
  }
}

module.exports = Calculator;
