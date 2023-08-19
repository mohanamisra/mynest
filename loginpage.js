$(document).ready(function () {
   $("#login-form").submit(function (e) {
      e.preventDefault();
      showPopup("Logged in successfully!");
   });

   $("#signup-form").submit(function (e) {
      e.preventDefault();
      showPopup("Account created successfully!");
   });

   $(".switch-tab").click(function () {
      const targetTab = $(this).attr("href");
      $(".nav-link").removeClass("active");
      $(targetTab + "-tab").addClass("active");
      $(".tab-pane").removeClass("show active");
      $(targetTab).addClass("show active");
      history.replaceState(null, null, targetTab);
   });

   function showPopup(message) {
      const popup = document.createElement("div");
      popup.className = "custom-popup";
      popup.textContent = message;

      document.body.appendChild(popup);

      setTimeout(function () {
         popup.remove();
      }, 2000);
   }
});
