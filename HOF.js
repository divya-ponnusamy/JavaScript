function greet(name){
    return "Hello"+name
}
function callGreet(callback){
    const name="Divya";
    console.log(callback(name))
}

callGreet(greet)

function sayHi(name){
    return "hi,"+name
}

function processUser(callback){
    let name="Lithuran";
    console.log(callback(name))

}
processUser(sayHi)

//map
let scores=[50,70,85,90];
let scoresStrings=scores.map(fun=>fun+" Points");
console.log(scoresStrings)

let names=["Divya","Suren","Lithuran"];
let titlename=names.map(out=>{
    if(out==="Divya"){
        return "Ms."+out
    }
    else if(out==="Suren"){
        return "Mr."+out
    }
    else if(out==="Lithuran"){
        return "Master"+out
    }
    else {
        return out
    }
});
console.log(titlename)

//fliter
let mark=[45,80,30,95,60,22];
let result=mark.filter(outout=>outout>=50);
console.log(result)

let products=[{name:"Pen",price:10},
    {name:"Book",price:100},
    {name:"Bag",price:250},
    {name:"Pencil",price:5},
    {name:"Laptop",price:50000}
]
let results=products.filter(item=>item.price>=100)
.map(item=>item.name+"-"+item.price)
console.log(results)

let students=[{name:"Divya",mark:48},
    {name:"Suren",mark:75},
    {name:"Lithuan",mark:95},
    {name:"Mohana",mark:30},
    {name:"Ponnusamy",mark:66}
];
let result=students.filter(pass=>pass.mark>=50)
.map(pass=>pass.name+" Passed with "+pass.mark+" marks")
console.log(result)

let products=[{name:"Mouse",price:200},
    {name:"Keyboard",price:400},
    {name:"Laptop",price:800},
    {name:"Monitor",price:1200},
    {name:"Pen Drive",price:300},
]
let result=products.filter(item=>item.price>=500)
.map(item=>item.name +" costs "+item.price);
console.log(result)

//reduce
let number=[3,6,9,12,15]
let result=number.reduce((acc,curr)=>{
    return curr%2===0?acc+curr:acc;
},0)
console.log(result)