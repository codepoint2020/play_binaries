let btnGenerate = document.querySelector("#btnGenerate");
let scoreInput = document.querySelector("#scoreInput");
let calcMonitor = document.querySelector("#calcMonitor");
let tempTotal = document.querySelector("#tempTotal");
let result = document.querySelector("#result");
let hps = document.querySelector("#hps");

let score = 0;
let hs = 0;
let binaries = [];
let temp_total = 0;
let iterate = 0;
let myTimer;


btnGenerate.addEventListener("click", () => {
    score = scoreInput.value;
    hs = hps.value;
    btnGenerate.disabled = true;
  
    while (binaries.length < hs) {
      let num = Math.random() > 0.5 ? 0 : 1;
      binaries.push(num);
      iterate++;
      temp_total += num;
      calcMonitor.textContent = iterate;
      tempTotal.textContent = temp_total;
      result.textContent = binaries.toString();
      
      if (binaries.length == hs && temp_total == score) {
        btnGenerate.disabled = false;
      } else if (binaries.length == hs && temp_total != score) {
        console.log("Re calculating");
        iterate = 0;
        temp_total = 0;
        binaries = [];
        result.textContent = "";
      }
    }
  });
  