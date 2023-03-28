// Gets current date from Third Party API
var date = dayjs();

$(function () {
  // This function will get the each class with time-block and compare the time to the time-block id
  // and will parse the time into the integer
  $(".time-block").each(function () {
    var hourblock = parseInt($(this).attr("id").split("hour")[1]);

    // Will change the color of the block if it is past, present, or future
    if (hourblock < date) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
    else if (hourblock === date) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");

    }
  })
  //
  //This function save the written text into the local storage by the hour block written in
  $(document).ready(function () {
    // saveBtn event listener function
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      // Gets values from j-query
      var message = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // Saves the text in the local storage
      localStorage.setItem(time, message);
    });
  })
  // Added code to display the current date on the header of the page
  $("#currentDay").text(date.format('MMM D, YYYY'));
  console.log(date);
});

