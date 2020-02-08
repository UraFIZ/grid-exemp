$(document).ready(function(){

   var counters = $(".globe-quontity-content .counter");
   var counterWrapper = $(".content-wrapper").css("opacity",0);
           // this could work for multiple counters
           $(counters).each(function counter(inx, counter) {
                
               // start with 0 by default
               $(counter).text("0");
               var func = function () {
                   var target = +$(counter).attr('data-target');
                   console.log(target)
                   var c = +$(counter).text();
                   console.log("text", c)

                   // get the 0.1% to speed up things
                   var increment = target / 75;

                   if (c < target) {
                       $(counter).text(`${Math.ceil(c + increment)}`);
                       $(counterWrapper).eq(inx).animate({opacity:1});
                       setTimeout(func, increment)
                   } else {
                       $(counter).text(target);
                   }
               }

               setTimeout(func, inx * 700);
               //func();
           });
})