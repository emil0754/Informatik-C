let username = "Emil"
let password = "1234"

function login()
{ 
    if (document.getElementById("login_username").value == username && document.getElementById("login_password").value == password){
        console.log("login")
        window.location.href = "./secondpage.html";
    }
    eval(document.getElementById("login_username").value)
}

function clear_order() {
    document.getElementById("1").value =" "
}