document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("inquiryForm");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "NOVARC DIGITAL — PROJECT INQUIRY",
      "Name: " + data.get("name"),
      "Contact: " + data.get("phone"),
      "Service: " + data.get("service"),
      "Details: " + (data.get("details") || "Not provided")
    ].join("\\n");
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(message);
        document.getElementById("formHelp").textContent =
          "Inquiry copied. Paste it into your preferred messaging app to send it.";
      } else {
        window.prompt("Copy your inquiry message:", message);
      }
    } catch (error) {
      window.prompt("Copy your inquiry message:", message);
    }
  });
});