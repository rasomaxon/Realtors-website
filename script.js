window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});
