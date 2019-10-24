//Generate Password

function generate() {

    //set password length/complexity
    let complexity = document.getElementById("slider").values;

    //possible values
    const values = "ABCDEFGHIJKLMNSOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"

    let password = "";
    
    //for loop for password
    for(var i = 0; i <= complexity; i++) {
        password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length - 1)));

    }

    //add password to display
    document.getElementById("display").value = password;


}