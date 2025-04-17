let number1 = parseFloat(prompt("Enter the first number"));
let operator = prompt("Enter the operator(+,-,/,*)");
let number2 = parseFloat(prompt("Enter the second number"));

if (operator== "-"){
    alert(number1-number2);
}
else if(operator== "+"){
    alert(number1+number2);
}
else if(operator=="/"){
    alert(number1/number2);
}
else if(operator=="*"){
    alert(number1*number2);
}
else{
    alert(Null);
}