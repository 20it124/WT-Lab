function StringLenght(){
    let str = new String("dhruvil");
    str = prompt("Enter your Full Name :");
    let strele = document.getElementById("getString");
    strele.textContent = str.length;
}
function Roundof(){
    document.getElementById("getPI").textContent = Math.PI;
    document.getElementById("Roundof").textContent = Math.round(Math.PI);
}
function getDate(){
    document.getElementById("Age").textContent = new Date();
}
function randNumber(){
    document.getElementById("Random").textContent = new Number(Math.random()*100);
}
function Cars(){
    let str = new String();
    let ans= [];
    for(let i=0; i<3; i++){
        str = prompt("Enter car's name");
        ans.push(str);
    }
    document.getElementById("Cars").textContent = ans;
}