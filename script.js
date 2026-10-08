const track = document.getElementById("carouselTrack");

    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    // TOTAL PROJECTS = 5
    const totalSlides = 5;


    function showSlide(index) {

        currentSlide = index;

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;


        dots.forEach(dot => {

            dot.classList.remove("active");

        });


        dots[currentSlide].classList.add("active");

    }


    // Dot navigation

    function goToSlide(index) {

        showSlide(index);

    }


    // Automatic sliding

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= totalSlides) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    }, 3000);