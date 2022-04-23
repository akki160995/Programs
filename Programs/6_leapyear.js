function leapYear(x){
    
    return(x%400===0)&&(x%100===0)||(x%4===0);
}
console.log(leapYear(1999))