function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    e.target.reset();     // clear all inputs
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been sent successfully.");
    e.target.reset();
});

// --- 1. SCROLL ANIMATION (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add class when visible
        }
    });
});

// Target all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- 2. TYPEWRITER EFFECT FOR NAME ---
const nameElement = document.querySelector(".type-writer");
const nameText = "Abdul Rahman";
let charIndex = 0;

function typeWriter() {
    if (charIndex < nameText.length) {
        nameElement.textContent += nameText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150); // Speed of typing (milliseconds)
    }
}

// Start typing when page loads
window.onload = typeWriter;
