// Simple contact form message (no backend needed)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const response = document.getElementById("responseMsg");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            response.textContent = "Thank you for your message! We'll get back to you soon.";
            form.reset();
        });
    }
});