// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=300) {
	 $('.intro h2').fadeIn(750);
 }
 else {
  $('.intro h2').fadeOut(750);
 }
});


/* ----------------------------------------
Responsive Design
------------------------------------------- */

$('.hamburger').on('click', function (){
  $('.side-nav').toggleClass('open');
});
$('.exit   ').on('click', function(){
  $('.side-nav').removeClass('open');
});



//IF you scroll x pixels
  //Then it will remove current nav bar and add new one

  /* ----------------------------------------
  Buttons
  ------------------------------------------- */

    $('.connect-button').on('click', function () {
    	 window.location.href="connect.html"
    });
