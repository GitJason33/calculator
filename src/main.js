import './style.css';
import initEvents from "./htmlButtonClicks.js";

document.querySelector('#app').innerHTML = `
  <div id="calculator">
    <h1 class="calc__title">CALCULATOR</h1>
    <section class="calc__input">
      <article id="equation"></article>
      <div id="equ_placeholder">equation...</div>

      <h3 id="result">result...</h3>
      </section>

      <section class="calc__buttons">
      <button id="openGrp" class="btn-operator">(</button>
      <button id="closeGrp" class="btn-operator">)</button>
      <button id="fact" class="btn-operator">!</button>
      <button id="pow" class="btn-operator">^</button>
      <button id="copy" class="btn-special">copy</button>
      
      <button id="1">1</button>
      <button id="2">2</button>
      <button id="3">3</button>

      <button id="del" class="btn-remove">DEL</button>
      <button id="ac" class="btn-remove">AC</button>

      <button id="4">4</button>
      <button id="5">5</button>
      <button id="6">6</button>

      <button id="mul" class="btn-operator">&times;</button>
      <button id="div" class="btn-operator">&divide;</button>

      <button id="7">7</button>
      <button id="8">8</button>
      <button id="9">9</button>

      <button id="add" class="btn-operator">+</button>
      <button id="sub" class="btn-operator">-</button>
      
      <button id="0">0</button>
      <button id="dec">.</button>
      <button id="per">%</button>
      <button id="ans" class="btn-special">Ans</button>
      <button id="equ" class="btn-special">=</button>
    </section>
  </div>
`;

initEvents();
