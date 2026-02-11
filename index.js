const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  let activeBar = document.querySelector(".active");
  if (activeBar) {
    navbarLinks.classList.toggle("active");
  }
});


// email js
// 1. Initialize EmailJS with your Public Key

window.onload = function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // These IDs from your EmailJS dashboard
        const serviceID = 'service_4qxahgm';
        const templateID = 'template_pak5trb';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Thank you for sending us a message. Will be contact you back shortly');
                form.reset(); // Clear the form
            }, (error) => {
                alert('Failed to send: ' + JSON.stringify(error));
            });
    });
}
window.onload = function() {
    const form = document.getElementById('hero-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // These IDs from your EmailJS dashboard
        const serviceID = 'service_4qxahgm';
        const templateID = 'template_pak5trb';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Thank you for sending us a message. Will be contact you back shortly');
                form.reset(); // Clear the form
            }, (error) => {
                alert('Failed to send: ' + JSON.stringify(error));
            });
    });
}