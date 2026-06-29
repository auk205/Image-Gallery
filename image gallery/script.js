// ===================== SELECT ELEMENTS =====================

const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".card img");

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const counter = document.querySelector(".counter");
const downloadBtn = document.getElementById("downloadBtn");

const searchBox = document.getElementById("searchBox");
const themeBtn = document.getElementById("themeBtn");

const filterButtons = document.querySelectorAll(".filters button");
const effectButtons = document.querySelectorAll(".effects button");

let currentIndex = 0;

// ===================== OPEN IMAGE =====================

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";

    });

});

// ===================== SHOW IMAGE =====================

function showImage() {

    lightboxImage.src = images[currentIndex].src;

    downloadBtn.href = images[currentIndex].src;

    counter.innerHTML = `${currentIndex + 1} / ${images.length}`;

}

// ===================== CLOSE =====================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// ===================== NEXT =====================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

});

// ===================== PREVIOUS =====================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

});

// ===================== KEYBOARD =====================

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});

// ===================== DARK MODE =====================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// ===================== SEARCH =====================

searchBox.addEventListener("keyup", () => {

    const value = searchBox.value.toLowerCase();

    cards.forEach(card => {

        if (card.className.toLowerCase().includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ===================== CATEGORY FILTER =====================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// ===================== IMAGE FILTERS =====================

effectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const effect = button.dataset.effect;

        images.forEach(image => {

            image.style.filter = effect;

        });

    });

});

// ===================== PAGE LOAD ANIMATION =====================

window.addEventListener("load", () => {

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.5s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 120);

    });

});