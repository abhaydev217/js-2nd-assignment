var readlineSync = require('readline-sync');

let number=[1,3,9,12,15,18,21]
 

for(let i=0;i<7;i++){
    let squre=number[i]*number[i]
    console.log('squre of number',number[i],'is =',squre);
}