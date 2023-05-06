// Getting DOM Elements
const mainSection = document.querySelector('.main-section');
const mainHeading = document.querySelector('.main-heading');
const mainParagraph = document.querySelector('.main-paragraph');
const footer = document.querySelector('.footer');

const globalVariables = {
    currentPage: typeof window !== 'undefined' ? window.location.pathname : null,
  };

  

// on page load hide the paragraph and the header

function onContentLoad () {

    if (globalVariables.currentPage === '/index.html') {
        mainParagraph.style.display = 'none'
        footer.style.display = 'none'; 
    } 
}

function whenAnimationOver () {
    if (mainParagraph.style.display === 'none' && footer.style.display ==='none' && globalVariables.currentPage === '/index.html') {
        mainParagraph.style.display = 'flex';
        mainParagraph.style.animation = 'fade-in 5s ease-in-out forwards';
        footer.style.display = 'flex';
        footer.style.animation = 'fade-in 7s ease-in-out forwards';
        mainSection.removeEventListener("animationend", whenAnimationOver);
    }
}



function init() {
    switch (globalVariables.currentPage) {
      case "/":
      case "/index.html":
        console.log('Index');
        break;
      case "/about.html":
        console.log('About');
        break;
      case "/videos.html":
        console.log("Videos");
        break;
    }
  }
  
  


init ();
mainSection.addEventListener("animationend", whenAnimationOver);
window.addEventListener("DOMContentLoaded", onContentLoad);
