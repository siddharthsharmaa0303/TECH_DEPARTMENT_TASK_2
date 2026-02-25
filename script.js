// Beginner Level JavaScript

// 1. Wait for the HTML document to fully load before running scripts
document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Select the contact form by its ID
    const contactForm = document.getElementById("contactForm");

    // 3. Add an event listener to handle the form submission
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent the page from refreshing (default form behavior)
            event.preventDefault();

            // Get the value the user typed into the name input
            const userName = document.getElementById("nameInput").value;

            // Show a simple pop-up alert confirming submission
            alert("Thanks for reaching out, " + userName + "! Your message has been sent.");

            // Clear the form fields after submission
            contactForm.reset();
        });
    }

    // 4. Beginner smooth scrolling for anchor links (fallback for browsers that don't support CSS smooth scroll)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Check if the link points to an ID on the same page
            if (this.hash !== "") {
                event.preventDefault();
                
                // Find the target section by its ID
                const targetSection = document.querySelector(this.hash);
                
                // Scroll to that section smoothly
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Subtract 70px to account for the sticky navbar
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});