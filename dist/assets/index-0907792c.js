(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function u({operands:t,operators:e},n){let o=0;for(;o<e.length;)if(n.includes(e[o])){let s=S(t[o],e[o],t[o+1]);t.splice(o,e[o]==="!"?1:2,s),e.splice(o,1)}else o++}function S(t,e,n){switch(e){case"+":return parseFloat(t)+parseFloat(n);case"-":return parseFloat(t)-parseFloat(n);case"*":return parseFloat(t)*parseFloat(n);case"/":return parseFloat(t)/parseFloat(n);case"^":return parseFloat(t)**parseFloat(n);case"!":return C(t);default:return 0}}function C(t){let e=1;for(let n=2;n<=t;n++)e*=n;return t<0?-e:e}function E(t){var o,s;let e=((o=t.match(/\(/g))==null?void 0:o.length)??0,n=((s=t.match(/\)/g))==null?void 0:s.length)??0;return e!==n}function L(t){let e=0;for(let n=0;n<t.length;n++)if(t[n]==="("?e++:t[n]===")"&&e--,e<0)return!0;return!1}const w=["+","-","/","*","^","!"],f=["+","-"];function k(t){if(!t)return 0;let e=O(t);if(e.includes("(")){if(E(t)||L(t))return"Syntax Error";var n=b(e);if(!n)return 0}let o=p(n??e);return isNaN(o)||!o?"Syntax Error":o}function F(t){const e=[],n=[];let o=0,s=0;f.includes(t[0])&&(e[0]=t[0],o++);const r=t.length;for(;o<r;o++)w.includes(t[o])?(t[o]!=="!"&&s++,n.push(t[o]),f.includes(t[o+1])&&t[o]!=="!"&&(e[s]===void 0&&(e[s]=""),e[s]+=t[o+1],o++)):(e[s]===void 0&&(e[s]=""),e[s]+=t[o]);return{operands:e,operators:n}}function p(t){let e=F(t),{operators:n}=e;return n.includes("!")&&u(e,["!"]),n.includes("^")&&u(e,["^"]),(n.includes("/")||n.includes("*"))&&u(e,["*","/"]),(n.includes("+")||n.includes("-"))&&u(e,["+","-"]),e.operands[0]}function b(t){const e=t.indexOf("("),n=t.lastIndexOf(")"),o=[],s=[],r=[];let c=0;for(let i=e,a=0;i<=n;i++)t[i]==="("?(c++,c<2&&o.push(i)):t[i]===")"&&(c--,c<1&&s.push(i),c===0&&(r.push(t.slice(o[a]+1,i)),a++));let v=o.length,d=t.split("");for(let i=v-1;i>=0;i--){r[i].includes("(")&&(r[i]=b(r[i]));let a=p(r[i]),x=s[i]-o[i]+1;d.splice(o[i],x,a)}return t=d.join(""),t}function O(t){return t=t.replace(/\s/g,""),t.includes("x")&&(t=t.replace(/x/g,"*")),t.includes("÷")&&(t=t.replace(/÷/g,"/")),t.includes("%")&&(t=t.replace(/%/g,"/100")),t}const A=()=>{const t=$("#result").html();navigator.clipboard.writeText(t).then(()=>{$("#copy").html("copied!"),setTimeout(()=>$("#copy").html("copy"),3e3)})},_=t=>{sessionStorage.setItem("calculator_result",t)},h=()=>{const t=$("#equation"),e=t.text();t.text(e.slice(0,e.length-1))},g=()=>$("#equation").text(""),y=()=>{const t=$("#equation").text(),e=k(t);$("#result").html(e),_(e)},l=t=>{const e=$("#equation");e.text(e.text()+t)},m=()=>{let t=sessionStorage.getItem("calculator_result");(!t||(t==null?void 0:t.toLowerCase())==="syntax error")&&(t=0),l(t)};function G(t){$("#copy").on("click",A),$("#del").on("click",h),$("#ac").on("click",g),$("#equ").on("click",y),$("#ans").on("click",m);const e={openGrp:"(",closeGrp:")",fact:"!",pow:"^",mul:"x",div:"÷",add:"+",sub:"-",per:"%",dec:"."};for(const n in e)$(`#${n}`).on("click",()=>l(e[n]));for(let n=0;n<10;n++)$(`#${n}`).on("click",()=>l(n));$(window).on("keyup",P)}const P=t=>{if(["1","2","3","4","5","6","7","8","9","0",".","+","-","x","/","!","^","%","(",")","a","Enter","Delete","Backspace"].includes(t.key))switch(t.key){case"Backspace":return h();case"Delete":return g();case"/":return l("÷");case"a":return m();case"=":case"Enter":return y();default:l(t.key)}};document.querySelector("#app").innerHTML=`
  <div id="calculator">
    <h1 class="calc__title">CALCULATOR</h1>
    <section class="calc__input">
      <article id="equation">111+111</article>
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
`;G();
