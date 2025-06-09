// This file contains JavaScript code for interactive elements of the website.
// It includes smooth scrolling for navigation links and form validation for the contact section.

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Only scroll if href is an anchor link
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Form validation for the contact section
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Here you can add code to send the form data to a server or process it as needed
      alert("Thank you for your message!");
      contactForm.reset();
    });
  }

  // Hamburger menu toggle for mobile navigation
  const navToggle = document.querySelector(".nav-toggle");
  const navLinksContainer = document.querySelector(".nav-links");

  if (navToggle && navLinksContainer) {
    navToggle.addEventListener("click", function () {
      navLinksContainer.classList.toggle("open");
    });

    // Optional: Close nav when a link is clicked (for better UX)
    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
      });
    });
  }
});
