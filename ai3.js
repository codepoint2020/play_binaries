let arr = [1, 1, 0, 1, 0];
let desiredTotal = 4;
let tempTotal = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr[i] = 1;
        tempTotal++;
        if (tempTotal === desiredTotal) {
            break;
        }
    } else {
        tempTotal++;
    }
}

console.log(arr); // output: [1, 1, 1, 1, 0]
