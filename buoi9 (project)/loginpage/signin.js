let login = document.getElementById("login");
login.addEventListener("submit", (event) => {
  event.preventDefault();

  let person = JSON.parse(localStorage.users);
    console.log(person);

  let email = document.getElementById("email");
  let pass = document.getElementById("password");

  if (!email.value || !pass.value) {
    alert("please enter your email and password");
    return;
  }

  for (let index = 0; index < person.length; index++) {
    if (
      email.value.trim() == person[index].email &&
      pass.value.trim() == person[index].pass
    ) {
      alert("dang nhap thanh cong");
      window.location.href = "/mainpage.html";
      return
    }
    
  }
  alert("incorrect password or email")
  
});
