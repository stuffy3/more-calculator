const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question('what would you like to calculate?', function calc(answer) {
    tokens = answer.split(' ')
    mathSymbol = String(tokens[0]);
    num1 = Number(tokens[1]);
    num2 = Number(tokens[2]);

    if(mathSymbol === '+') {
        
       console.log(num1 + num2) 
    } else if(mathSymbol === "-") {
        
        console.log(num1 - num2)
    }  else if(mathSymbol === "*") {
        
        console.log(num1 * num2)
    } else if(mathSymbol === "/") {
        
        console.log(num1 / num2)
    } else if(mathSymbol === "sqrt") {
        
        console.log(Math.sqrt(num1))
    } else if (mathSymbol === 'squre') {

        console.log(num1 * num1)
    } else if (mathSymbol === 'cube') {
    
        console.log(Math.pow(num1, 3))        
    } else if(mathSymbol === '%') {

        console.log(num1 % num2)
    } else if(mathSymbol === '^') {
        
        console.log(Math.pow(num1, num2))
    } else {
        
        console.log('Something is wrong, try again.')
    }
    
    reader.close();
});


// function calc(symbol, num1, num2) {
//     let mathSymbol = String(symbol);
//     if(mathSymbol === '+') {
        
//         return num1 + num2 
//     } else if(mathSymbol === "-") {
        
//         return num1 - num2
//     }  else if(mathSymbol === "*") {
        
//         return num1 * num2
//     } else if(mathSymbol === "/") {
        
//         return num1 / num2
//     } else if(mathSymbol === "sqrt") {
        
//         return Math.sqrt(num1)
//     } else if (mathSymbol === 'squre' || 'sq' || 's') {
        
//         return Math.pow(num1, num2)
//     } else if(mathSymbol === '%') {

//         return num1 % num2
//     }
// }


// let calcResults = calc('*', 10, 23);
// console.log(calcResults)
