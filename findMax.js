// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function max(n1, n2, n3) {
    let maximum = n1;
    if (n1 < n2 ) {maximum = n2}
    
    if (maximum > n3) {return maximum}
    else {return n3};
    }

    const num1 =  +prompt ("Input number",11);
    const num2 =  +prompt ("Input number",12);
    const num3 =  +prompt ("Input number",13);
    
    alert (`Maximum ${max(num1, num2, num3)}`);