import { calcPrecedence } from "./calculations.js";
import { hasAbnormalGrouping, hasWrongGroupCount } from "./evalErrors.js";

const OPERATORS = ['+', '-', '/', '*', '^', '!'];
const SIGNS = ['+', '-'];



export function calculator(equ) {
  if (!equ) return 0;

  let btrEqu = replaceSpecialChars(equ);

  if (btrEqu.includes('(')) {
    if (hasWrongGroupCount(equ) || hasAbnormalGrouping(equ))
      return 'Syntax Error';

    var groupedEqu = evalGroups(btrEqu);
    if(!groupedEqu) return 0;
  }

  let finalResult = evalExpression(groupedEqu ?? btrEqu);
  if(isNaN(finalResult) || !finalResult)
    return "Syntax Error";

  return finalResult;
}



function seperateEquation(equ) {
  // goal: make array of operands and operators with signs supported
  const operands = [];
  const operators = [];
  

  let i = 0, j = 0; // j for operand switching
  if (SIGNS.includes(equ[0])) {
    operands[0] = equ[0];
    i++;
  }

  const len = equ.length;
  for (; i < len; i++) {
    if (!OPERATORS.includes(equ[i])) {
      if(operands[j] === undefined)
        operands[j] = "";

      operands[j] += equ[i];
    } else {
      if(equ[i] !== '!') j++;
      operators.push(equ[i]);

      if (SIGNS.includes(equ[i + 1]) && equ[i] !== "!") {
        if(operands[j] === undefined)
          operands[j] = "";

        operands[j] += equ[i + 1];
        i++;
      }
    }
  }
  
  return { operands, operators };
}



function evalExpression(equ) {
  let seperatedEqu = seperateEquation(equ);
  let { operators } = seperatedEqu;
  // consider calc precedence:
  // 1) FACT !
  // 2) POW ^
  // 3) MUL * and DIV /
  // 4) ADD + and SUB -

  if (operators.includes('!')) 
    calcPrecedence(seperatedEqu, ['!']);

  if (operators.includes('^')) 
    calcPrecedence(seperatedEqu, ['^']);

  if (operators.includes('/') || operators.includes('*'))
    calcPrecedence(seperatedEqu, ['*', '/']);

  if (operators.includes('+') || operators.includes('-'))
    calcPrecedence(seperatedEqu, ['+', '-']);

  return seperatedEqu['operands'][0];
}

// grouped by paranthesis
function evalGroups(equ) {
  // complex version
  const firstSpot = equ.indexOf('(');
  const lastSpot = equ.lastIndexOf(')');

  const startSpots = [];
  const endSpots = [];
  const groupList = [];
  let openingBracket = 0;

  for (let i = firstSpot, j = 0; i <= lastSpot; i++) {
    if (equ[i] === '(') {
      openingBracket++;

      if (openingBracket < 2) startSpots.push(i);
    } else if (equ[i] === ')') {
      openingBracket--;

      if (openingBracket < 1)
        // not 2
        endSpots.push(i);

      if (openingBracket === 0) {
        groupList.push(equ.slice(startSpots[j] + 1, i));
        j++;
      }
    }
  }


  let len = startSpots.length;
  let equArray = equ.split('');

  for (let i = len - 1; i >= 0; i--) {
    if (groupList[i].includes('(')) groupList[i] = evalGroups(groupList[i]);

    let res = evalExpression(groupList[i]);
    let charCount = endSpots[i] - startSpots[i] + 1;

    equArray.splice(startSpots[i], charCount, res);
  }

  equ = equArray.join('');
  return equ;
}



function replaceSpecialChars(equ) {
  equ = equ.replace(/\s/g, '');

  if (equ.includes('x')) equ = equ.replace(/x/g, '*');
  if (equ.includes('÷')) equ = equ.replace(/÷/g, '/');
  if (equ.includes('%')) equ = equ.replace(/%/g, '/100');

  return equ;
}
