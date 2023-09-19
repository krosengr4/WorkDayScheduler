$(function () {
//List of variables
var dayOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const d = new Date();
var get = localStorage.getItem(hourToUpdate);
var currentHour = d.getHours();
var color;
var presentColor = 'present';
var futureColor = 'future';
var pastColor = 'past';
var displayDate = document.getElementById("currentDay");

// currentHour = 11;   // <--- used for testing only
var hourToUpdate = '';  //  <--- for testing only

// Display the current day, month, day, and year at top of the page.
displayDate.innerHTML = dayOfWeek[d.getDay()] + ", " + month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  
var  doc = document.getElementById("barf");
  
var hour;
var AmPm;
var fixedHour;
doc.innerHTML = '';

// Loop to determine the color of each hour.
for (hour = 9; hour <= 17; hour++) {
  if (currentHour === hour) {
    color = presentColor;
  }else{
    if (hour > currentHour) {
      color = futureColor;
    }else{
      color = pastColor;
    }  
  }; 
  if (hour>12){
      fixedHour = hour - 12;
  } else{
      fixedHour=hour;
  }; 
  if (hour>=12){
        AmPm='PM';
  } else {
      AmPm='AM';
  };

  // innerHTML to display the layout of the page (hours(AM/PM), boxes, color of boxes, and save buttons). 
var eventItem = localStorage.getItem("hour"+hour);
if (!eventItem) {eventItem=''};
 doc.innerHTML = doc.innerHTML + '<div id="hour-' + hour + '" class="row time-block ' + color + '"data-hour = "' + hour + '">' +
'<div class="col-2 col-md-1 hour text-center py-3">'+ fixedHour +AmPm+'</div>' +
'<textarea id="hour-' + hour + '" class="col-8 col-md-10 description" rows="3">' +eventItem+ '</textarea>' +
'<button class="btn saveBtn col-2 col-md-1" aria-label="save">' +
'  <i class="fas fa-save" aria-hidden="true"></i>' +
'</button>' +
'</div>'
};

$('.time-block').each(function (index, timeBlock) {
  var scheduleHour = timeBlock.getAttribute ('data-hour');

  // Add click event on the save buttons. Runs saveSchedule function. 
  // *User must click the little black icon in the blue area.
  timeBlock.addEventListener("click", function (event) {
      if (event.target.matches("i")) {
          saveSchedule(event);
      }
  })

  // Function to set user input with the hour into local storage.
function saveSchedule(event) {
    const hour = event.target.parentElement.parentElement.getAttribute("data-hour");
    const text = event.target.parentElement.parentElement.querySelector("textarea").value;
    localStorage.setItem("hour"+hour, text);
};
 
} )});