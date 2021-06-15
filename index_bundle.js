(()=>{"use strict";const e=(e,t,n)=>{let r;r=n||new Array(t).fill(0).map((()=>new Array(e).fill(0)));const i=Math.abs(e-r[0].length);e<r[0].length&&(r=r.map((e=>{for(let t=0;t<i;t++)e.pop();return e}))),e>r[0].length&&(r=r.map((e=>{for(let t=0;t<i;t++)e.push(0);return e}))),t<r.length&&(r.length=t);const l=t-r.length;for(let t=0;t<l;t++)r.push(new Array(e).fill(0));return r};function t(e,t,n){const r=`<table border=10px>${t.map(((e,t)=>`<tr>${e.map(((e,n)=>1===e?`<td\n        data-x=${n}\n        data-y=${t}\n        class="cell alive"\n        style="background-color:#03120b; height:40px; width:40px;"></td>`:2===e?`<td \n                      data-x=${n}\n                      data-y=${t}\n                      class="cell shouldDie" \n                      style="background-color:#0000FF; height:40px; width:40px;">\n                  </td>`:`<td\n      data-x=${n}\n      data-y=${t}\n      class="cell dead"\n      style="background-color:#FFFFFF; height:40px; width:40px;"></td>`)).join("")}</tr>`)).join("")}</table>`;e.innerHTML=r;const i=e.querySelector("table");i&&i.addEventListener("click",(e=>{e.preventDefault();const t=e.target,r=t.getAttribute("data-x"),i=t.getAttribute("data-y");Number(r)>=1&&Number(i)>=1&&n(Number(r),Number(i))}))}function n(e,t,n){const r=e[n];if(void 0===r)return 0;const i=r[t];return void 0===i?0:i}function r(e){return e.map(((t,r)=>t.map(((t,i)=>{const l=function(e,t,r){let i=0;for(let l=e-1;l<=e+1;l++)i+=Number(n(r,l,t-1)),i+=Number(n(r,l,t+1));return i+=Number(n(r,e-1,t)),i+=Number(n(r,e+1,t)),i}(i,r,e),a=n(e,i,r);var d;return 3===(d=l)||2===d&&1===a?1:0}))))}const i=document.createElement("div");document.body.appendChild(i),function(n,i,l){let a,d=!1,o=10,u=10;l.innerHTML="<div class=\"field-wrapper\"></div><button>Start</button></div>\n  <input type='range' id='speedRangeSlider' name='speedRangeSlider' min='0' max='900' value='500' step='100'>\n  <input id='numberX' type='number' min='1' max='50' value=10 step='1'>\n  <input id='numberY' type='number' min='1' max='50' value=10 step='1'>\n  <button class='butField'>fieldSize</button>\n <br><br>\n <div>Живая клетка<div style=\"width:10px;height:10px;border:1px solid #03120b; background: #03120b\">\n</div></div>\n <div>Мертвая клетка<div style=\"width:10px;height:10px;border:1px solid #03120b; background: cornsilk\">\n</div></div>\n <div>Обреченная на смерть клетка<div style=\"width:10px;height:10px;border:1px solid #03120b; background: #0000FF\">\n</div></div>";let c=1e3;const s=l.querySelector(".field-wrapper"),b=l.querySelector("button"),p=l.querySelector("#speedRangeSlider");let m=e(10,10);const h=(e,n)=>{m[n][e]=Number(!m[n][e]),t(s,m,h)};function v(e){const t=e||"Игра остановлена";d=!1,b.innerHTML="Start",clearInterval(a),alert(t)}function g(){d=!0,b.innerHTML="Stop",a=setInterval((()=>{const e=JSON.parse(JSON.stringify(m));m=r(e);const n=r(m),i=((e,t)=>{const n=JSON.parse(JSON.stringify(e));return e.forEach(((r,i)=>r.forEach(((r,l)=>{1===e[i][l]&&0===t[i][l]&&(n[i][l]=2)})))),n})(m,n);t(s,i,h),n.toString()===e.toString()&&v("Игра зациклена"),function(e){for(let t=0;t<e.length;t++){const n=e[t];for(let e=0;e<n.length;e++)if(n[e])return!0}return!1}(m)||(alert("Все клетки погибли"),v())}),c),p.addEventListener("change",(()=>{clearInterval(a);const e=Number(p.value);c=1e3-e,g()}))}t(s,m,h);const f=l.querySelector("#numberX"),y=l.querySelector("#numberY");l.querySelector(".butField")?.addEventListener("click",(()=>{o=Number(f.value),u=Number(y.value),u>=1&&o>=1&&u<=100&&o<=100?(m=e(o,u,m),t(s,m,h)):alert("Введите число от 1 до 50")})),b.addEventListener("click",(()=>{d?v():g()}))}(0,0,i)})();