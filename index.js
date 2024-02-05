//alert ("hello world")
function doubleDigit (n){
    if (n<10) {
        return "0"+ n;        
    } else {return n}
}

var weekDay = ["Sunday", "Monday", "Wednesday", "Thursday", "Friday", ]

setInterval(() => {
    const a = new Date();
    var time = doubleDigit(a.getHours())+ ":" + doubleDigit(a.getMinutes())+ ":"+ doubleDigit(a.getSeconds()) + ":"+ doubleDigit(Math.floor(a.getMilliseconds()/10));
    var date = a.toLocaleDateString()+ " on " + weekDay[a.getDay()]
    document.querySelector(".time").innerHTML=time;
    document.querySelector(".date").innerHTML=date;

}, 10);
