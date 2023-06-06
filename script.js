// Getting DOM Elements
const elements = {
  mainSection: document.querySelector(".main-section"),
  mainHeading: document.querySelector(".main-heading"),
  mainParagraph: document.querySelector(".main-paragraph"),
  footer: document.querySelector(".footer"),
  hamburgerMenu: document.querySelector("#hamburger"),
  currentYear: document.querySelector("#current-year"),
<<<<<<< HEAD
  icons: document.querySelectorAll(".footer-link"),
  navBarToggle: document.getElementById("navbar-toggle"),
  navbarLinks: document.getElementById("navbar-links"),
=======
>>>>>>> 971340057a1caeb70a5d692102acfb851b9457d4
};

function checkIconsIfHovered(e) {
  console.log(e.target.nextElement);
}

const globalVariables = {
  currentPage: typeof window !== "undefined" ? window.location.pathname : null,
};

// Helper function to update the current year
function updateCurrentYear() {
  elements.currentYear.textContent = new Date().getFullYear();
}

// Helper function to handle animation end event
function handleAnimationEnd() {
  if (
    elements.mainParagraph.style.display === "none" &&
    elements.footer.style.display === "none"
  ) {
    elements.mainParagraph.style.display = "flex";
    elements.mainParagraph.style.animation = "fade-in 5s ease-in-out forwards";
    elements.footer.style.display = "flex";
    elements.footer.style.animation = "fade-in 7s ease-in-out forwards";
    elements.mainSection.removeEventListener(
      "animationend",
<<<<<<< HEAD
      handleAnimationEnd
=======
      handleAnimationEnd()
>>>>>>> 971340057a1caeb70a5d692102acfb851b9457d4
    );
  }
}

// Function to initialize the page
function initializePage() {
  switch (globalVariables.currentPage) {
    case "/":
    case "/index.html":
      elements.mainParagraph.style.display = "none";
      elements.footer.style.display = "none";
      elements.mainSection.addEventListener("animationend", handleAnimationEnd);
<<<<<<< HEAD
      elements.icons.forEach((icon) =>
        icon.addEventListener("mouseenter", checkIconsIfHovered)
      );
      break;
    case "/about.html":
      elements.icons.forEach((icon) =>
        icon.addEventListener("mouseenter", checkIconsIfHovered)
      );
      break;
    case "/videos.html":
      elements.icons.forEach((icon) =>
        icon.addEventListener("mouseenter", checkIconsIfHovered)
      );
=======
      console.log("Index");
      break;
    case "/about.html":
      console.log("About");
      break;
    case "/videos.html":
      console.log("Videos");
>>>>>>> 971340057a1caeb70a5d692102acfb851b9457d4
      break;
  }
}

// Initiate the page
updateCurrentYear();
initializePage();
