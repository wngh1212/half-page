$(window).load(function () {
  $(".wrapper").removeClass("nopre");
});

$("#container > div").click(function () {
  if ($("#container").attr("class") == $(this).attr("id")) {
    $("#container").removeClass();
  } else {
    $("#container").removeClass().addClass($(this).attr("id"));
  }
});

$("#container > div > ul").click(function (e) {
  e.stopPropagation();
});
