import showServices from "./services.js";
import renderCart from "./cart.js";
import validateForm from "./formValidation.js";
import sendMail from "./emailJs.js";
import scrollAnimation from "./scrollAnimation.js";
import bottomToTopAnimation from "./bottomToTop.js";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollToPlugin);
  const lenis = new Lenis({
    autoRaf: true,
  });

  const form = document.getElementById("bookForm");
  const menuOpen = document.getElementById("open");
  const menuClose = document.getElementById("close");
  const menuItems = document.querySelector(".menu-items");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      sendMail();
    }
  });

  menuOpen.addEventListener("click", () => {
    menuItems.style.top = 0;
  });
  menuClose.addEventListener("click", () => {
    menuItems.style.top = "-15rem";
  });

  renderCart();
  showServices();
  scrollAnimation();
  bottomToTopAnimation();
});
