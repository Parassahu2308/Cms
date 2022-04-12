
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

// ------> Student <------
class Student {
  constructor(name, roll, branch, email, no){
    this.name = name;
    this.roll = roll;
    this.branch = branch;
    this.email = email;
    this.no = no;
  }
}
let add = document.getElementById("add_student");
add.addEventListener("submit", addStudent());

const addStudent = (e) =>{
  console.log("donr");
  // let name = document.getElementById("studname").value;
  // let roll = document.getElementById("studroll").value;
  // let branch = document.getElementById("studbranch").value;
  // let email = document.getElementById("studemail").value;
  // let no  = document.getElementById("studno").value;
  
  // let student  = new Student (name, roll, branch, email, no);
  // console.log(student);
   
  e.preventDefault();
}





