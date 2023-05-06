// Getting DOM Elements
const mainSection = document.querySelector('.main-section');
const mainHeading = document.querySelector('.main-heading');
const mainParagraph = document.querySelector('.main-paragraph');
const footer = document.querySelector('.footer');
const hamburgerMenu = document.querySelector('#navbar-toggle')




const globalVariables = {
  currentPage: typeof window !== 'undefined' ? window.location.pathname : null,
};

function whenAnimationOver() {
  if (mainParagraph.style.display === 'none' && footer.style.display === 'none' && globalVariables.currentPage === '/index.html') {
    mainParagraph.style.display = 'flex';
    mainParagraph.style.animation = 'fade-in 5s ease-in-out forwards';
    footer.style.display = 'flex';
    footer.style.animation = 'fade-in 7s ease-in-out forwards';
    mainSection.removeEventListener('animationend', whenAnimationOver);
  }
}

function init() {
  switch (globalVariables.currentPage) {
    case '/':
    case '/index.html':
      mainParagraph.style.display = 'none';
      footer.style.display = 'none';
      mainSection.addEventListener('animationend', whenAnimationOver);
      console.log('Index');
      break;
    case '/about.html':
      console.log('About');
      break;
    case '/videos.html':
      console.log('Videos');
      break;
  }
}

// function hamburgerMenuShown() {
//     if (!hamburgerMenuIcon) {
//         hamburgerMenu.style.display = 'flex';
//     }
// }

console.log(e.target)

init();
