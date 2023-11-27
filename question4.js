var readlineSync = require('readline-sync');
console.log('sum of odd numbers');

let limi=parseInt(readlineSync.question("SET YOUR LIMIT:"));

let sum=0

for(let i=0;i<=limi;i++){if (i%2!==0) {sum=sum+i
    
}}

console.log('sum of your odd numbers =',sum);