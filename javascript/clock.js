//
// Jack Reinhardt 1-2-2018
// clock.js
//
// startTime. function that changes html code of time and changes the greeting
//            message to fit with the time of day.
function startTime() {
  var today = new Date();
  var name = "Me";
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if (h < 12) { // morning hours
    if (h == 0) { h = 12; } // if midnight, use h = 12
    document.getElementById("clock").innerHTML = h + ":" + m + " AM";
    document.getElementById("greeting").innerHTML = "Good Morning, " + name;
  }
  else {  // after noon hours
    h = amPm(h);
    document.getElementById("clock").innerHTML = h + ":" + m + " PM";
    // separate evening from afternoon
    if (h > 4)  { document.getElementById("greeting").innerHTML = "Good Evening, " + name; }
    else { document.getElementById("greeting").innerHTML = "Good Afternoon, " + name; }
  }
  var t = setTimeout(startTime, 500);
}

// checkTime. helper function for startTime. Adds a zero to the beginning of a
//            number less than 10.
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

// amPm.      helper funciton for startTime. Mod input by 12 if greater than
//            12, otherwise return the number.
function amPm(i)  {
  if (i > 12) {
    return i % 12;
  }
  return i;
}
