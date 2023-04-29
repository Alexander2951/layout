
const arrNum = Array.from ({length:11},(_,i) => i++ );
for (let count = 0; count <arrNum.length; count++) {
    if (arrNum[count] === 0) {console.log(`${arrNum[count]} - это ноль`)};
    if (arrNum[count] % 2 != 0) {console.log (`${arrNum[count]} - это нечетное число`)};
    if (arrNum[count] % 2 == 0 && arrNum[count]!= 0) {console.log (`${arrNum[count]} - это четное число`)};
   
}

