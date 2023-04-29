/*Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

const myRndArr = Array.from ({length:5},(k,i) => k = Math.round((Math.random()*9)) );
sum =  myRndArr.reduce ((acc, num) => acc + num);
let minimum =  Math.min.apply(null, myRndArr);
let three = myRndArr.indexOf(3);


console.log (`Цифры: ${myRndArr} 
Сумма: ${sum}
Минимум ${minimum}
${(three == -1)? 'троек нет':`трояк на ${three +1} месте`}`);