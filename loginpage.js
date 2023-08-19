$(".switch-tab").click(function () {
   const targetTab = $(this).attr("href");
   $(".nav-link").removeClass("active");
   $(targetTab + "-tab").addClass("active");
   $(".tab-pane").removeClass("show active");
   $(targetTab).addClass("show active");
   history.replaceState(null, null, targetTab);
});
