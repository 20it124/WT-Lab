function isPrime(n){
    let flag = true;
    for(i = 2; i <= n - 1; i++)
    {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function fibonacci(){
    
    let val = prompt("please enter the number: ");
    
    let x = 0;
    let y = 1;
    let rest = '0 1 1 ';
    
    
    for(let i = 1; i<=val; i++){
       
      
        if(x>1){

            if(isPrime(x)){

                rest = rest + '<span>'+x+'</span> ';
                
            }else{
                rest = rest + x + ' ';
            }
        }
        u = x + y;
        x = y;
        y = u;
    }

    document.getElementById('CCC').innerHTML = rest+"</br>";

}