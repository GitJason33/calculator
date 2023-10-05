import { calculator } from "./index.js";


// const EQUATION = "(1+(1-5+4)x7)^2x(2/4+(4+5x2)^2)^2"; // = 38612.25
const EQUATION = "(3+3)!x(2+2)^2"; // = 11520
// const EQUATION = "(2+(3/3x(3+(4-(1)))))^2"; // = 64
// const EQUATION = "1+1x3-3!^2"; // = -32
// const EQUATION = "1!+2!+3!+4!+5!"; // 152
// const EQUATION = '-1-(-1)'; // = 0
// const EQUATION = '((()))(())'; // = 0


console.log(calculator(EQUATION));
