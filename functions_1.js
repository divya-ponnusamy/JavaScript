//Function declaration
function fun1(){
    console.log("Good morning!!")
}
fun1()

function multi(a,b){
    return a*b;
}
let result= multi(2,2);
console.log("Multiple of two number :",result);

function areaofcircle(radius){
    return 3.14*radius*radius;
}
let results=areaofcircle(4);
console.log("Area of circle:",results);

function canvote(age){
    if(age>=18){
        return "Eligiable";
    }
    else{
        return "Not eligiable";
    }
}
console.log(canvote(20));
console.log(canvote(4));

function maxofthree(a,b,c){
    if(a>b && a>c){
        return "A is big";
    }
    else if(b>a && b>c){
        return "B is big";
    }
    else{
        return "C is big";
    }
}
console.log(maxofthree(10,4,1));
console.log(maxofthree(1,9,6));
console.log(maxofthree(1,2,78));


function square(a){
    return a**a;
}
let ans=square(2);
console.log("Square of number:",ans);


function isOdd(num){
    return num%2==0;
}
let numbers=isOdd(7);
console.log("The number is:",numbers);

function nam(name){
    console.log("Hello"+name+"!");
}
nam("Divya");

function cube(no){
    return no*no*no;
}
let cube_result=cube(3);
console.log(cube_result);

//Function Expression
const greet=function(){
    console.log("Hello,Good Morning")
}
greet()

const adds=function(a,b){
    return a+b;
}
let res=adds(5,6);
console.log(res)

const sub=function(a,b){
    return a-b;
}
console.log(sub(10,5));

const div=function(a,b){
    return a/b;
}
console.log(div(10,2));

const squares=function(a){
    return a*a*a;
}
let squ=squares(3);
console.log("Square of number:",squ);


