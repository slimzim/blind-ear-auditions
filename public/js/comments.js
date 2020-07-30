console.log("COMMENTS FORM CONNECTED")

// Get candidate number from form
$candidateNumber = $("#candidate-number")
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
function getComments(candidateNumber) {
    return $.ajax({
      url: "api/comments/" + candidateNumber,
      type: "GET",
    }).then(function(response){
        console.log(response)
    })
  }

// handleFormSubmit submits the candidate number

var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var candidateNumber = $candidateNumber.val()
  
    if (!(candidateNumber)) {
      alert("Please enter a candidate number!");
      return;
    }
  
    getComments(candidateNumber)
  
  };
  
  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit)