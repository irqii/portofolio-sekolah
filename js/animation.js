const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document
  .querySelectorAll(".fade-up, .fade-left, .fade-right, .zoom")
  .forEach((element) => {
    observer.observe(element);
  });
