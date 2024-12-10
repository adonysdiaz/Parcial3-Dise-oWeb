'use strict';

// Cambiar cursor con sombra personalizada
const customCursor = document.createElement('div');
customCursor.id = 'custom-cursor';
document.body.appendChild(customCursor);

document.addEventListener('mousemove', e => {
  customCursor.style.top = `${e.clientY}px`;
  customCursor.style.left = `${e.clientX}px`;
});

// Cambiar el estilo al dar clic
document.addEventListener('mousedown', () => {
  customCursor.style.transform = 'scale(0.8)';
  customCursor.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
});

document.addEventListener('mouseup', () => {
  customCursor.style.transform = 'scale(1)';
  customCursor.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
});

// Estilo del cursor
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
  #custom-cursor {
    width: 10px;
    height: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(cursorStyle);

  document.querySelector('.header-action-btn[aria-label="toggle search"]').addEventListener('click', function() {
  var searchBox = document.getElementById('search-box');
  if (searchBox.style.display === 'none' || searchBox.style.display === '') {
   searchBox.style.display = 'block';
  } else {
    searchBox.style.display = 'none';
  }
  });
        
        

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);

