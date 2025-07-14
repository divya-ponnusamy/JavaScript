// while loop-->

//1. Sum of first N natural numbers.
//Task: Given n = 5, use a while loop to calculate the sum of the first n natural numbers.
let a=prompt("enter the value:");
let i=1;
let sum=0;
while(i<=a){
    sum=sum+i;
    i=i+1;
}
console.log("The sum of number is:",sum)

// 2.Print even numbers from 2 to 20.
// Task: Write a program that prints all even numbers between 2 and 20 (inclusive).
let i=2;
while(i<=20){
    if(i%2==0){
        console.log(i);
    }
    i=i+1
}

//3.Find factorial of a number.
//Task: Write a program to find the factorial of n = 5 using a while loop.
let num=prompt("Enter the value:");
let i=1;
let fact=1;
while(i<=num){
    fact=fact*i;
    i=i+1;
}
console.log("Fact of the number",fact)

//4.Count number of digits in a number.
// Task: Given n = 98765, use a while loop to count how many digits it has.
let n=prompt("Enter the number:")
let count=0;
while(n>0){
    n=Math.floor(a/10);
    count=count+1
}
console.log("Number of digits:",count);
let n = 98765;
let count = 0;
while (n > 0) {
    n = Math.floor(n / 10); // Remove the last digit
    count++;                // Increase the count
}
console.log("Number of digits:", count);
// 5.Print the multiplication table of 7.
// Task: Use a while loop to print the table of 7 up to 10 terms (7 × 1, 7 × 2, …, 7 × 10).
let i=1;
while(i<=10){
    console.log(i+"*"+"7"+"="+i*7);
    i=i+1
}
//6. Keep prompting the user for a number until they enter 0.
// Task: Write a while loop that keeps asking prompt("Enter a number:") until the user enters 0.
let number=prompt("Enter the number:")
while(number!==0){
    number=parseInt(prompt("Enter the number:"));
}
console.log("your loop is ended")