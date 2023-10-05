export function hasWrongGroupCount(equ) {
  let openingCt = equ.match(/\(/g)?.length ?? 0;
  let closingCt = equ.match(/\)/g)?.length ?? 0;

  if (openingCt !== closingCt) return true;

  return false;
}

export function hasAbnormalGrouping(equ) {
  let openingBracket = 0;

  for (let i = 0; i < equ.length; i++) {
    if (equ[i] === '(') openingBracket++;
    else if (equ[i] === ')') openingBracket--;

    if (openingBracket < 0) return true;
  }
  return false;
}