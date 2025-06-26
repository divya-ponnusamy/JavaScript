//for loop
/*
for(let i=1;i<=5;i++){
    console.log(i)
}

for(let i=2;i<=10;i+=2){
    console.log(i)
}

for(let i=1;i<=3;i++){
    console.log("Hello Divya")
}

for(let i=5;i>=1;i--){
    console.log(i)
}

for(let i=1;i<=5;i++){
    console.log(i**2)
}

for(let i=20;i<=30;i++){
    console.log(i)
}

for(let i=1;i<=15;i++){
    if(i%2!==0){
        console.log(i)
    }
}

for(let i=1;i<=10;i++){
    console.log(`4*${i}=${i*4}`)
}

count=0
for(let i=1;i<=50;i++){
    if(i%7==0){
        count+=1
        
    }
}
console.log("Total number:",count)

let str="JAVASCRIPT";
for(let i=str.length-1;i>=0;i--){
    console.log(str[i])
}

//while loop

let i=1;
while(i<=5){
    console.log(i)
    i++;
}

let summ=0;
let i=1;
while(j<=10){
    summ=summ+i;
    i++;
}
console.log("sum of the number:",summ)
let fact=1;
let i=1;
while(i<=5){
    fact=fact*i;
    i++;
}
console.log("Fact of the number:",fact)


// number pattern
for(let i=1;i<=5;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line+=j+"";
    }
    console.log(line);
}

for(let i=1;i<=5;i++){
    let line="";
    for(let j=1;j<=i;j++){
        line+=i+"";
    }
    console.log(line)
}

for(let i=5;i>=1;i--){
    let line="";
    for(let j=i;j>=1;j--){
        line+=j+"";
    }
    console.log(line)
}

for(let i=1;i<=5;i++){
    let line="";
    for(let s=1;s<=5-i;s++){
        line+=" ";
    }
        for(let j=1;j<=i;j++){
            line+=j+" ";   
        }
    console.log(line)
}

for(let i=1;i<=5;i++){
    line="";
    for(let s=1;s<=5-i;s++){
        line+=" ";
    }
    for(let j=1;j<=i;j++){
        line+=j=" ";
    }
    for(let j=i-1;j>=1;j--){
        line+=j+" ";
    }
    console.log(line)
}

let i=1;
while(i<=5){
    let j=1;
    line="";
    while(j<=i){
        line+=" ";
        j++;
    }
    console.log(line);
    i++
}

let i=1;
while(i<=5){
    let j=1;
    line=" ";
    while(j<=i){
        line+=i+"";
        j++
    }
    console.log(line);
    i++
}
let i=5;
while(i>=1){
    j=i;
    line=" ";
    while(j>=1){
        line+=j+"";
        j--  
    }
    console.log(line)
    i--;
}

//do..while 
let i=1;
do{
    console.log(i);
    i++;
}
while(i<=5)

let i=10;
do{
    console.log(i);
    i--;
}
while(i>=1)

let i=1;
do{
    j=1;
    line=" ";
    do{
        line+=i+" ";
        j++
    }while(j<=i);
    console.log(line);
    i++
}while(i<=5);
*/