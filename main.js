$(".connect4").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "This is PG life website made by using HTML ,CSS, Bootsrap"
    );
    $(".projectName div").css("background", "transparent");
    $(".connect4").css("background-color", "purple");
  });
  
  $(".placement").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "this is all about me and i made this portfolio using HTML,CSS"
    );
    $(".projectName div").css("background", "transparent");
    $(".placement").css("background-color", "purple");
  });
  
  $(".social-site").click(function (e) {
    e.preventDefault();
    $(".aboutProject").text(
      "frame of this quadcopter is made by using 3D printer "
    );
    $(".projectName div").css("background", "transparent");
    $(".social-site").css("background-color", "purple");
  });
  