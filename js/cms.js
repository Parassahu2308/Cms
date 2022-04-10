
// ------> Login  <-------
let login = document.getElementById("signbtn");
login.addEventListener("click", function(e){
  let user = document.getElementById("usertxt").value;
  let pass = document.getElementById("passtxt").value;

  if(user == 'parassahu' && pass =='12345678' ){
    window.location.href="/dash.html";
  }
  else{
    const error = document.createElement("p");
    error.innerHTML = "Invalid Password! Try Again.";
    document.getElementById("error").appendChild(error);
  }
  e.preventDefault();
});




