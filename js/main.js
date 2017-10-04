
// (Bonus) Allow the user to click the .modal to close itself
// Tricky, consider what happens when two elements that are overlapping are both waiting for a click
document.addEventListener('DOMContentLoaded', function(){

  // DEFINE VARIABLES
  var signIn = document.querySelector('.signin')
  var close = document.querySelector('.close')
  var submit = document.querySelector('.submit')
  var modalWindow = document.querySelector('.modal')
  var inputElements = document.querySelectorAll('input')
  var userInput = document.querySelector('#user')
  var passInput = document.querySelector('#pass')


  // DEFINE FUNCTIONS
  function fadeIn(element) {
    element.style.display = 'block'
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 60);
  }

  function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 60);
  }


  // DEFINE EVENTS
  // When the user presses the .signin button, fade in the modal window
  signIn.addEventListener('click', function(){
    fadeOut(signIn);
    fadeIn(modalWindow);
  });

  // When the user presses the .close button, fade out the modal window
  close.addEventListener('click', function(){
    fadeOut(modalWindow);
    fadeIn(signIn);
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].className === 'error'){
        inputElements[i].className = '';
      }
    }
  });

  // When the user presses the .submit button, add an .error class to both input elements
  submit.addEventListener('click', function(){
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].className = 'error';
    }
  });

  // When the user puts their cursor in one of the input fields, remove the .error class
  userInput.addEventListener('click', function(){
    userInput.className = '';
  })

  passInput.addEventListener('click', function(){
    passInput.className = "";
  })


})
