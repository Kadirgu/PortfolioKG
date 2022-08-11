/**
 * Shows / hides burger menu when user clicks on burger or link
 */
 (function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    // When the user clicks on the hamburger, toggle active class to show/hide burger menu
    hamburger.addEventListener("click", mobileMenu);
  
    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  
    // When the user clicks on a link in the menu, remove active class to hide burger menu
    const navLink = document.querySelectorAll(".nav-link");
  
    navLink.forEach(n => n.addEventListener("click", closeMenu));
  
    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  })();
  
  
  /**
   * Shows header when user scrolls up, hides header when user scrolls down
   */
  (function () {
  
    var doc = document.documentElement;
    var w = window;
  
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
  
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;
  
    function checkScroll() {
  
      /*
      ** Find the direction of scroll
      ** 0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
  
      prevScroll = curScroll;
    };
  
    function toggleHeader(direction, curScroll) {
      if (direction === 2 && curScroll > headerHeight) {
  
        header.classList.add('nav-hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('nav-hide');
        prevDirection = direction;
      }
    };
  
    window.addEventListener('scroll', checkScroll);
  
  })();
  
  
  /**
   * Reveals sections on scrolling
   */
  (function () {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
  
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    }
  
    window.addEventListener("scroll", reveal);
  
    reveal();
  
  })();