function updateParallax(className, offset = 0) {
  const scrolled = window.scrollY;
  const parallaxElement = document.querySelector(className);
  if (parallaxElement) {
    const img = parallaxElement.querySelector("img");
    if (img) {
      const speed = img.getAttribute("data-speed") || 0.5;
      img.style.transform = `translateY(${(scrolled - offset) * speed}px)`;
    }
  }
}

function handleScroll() {
  updateParallax(".parallax");
  updateParallax(".parallax2");
  updateParallax(".parallax3", 1600);
  updateParallax(".parallax4", 1500);
  updateParallax(".parallax5", 10800);
  updateParallax(".parallax6", 10800);
}

window.addEventListener("scroll", handleScroll);
handleScroll();
