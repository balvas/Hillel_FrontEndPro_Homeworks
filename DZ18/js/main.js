const imgSrcs = $(".js--gal_item img")
   .map((_, { src }) => src)
   .get()

$(".js--gal_item img").on("click", function () {
   const $prevButton = $(".js--modal__prev");
   const $nextButton = $(".js--modal__next");
   let index = $(this).parent('li').index();
   function checkIndex() {
      if (index === 0)
         $prevButton.hide();
      else $prevButton.show();
      if (index === imgSrcs.length - 1)
         $nextButton.hide();
      else $nextButton.show();
   };

   checkIndex();

   $(".js--modal").addClass("active");
   $(".js--modal__content").append('<img src="' + imgSrcs[index] + '">');
   $(".js--modal__close").on("click", function () {
      $(".js--modal").removeClass("active");
      $(".js--modal__content").empty();
   });

   $prevButton.on("click", function () {
      index--;
      $(".js--modal__content img").attr("src", imgSrcs[index]);
      checkIndex();
   });

   $nextButton.on("click", function () {
      index++;
      $(".js--modal__content img").attr("src", imgSrcs[index]);
      checkIndex();
   });
});