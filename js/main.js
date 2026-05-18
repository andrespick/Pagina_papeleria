const carousel = document.querySelector("[data-carousel]");
const carouselTrack = document.querySelector("[data-carousel-track]");
const carouselPages = Array.from(document.querySelectorAll("[data-carousel-page]"));
const carouselDots = Array.from(document.querySelectorAll("[data-carousel-dot]"));
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mainNav = document.querySelector("[data-main-nav]");
const toast = document.querySelector("[data-toast]");

let carouselIndex = 0;
let carouselTimer;

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("toast--visible");

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 3200);
}

function goToSlide(index) {
  if (!carouselTrack || !carouselPages.length) return;

  carouselIndex = (index + carouselPages.length) % carouselPages.length;
  carouselTrack.style.setProperty("--carousel-index", carouselIndex);

  carouselDots.forEach((dot, dotIndex) => {
    dot.setAttribute("aria-current", String(dotIndex === carouselIndex));
  });
}

function startCarousel() {
  if (!carouselPages.length) return;

  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => {
    goToSlide(carouselIndex + 1);
  }, 5000);
}

carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
    startCarousel();
  });
});

carouselPrev?.addEventListener("click", () => {
  goToSlide(carouselIndex - 1);
  startCarousel();
});

carouselNext?.addEventListener("click", () => {
  goToSlide(carouselIndex + 1);
  startCarousel();
});

carousel?.addEventListener("mouseenter", () => window.clearInterval(carouselTimer));
carousel?.addEventListener("mouseleave", startCarousel);
carousel?.addEventListener("focusin", () => window.clearInterval(carouselTimer));
carousel?.addEventListener("focusout", startCarousel);

navToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("main-nav--open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

startCarousel();
