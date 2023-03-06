const logo = document.querySelector("#logo img");

window.addEventListener("scroll", () => {
  const distanceFromTop = logo.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;
  const threshold = viewportHeight * 0.6;
  if (distanceFromTop < threshold) {
    logo.classList.add("moved");
  }
});


