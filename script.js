// //Client Review section
// let slideIndex = 1;
// showSlides(slideIndex);


// function nextSlide() {
//     showSlides(slideIndex += 1);
// }


// function previousSlide() {
//     showSlides(slideIndex -= 1);
// }


// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("item");

//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }

//     for (let slide of slides) {
//         slide.style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "flex";
// }

// // counter section
// let valueDisplay = document.querySelectorAll(".num");
// let interval = 5000;

// valueDisplay.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-value"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function() {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     })
// })

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle active class
});

// Function to animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-perc');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const percentage = bar.style.width; // Get the width for animation
        bar.style.width = '0%'; // Start from 0%
        setTimeout(() => {
            bar.style.width = percentage; // Animate to the actual percentage
        }, 300); // Delay for a smoother appearance
    });
};

// Event listener for scroll
window.addEventListener('scroll', () => {
    const section = document.getElementById('about');
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight / 1.5; // Adjust visibility threshold
    if (sectionTop < sectionVisible) {
        animateSkillBars(); // Animate skill bars when section is visible
        window.removeEventListener('scroll', animateSkillBars); // Remove event listener after animation
    }
});
// Counter animation function
const counters = document.querySelectorAll('.num');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-value'); // Get the target number
        const count = +counter.innerText; // Get the current number
        const increment = Math.ceil(target / 100); // Calculate increment value

        if (count < target) {
            counter.innerText = count + increment; // Update counter
            setTimeout(updateCount, 10); // Recursive call to keep counting
        } else {
            counter.innerText = target; // Ensure it stops at the target
        }
    };

    // Start the counter animation when the section is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount(); // Start counting when in view
            observer.disconnect(); // Stop observing after starting
        }
    });

    observer.observe(counter); // Observe each counter
});
