$(function () {
  // Get the current day and set it in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Update the time block classes every 15 seconds
  setInterval(updateTimeBlocks, 15000);

  // Call updateTimeBlocks on page load
  updateTimeBlocks();

  // Save button click listener
  $(".saveBtn").on("click", function () {
    // Get the description and time from the corresponding elements
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save the description to local storage
    localStorage.setItem(time, value);

    // Show a notification that the item was saved
    $(".notification").addClass("show");
    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 5000);
  });

  // Update the time block classes based on the current time
  function updateTimeBlocks() {
    // Get the current hour
    var currentHour = dayjs().hour();

    // Loop through each time block and set its class based on its hour
    $(".time-block").each(function (index, element) {
      var hour = $(element).attr("data-hour");
      console.log(hour, currentHour);

      if (hour < currentHour) {
        $(element).find(".description").addClass("past");
      } else if (hour == currentHour) {
        $(element).find(".description").addClass("present");
      } else {
        $(element).find(".description").addClass("future");
      }
    });
  }

  // Set the values of the description elements based on local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
