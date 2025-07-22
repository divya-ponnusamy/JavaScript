
// Right-Angled 
console.log("Right-Angled ")
for(let i=1;i<=5;i++){
    console.log("*".repeat(i))
}
//Right downword-Angled
console.log("R downword-Angled")
for(let i=5;i>=1;i--){
    console.log("*".repeat(i))
}

//Left Triangled
console.log("Left Triangled")
let row=5;
for(let i=1;i<=row;i++){
    let space=" ".repeat(row-i);
    let star="*".repeat(i);
    console.log(space+star)
}
//left drownword
console.log("left drownword") 
let rows = 5;
for (let i = rows; i >= 1; i--) {
  let spaces = " ".repeat(rows - i);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

//pyramid
console.log("Pyramid ")
let rowss=5;
for(let i=1;i<=rowss;i++){
    let spa=" ".repeat(rowss-i);
    let str="*".repeat(2*i-1);
    console.log(spa+str)
}

console.log("reversed pyrmid")
let row=5;
for(let i=row;i>=1;i--){
    let space=" ".repeat(row-i);
    let star="*".repeat(2*i-1);
    console.log(space+star)
}

console.log("butterfly pattern")
let row=5;
for(let i=1;i<=row;i++){
    let star="*".repeat(i);
    let space=" ".repeat(2*(row-i));
    console.log(star+space+star)
}
for(let i=row-1;i>=1;i--){
    let star="*".repeat(i);
    let spa=" ".repeat(2*(row-i));
    console.log(star+spa+star)
}
console.log("Diamond")
let row=4;
for(let i=1;i<=row;i++){
    let space=" ".repeat(row-i);
    let star="*".repeat(2*i-1);
    console.log(space+star)
}
for(let i=row-1;i>=1;i--){
    let space=" ".repeat(row-i);
    let star="*".repeat(2*i-1);
    console.log(space+star)
}
console.log("SandGlass")
let row=4;
for(let i=row;i>=1;i--){
    let space=" ".repeat(row-i);
    let star="*".repeat(2*i-1);
    console.log(space+star)
}
for(let i=2;i<=row;i++){
    let space=" ".repeat(row-i);
    let star="*".repeat(2*i-1);
    console.log(space+star)
}
console.log("Left pascal ")
let row=4;
for(let i=1;i<=row;i++){
    console.log("*".repeat(i))
}
for (let i=row-1;i>=1;i--){
    console.log("*".repeat(i))
}
console.log("Right pascal")
let rows=4;
for(let i=1;i<=4;i++){
    let space=" ".repeat(rows-i);
    let star="*".repeat(i);
    console.log(space+star);
}
for(let i=rows-1;i>=1;i--){
    let space=" ".repeat(rows-i);
    let star="*".repeat(i);
    console.log(space+star)
}