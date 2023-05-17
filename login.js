// Login Modal below ////////////////////////////////////////////////////

// Get the modal
var loginModal = document.getElementById("loginModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var loginspan = document.getElementsByClassName("loginclose")[0];

// When the user clicks on the button, open the modal
loginBtn.onclick = function () {
    loginModal.style.visibility = "visible";
}

// When the user clicks on <span> (x), close the modal
loginspan.onclick = function () {
    loginModal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.visibility = "hidden";
    }
}



// Signup Modal Below  ///////////////////////////////////////////

// Get the modal
var signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
var signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("signupclose")[0];

// When the user clicks on the button, open the modal
signupBtn.onclick = function () {
    signupModal.style.visibility = "visible";
    loginModal.style.visibility = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    signupModal.style.visibility = "hidden";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == signupModal) {
        signupModal.style.visibility = "hidden";
    }
}


////// LOGIN FUNCTIONALITY BELOW  //////////////////////////////////////////////////////////////////


document.getElementById("signinBtn").addEventListener("click", signIn);

var regUser = JSON.parse(localStorage.getItem("userArr")) || [];
function signIn(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill all the details");
    }
    else {
        for (var i = 0; i < regUser.length; i++) {
            if (regUser[i].email === email && regUser[i].password === password) {
                alert("Let's get Shopping");
                window.location.href = "index.html";
                return;
            }
            else if (email == "admin@gmail.com" && password == "admin") {
                alert("SignIn Sucessfully !");
                window.location.href = "index.html";
                return;
            }
        }
        alert("ERROR! Please check your E-Mail Id or Password again.");
    }
}

//  document.getElementById("dark").addEventListener("click", darkmode)


//////////  SIGNUP FUNCTIONALITY BELOW  /////////////////////////////////////////////

document.getElementById("joinBtn").addEventListener("click", userList);

var userArr = JSON.parse(localStorage.getItem("userArr")) || [];

function userList(e) {
    e.preventDefault();
    console.log("clicked");

    var firstName2 = document.getElementById("firstName2").value;
    var lastName2 = document.getElementById("lastName2").value;
    var email2 = document.getElementById("email2").value;
    var password2 = document.getElementById("password2").value;
    var zipcode2 = document.getElementById("zipcode2").value;
    if (!firstName2 || !lastName2 || !email2 || !password2 || !zipcode2) {
        alert("Please fill all your details");
    }
    else {
        var userObj = {
            firstName: firstName2,
            lastName: lastName2,
            email: email2,
            password: password2,
            zipcode: zipcode2,
        };

        userArr.push(userObj);
        localStorage.setItem("userArr", JSON.stringify(userArr));
        
        console.log(currUser);
        localStorage.setItem("currUser",JSON.stringify({firstName:firstName2,email:email2,isLogin:true}))
        // alert("Registered");
        // window.location.href = "login.html";
    }
}

