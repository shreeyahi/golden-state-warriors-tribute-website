var teamLore = document.getElementById("teamLore");
var teamLoreButton = document.getElementById("teamLoreButton");
var warningBox = document.getElementById("warningBox");
var yesButton = document.getElementById("yesButton");
var noButton = document.getElementById("noButton");
var loreParagraphs = document.querySelectorAll("#loreBox p");

var savedText = [];
var alreadyTyped = false;

for (var i = 0; i < loreParagraphs.length; i++) {
  savedText.push(loreParagraphs[i].textContent);
}

teamLoreButton.onclick = function(event) {
  if (teamLore.open) {
    return;
  }

  event.preventDefault();
  warningBox.style.display = "block";
};


yesButton.onclick = function() {
  warningBox.style.display = "none";
  teamLore.open = true;
 
  if (alreadyTyped === false) {
    startTyping();
  }
};

noButton.onclick = function() {
  warningBox.style.display = "none";
  teamLore.open = false;
};

function startTyping () {
  alreadyTyped = true;

  for (var i=0; i < loreParagraphs.length; i++) {
    loreParagraphs[i].textContent = "";
  }

  typeParagraph(0,0);
  }

  
function typeParagraph(paragraphNumber, letterNumber) {
  if (paragraphNumber >= loreParagraphs.length) {
    return;
}

var currentText = savedText[paragraphNumber];

if (letterNumber < currentText.length) {
  loreParagraphs[paragraphNumber].textContent = currentText.substring(0, letterNumber + 1);

  setTimeout(function() {
    typeParagraph(paragraphNumber, letterNumber + 1);
  }, 0);
} else {
  typeParagraph(paragraphNumber + 1, 0);
}  
}


var goatedPlayers = document.getElementById("goatedPlayers");
var goatedText = document.querySelectorAll(".goated-intro");

var savedGoatedText = [];
var goatedTyped = false;

for (var i = 0; i < goatedText.length; i++) {
  savedGoatedText.push(goatedText[i].textContent);
  goatedText[i].textContent = "";
}

goatedPlayers.onclick = function() {
  if (goatedPlayers.open === false && goatedTyped === false) {
    setTimeout(function() {
      startGoatedTyping();
    }, 200);
    }
  };

function startGoatedTyping() {
  goatedTyped = true;
  typeGoated(0, 0);
}

function typeGoated(paragraphNumber, letterNumber) {
  if (paragraphNumber >= goatedText.length) {
    return;
  }

  var currentText = savedGoatedText[paragraphNumber];

  if (letterNumber < currentText.length) {
    goatedText[paragraphNumber].textContent =
    currentText.substring(0, letterNumber + 1);

    setTimeout(function() {
      typeGoated(paragraphNumber, letterNumber +1);
    }, 2);
  } else {
    typeGoated(paragraphNumber + 1, 0);
  }
}

