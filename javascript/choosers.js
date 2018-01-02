//
// Jack Reinhardt 1-2-2018
// choosers.js
//
// chooser.   chooses random item from array of items and based on the op,
//            changes the html file respectively.
function chooser(op, items)  {
  var randomNum = Math.floor(Math.random() * items.length);
  if(op == "bg")  {
    document.body.style.backgroundImage = `url(${items[randomNum]})`;
  }
  else if (op == "qt"){
    document.getElementById("quote").innerHTML = items[randomNum];
  }
}

// photoChooser. assigns random background image from array of pictures
function photoChooser() {
  var pics = [
      "./img/blue.png",
      "./img/yellow.png",
      "./img/red.png",
      "./img/green.png",
      "./img/orange.png",
      "./img/purple.png",
      "./img/gray.png",
  ];
  chooser("bg", pics)
}

// quoteChooser. assigns random quote from array of quoteChooser
function quoteChooser() {
  var quotes = [
      "\"Stay hungry, stay foolish.\" – Steve Jobs",
      "\"Quote 2\" - Me",
      "\"Quote 3\" – Me",
      "\"Quote 4\" – Me",
  ];
  chooser("qt", quotes);
}
