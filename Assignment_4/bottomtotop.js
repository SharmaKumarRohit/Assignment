export default function bottomToTopAnimation() {
  const topBtn = document.querySelector("#topToBtn");
  window.addEventListener("scroll", (e) => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  topBtn.addEventListener("click", (e) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power2.out",
    });
  });
}
