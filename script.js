// Slideshow for general image slides
let slideIndex1 = 0; // Renamed to avoid conflict
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {
        slideIndex1 = 1; // Reset to the first slide
    }
    slides[slideIndex1 - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Skills Bar Animation
const progressBars = document.querySelectorAll('.progress-done');

progressBars.forEach(bar => {
    bar.style.width = bar.getAttribute('data-done') + '%'; // Set width based on data attribute
    bar.style.opacity = 1; // Make the bar fully visible
});

// Testimonial Slider
let slideIndex2 = 0; // Renamed to avoid conflict
const testimonialSlides = document.querySelectorAll('.testimonial-slide');

function showTestimonialSlide(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.style.display = 'none'; // Hide all slides
        slide.classList.remove('active');
    });
    testimonialSlides[index].style.display = 'block'; // Show current slide
    testimonialSlides[index].classList.add('active');
}

function nextTestimonialSlide() {
    slideIndex2 = (slideIndex2 + 1) % testimonialSlides.length; // Move to the next slide
    showTestimonialSlide(slideIndex2);
}

function prevTestimonialSlide() {
    slideIndex2 = (slideIndex2 - 1 + testimonialSlides.length) % testimonialSlides.length; // Move to the previous slide
    showTestimonialSlide(slideIndex2);
}

document.addEventListener('DOMContentLoaded', () => {
    showTestimonialSlide(slideIndex2); // Display the first testimonial slide on page load
});

