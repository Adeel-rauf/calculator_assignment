var prompt = require('prompt-sync')();
export{};
let num1 = parseInt(prompt("enter your first number"))
let num2 = parseInt(prompt("enter your second number"))
let operator = prompt("enter the operator (+,-,*,/): ")

    if(operator==="+"){
    console.log(`The sum of ${num1} & ${num2} is:`, num1+num2)
}
    else if(operator==="-"){
    console.log(`The difference of ${num1} & ${num2} is:`, num1-num2)
}
    else if(operator==="*"){
    console.log(`The product of ${num1} & ${num2} is:`, num1*num2)
}
    else if(operator==="/"){
    console.log(`The sum of ${num1} & ${num2} is:`, num1/num2)
}
    else{console.log("enter a valid operator")}






