var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Boo.jpg') {
      myImage.setAttribute ('src','images/booo.gif');
    } else {
      myImage.setAttribute ('src','images/Boo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Boo Best Friend ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Boo Best Friend ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}