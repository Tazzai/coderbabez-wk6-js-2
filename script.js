$("document").ready(function() {
  // Initialize all the columns before the button has been pressed
  // There is no content specified in the html so the page would
  // be empty if we didn't update it here.
  // Try commenting out these lines and refreshing the page!
  updateAllColumn();

  $("#changeButton").click(function() {
    updateAllColumn();
  });

  $("#changeButtonBackgroundColor").click(function() {
    $("body").css('background-color', randomBackgroundColor());
    });
});

function updateColumn(number) {
  $element = $("#funhouse section:nth-child(" + number + ")");
  $element.css('background-color', randomColumnColor());
  dog = randomDog();
  $element.find('h3').html(dog.name);
  $element.find('img').attr('src', dog.image);
}

function updateAllColumn (){
  updateColumn(1);
  updateColumn(2);
  updateColumn(3);
  updateColumn(4);
}
