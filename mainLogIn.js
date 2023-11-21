function sendMail(){
  (function(){
    emailjs.init("0Tb_BlNgGG4rxiYX8")
  })();
  var params = {
    from_name: document.getElementById("firstName").value,
    address: document.getElementById("familyName").value,
    today: document.getElementById("today").value,
    month: document.getElementById("month").value,
    year: document.getElementById("year").value,
    phone_number: document.getElementById("phoneNumber").value,
    gender: document.getElementById("male").value,
    gender: document.getElementById("feminine").value,
    email_id: document.getElementById("email").value,
    new_passwoed: document.getElementById("newPassword").value,
    confirm_password: document.getElementById("confirmPassword").value,
  };

  var serviceID = "service_3i52jli";
  var templateID = "template_mz14709";

  emailjs.send(serviceID, templateID, params)
  .then( res => {
      alert("Email sent successfully"+ res.status)
  })
  .catch();
}

function saveData() {
  // Get the input value
  var inputData = document.getElementById('firstName').value;

  // Save the data to the array
  savedDataArray.push(inputData);

  // Display the saved data
  displaySavedData();
}

function yearDate() {
  let date = new Date();
  let yearDatte = date.getFullYear();
  return yearDatte;

}


 function formvalidate() {
  let firstName = document.getElementById("firstName").value;
  let familyName = document.getElementById("familyName").value;
  let today = document.getElementById("today").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value
  let phoneNumber = document.getElementById("phoneNumber").value;
  let email = document.getElementById("email").value;
  let newPassword = document.getElementById("newPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let save = document.getElementById("save");
  let error = document.getElementById("error");
  let text = "";

  if (firstName.length < 3 || firstName.length > 10 ){
    text = "The first name is greater than three letters and less than ten letters.";
    error.innerHTML = text;
    return false;
  }
  else if (familyName.length < 3 || familyName.length > 10){
    text = "The family name is greater than three letters and less than ten letters.";
    error.innerHTML = text;
    return false;
  }
  else if (today < 1 || today > 31){
    text = "Today is greater than zero and less than thirty-one.";
    error.innerHTML = text;
    return false;
  }
  else if (month < 1 || month > 12){
    text = "Month is greater than zero and less than twelve.";
    error.innerHTML = text;
    return false;
  }
  else if (year < 1950 || year >= yearDate()){
    text = "Year is not suitable.";
    error.innerHTML = text;
    return false;
  }
  else if (isNaN(phoneNumber) || phoneNumber.length !== 11){
    text = "Phone number should be eleven digits.";
    error.innerHTML = text;
    return false;
  }
  else if (email.indexOf("@") == -1){
    text = "please write @.";
    error.innerHTML = text;
    return false;
  }
  else if (newPassword.length < 7){
    text = "Password should be greater than seven.";
    error.innerHTML = text;
    return false;
  }
  else if (confirmPassword != newPassword){
    text = "Confirm password should be equal new password.";
    error.innerHTML = text;
    return false;
  }
  else{
    window.open('index.html', '_blank');
    return true;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('loaded-overlay').style.display = 'none';
    document.body.style.overflow = "visible";
  }, 5000);
});