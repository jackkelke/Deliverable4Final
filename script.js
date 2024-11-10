// Smooth scrolling links (excluding home button)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        // If the link is the home button, don't prevent default
        if (this.getAttribute("href") === "#") {
            return; // Allow the home button to work as normal
        }

        // Prevent default behavior for all other internal links
        event.preventDefault();
        
        // Scroll to the target section with smooth scrolling
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Dark mode toggle functionality
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.classList.add("dark-mode-toggle");
document.body.prepend(toggleButton); // This will place the button at the top of the page

// Set the dark mode based on the system preference
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode when the button is clicked
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Select all nav links
const navLinks = document.querySelectorAll("nav a");

// Function to add animation class to target section
function addFadeInAnimation(event) {
    // Prevent default anchor jump for internal links
    event.preventDefault();
    
    // Get the target section
    const targetId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    
    // Remove fade in from all sections to reset animation
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("fade-in");
    });
    
    // Add fade in to target section
    targetSection.classList.add("fade-in");
    
    // Smooth scroll to the target section
    targetSection.scrollIntoView({ behavior: "smooth" });
}

// Add click event listener for each navigation link
navLinks.forEach(link => {
    link.addEventListener("click", addFadeInAnimation);
});

// Home button nav
document.querySelector('.home-button').addEventListener('click', function(event) {
    event.preventDefault(); // prevent jumping to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});