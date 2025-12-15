// Smooth scrolling (keep this if you already have it)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", evt => {
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      evt.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: "smooth"
      });
    }
  });
});

// Owl Carousels
$(document).ready(function () {
  // Hero carousel
  $(".hero-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    smartSpeed: 650
  });

  // Doctors carousel
  $(".doctor-carousel").owlCarousel({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: false,
    smartSpeed: 400,
    responsive: {
      0:    { items: 1 },
      640:  { items: 2 },
      1024: { items: 3 }
    }
  });
    $(".specialty-carousel").owlCarousel({
    loop: true,
    margin: 15,          // space between slides in px
    autoplay: true, 
    autoplayHoverPause: true,    // set true if you want auto slide
    dots: true,          // small indicators under the carousel
    nav: true,                // ← enable arrows
    navText: ["‹", "›"],  // next/prev arrows (true to show)
    smartSpeed: 300,     // animation speed in ms
    responsive: {
      0:   { items: 1 }, // 1 card on small screens
      640: { items: 3 }, // 2 cards on medium
      1024:{ items: 4 }  // 3 cards on desktop
    }
  });
});



const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('is-open')) {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
