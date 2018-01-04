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
$('.exit').on('click', function(){
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

    //If you click on .connect-button
      //Then it will bring you to .connect on homepage


/* ----------------------------------------
Connect.html
------------------------------------------- */
$(".connect-email").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-form").offset().top},
        'slow');
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
