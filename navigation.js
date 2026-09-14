const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

if (nav && toggle && links) {
  const setMenuOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    links.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      toggle.focus();
    }
  });
}
