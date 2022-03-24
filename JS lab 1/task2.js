let dig = parseInt(prompt("Enter the Number:"));

console.log(typeof dig);

let num = "";

for(var i=0;i<=dig;i++){
    num += i+"<br>";
    console.log(i);
}

document.getElementById('Dhruvil').innerHTML = num;