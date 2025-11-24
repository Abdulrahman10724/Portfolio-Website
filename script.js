// --- 1. SCROLL ANIMATION (Intersection Observer) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); 

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- 2. DYNAMIC ROTATING TITLE EFFECT ---
const titleElement = document.querySelector(".typed-text");
// Updated titles for the typing effect
const titles = ["Abdul Rahman", "Data Scientist", "Full-Stack Developer", "Flutter Developer", "Web Designer"];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        // Deleting effect
        titleElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        // Speed up deletion
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            setTimeout(typeWriter, 500); // Pause before typing next word
        } else {
            setTimeout(typeWriter, 50);
        }
    } else {
        // Typing effect
        titleElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        // Speed up typing
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000); // Pause at the end of the word
        } else {
            setTimeout(typeWriter, 120);
        }
    }
}

// Start typing when page loads
window.addEventListener('load', () => {
    typeWriter();
});


// --- 3. PROJECT FILTERING FUNCTIONALITY ---
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
                // Show the card
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            } else {
                // Hide the card
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400); 
            }
        });
    });
});


// --- 4. MOBILE NAVIGATION TOGGLE ---
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