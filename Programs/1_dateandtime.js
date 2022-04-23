// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function Currentday(){
    var d= new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day=d.getDay()

    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hour = d.getHours();

    return 'today is'+ ' ' + days[day] + ' and time is ' + hour+':' + +minutes+ ':'  + seconds+':' ;
}

console.log(Currentday());