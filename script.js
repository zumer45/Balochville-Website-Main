// Getting DOM Elements
const elements = {
  mainSection: document.querySelector(".main-section"),
  mainHeading: document.querySelector(".main-heading"),
  mainParagraph: document.querySelector(".main-paragraph"),
  footer: document.querySelector(".footer"),
  hamburgerMenu: document.querySelector("#hamburger"),
  currentYear: document.querySelector("#current-year"),
};

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
      handleAnimationEnd()
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
      console.log("Index");
      break;
    case "/about.html":
      console.log("About");
      break;
    case "/videos.html":
      console.log("Videos");
      break;
  }
}

// Initiate the page
updateCurrentYear();
initializePage();
