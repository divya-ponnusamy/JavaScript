// if statement

let age=prompt("Enter your age");
if(age>=17){
    console.log("vote is elegiable")
}

let tem=37;
if(tem>36){
    console.log("Heat warning")
}

let num=18;
if(num%2==0){
    console.log("This is even number")
}

let num=7;
if(num>0){
    console.log("This is positive number")
}

let word="divya";
if(word.length>4){
    console.log("Long string")
}

//if..else

let number=Number(prompt("Enter the number:"));
if(number%2==0){
    alert("This is even number")
}
else{
    console.log("This is odd number")
}

let mark=Number(prompt("Enter mark:"));
if(mark>=40){
    console.log("Pass");
}
else{
    console.log("Fail")
}

let age=Number(prompt("Enter age:"));
if(age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}

let temp=Number(prompt("Enter tem:"));
if(temp>30){
    console.log("Hot")
}
else{
    console.log("Normal")
}

let string=prompt("Enter string:");
if(string.length>5){
    console.log("Long string")
}
else{
    console.log("Short string")
}

//else if

let mark=89;
if(mark>=90){
    console.log("Grade A")
}
else if(mark>=75){
    console.log("Grade B");
}
else if(mark>=60){
    console.log("Grade C");
}
else{
    console.log("Fail")
}

let number=-9;
if(number>0){
    console.log("Positive")
}
else if(number<0){
    console.log("Negative")
}
else{
    console.log("Equal to zero")
}

let age=18;
if(age<13){
    console.log("Child")
}
else if(age>13 && age<19){
    console.log("Teenager")
}
else{
    console.log("Adult")
}

let temm=34;
if(temm>35){
    console.log("Very hot")
}
else if(temm>25 && temm<35){
    console.log("Warm")
}
else if(temm>15 && temm<24){
    console.log("Cool")
}
else{
    console.log("Cold")
}


let string=prompt("Enter the string:");
if(string.length<5){
    console.log("Short")
}
else if(string.length>5 && string.length<10){
    console.log("Medium")
}
else{
    console.log("Long")
}

//switch
let day=Number(prompt("Enter day:"))
switch (day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Other day")


    }
        
let operator=prompt("Enter operator(+,-,*,/)");
let num1=Number(prompt("Enter the first number:"));
let num2=Number(prompt("Enter the second number:"));
switch (operator){
    case "+":
        console.log("Result:",num1+num2);
        break;
    case "-":
        console.log("Result:",num1-num2);
        break;
    case "*":
        console.log("Result:",num1*num2);
        break;
    case "/":
        console.log("Result:",num1/num2);
        break;
    default:
        console.log("Enter wrong operator")
        break;
}

let light=prompt("Enter Light color:");
switch(light){
    case "red":
        alert("Stop");
        break;
    case "yellow":
        alert("Get ready")
        break;
    case "green":
        alert("Go");
    default:
        alert("wrong color enter ...")
}

let grade=prompt("Enter grade:");
switch(grade){
    case 'A':
        alert("Excellent");
        break;
    case 'B':
        alert("Good");
        break;
    case 'C':
        alert("Average");
        break;
    case 'D':
        alert("Below average");
        break;
    case 'F':
        alert("Fail");
        break;
    default:
        alert("invalid grade...")
}

let month=Number(prompt("Enter the month:"));
switch (month){
    case 12:
    case 1:
    case 2:
        console.log("winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autum")
    default:
        console.log("Enter wrong month")

}