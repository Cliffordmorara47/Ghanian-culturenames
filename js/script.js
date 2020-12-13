function validate(){
    var details = document.getElementsByName("myForm")
    if (document.myForm.year.value === "" && document.myForm.year.length != 4){
        alert("Please provide a valid year!");
        document.myForm.year.focus();
        return false;
    }
    else if(document.myForm.month.value === "" && document.myForm.year.value.length >12 && document.myForm.value <=0 || isNaN(document.myForm.month.value)){
        alert("Please provide a valid month!");
        document.myForm.month.focus();
        return false;
    }
    else if (document.myForm.date.value === "" && document.myForm.date.value >31 && document.myForm.date.value <=0){
        alert("Please provide a valid date!");
        document.myForm.day.focus();
        return false;
    }
    else if(genders[checked === false] && genders[1].checked === false){
        alert("You must select male or female");
        return false;
    } 
    else{
        return true;
    }
}
function dayOfTheWeek() {
    year = document.getElementById("year").nodeValue;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    console.log(d);
    return(Math.floor(d));
}