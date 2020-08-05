// Get references to page elements
var $judgeNumber = $("#judge-number");
var $candidateNumber = $("#candidate-number");
var $comments = $("#comments")
var $intonation = $("#intonation")
var $rhythm = $("#rhythm")
var $tone = $("#tone")
var $musicality = $("#musicality")
var slider1 = document.getElementById("rhythm");
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

 // Intonation Slider
 var intonationSlider = document.getElementById("intonation");
 var intonationoutput = document.getElementById("intonation-slider");
 intonationoutput.innerHTML = intonationSlider.value;
 
 intonationSlider.oninput = function() {
   intonationoutput.innerHTML = this.value;
 }

  // Rhythm Slider
  var rhythmSlider = document.getElementById("rhythm");
  var rhythmoutput = document.getElementById("rhythm-slider");
  rhythmoutput.innerHTML = rhythmSlider.value;
  
  rhythmSlider.oninput = function() {
    rhythmoutput.innerHTML = this.value;
  }

 // Tone Slider
 var toneSlider = document.getElementById("tone");
 var toneoutput = document.getElementById("tone-slider");
 toneoutput.innerHTML = toneSlider.value;
 
 toneSlider.oninput = function() {
  toneoutput.innerHTML = this.value;
 }

  // Musicality Slider
  var musicalitySlider = document.getElementById("musicality");
  var musicalityoutput = document.getElementById("musicality-slider");
  musicalityoutput.innerHTML = musicalitySlider.value;
    
  musicalitySlider.oninput = function() {
  musicalityoutput.innerHTML = this.value;
  }


