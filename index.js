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


// carousel
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})