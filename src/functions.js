import { calculator } from "./index.js";


export const copyResult = () => {
  const result = $("#result").html();
  

  // Copy the text into the clipboard
  navigator.clipboard.writeText(result)
    .then( () => {
      $('#copy').html('copied!');
      setTimeout(() => $('#copy').html('copy'), 3000);
    });
}


const cacheResult = (result) => {
  sessionStorage.setItem("calculator_result", result);
}

export const DEL = () => {
  const field = $("#equation");
  const val = field.text();

  field.text(val.slice(0, val.length - 1));
}


export const AC = () => $("#equation").text("");



export const getResult = () => {
  const equation = $("#equation").text();
  const result = calculator(equation);

  $("#result").html(result);
  cacheResult(result);
}


export const appendChar = (char) => {
  const field = $("#equation"); 
  field.text(field.text() + char);
}


export const ans = () => {
  let lastResult = sessionStorage.getItem("calculator_result");
  if(!lastResult || lastResult?.toLowerCase() === "syntax error") 
    lastResult = 0;

  appendChar(lastResult);
}