//  SCROLL ANIMATION 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); 

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// changing title
const typedText = document.querySelector(".typed-text");

const passions = [
    "Full Stack Developer ",
    "UI/UX Designer",
    "Problem Solver",
    "Creative thinker",
];

let index = 0;
let charIndex2 = 0;
let deleting = false;

function typeEffect() {
    const current = passions[index];

    if (!deleting) {
        typedText.textContent = current.substring(0, charIndex2 + 1);
        charIndex2++;
        if (charIndex2 === current.length) {
            deleting = true;
            setTimeout(typeEffect, 2000); 
            return;
        }
    } else {
        typedText.textContent = current.substring(0, charIndex2 - 1);
        charIndex2--;
        if (charIndex2 === 0) {
            deleting = false;
            index = (index + 1) % passions.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

window.addEventListener("load", () => {
    typeEffect();
});

//  PROJECT FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || cardCategory === filterValue) {
                // Show cards
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                // Hide cards
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400); 
            }
        });
    });
});


// MOBILE NAVIGATION  
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});