document.addEventListener("DOMContentLoaded", function() {
    SmoothScroll({
        animationTime: 800,
        stepSize: 80,

        // accelerationDelta: 30,
        // accelerationMax: 2,

        keyboardSupport: true,
        // arrowScroll: 50,
    });
});



// https://github.com/sampotts/plyr/#options
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    const player = new Plyr(video);

    window.player = player;
});



// اطمینان حاصل کنید که DOM به صورت کامل بارگذاری شده است
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".container-video");

    videos.forEach(reel => {
        gsap.from(reel, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: reel,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const before = document.querySelectorAll(".before-after");

    before.forEach(video => {
        gsap.from(video, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: video,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const shape = document.querySelectorAll(".shape");

    shape.forEach(img => {
        gsap.from(img, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: img,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
});





// Select all before-after containers


const sliders = document.querySelectorAll('.before-after');

sliders.forEach(slider => {
    const sliderElement = slider.querySelector('.slider');
    const afterImage = slider.querySelector('.after');
    const beforeLabel = slider.querySelector('.before-label');
    const afterLabel = slider.querySelector('.after-label');

    let isSliding = false;

    // Event listeners for mouse events
    sliderElement.addEventListener('mousedown', (e) => {
        isSliding = true;
        handleSlide(e);
    });

    window.addEventListener('mouseup', () => {
        isSliding = false;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isSliding) return;
        handleSlide(e);
    });

    // Event listeners for touch events
    sliderElement.addEventListener('touchstart', (e) => {
        isSliding = true;
        handleSlide(e.touches[0]);
    });

    window.addEventListener('touchend', () => {
        isSliding = false;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isSliding) return;
        handleSlide(e.touches[0]);
    });

    function handleSlide(e) {
        requestAnimationFrame(() => {
            let xPos = e.pageX - slider.getBoundingClientRect().left;
            let sliderWidth = slider.offsetWidth;

            if (xPos < 0) xPos = 0;
            if (xPos > sliderWidth) xPos = sliderWidth;

            let percentage = (xPos / sliderWidth) * 100;

            // Update the slider position and after image clip path
            sliderElement.style.left = `${percentage}%`;
            afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;

            // Show/hide labels based on slider position
            if (percentage <= 10) {
                beforeLabel.classList.add('hidden');
            } else {
                beforeLabel.classList.remove('hidden');
            }

            if (percentage >= 90) {
                afterLabel.classList.add('hidden');
            } else {
                afterLabel.classList.remove('hidden');
            }
        });
    }
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: true,
});




function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}