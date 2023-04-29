
/*Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
const myArr = Array.from ({length:7},(n,i) => n = i+1 );
myArr.splice(3,2);
console.log (myArr);
