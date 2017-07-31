//Function to work out six working days from today's date//
function protestSixDays(){
  var protestDate = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31, 30, 31]
  var leapYears = [2020, 2024, 2028, 2032]
  var futureDay = protestDate.getDay();
  var futureDate = protestDate.getDate();
  var protestMonth = protestDate.getMonth();
  var protestYear = protestDate.getFullYear();
     if (leapYears.includes(protestYear)){
        monthDays[1] = 29; 
        }
    if (futureDay === 5){
      futureDay = 1;
      futureDate += 10;
    } else if (futureDay === 6){
      futureDay = 2;
      futureDate += 10;
    } else if (futureDay === 0){
      futureDay = 2;
      futureDate += 9;
    } else {
      futureDay += 1;
      futureDate += 8;
    } 
    if (futureDate > monthDays[protestMonth]){
      futureDate = futureDate - monthDays[protestMonth];
      protestMonth += 1;
    } 
   switch(futureDate){
      case 1:
      case 21:
      case 31:
        futureDate += "st";
        break;
      case 2:
      case 22:
        futureDate += "nd";
        break;
      case 3:
      case 23:
        futureDate += "rd";
        break;
     default:
       futureDate += "th";
}
  return days[futureDay] + " " + futureDate + " " + months[protestMonth] + " " + protestYear;
}

//display date on the page//
document.getElementById("Proposed Date").innerHTML = protestSixDays();

//Function to display answer for Yes button//
function displayOne(){
  var x = document.getElementById("march-answer-one");
  var y = document.getElementById("march-answer-no");
    if (x.style.visibility === "hidden"){
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
    } else {
      x.style.visibility = "hidden";
    }
}

function displayTwo(){
   var x = document.getElementById("march-answer-two");
  var y = document.getElementById("march-answer-no");
    if (x.style.visibility === "hidden"){
      x.style.visibility = "visible";
      y.style.visibility = "hidden";
    } else {
      x.style.visibility = "hidden";
    }

}

 function marchYes(){
  displayOne();
  displayTwo();
 }

//Function to display answer for No button//
function marchNo(){
  var no = document.getElementById("march-answer-no");
  var yes = document.getElementById("march-answer-one");
  var yesP = document.getElementById("march-answer-two");
    if (no.style.visibility === "hidden"){
      no.style.visibility = "visible";
      yes.style.visibility = "hidden";
      yesP.style.visibility = "hidden";
    } else {
      no.style.visibility = "hidden";
    }
}


//Function to make hamburger menu visible on smaller screens//
function burgerMenu() {
    var x = document.getElementsByClassName("nav-item");
      for (var i = 0; i < x.length; i++){
        if (x[i].style.visibility === "hidden"){
           x[i].style.visibility = "visible";
        } else {
      x[i].style.visibility = "hidden";
    }
}
}

//Function to make nav bar disappear once a link has been clicked on//
function hideNav(obj){
  var screen = window.screen.width;
  var browser = window.innerWidth;
  if (screen < 940 || browser < 940){
  var visited = document.getElementsByClassName("nav-item");
  for (var i = 0; i < visited.length; i++){
     if (visited[i].style.visibility === "visible"){
    visited[i].style.visibility = "hidden";
  }
  }
}
}




