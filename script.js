
const mainSection = document.querySelector('.main-section');
const mainHeading = document.querySelector('.main-heading');
const mainParagraph = document.querySelector('.main-paragraph')
const footer = document.querySelector('.footer');

function onContentLoad () {
    mainParagraph.style.display = 'none'
    footer.style.display = 'none';
    
}

function whenAnimationOver () {
    if (mainParagraph.style.display === 'none' && footer.style.display ==='none') {
        mainParagraph.style.animation = 'fade-in 5s ease-in-out forwards';
        footer.style.animation = 'fade-in 7s ease-in-out forwards';
        mainParagraph.style.display = 'flex'
        footer.style.display = 'flex';
    
    }
}

mainSection.addEventListener("animationend", whenAnimationOver);
window.addEventListener("DOMContentLoaded", onContentLoad)

