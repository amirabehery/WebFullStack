var submitbtn = document.querySelector("button")
var username = document.getElementById("username")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var comment = document.getElementById("comment")


submitbtn.onclick = function () {
    alert("Welcome \n" + username.value +"\n" + email.value)
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
