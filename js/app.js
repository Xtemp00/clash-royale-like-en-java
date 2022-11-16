$(".m-nav-toggle").click(function (e) {
  e.preventDefault();
  $(".m-right").toggleClass("open");
  $(".m-nav-toggle").toggleClass("open");

});
