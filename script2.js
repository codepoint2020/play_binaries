let btnGenerate = document.querySelector("#btnGenerate");
let scoreInput = document.querySelector("#scoreInput");
let calcMonitor = document.querySelector("#calcMonitor");
let tempTotal = document.querySelector("#tempTotal");
let result = document.querySelector("#result");
let hps = document.querySelector("#hps");


let score = 0;
let hs = 0;
let binaries = [];
let total = 0;
let temp_total = 0;
let iterate = 0;
let myTimer;

btnGenerate.addEventListener("click", () => {
    
    score = scoreInput.value;
    hs = hps.value;
    btnGenerate.disabled = true;
    myTimer = setInterval(function() {
        let num = Math.random() > 0.5 ? 0 : 1;
        binaries.push(num);
        iterate++;
        
        if (iterate == hs) {

             binaries.forEach(binary => {
                temp_total += binary;  
                console.log("Previous TEmp Total: " + temp_total);   
            });

            if (temp_total < score) {
                for (let i = 0; i < binaries.length; i++) {
                    if (binaries[i] == 0) {
                        binaries[i] = 1;
                        temp_total++;
                        if (temp_total == score) {
                            clearInterval(myTimer);
                            break;
                        }
                    } else {
                        temp_total++;
                    }
                }
            } else {
                clearInterval(myTimer);
            }
            
            // binaries.forEach(binary => {
            //     temp_total += binary;  
            //     console.log("Previous TEmp Total: " + temp_total);   
            // });
    
            // if (temp_total != score) {
            //     console.log("Re calculating");
            //     iterate = 0;
            //     temp_total = 0;
            //     binaries = [];
            //     result.textContent = "";
            // } else {
            //     btnGenerate.disabled = false;
            //     clearInterval(myTimer);
            // }
            
        }
    
        calcMonitor.textContent = iterate;
        tempTotal.textContent = temp_total;
        result.textContent = binaries.toString();


      


    
    }, 1000);

})







