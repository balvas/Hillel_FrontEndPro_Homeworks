const imgSrcs = $(".js--gal_item img")
   .map((_, { src }) => src) // extract property
   .get() // get the array out of the jQuery object

// console.log("sources", imgSrcs)

$(".js--gal_item img").on("click", function () {

   let index = $(this).parent('li').index();

   $(".js--modal").addClass("active");
   $(".js--modal__content").append('<img src="' + imgSrcs[index] + '">');
   console.log(index);

   $(".js--modal__close").on("click", function () {
      $(".js--modal").removeClass("active");
      $(".js--modal__content").empty();
   });

   function checkIndex() {
      console.log(index);
      if (index > 0)
         $(".js--modal__prev").show();
      else $(".js--modal__prev").hide();
      if (index < imgSrcs.length - 1)
         $(".js--modal__next").show();
      else $(".js--modal__next").hide();
   };

   $(".js--modal__prev").on("click", function () {
      index--;
      $(".js--modal__content img").attr("src", imgSrcs[index]);
      checkIndex();
   });
   $(".js--modal__next").on("click", function () {
      index++;
      $(".js--modal__content img").attr("src", imgSrcs[index]);
      checkIndex();
   });
});