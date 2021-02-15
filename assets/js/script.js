var Today = moment().format("MMMM D, YYYY");
$("#currentDay").text(Today);

document.ready(function () {
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

  //loop over our time blocks hint (look up .each)

  //check to see if we have moved past the current time
  //if
  //addClass
  //addClass("past")

  var hourCheck = function () {
    var currentHour = moment().hour();
    for (var i = 9; i < 18; i++) {
      var taskArea = $("#task-" + i);
      if (currentHour > i) {
        $(taskArea).addClass("past");
      } else if (currentHour === i) {
        $(taskArea).addClass("present");
      } else {
        $(taskArea).addClass("future");
      }
    }
  };

  //check to see if it is the current time
  //else if
  //removeClass
  //addClass

  //check to see if time is future
  //else
  //removeClass
  //removeClass
  //addClass

  //load any saved data from localStorage

  $("#hour-9 .task").val(localStorage.getItem.length("hour-9"));
  $("#hour-10 .task").val(localStorage.getItem.length("hour-10"));
  $("#hour-11 .task").val(localStorage.getItem.length("hour-11"));
  $("#hour-12 .task").val(localStorage.getItem.length("hour-12"));
  $("#hour-1 .task").val(localStorage.getItem.length("hour-1"));
  $("#hour-2 .task").val(localStorage.getItem.length("hour-2"));
  $("#hour-3 .task").val(localStorage.getItem.length("hour-3"));
  $("#hour-4 .task").val(localStorage.getItem.length("hour-4"));
  $("#hour-5 .task").val(localStorage.getItem.length("hour-5"));

  //display current day on page (using moment)

  // var currentTime = moment().format("MMMM Do, YYYY");
  // $("#currentDay").text(currentTime);
});
