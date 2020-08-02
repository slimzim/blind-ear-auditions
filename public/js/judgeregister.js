var $firstname = $("#first-name")
var $lastname = $("#last-name")
var $instrument = $("#instrument")
var $email = $("#email")
var $password = $("#user_password")
var $confirmPassword = $("#confirm_password")
var $phone = $("#phone")
var $submitBtn = $("#submit")


// The API object contains methods for each kind of request we'll make
function postNewJudge(newJudge) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/judgeregister",
      data: JSON.stringify(newJudge)
    });
    
}

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function() {
    

    var newJudge = {
        first_name: $firstname.val(),
        last_name: $lastname.val(),
        instrument: $instrument.val(),
        email: $email.val().trim(),
        password: $password.val().trim(),
        phone: $phone.val().trim(),
      };
      console.log(newJudge)

    if (!$firstname.val()){
        alert("Please enter your first name!")
        return
    }
  
    if (!$lastname.val()){
        alert("Please enter your last name!")
        return
    }

    if (!$instrument.val()){
        alert("Please select your instrument!")
        return
    }

    if (!$email.val()){
        alert("Please enter a valid email address!")
        return
    }

    if (!$password.val()){
        alert("Please enter a password!")
        return
    }

    if (!$confirmPassword.val()){
        alert("Please confirm your passwords!")
        return
    }

    if ($password.val().trim() !== $confirmPassword.val().trim()) {
        alert("Passwords do not match!")
        return
    } 

    if (!$phone.val()){
        alert("Please enter a valid phone number!")
        return
    }
  
    postNewJudge(newJudge)    

    alert("Successfully registered " + newJudge.first_name + " " + newJudge.last_name + "!")
  };

  

$submitBtn.on("click", function(event){
    event.preventDefault()
    handleFormSubmit()
})