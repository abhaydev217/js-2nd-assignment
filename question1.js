var readlineSync = require('readline-sync');
let numb=parseInt(readlineSync.question("WRITE YOUR NUMBER:"));
let limit=parseInt(readlineSync.question("HOW MANY MULTIPLICATION NEEDED:"));

console.log('MULTIPLICATION TABLE OF',numb,'is');

for (let i = 1;i<=limit;i++) {
    console.log(i,'x',numb,'=',i*numb);
    }