document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const admissionsForm = document.getElementById("admissions-form");

  function handleSubmit(form, message) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(message);
      form.reset();
    });
  }

  if (contactForm) {
    handleSubmit(
      contactForm,
      "Thanks for reaching out! I’ll be in touch shortly to schedule your consultation."
    );
  }

  if (admissionsForm) {
    handleSubmit(
      admissionsForm,
      "Thanks for your interest in admissions consulting! I'll reach out soon."
    );
  }
});

function updateScrollPadding() {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding",
    `${headerHeight + 20}px`
  );
}

window.addEventListener("load", updateScrollPadding);
window.addEventListener("resize", updateScrollPadding);
