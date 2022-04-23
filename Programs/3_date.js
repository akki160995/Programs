// 3. Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function todaydate(){
    var d= new Date();
    date=d.getDate()
    month=d.getMonth()+1;
    year=d.getFullYear();
    return [date,month,year].join(' ');
}
console.log(todaydate());