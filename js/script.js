function validate(){
     document.getElementsByClassName("form")
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
function dayValue() {
    year = document.getElementById("year").nodeValue;
    CC = parseInt(year.substring(0,2));
    YY = parseInt(year.substring(2,4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7;
    console.log(d);
    return(Math.floor(d));
}


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

var gender = document.getElementsByName("gender");
if(gender[0].checked === true){
    gender = "male"
} else if(gender[1].checked === true){
    gender = "female"
} else {
    return false;
}
switch(gender){
    case "male":
        if (dayValue = 1){
            alert("You were born on " + days[0] + "." + " Your Akan name is " + maleNames[0] + ".")
        }
        if (dayValue = 2){
            alert("You were born on " + days[1] + "." + " Your Akan name is " + maleNames[1] + ".")
        }
        if (dayValue = 3){
            alert("You were born on " + days[2] + "." + " Your Akan name is " + maleNames[2] + ".")
        }
        if (dayValue = 4){
            alert("You were born on " + days[3] + "." + " Your Akan name is " + maleNames[3] + ".")
        }
        if (dayValue = 5){
            alert("You were born on " + days[4] + "." + " Your Akan name is " + maleNames[4] + ".")
        }
        if (dayValue = 6){
            alert("You were born on " + days[5] + "." + " Your Akan name is " + maleNames[5] + ".")
        }
        if (dayValue = 0){
            alert("You were born on " + days[6] + "." + " Your Akan name is " + maleNames[6] + ".")
        }
}
switch(gender){
    case "female":
        if (dayValue = 1){
            alert("You were born on " + days[0] + "." + " Your Akan name is " + femaleNames[0] + ".")   
        }
        else if (dayValue = 2){
            alert("You were born on " + days[1] + "." + " Your Akan name is " + femaleNames[1] + ".")
        }
        else if (dayValue = 3){
            alert("You were born on " + days[2] + "." + " Your Akan name is " + femaleNames[2] + ".")
        }
        else if (dayValue = 4){
            alert("You were born on " + days[3] + "." + " Your Akan name is " + femaleNames[3] + ".")
        }
        else if (dayValue = 5){
            alert("You were born on " + days[4] + "." + " Your Akan name is " + femaleNames[4] + ".")
        }
        else if (dayValue = 6){
            alert("You were born on " + days[5] + "." + " Your Akan name is " + femaleNames[5] + ".")
        }
        else if (dayValue = 0){
            alert("You were born on " + days[6] + "." + " Your Akan name is " + femaleNames[6] + ".")
        }
}


