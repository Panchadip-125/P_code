document.addEventListener('DOMContentLoaded', () => {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let header = document.querySelector('.header');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  window.onscroll = () => {
    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove active class from menu icon and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Highlight active navigation link based on scroll position
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      }
    });
  };

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


/*===DarkMode====*/

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick=()=>{
  darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }
}

ScrollReveal({ 
  reset:true,
  distance:'0.5rem',
  duration:2000,
  delay:200

});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img img, .services-counter, .portfolio-box, .test-wrapper, .contact form ',{ origin:'bottom'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .test-wrapper .contact form',{ origin:'left'});
ScrollReveal().reveal('.home-content h1, .about-img img',{origin:'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{origin:'right'});
ScrollReveal().reveal('.container-fluid h4, .card',{origin:'right'});

