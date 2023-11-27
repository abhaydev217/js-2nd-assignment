var readlineSync = require('readline-sync');


let numbers=parseInt(readlineSync.question("Enter size of an array:"));
let array=[]
let count=0
for(let i=0;i<=numbers;i++){
    array[i]=parseInt(readlineSync.question('enter'+i+'th number'));
    if (array[i]%2==0) {count=count+1
        
    }
}
console.log('no of even numbers is:',count);


