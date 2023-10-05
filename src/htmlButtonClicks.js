import { copyResult, AC, DEL, getResult, ans, appendChar } from "./functions.js";



export default function initEvents(e){
  $("#copy").on('click', copyResult);
  $("#del").on('click', DEL);
  $("#ac").on('click', AC);
  $("#equ").on("click", getResult);
  $('#ans').on("click", ans);

  // button IDs with their corresponding symbols
  const SPECIALS = {
    openGrp: "(", 
    closeGrp: ")", 
    fact: "!", 
    pow: "^", 
    mul: "x", 
    div: "÷", 
    add: "+", 
    sub: "-",
    per: "%",
    dec: "."
  };

  for(const id in SPECIALS) 
    $(`#${id}`).on("click", () => appendChar(SPECIALS[id]));
  
  for(let i = 0; i < 10; i++)
    $(`#${i}`).on("click", () => appendChar(i));

  
  // for keyboard clicks
  $(window).on("keyup", evalKeyboardClicks)
}


const evalKeyboardClicks = (e) => {
  const allowedKeys = [
    '1','2','3','4','5','6','7','8','9','0',
    '.','+','-','x','/','!','^','%','(',')',
    'a', 
    "Enter", 
    "Delete",
    'Backspace', 
  ];

  if(allowedKeys.includes(e.key)){
    switch(e.key){
      case "Backspace": 
        return DEL();
        
      case "Delete":
        return AC();

      case "/":
        return appendChar("÷");

      case "a":
        return ans();

      case "=": case "Enter":
        return getResult();

      default: 
        appendChar(e.key);
    }
  }
}
