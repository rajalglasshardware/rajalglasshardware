document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const options = {
    threshold: 0.5,
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
});
