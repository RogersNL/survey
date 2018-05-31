$(document).ready(function(){

$("#survey").submit(function(event){
  var nameInput = $("input#name").val().toUpperCase();
  var foodInput = $("select#food").val().toUpperCase();
  var musicInput = $("input:radio[name=music]:checked").val();
  var dateInput = $("input#today").val();
  var colorInput = $("input#color").val();

  $(".nameOutput").text(nameInput);
  $(".foodOutput").text(foodInput);
  $(".musicOutput").text(musicInput);
  $(".dateOutput").text(dateInput);
  $("body").css("background-color", colorInput);

  $("#surveyDisplay").show();

  event.preventDefault();

})








});
