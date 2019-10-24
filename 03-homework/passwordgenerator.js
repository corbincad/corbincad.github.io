//Generate Password
function generate(){

    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible values
    const values = "ABCDEFGHIJKLMNSOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";
    
    //for loop for password
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display
    document.getElementById("display").value = password;

    //keeping track of old passwords
    document.getElementById("lastpass").innerHTML += password + "<br />";

}

//default length
document.getElementById("length").innerHTML = "Length: ";

//setting password length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: ";
    }
}

//copy to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Saved to Clipboard!");
}

