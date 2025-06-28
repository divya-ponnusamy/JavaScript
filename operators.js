//Arithmetic operator
let x=10;
let y=5;
console.log("Addtional:",x+y);
console.log("subtraction:",x-y);
console.log("multiplication",x*y);
console.log("divition:",x/y);
console.log("modules:",x%y);

//comparsion operator
let ax=10;
let b=5;
console.log("loose check:",ax=="10");
console.log("strick check:",ax=="10");
console.log("not equal to",ax!=b);
console.log("less than:",ax<b);
console.log("grater than:",ax>b);
console.log("grater than or equal to:",ax>=b);
console.log("less than or equal :",ax<=b);

//assignment

let count=20;
console.log("add and assign:",count+=10);
console.log("subtact and assign:",count-=5);
console.log("mutiplication and assign:",count*=2);
console.log("divition and assign:",count/=5);


let yourname="divya";
let myage=24;
let mycity="erode";
let job_status=false;
let future_goal=null;

console.log(yourname,myage,mycity,job_status,future_goal);


let nam="divya";
let agess=24;
let cities="erode";
let isworking=false;
let futures_goal=null;
console.log("hi,my name is"+nam+".");
console.log("i am "+agess+"years old and i live in",cities);
console.log("currently working:",isworking);
console.log("future goal:",futures_goal);


//operators examples
let math=90;
let science=85;
let english =88;
let history=75;
let computer=95;
let total=math+science+english+history+computer;
let average=total/5;
let percentage=(total/500)*100;

console.log("total:",total);
console.log("average:",average);
console.log("did the student mark more than 80 in science",science>=80);
console.log("is computer mark equal to 92",computer==92);
console.log("bonus point:",total+=5);
console.log("percentage",+percentage+"%")

//logical operator
let loggegin=true;
let haspermition=false;
if(loggegin && haspermition)
{
console.log("access granted")
}
else{
    console.log("permision denaied")
}


function canlogin(username,password){
    if(username=="admin"&& password=="1234"){
        console.log("Login successfully");
    }
    else{
        console.log("Login failed")
    }

    }

console.log(canlogin("admin","1234"));

function canEnterClub(age,hasvippass){
    if(age>18 || hasvippass){
        return "entry allowed"
    }
    else{
        return "entry denaied"
    }
}
console.log(canEnterClub("17",false));
console.log(canEnterClub("19",false));

function shouldAlremRing(dooropen,windowopen,isAremed){
    if(dooropen||(windowopen&&isAremed)){
        return true
    }
    else {
        return false
    }
}
console.log(shouldAlremRing(true,false,true));
console.log(shouldAlremRing(false,false,true));



function didpass(score,caughtcheating){
    if(score>=40 && caughtcheating==false ){
        return "pass"
    }
    else{
        return "fail"
    }
}
console.log(didpass(60,false));
console.log(didpass(34,true));

function canRentcar(age,haslicense,hasOutstandingfines){
    if(age>=21 && haslicense==true && hasOutstandingfines==false){
        return "car rental approved"
    }
    else{
        return "car rental denaied"
    }
}
console.log(canRentcar(25, true, false));
console.log(canRentcar(19, true, false));   
console.log(canRentcar(23, false, false));  
console.log(canRentcar(30, true, true));  

function canAccessLibrary(ismember,hasID,isBanded){
    if(ismember==true && hasID==true && isBanded==false){
        return "allowed"
    }
    else{
        return "not allowed"
    }
}
console.log(canAccessLibrary(true, true, false));  
console.log(canAccessLibrary(true, false, false)); 
console.log(canAccessLibrary(false, true, false)); 
console.log(canAccessLibrary(true, true, true));  

function canAccessContent(isLogged,issubscribed,isBannded){
    if((isLogged==true && issubscribed==true) && !isBannded){
        return "Acess granted"
    }
    else{


        return "Access denaied"
    }
}
console.log(canAccessContent(true, true, false));   
console.log(canAccessContent(true, false, false));  
console.log(canAccessContent(false, true, false));  
console.log(canAccessContent(true, true, true));    

function canBookRoom(age,hasCreatcard,isBlocklist){
    if((age>=18 && hasCreatcard==true)&& !isBlocklist){
        return "Booking Confirmed"
    }
    else{
        return "Booking Denied"
    }
}
console.log(canBookRoom(20,true,false));
console.log(canBookRoom(17,true,false));
console.log(canBookRoom(22,false,false));

//string operator
let firstname="divya";
let lastname="ponnusamy";
console.log("Fullname:",firstname+" "+lastname);

let name="Divya";
console.log("Hello "+name+"!");

let sentance="I love";
sentance +="javascript";
console.log(sentance);

let greeting="Good Morning";
console.log(greeting.replace("Morning","Evening"));

let language = "JavaScript";
console.log(language.slice(0,4));

let message="hello world";
console.log(message.toUpperCase());

let fruit="apple,mango,banana";
console.log(fruit.split(","));


let sentence = "The sky is blue";
console.log(sentence.includes("blue"));

let name_="Divya";
let hobby="coding";
console.log(`My name is ${name_} hobby is ${hobby}!`)

//Bitwise operator
console.log(5 & 3);  
console.log(5 | 3);  
console.log(5 ^ 3);  
console.log(~5);  
console.log(5 << 1);  
console.log(10 >> 2);  


//Conditional operator

let num=7;
let result=(num%2==0)?"Even":"Odd";
console.log(result);

let age=20;
let check=(age>=18)?"adult":"child";
console.log(check);

let mark=50;
let results=(mark>=50)?"Pass":"Fail";
console.log(results)

let score=75;
let grade=(score>=90)?"A":(score>=70)?"B":(score>=50)?"C":"F";
console.log(grade)

//Typeof operator

console.log(typeof 123);
console.log(typeof "Divya");
console.log(typeof true); 
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof [1, 2, 3]);
console.log(typeof {name: "A"}); 
console.log(typeof function(){});

//Spread and Rest operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

let user = { name: "Divya", age: 25 };
let newUser = { ...user, city: "Erode" };
console.log(newUser);

let nums = [10, 20, 30];
console.log(Math.max(...nums));


function add(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(add(1, 2, 3));


let [first, ...rest] = [10, 20, 30, 40];
console.log(first); 
console.log(rest);  

let { name, ...otherDetails } = { name: "Divya", age: 25, city: "Erode" };
console.log(name);         
console.log(otherDetails); 
