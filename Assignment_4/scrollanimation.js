export default function scrollAnimation() {
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 60,
        },
        ease: "power2.out",
      });
    });
  });
}
