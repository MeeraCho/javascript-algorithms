function calculator(num1, num2, operator){
    let result;
    switch(num1, num2, operator){
        case '+' :
            result = num1 + num2;
            break; 
        case '-' : 
            result = num1 - num2;
            break;
        case '*' :
            result = num1 * num2;
            break;
        case '/' :
            result = num1 / num2;
            break;
        default :
            throw new Eror('Invalid operator or number');
    }

    return result; 
}

const result = calculator(1, 2, '+');

console.log(result);