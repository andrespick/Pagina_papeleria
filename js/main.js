const carouselRadios = Array.from(document.querySelectorAll(".carousel__radio"));
const carousel = document.querySelector(".carousel");
const navToggle = document.querySelector("[data-nav-toggle]");
const mainNav = document.querySelector("[data-main-nav]");
const branchButtons = document.querySelectorAll("[data-map-query]");
const mapFrame = document.querySelector("[data-map-frame]");
const contactForm = document.querySelector("[data-contact-form]");
const toast = document.querySelector("[data-toast]");

let carouselIndex = carouselRadios.findIndex((radio) => radio.checked);
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
  if (!carouselRadios.length) return;

  carouselIndex = (index + carouselRadios.length) % carouselRadios.length;
  carouselRadios[carouselIndex].checked = true;
}

function startCarousel() {
  if (!carouselRadios.length) return;

  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => {
    goToSlide(carouselIndex + 1);
  }, 5000);
}

carouselRadios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    carouselIndex = index;
    startCarousel();
  });
});

carousel?.addEventListener("mouseenter", () => window.clearInterval(carouselTimer));
carousel?.addEventListener("mouseleave", startCarousel);
carousel?.addEventListener("focusin", () => window.clearInterval(carouselTimer));
carousel?.addEventListener("focusout", startCarousel);

navToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("main-nav--open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

branchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const query = button.dataset.mapQuery;
    if (!query || !mapFrame) return;

    const source = query.startsWith("cid:")
      ? `https://www.google.com/maps?cid=${encodeURIComponent(query.replace("cid:", ""))}&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

    mapFrame.src = source;
    showToast(`Mapa actualizado: ${button.dataset.branchName}.`);
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    showToast("Completa nombre, email y mensaje para enviar la solicitud.");
    return;
  }

  contactForm.reset();
  showToast("Mensaje listo. Te contactaremos pronto.");
});

startCarousel();
