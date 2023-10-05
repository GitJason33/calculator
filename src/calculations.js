// precArray contains the operators to prioritize first
export function calcPrecedence({ operands, operators }, precArray) {
  let i = 0;

  while (i < operators.length) {
    if (precArray.includes(operators[i])) {
      let res = calc(operands[i], operators[i], operands[i + 1]);

      // replace operands with result
      operands.splice(i, operators[i] === '!' ? 1 : 2, res);
      operators.splice(i, 1);
    } 
    else 
      i++;
  }
}


// op2 won't be used when dealing with factorial
function calc(op1, oper, op2) {
  switch (oper) {
    case '+':
      return parseFloat(op1) + parseFloat(op2);

    case '-':
      return parseFloat(op1) - parseFloat(op2);

    case '*':
      return parseFloat(op1) * parseFloat(op2);

    case '/':
      return parseFloat(op1) / parseFloat(op2);

    case '^':
      return parseFloat(op1) ** parseFloat(op2);
      0;
    case '!':
      return factorial(op1);

    default:
      return 0;
  }
}



function factorial(num) {
  let tempNum = Math.abs(num);

  if (num !== parseInt(num)) tempNum = parseInt(tempNum);

  let res = 1;
  for (let i = 2; i <= num; i++) res *= i;

  return num < 0 ? -res : res;
}
