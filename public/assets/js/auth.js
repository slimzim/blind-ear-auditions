(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD31MxQdIMY4WEyA4tfoxvE4kwd1gOY7nk",
    authDomain: "audition-app-cc4f7.firebaseapp.com",
    databaseURL: "https://audition-app-cc4f7.firebaseio.com",
    projectId: "audition-app-cc4f7",
    storageBucket: "audition-app-cc4f7.appspot.com",
    messagingSenderId: "138845888590",
    appId: "1:138845888590:web:01615b1505138f0d75a31f",
    measurementId: "G-HB4QDTB9XN",
  };
  firebase.initializeApp(config);

  var auth = firebase.auth();
  var data = firebase.firestore();

  // var setupCandidates = (results) => {
  //   results.forEach((doc) => {
  //     var candidate = doc.data();
  //     console.log(candidate);
  //   });
  // };

  // data
  //   .collection("candidates")
  //   .get()
  //   .then((snapshot) => {
  //     setupCandidates(snapshot.docs);
  //   });

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in: ", user);
    } else {
      console.log("User logged out");
    }
  });

  var signupForm = document.querySelector("#signup-form");
  var judgeSignupForm = document.querySelector("#judge-reg");
  var candidateSignupForm = $("#candidate-reg");

  $(judgeSignupForm).on("submit", (e) => {
    e.preventDefault();
    var email = judgeSignupForm["email"].value;
    var password = judgeSignupForm["user_password"].value;

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      if (cred) {
        judgeSignupForm.reset();
        window.location.pathname = "/judge";
      }
    });
  });

  $(candidateSignupForm).on("click", (e) => {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#user_password").val();

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      if (cred) {
        window.location.pathname = "/comments-form";
      }
    });
  });

  // signupForm.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   var email = signupForm["txt-email"].value;
  //   var password = signupForm["txt-pass"].value;

  //   auth.createUserWithEmailAndPassword(email, password).then((cred) => {
  //     console.log(cred.user);
  //     signupForm.reset();
  //   });

  //   data
  //     .collection("candidates")
  //     .add({
  //       firstName: signupForm["first-name"].value,
  //       lastName: signupForm["last-name"].value,
  //       instrument: signupForm["instrument"].value,
  //       userNum: signupForm["user-num"].value,
  //       contactNum: signupForm["contact-num"].value,
  //     })
  //     .then(() => {
  //       console.log("info added to firebase");
  //     });
  // });

  var judgeLoginForm = document.querySelector("#judge-login-form");
  $(judgeLoginForm).on("submit", (e) => {
    e.preventDefault();
    var email = judgeLoginForm["login-email"].value;
    var password = judgeLoginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      if (cred) {
        judgeLoginForm.reset();
        window.location.pathname = "/judge";
      }
    });
  });

  var candidateLoginForm = document.querySelector("#candidate-login-form");
  $(candidateLoginForm).on("submit", (e) => {
    e.preventDefault();
    var email = candidateLoginForm["login-email"].value;
    var password = candidateLoginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      if (cred) {
        candidateLoginForm.reset();
        window.location.pathname = "/comments-form";
      }
    });
  });

  $("#sign-out").on("click", (e) => {
    e.preventDefault();
    auth.signOut();
    window.location.pathname = "/";
  });
})();
