//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 to 2050

function findSunday(){
    
    for (var year = 2014; year <= 2050; year++)
        {
        var d = new Date(year, 0, 1);
        if ( d.getDay() === 0 )
           console.log ("1st January is being a Sunday  "+year);
        }
    }
    findSunday();






    function findSunday(){
        var arr = [];
          for (var year = 2014; year <= 2050; year++)
            {
                var d = new Date(year, 0, 1);
                if ( d.getDay() === 0 ){
                    arr.push(year);
                }
            }
            return arr
        }
        console.log(findSunday());