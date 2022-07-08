function validate_password() {
 
    var password = document.getElementById('id_password').value;
    var password1 = document.getElementById('id_password1').value;
    if (password != password1) {
        document.getElementById('wrong_pass_alert').style.color ='red';
        document.getElementById('wrong_pass_alert').innerHTML =("Confirm Password did't match");
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color ='green';
        document.getElementById('wrong_pass_alert').innerHTML =('');
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function wrong_pass_alert() {
    if (document.getElementById('id_password').value != "" &&
        document.getElementById('id_password1').value != "") {
        alert("Sign Up Succesfully");
    } else {
        alert("Please fill all the fields");
    }
}

const TogglePassword1 = document.querySelector('#TogglePassword1');
	const password1 = document.querySelector('#id_password1');
	
  
	TogglePassword1.addEventListener('click', function () {
	  // toggle the type attribute
	  const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
	  password1.setAttribute('type', type);
	  
	  // toggle the eye slash icon
	  this.classList.toggle('bi-eye');
  }); 

