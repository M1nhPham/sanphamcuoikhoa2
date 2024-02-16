let register = document.getElementById("register");
register.addEventListener("submit", (event) => {
  event.preventDefault(); //prevent page from refreshing
  let email = document.getElementById("email");
  let pass = document.getElementById("password");
  let passconfirm = document.getElementById("passwordconfirm");
  let fullname = document.getElementById("fullname");
  // let lowercase = /[a-z]/g
  // let uppercase = /[A-Z]/g
  // let numbers = /[0-9]/g
  let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo)\.com$/;
  let passRegex = /^[a-zA-z0-9]{6,}$/;
  //console.log(email.value + "," + pass.value)
  if (email.value.trim().length == 0 && pass.value.trim().length == 0) {
    alert("please enter all the required information");
  } else if (email.value.trim().length == 0) {
    alert("please enter email");
  } else if (pass.value.trim().length == 0) {
    alert("please enter password");
  } else if (passconfirm.value.trim().length == 0) {
    alert("please confirm your password");
  } else if (!emailRegex.test(email.value)) {
    alert("invalid email");
  } else if (!passRegex.test(pass.value)) {
    alert("at least 6 characters");
  } else if (fullname.value.trim().length == 0) {
    alert("please enter your full name");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      users.push({
        email: email.value.trim(),
        fullname: fullname.value.trim(),
        pass: pass.value.trim(),
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      //trong lan tao tai khoan dau tien
      localStorage.setItem(
        "users",
        JSON.stringify([
          {
            email: email.value.trim(),
            pass: pass.value.trim(),
          },
        ])
      );
    }
  }
});

function buttonclick() {
  var pass2 = document.getElementById("password").value;
  var passconfirm2 = document.getElementById("passwordconfirm").value;
  if (passconfirm2 == "") {
    alert("You must confirm your password");
    return;
  } else if (passconfirm2 != pass2) {
    alert("Your password was written incorrectly");
    return;
  }
}
