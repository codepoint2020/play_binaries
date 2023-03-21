let array1 = [1,1,1];
let array2 = [3,3,3];

array1.splice(0, array1.length, ...array2);


console.log(array1);