//Alireza
let isprime =function(number){
    let count=0;
    for(let i=0;i<number;i++){
        if(number%i==0){
            count++
        }
    }
    if(count==2){
        return true;
    }
    else{
        return false;
    }
};