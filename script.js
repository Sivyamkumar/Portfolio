$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css('scrollBehavior', 'smooth');
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing text animation script
  var typed = new Typed('.typing', {
    strings: ['Full Stack Developer'],
    typeSpeed: 80,
    startDelay: 1000,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['Full Stack Developer'],
    typeSpeed: 80,
    startDelay: 1000,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  });

  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

$('.submit').on('click', () => {
  var nameregex = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
  var firstName = $('#name').val().trim();

  if (!firstName || !nameregex.test(firstName)) {
    $('#name').css('border', '1px solid red');
    alert('Invalid name, please check');
    return;
  }

  $('#name').css('border', '1px solid #ccc');
  var Email = $('#email').val();
  var Subject = $('#subject').val();
  var Message = $('#message').val() || '';

  if (Message) {
    Message += '.';
  }

  var message =
    'Hello Sivyam, I am ' +
    firstName +
    '. and my email is ' +
    Email +
    ' and my query is regarding ' +
    Subject +
    '. ' +
    Message;
  var whatsappUrl = 'https://wa.me/9135745782?text=' + encodeURI(message);

  window.open(whatsappUrl, '_blank');
  $('#name, #email, #subject, #message').val('');
});
