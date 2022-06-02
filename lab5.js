"use strict";
/* Q1*/
function Max(x,y){
    
    if(x<y)
    {
        return y;
    }
    else return x;
}
/* Q2*/
function maxOfThree(x,y,z){
var max=0;
    if(x<y)
    {
        max = y;
    }
    else max = x;
    if(max<z)
    {
        return z;
    }
    else return max;

} 

/* Q3*/
function isVowel(letter) {
    if (letter == 'a' || letter == 'e' ||  letter == 'u' || letter == 'i'|| letter == 'o')
    {
        return true;
    }
    else return false;
}

/* Q4*/
function sum(t) {
    let sum = 0;
    for (let i = 0; i < t.length; i++) {
        sum += t[i];
    }
    return sum;
}

function multiply(t) {
    let mul = 1;
    for (let i = 0; i < t.length; i++) {
        mul *= t[i];
    }
    return mul;
}

/* Q5*/
function reverse(ch) {
    let reverse="";
    for (let i = ch.length-1; i >=0; i--) {
        reverse += ch[i];
    }
    return reverse;
}

/* Q6*/
function findLongestWord(t){
    let maxLength = 0;
    for (let i = 0; i < t.length; i++) {
        if (maxLength < t[i].length) {
            maxLength = t[i].length;
        }
    }
    return maxLength;
} 

/* Q7*/
function filterLongestWord(t,i){
    return t.filter(ch => ch.length > i);
} 

/* Q8*/
function computeSumOfSquares(numbers){
    return numbers.reduce((x1, x2) => x1 + Math.pow(x2, 2));
}

/* Q9*/
function printOddNumbersOnly(numbers){
    return numbers.filter(x => x % 2 !==0);
}

/* Q10*/
function computeSumOfSquaresOfEvensOnly(numbers){
    return numbers.filter(x => x % 2 ===0)
    .reduce((x1, x2) => x1 + Math.pow(x2, 2));
}

/* Q11*/
function sumV2(numbers) {
    return numbers.reduce((x, y) => x + y);
}

function multiplyV2(numbers) {
    return numbers.reduce((x, y) => x * y);
}

/* Q12*/

    function findSecondBiggest(numbers) {
        let first = Number.MIN_VALUE, two = Number.MIN_VALUE;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > first) {
                two = first;
                first = numbers[i];
            } 
            else if (numbers[i] !== first && numbers[i] > two) {
                two = numbers[i];
            }
        }
    
        return two;
    }
/* Q13*/

function printFibo(n, a, b) {
    let x = a, y = b, count = n, temp;
    let fiboArr = [];
    while (count > 0) {
        temp = x;
        x = x + y;
        y = temp;
        fiboArr.push(y);
        count--;
    }
    console.log(fiboArr)
}

function main() {
    console.log("1. max(-1,5) the expected value is 5, the result is :" + Max(-1,5));
    console.log("2. maxOfThree(-1,50,5) the expected value is 50, the result is :"+ maxOfThree(-1,50,5));
    console.log("3. isVowel('i')); the expected value is True, the result is :"+  isVowel('i'));
    console.log("4. sum([1,2,3,4,5]) the expected value is 15, the result is :"+ sum([1,2,3,4,5]));
    console.log("4. multiply([1,2,3,4,5]) the expected value is 120, the result is :"+ multiply([1,2,3,4,5]));
    console.log("5. reverse('adam') the expected value is 'mada', the result is :"+ reverse('adam') );
    console.log("6. filterLongWords([Cherif, Adam, Helmi, Maher, Oussama]), the result is  [Cherif, Helmi, Maher, Oussama]:"+filterLongestWord(["Cherif", "Adam", "Helmi", "Maher", "Oussama"]));
    console.log("6. findLongWords([Cherif, Adam, Helmi, Maher, Oussama]) the expected value is 7, the result is :"+findLongestWord(["Cherif", "Adam", "Helmi", "Maher", "Oussama"], 4));
    console.log("8. computeSumOfSquares([1, 5, 6]) the expected value is 62, the result is :"+ computeSumOfSquares([1, 5, 6]));
    console.log("9. printOddNumbersOnly([10, 9, 23, 11]) the expected value is [ 9, 23, 11] the result is :"+ printOddNumbersOnly([10, 9, 23, 11]));
    console.log("10. computeSumOfSquaresOfEvensOnly([3,4,6,7,8,9]) the expected value is 104, the result is :"+ computeSumOfSquaresOfEvensOnly([3,4,6,7,8,9]));
    console.log("11.a. sum([1,2,3,4,5]) the expected value is 15, the result is :"+ sumV2([1,2,3,4,5]));
    console.log("11.b. multiply([1,2,3,4,5]) the expected value is 120, the result is :"+ multiplyV2([1,2,3,4,5]));
    console.log("12. findSecondBiggest([109, 5, 211, 50, 64]) the expected value is 109, the result is :"+ findSecondBiggest([109, 5, 211, 50, 64]));
    console.log("13."); printFibo(10,0,1);
    


   

}










/*15*/
function ticking() {
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
    document.getElementById("month").innerHTML = date.getMonth() + 1;
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("hour").innerHTML = date.getHours();
    document.getElementById("minute").innerHTML = date.getMinutes();
    document.getElementById("seconds").innerHTML = date.getSeconds();
}
function Clock() {
    setInterval(ticking, 1000);
}
Clock()
main();