// Get references to page elements
var $judgeNumber = $("#judge-number");
var $candidateNumber = $("#candidate-number");
var $comments = $("#comments")
var $intonation = $("#intonation")
var $rhythm = $("#rhythm")
var $tone = $("#tone")
var $musicality = $("#musicality")
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
function postScore(score) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/judge",
      data: JSON.stringify(score)
    });
  }

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var score = {
    judge_number: $judgeNumber.val(),
    candidate_number: $candidateNumber.val(),
    comments: $comments.val(),
    intonation: $intonation.val(),
    rhythm: $rhythm.val(),
    tone: $tone.val(),
    musicality: $musicality.val(),
    vote: $("input[type='radio'][name='vote']:checked").val()
  };
  console.log(score)

  if (!(score.judge_number && score.candidate_number)) {
    alert("Please enter both judge and candidate numbers!");
    return;
  }

  postScore(score)

};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit)
