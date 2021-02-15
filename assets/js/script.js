var Today = moment().format("MMMM D, YYYY");
$("#currentDay").text(Today);

$(document).ready(function () {
  //check for button clicks inside an on click
  $(".saveBtn").on("click", function () {
    //grab my values for time and text
    var value = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");
    //save them to localStorage
    localStorage.setItem(time, value);
  });

  //write a function to update the hours in the time blocks
  //get current time use moment
  var timeHours = moment().format("hh");
  console.log(timeHours);

  //loop over our time blocks hint (look up .each)

  //check to see if we have moved past the current time
  //if
  //addClass
  //addClass("past")

  var allHours = document.querySelectorAll(".row");
  console.log(allHours);

  var hourCheck = function () {
    var currentHour = moment().hour();
    for (var i = 0; i < allHours.length; i++) {
      var taskArea = allHours[i].id;
      var taskId = taskArea.split("-");
      var digit = Number(taskId[1]);
      console.log(digit);
      if (currentHour > digit) {
        $(".task").addClass("past");
      } else if (currentHour === digit) {
        $(".task").addClass("present");
      } else {
        $(".task").addClass("future");
      }
    }
  };

  //load any saved data from localStorage
  hourCheck();
  //display current day on page (using moment)

  // var currentTime = moment().format("MMMM Do, YYYY");
  // $("#currentDay").text(currentTime);
});

$("#hour-9 .task").val(localStorage.getItem("hour-9"));
$("#hour-10 .task").val(localStorage.getItem("hour-10"));
$("#hour-11 .task").val(localStorage.getItem("hour-11"));
$("#hour-12 .task").val(localStorage.getItem("hour-12"));
$("#hour-1 .task").val(localStorage.getItem("hour-1"));
$("#hour-2 .task").val(localStorage.getItem("hour-2"));
$("#hour-3 .task").val(localStorage.getItem("hour-3"));
$("#hour-4 .task").val(localStorage.getItem("hour-4"));
$("#hour-5 .task").val(localStorage.getItem("hour-5"));
