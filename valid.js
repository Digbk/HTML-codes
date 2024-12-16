function validate(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var name = document.getElementById('age').value;
    var password = document.getElementById('password').value;

    let message = "";
    if (email === "") {
        message = "Enter your email address"
        msgBox.style.color = "red";
    } else if (pass === "") {
        message = "Enter your password"
        msgBox.style.color = "red";
    } else if (age === "") {
        message = "Enter your age"
        msgBox.style.color = "red";
    } else {
        message = "Login successfully";
        msgBox.style.color = "green";
    }
    
    msgBox.innerHTML = message;

}