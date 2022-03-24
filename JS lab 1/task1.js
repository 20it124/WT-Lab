var num = parseInt(prompt("Enter number: "));
console.log(typeof num);

let ele = document.getElementById('js_num');

if(num%2==0){
    ele.innerHTML = num + "is Even";
    ele.style.color = 'green';
}
else{
    ele.innerHTML = num + "is Odd";
    ele.style.color = 'red';
}