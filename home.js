var backgroundButton =document.getElementById("backgroundButton");

var backgrounds = [
  "bay-1.jpeg",
  "bay-2.jpeg",
  "bay-3.jpeg",
  "bay-4.jpeg"
];

var savedBackground = localStorage.getItem("warriorsBackground");

if (savedBackground) {
  document.body.style.backgroundImage = "url('" + savedBackground + "')";
}

var backgroundNumber = 0;

if (savedBackground) {
  backgroundNumber = backgrounds.indexOf(savedBackground);
}

if (backgroundNumber === -1) {
  backgroundNumber = 0;
}

if (backgroundButton) {
  backgroundButton.onclick = function() {
    backgroundNumber = backgroundNumber + 1;

    if (backgroundNumber >= backgrounds.length) {
      backgroundNumber = 0;
    }
  
    var newBackground = backgrounds[backgroundNumber];

  document.body.style.backgroundImage = "url('" + newBackground + "')";
  localStorage.setItem("warriorsBackground", newBackground);
};
}