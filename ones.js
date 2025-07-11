// 1.Even and Positive Write a program to check if a number is both even and positive.
let num=prompt("Enter the number:");
if(num%2==0 && num>0){
    console.log(`${num} is Positive and Even`)
}
else{
    console.log(`${num} is not odd`)
}

//2..Check Month Name Given a number (1–12), print the corresponding month name, else print “Invalid month.”
let month=prompt("Enter the month:");
if(month==1) console.log("Jan");
else if(month==2) console.log("Feb");
else if(month==3) console.log("Mar");
else if(month==4) console.log("Apr");
else if(month==5) console.log("May");
else if(month==6) console.log("june");
else if(month==7) console.log("July");
else if(month==8) console.log("Aug");
else if(month==9) console.log("Sep");
else if(month==10) console.log("Oct");
else if(month==11) console.log("Nov");
else if(month==12) console.log("Dec");
else console.log("Invalid month");

//Temperature Message
let temp=prompt("Enter the Temperature:");
if(temp==30) console.log("Hot");
else if(temp>20 && temp<30) console.log("Warm");
else if(temp>10 && temp<19) console.log("Cool");
else console.log("Cold");

//4.Check Login Attempt If user enters correct username and password → “Login successful”, else → “Login failed”.
let names=prompt("Enter the Name:");
let password=Number(prompt("Enter the Number:"));
if(names=="Divya" && password==12345) console.log("Login successfully");
else console.log("Login failed")

5.Check if a Person Can Vote and Drive
let age=Number(prompt("Enter the age:"))
if(age>=18) console.log("Can vote");
else if(age>21) console.log("Can vote and drive");
else console.log("Too young")

6.Write a program that prints:
let num=parseInt(prompt("Enter the number:"));
if(num%3==0 && num%5==0) console.log("FizzBuzz")
else if(num%3==0) console.log("Fizz");
else if(num%5==0) console.log("Buzz");
else console.log("not divisible  3 & 5")

//1.Grade Description Given a grade letter (A, B, C, D, F), use switch to print:
let grade=prompt("Enter the Grade:")
switch(grade){
    case 'A':console.log("Excellent");
    break;
    case 'B':console.log("Good");
    break;
    case 'C':console.log("Average");
    break;
    case 'D':console.log("Poor");
    break;
    case 'F':console.log("Fail");
    break;
    default:console.log("invalid grade.")
}
//2.Month Name and Days Given a number (1–12), use switch to print the month name and how many days it has (assume February always has 28 days).
let mon=parseInt(prompt("Enter the Month:"));
switch(mon){
    case 1:console.log("Jan has 31 days");
    break;
    case 2:console.log("Feb has 28 days");
    break;
    case 3:console.log("Mar has 31 days");
    break;
    case 4:console.log("Apr has 30 days");
    break;
    case 5:console.log("May has 31 days");
    break;
    case 6:console.log("jun has 30 days");
    break;
    case 7:console.log("July has 31 days");
    break;
    case 8:console.log("Aug has 31 days");
    break;
    case 9:console.log("sep has 30 days");
    break;
    case 10:console.log("oct has 31 days");
    break;
    case 11:console.log("nov has 30 days");
    break;
    case 12:console.log("Dec has 31 days");
    break;
    default:console.log("Invalid month")
}
//3. Traffic Light Write a program that takes the color of a traffic light (red, yellow, green) and prints what the driver should do:
let color=prompt("Enter the color:");
switch(color){
    case "red":console.log("Stop");
    break;
    case "yellow":console.log("Wait");
    break;
    case "green":console.log("Go");
    break;
    default:console.log("Invalid Input")
}
