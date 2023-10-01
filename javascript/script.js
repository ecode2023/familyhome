window.onload=function(){
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
    
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    return true;
  }
    var x = document.getElementById("ahmed")
    x= window.alert("ahmed")
};