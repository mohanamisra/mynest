$(document).ready(function () {
   $("#login-form").submit(function (e) {
      e.preventDefault();
      showPopup("Logged in successfully!");
   });

   $("#signup-form").submit(function (e) {
      e.preventDefault();
      showPopup("Signed up successfully!");
   });

   $(".switch-tab").click(function () {
      const targetTab = $(this).attr("href");
      $(".nav-link").removeClass("active");
      $(targetTab + "-tab").addClass("active");
      $(".tab-pane").removeClass("show active");
      $(targetTab).addClass("show active");
   });

   function showPopup(message) {
      $("#popup-text").text(message);
      $(".popup").fadeIn(400).delay(1500).fadeOut(400);
   }
});
//popup message is not showing up. I will fix it soon