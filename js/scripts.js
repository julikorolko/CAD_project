  // jQuery by Blackrock Digital licensed under MIT(https://startbootstrap.com/)   
  (function($)
  {
 "use strict";   
 // Smooth scrolling using jQuery easing
 $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     if (target.length) {
       $('html, body').animate({
         scrollTop: (target.offset().top - 71)
       }, 1000, "easeInOutExpo");
       return false;
     }
   }
 });  
 // Scroll to top button appear
 $(document).scroll(function() {
   var scrollDistance = $(this).scrollTop();
   if (scrollDistance > 100) {
     $('.scroll-to-top').fadeIn();
   } else {
     $('.scroll-to-top').fadeOut();
   }
 });  
 // Closes responsive menu when a scroll trigger link is clicked
 $('.js-scroll-trigger').click(function() {
   $('.navbar-collapse').collapse('hide');
 });  
 // Activate scrollspy to add active class to navbar items on scroll
 $('body').scrollspy({
   target: '#mainNav',
   offset: 80
 });  
 // Collapse Navbar
 var navbarCollapse = function() {
   if ($("#mainNav").offset().top > 100) {
     $("#mainNav").addClass("navbar-shrink");
   } else {
     $("#mainNav").removeClass("navbar-shrink");
   }
 };
 // Collapse now if page is not at top
 navbarCollapse();
 // Collapse the navbar when page is scrolled
 $(window).scroll(navbarCollapse);  
 // Floating label headings for the contact form
 $(function() {
   $("body").on("input propertychange", ".floating-label-form-group", function(e) {
     $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
   }).on("focus", ".floating-label-form-group", function() {
     $(this).addClass("floating-label-form-group-with-focus");
   }).on("blur", ".floating-label-form-group", function() {
     $(this).removeClass("floating-label-form-group-with-focus");
   });
 });

 var selectedClass = "";
        $(".filter").click(function() {
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });

        $(".tech-icons div")
            .mouseover(function() {
                //get p selector with description
                let p = this.children[1];
                $(p).css("opacity", 1);
                $(p).addClass("icons-mouseover");
                //get i selector 
                let i = this.children[0];
                $(i).css("color", "rgba(248, 0, 62, 0.4)");
                $(i).css("transition", "1s");

            })
            .mouseout(function() {
                let p = this.children[1];
                $(p).css("opacity", 0);
                $(p).removeClass("icons-mouseover");
                let i = this.children[0];
                $(i).css("color", "#212529");
            });

})(jQuery);

