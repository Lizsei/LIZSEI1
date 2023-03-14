// Scrollspy initialization
//$('body').scrollspy({ target: '#navbarNav' });

$(document).ready(function () {
  $('body').scrollspy({target: '#navbarNav'});
});



// Smooth scrolling using jQuery easing
$('a.nav-link').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Parallax effect
//$(window).scroll(function() {
 // const scrollTop = $(this).scrollTop();
 // $('.viewport-height').css('background-position-y', -(scrollTop / 2) + 'px');
//});

// Parallax effect
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    $('#home').css('background-position-y', -(scrollTop / 1) + 'px');
    $('#portfolio').css('background-position-y', -(scrollTop / 1) + 'px');
    $('#contact').css('background-position-y', -(scrollTop / 1) + 'px');
  });
  
  