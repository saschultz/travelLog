//business logic
function Destination(travelLocation, landmarks, timeofYear, notes) {
  this.travelLocation = travelLocation;
  this.landmarks = landmarks;
  this.timeofYear = timeofYear;
  this.notes = notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedTravelLocation = $("input#travelLocation").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeofYear = $("input#timeofYear").val();
    var inputtedNotes = $("input#notes").val();

    var newDestination = new Destination(inputtedTravelLocation, inputtedLandmarks, inputtedTimeofYear, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.travelLocation + "</span></li>");

    $("input#travelLocation").val("");
    $("input#landmarks").val("");
    $("input#timeofYear").val("");
    $("input#notes").val("");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.travelLocation);
      $(".travelLocation").text(newDestination.travelLocation);
      $(".landmarks").text(newDestination.landmarks);
      $(".timeofYear").text(newDestination.timeofYear);
      $(".notes").text(newDestination.notes);
    });
  });
});
